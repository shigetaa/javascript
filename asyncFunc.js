const sampleFunc = async () => {
	return 'これは非同期関数です。'
}
console.log(sampleFunc()) // Promise { 'これは非同期関数です。' }

console.log(sampleFunc().then((value) => console.log(value)))
// Promise { <pending> }
// これは非同期関数です。