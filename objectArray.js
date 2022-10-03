// 複数のオブジェクトを持つ 配列を宣言
const persons = [
	{
		name: 'tanaka',
		age: 18
	},
	{
		name: 'suzuki',
		age: 45
	},
	{
		name: 'yamada',
		age: 51
	}
]
// for
for (let i = 0; i < persons.length; i++) {
	const { name, age } = persons[i]
	console.log(`name: ${name}, age: ${age}`)
	// name: tanaka, age: 18
	// name: suzuki, age: 45
	// name: yamada, age: 51
}
// forEach
persons.forEach((person) => {
	console.log(`name: ${person.name}, age: ${person.age}`)
	// name: tanaka, age: 18
	// name: suzuki, age: 45
	// name: yamada, age: 51
})
// map
const personsMap = persons.map((person) => {
	return `name: ${person.name}, age: ${person.age}`
})
console.log(personsMap) // [ 'name: tanaka, age: 18','name: suzuki, age: 45','name: yamada, age: 51']