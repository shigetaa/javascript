// 数値の配列を宣言
const numberArray = [1, 4000, 30, 50, 200]
// 文字列として並び替え
console.log(numberArray.sort()) // [ 1, 200, 30, 4000, 50 ]

// 比較関数を定義
const compareFunc = (a, b) => a - b
// 数値として並び替え
console.log(numberArray.sort(compareFunc)) // [ 1, 30, 50, 200, 4000 ]

// 文字列の配列を宣言
const aLine = ['あ', 'う', 'い', 'え', 'お']

console.log([...aLine].sort()) // ['あ','い','う','え','お']
// 元の配列要素の順番に影響してない。
console.log(aLine) // ['あ','う','い','え','お']

console.log(aLine.concat().sort()) // ['あ','い','う','え','お']
// 元の配列要素の順番に影響してない。
console.log(aLine) // ['あ','う','い','え','お']
