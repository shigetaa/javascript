// 数値の配列を宣言
const numberArray = [1, 6, 9, 12, 15]
// 初期値を代入
const initialValue = 0

const arrayReduceResult = numberArray.reduce((accumulator, currentValue) => {
	console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`)
	// accumulator: 0,  currentValue: 1
	// accumulator: 1,  currentValue: 6
	// accumulator: 7,  currentValue: 9
	// accumulator: 16, currentValue: 12
	// accumulator: 28, currentValue: 15
	// 前回の値と現在の値を足していく
	return accumulator + currentValue
}, initialValue)

console.log(numberArray) // [ 1, 6, 9, 12, 15 ]
console.log(arrayReduceResult) // 43

