/* */
const asyncWaitFunc = async (num) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(`${num} 処理実行`)
		}, 1000 * num)
	}).then((message) => console.log(message))
}
// await を利用する事で同期的に処理が可能
const testFunc = async () => {
	console.log('1 処理開始')
	await asyncWaitFunc(1)
	console.log('2 処理開始')
	await asyncWaitFunc(2)
	console.log('3 処理開始')
	await asyncWaitFunc(3)
}

testFunc()
// 1 処理開始
// 1 処理実行
// 2 処理開始
// 2 処理実行
// 3 処理開始
// 3 処理実行

/* */
/*
const asyncWaitFunc = async (num) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(`${num} 処理実行`)
		}, 1000 * num)
	}).then((message) => console.log(message))
}
const testFunc = async () => {
	console.log('1 処理開始')
	asyncWaitFunc(1)
	console.log('2 処理開始')
	asyncWaitFunc(2)
	console.log('3 処理開始')
	asyncWaitFunc(3)
}

testFunc()
// 1 処理開始
// 2 処理開始
// 3 処理開始
// 1 処理実行
// 2 処理実行
// 3 処理実行
*/