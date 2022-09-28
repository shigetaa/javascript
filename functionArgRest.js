const sampleFunc = (a, b, ...rest) => {
	console.log(rest)
}
sampleFunc(1, 2, 3, 4, 5, 6, 7, 8, 9)// [3,4,5,6,7,8,9] 表示