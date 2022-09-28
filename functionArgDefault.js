const sampleFunc = (message = 'Hello') => {
	console.log(message)
}
// 引数を省略した場合
sampleFunc() // Hello 表示

// 引数を指定した場合
sampleFunc('Test Message') // Test Message 表示