const path = {
	authApi:null,
	busApi:null
}

if (process.env.NODE_ENV === 'dev') {
	console.log('process.env.NODE_ENV',process.env.NODE_ENV)
}
else if (process.env.NODE_ENV === 'test') {
	console.log('process.env.NODE_ENV',process.env.NODE_ENV)
}
else if (process.env.NODE_ENV === 'uat') {
	console.log('process.env.NODE_ENV',process.env.NODE_ENV)
}
else if (process.env.NODE_ENV === 'prod') {
	console.log('process.env.NODE_ENV',process.env.NODE_ENV)
}

export default path
