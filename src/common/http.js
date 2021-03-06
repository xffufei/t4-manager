import axios from 'axios'

class http {
	static post(url, parms={}, headers={}) {
		let ran = Math.floor(Math.random() * 100);
		let option = Object.assign({},headers);
		if(Cookie.get('accessToken')){
			Object.assign(option,{Authorization : Cookie.get('accessToken')});
		} else{
	        globalVue.$router.push({path:'/login'});
		}

		var instance = axios.create({
		timeout: 1000 * 30,
		headers: option, //{'Authorization': option.Authorization}
		onUploadProgress:function (progressEvent) {
				if (progressEvent.total > 0) {
			        progressEvent.percent = parseInt(progressEvent.loaded / progressEvent.total * 100);
			    }

			    globalVue.$emit('progress',progressEvent.percent);
			},
		});

		return instance.post(url,parms).then(function(res){
			if (res.data.errorCode == 12) {
				globalVue.$message.error("登录超时或用户信息丢失，请重新登录");
				setTimeout(()=>{
					globalVue.$router.push({path:'/login'});
				},800)
			}

			return res.data;
		}).catch(res=>{
			if (res.toString().indexOf('Network Error'))
			{
				globalVue.$message.error("网络异常，系统发生错误");
				// setTimeout(()=>{
				// 	globalVue.$router.push({path:'/login'});
				// },800)
			} 
		});

	}

	static get() {
		let ran = Math.floor(Math.random() * 100);

		let option = Object.assign({},headers);
		if(Cookie.get('accessToken')){
			Object.assign(option,{Authorization : Cookie.get('accessToken')});
		} else {
	        globalVue.$router.push({path:'/login'});
		}
		var instance = axios.create({
			timeout: 1000 * 30,
			headers: option
		});

		return instance.get(url).then(function(res){

			if(res.data.errorCode != 0){
				globalVue.$alert(res.data.errorMsg, '提示', {
					confirmButtonText: '确定'
				});
			}
			return res.data;
		}).catch(res=>{
			console.log('error',res);
		});
	}
}

window.$http = http;