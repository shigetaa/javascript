// 多次元配列を宣言
const multiArray = [1, [2, [3, [4]], 5], [6], 7]

// 引数を指定せず1階層のみフラット化
console.log(multiArray.flat()) // [ 1, 2, [ 3, [ 4 ] ], 5, 6, 7 ]
// 2階層フラット化
console.log(multiArray.flat(2)) // [ 1, 2, 3, [ 4 ], 5, 6, 7 ]
// 引数に、Infinity を指定して、すべての配列をフラット化
console.log(multiArray.flat(Infinity)) // [ 1, 2, 3, 4, 5, 6, 7 ]