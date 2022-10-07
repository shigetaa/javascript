// 第一引数の resolve は成功を通知する為の関数
// 第二引数の reject は失敗を通知する為の関数
const promise = new Promise((resolve, reject) => {
	resolve('非同期の処理が成功したことを通知')
	//reject('非同期の処理が失敗したことを通知')
})

// resolve() で非同期が成功したと言う通知を受け取り
// then() で成功した場合の処理を実行
// reject() で非同期が失敗したと言う通知を受け取り
// catch() で失敗した場合の処理を実行
promise
	.then((message) => {
		// 成功時通知を受け取って処理を実行
		console.log(message)
	})
	.catch((error) => {
		// 例外エラーを受け取って、エラー時の処理を実行
		console.log(error)
	})
	.finally(() => {
		// 非同期処理が成功失敗に関わらず実行される
		console.log('処理が終了しました。')
	})