// 数値の配列を宣言
const numberArray = [3, 6, 9, 12, 15]

const arrayEveryResult = numberArray.every((value, index) => {
	console.log(`value: ${value}, index: ${index}`)
	// value: 3,  index: 0
	// value: 6,  index: 1
	// value: 9,  index: 2
	// value: 12, index: 3
	// value: 15, index: 4
	// 3で割れる要素を検証する
	return value % 3 === 0
})
console.log(numberArray)    // [ 3, 6, 9, 12, 15 ]
console.log(arrayEveryResult) // true