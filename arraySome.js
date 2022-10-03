// 数値の配列を宣言
const numberArray = [1, 6, 9, 12, 15]

const arraySomeResult = numberArray.some((value, index) => {
	console.log(`value: ${value}, index: ${index}`)
	// value: 1,  index: 0
	// value: 6,  index: 1
	// 3で割れる要素を検証する
	return value % 3 === 0
})
console.log(numberArray)    // [ 1, 6, 9, 12, 15 ]
console.log(arraySomeResult) // true