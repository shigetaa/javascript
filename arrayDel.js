// 文字列の配列を宣言
const colors = ['Blue', 'Black', 'Red']

// 配列の最後の要素を削除します。
//colors.pop()
//console.log(colors) // [ 'Blue', 'Black' ]
// 配列の最初の要素を削除します。
//colors.shift()
//console.log(colors) // [ 'Black', 'Red' ]
// 配列の任意の要素を削除します。
colors.splice(1, 2, 'Pink')
console.log(colors) // ['Blue', 'Pink']