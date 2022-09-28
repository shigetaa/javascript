const user = {
	name: 'akira',
	age: 45,
	gender: 'man',
}
for (let key in user) {
	console.log(key) // user プロパティ名
	console.log(user[key]) // user プロパティ値
}