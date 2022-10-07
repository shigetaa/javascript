const promise1 = new Promise((resolve, reject) => {
	resolve('promise1 resolve')
	//reject('promise1 reject')
})
const promise2 = new Promise((resolve, reject) => {
	//resolve('promise2 resolve')
	reject('promise2 reject')
})
const promise3 = new Promise((resolve, reject) => {
	resolve('promise3 resolve')
})
// promiseObjects 配列の要素すべて、Promise オブジェクト
const promiseObjects = [promise1, promise2, promise3]

Promise.race(promiseObjects)
	.then(() => console.log('すべての非同期処理が成功しました'))
	.catch(() => console.log('非同期処理が失敗しました'))
	.finally(() => console.log('処理実行が終了しました'))