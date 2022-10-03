// 数値の配列を宣言
const numberArray = [1, 6, 9, 12, 15]
// 初期値を代入
const initialValue = 0

const arrayReduceResult = numberArray.reduce((previousValue, currentValue) => {
	console.log(`previousValue: ${previousValue}, currentValue: ${currentValue}`)
	// previousValue: 0,  currentValue: 1
	// previousValue: 1,  currentValue: 6
	// previousValue: 7,  currentValue: 9
	// previousValue: 16, currentValue: 12
	// previousValue: 28, currentValue: 15
	// 前回の値と現在の値を足していく
	return previousValue + currentValue
}, initialValue)

console.log(numberArray) // [ 1, 6, 9, 12, 15 ]
console.log(arrayReduceResult) // 43