// 数値の配列を宣言
const numberArray = [1, 4000, 30, 50, 200]

const arrayFilterResult = numberArray.filter((value, index) => {
	console.log(`value: ${value}, index: ${index}`)
	// value: 1,    index: 0
	// value: 4000, index: 1
	// value: 30,   index: 2
	// value: 50,   index: 3
	// value: 200,  index: 4

	// 3で割れる要素を見つけて、新しい配列を作成する。
	return value % 3 === 0
})
console.log(numberArray)    // [ 1, 4000, 30, 50, 200 ]
console.log(arrayFilterResult) // [ 30 ]