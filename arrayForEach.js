// 文字列の配列を宣言
const colors = ['Blue', 'Black', 'Red', 'Pink']

colors.forEach((value, index, array) => {
	console.log(`value: ${value}, index: ${index}, array: ${array}`)
	// value: Blue,  index: 0, array: Blue,Black,Red,Pink
	// value: Black, index: 1, array: Blue, Black, Red, Pink
	// value: Red,   index: 2, array: Blue, Black, Red, Pink
	// value: Pink,  index: 3, array: Blue, Black, Red, Pink
})