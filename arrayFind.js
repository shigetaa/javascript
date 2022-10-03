// 数値の配列を宣言
const numberArray = [1, 15, 30, 50, 200]

const arrayFindResult = numberArray.find((value, index) => {
	console.log(`value: ${value}, index: ${index}`)
	// value: 1,    index: 0
	// value: 15,   index: 1

	// 3で割れる要素を見つけて、新しい配列を作成する。
	return value % 3 === 0
})
console.log(numberArray)    // [ 1, 15, 30, 50, 200 ]
console.log(arrayFindResult) // [ 15 ]