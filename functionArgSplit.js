const user = {
	name: 'akira',
	age: 45
}
const sampleFunc = ({ name }) => {
	console.log(name)
}

// user.name プロパティの値が引数として代入される
sampleFunc(user) // akira 表示