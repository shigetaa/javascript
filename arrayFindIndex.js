// 数値の配列を宣言
const numberArray = [1, 15, 30, 50, 200]

const arrayFindIndexResult = numberArray.findIndex((value, index) => {
	console.log(`value: ${value}, index: ${index}`)
	// value: 1,    index: 0
	// value: 15,   index: 1

	// 3で割れる要素を見つけて、最初の index を返す
	return value % 3 === 0
})
console.log(numberArray)    // [ 1, 15, 30, 50, 200 ]
console.log(arrayFindIndexResult) // 1