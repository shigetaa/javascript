// 第一引数の resolve は成功を通知する為の関数
// 第二引数の reject は失敗を通知する為の関数
const promise = new Promise((resolve, reject) => {
	resolve('非同期の処理が成功し、resolveが通知された！')
	reject('非同期の処理が失敗し、reject通知された！')
})

// 非同期処理が成功した場合のコールバック関数
const inCaseOfSuccess = () => {
	console.log('非同期の処理が成功し、resolveが通知された。')
}
// 非同期処理が失敗した場合のコールバック関数
const inCaseOfFailure = () => {
	console.log('非同期の処理が失敗し、rejectが通知された。')
}

// resolve() で非同期が成功したと言う通知を受け取り
// then() で成功した場合の処理を実行
promise.then(inCaseOfSuccess, inCaseOfFailure)