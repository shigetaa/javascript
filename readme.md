# JavaScript の基本

## JavaScriptの基礎から始める
React を学ぶためには基本、、特に「配列・オブジェクト」の概念とES2015以降の知識が必要不可欠です。
また、**デフォルト引数**、**スプレッド演算子**、**分割代入**についてもよく出てくるポイントになります。

## 変数と宣言
JavaScript の変数宣言には、`var` `const` `let` の3つがあり、データに名前を付ける事で繰り返し利用出来る様になります。
ES2015から `const` `let` が追加されてから、原則 `var` を使う必要が無くなりました。

変数の宣言には `const` と使い
変数の再代入が必要な場合のみ `let` を使う様にしましょう。

### const
`const` で宣言した変数は、再代入出来ない変数とも呼ばれ、1度代入した値は変更できません。
```javascript
const sample1 = 10
sample1 = 100 //エラーが発生します。
```
以下の場合は、変数に代入する値がオブジェクトで、オブジェクトのプロパティに対しては再代入できます。
```javascript
const sample12 = {
	name: 'akira',
	age: 45,
}
sample12.age = 44 //エラーは発生しません。
```
### let
`let` で宣言した変数は、値の再代入が可能です。
```javascript
let sample3 = 10
sample3 = 100 //エラーは発生しません。
```

## 命名規則
JavaScript における変数や関数の命名規則を覚えておくことで、そのコードが何を意味しているものなのかを判断する大きなヒントになります。

命名には、半角英数字、半角のアンダースコア`_`とドルマーク`\`を利用する、数値で始まらない事、JavaScriptの予約語は利用できないと言う基本ルールがあります。

### 記法種類
| 記法 | 説明 | 例 |
|:--|:--|:--|
| アッパーキャメルケース(パスカル)記法 | 先頭と言葉の区切り文字は大文字、それ以外は小文字 | AlertDialog |
| ローワーキャメルケース記法 | 先頭は小文字で言葉の区切り文字は大文字、それ以外は小文字 | alertDialog |
| スネークケース記法 | すべて大文字で、単語ごとにアンダースコアでつなぐ | ALERT_DIALOG |
### 要素命名規則
| 要素 | 記法名 | 例 |
|:--|:--|:--|
| コンポーネント名 | アッパーキャメルケース記法 | AlertDialog |
| 変数名 | ローワーキャメルケース記法 | firstName |
| 定数名 | スネークケース記法 | DATABASE_PATH |
| メソッド名 | ローワーキャメルケース記法 | setValue |
| プロパティ名 | ローワーキャメルケース記法 | firstName |
| クラス名 | アッパーキャメルケース記法 | SampleName |

## データ型
JavaScriptで変数を扱う場合、次の様な型が利用できます。
変数や式の型を調べる時は、`typeof` 演算子を用いることができます。
| 型 | 説明 | typeof の例と結果 |
|:--|:--|:--|
| 未定義 |　データ型が未定義の値 | 例: typeof undefined<br>結果: "undefined" |
| null | 型が決まっているものの、値が存在しない事を意味する | 例: typeof null<br>結果: "object" |
| 真偽値 | true / false | 例: typeof false<br>結果: "boolean" |
| 文字列 | 文字列(ダブルクォーテーション、シングルクォーテーションのどちらでも文字列を表現出来る) | 例: typeof "Name" <br>結果: "string" |
| 数値 | 数値(整数 / 浮動小数点) | 例: typeof 1234 <br>結果: "number" |
| オブジェクト | 配列、正規表現、Date など | 例: typeof {key:"value"} <br>結果: "object" |
| 関数 | 関数 | 例: typeof function(){} <br>結果: "function" |
| シンボル | ES2015から追加された一意で不変な値 | 例: typeof Symbol("シンボル") <br>結果: "symbol" |
| 巨大な整数 | numberでは扱えないひょだいな数値、ES2020から追加された任意制度の整数 | 例: typeof 90071234321123n <br>結果: "bigint" |
### null と　undefined について
`null` と `undefined` の明確な違いは、データ型が決まっているかいないかの違いです。
- `null` は、データ型が決まっているが値がない、または中身が空である
- `undefined` は、データ型も値も決まっていない、または存在しない

## 演算子
JavaScript における演算子は、値の計算、値や関数の結果を評価、文字列を連けるする時に等に使用されます。
演算子の事をオペランドといいます。

### 算術演算子
算術演算子は、加算、減算、乗算などの計算を行います。
|演算子|演算子名|説明| 例 |
|:--|:--|:--|:--|
| ex1 + ex2 | プラス演算子 | 数値を加算する | A = 3 + 2 // 5が代入される |
| ex1 - ex2 | マイナス演算子 | 数値を減算する | B = 3 - 2 // 1が代入される |
| ex1 * ex2 | 乗算演算子 | 数値を乗算する | C = 3 * 2 // 6が代入される |
| ex1 / ex2 | 徐算演算子 | 数値を徐算する | D = 3 / 2 // 1.5が代入される |
| ex1 % ex2 | 剰余演算子 | 数値を余りを求める | E = 3 % 2 // 1が代入される |
| ex1 ** ex2 | べき乗算演算子 | 数値のべき乗を求める | F = 3 ** 2 // 9が代入される(3の2乗) |

### インクリメント演算子とデクリメント演算子
インクリメント演算子は値を1加算し、デクリメント演算子は1減算します。
|演算子|演算子名|説明| 例 |
|:--|:--|:--|:--|
| ++ex1 | インクリメント演算子(前置) | ex1の値に+1する | A = 3; B = ++A; // Aの値は4になる Bの値は4になる|
| --ex1 | デクリメント演算子(前置) | ex1の値に-1する | A = 3; B = --A; // Aの値は2になる Bの値は2になる |
| ex1++ | インクリメント演算子(後置) | ex1の値に+1する | A = 3; B = A++; // Aの値は4になる Bの値は3になる |
| ex1-- | デクリメント演算子(後置) | ex1の値に-1する | A = 3; B = A--; //Aの値は2になる Bの値は3になる |

### 比較演算子
比較演算子は、左のオペランドと右のオペランドの大きさを比較し、その結果について真偽値で返す。
#### 等価演算子と不等価演算子
|演算子|演算子名|説明| 例 |
|:--|:--|:--|:--|
| ex1 === ex2 | 厳密等価演算子 | 2つのオペランドを比較し、同じ型かつ同じ値であればtrue、それ以外はfalseを返す | 3 === 3 // true<br>null === undefined // false |
| ex1 == ex2  | 等価演算子 | 2つのオペランドを暗黙の型変換してから比較し、等しければtrue、それ以外はfalseを返す | 3 == "3" // true<br>null == undefined // true |
| ex1 !== ex2 | 厳密不等価演算子 | 2つのオペランドを比較し、同じ型でないかつ同じ値で無ければtrue、それ以外はfalseを返す | 3 !== 2 // true |
| ex1 != ex2  | 不等価演算子 | 2つのオペランドを暗黙の型変換してから比較、等しくなければtrue、等しければfalseを返す | 3 != "2" // true |
#### 大なり演算子と小なり演算子
|演算子|演算子名|説明| 例 |
|:--|:--|:--|:--|
| ex1 > ex2  | 大なり演算子 | ex1がex2より大なりであればtrueを返し、そうでなければfalseを返す | 2 > 3; // false |
| ex1 >= ex2 | 以上演算子 | ex1がex2より大なりイコールであればtrueを返し、そうでなければfalseを返す | 2 >= 3; // false |
| ex1 < ex2  | 小なり演算子 | ex1がex2より小なりであればtrueをかえし、そうでなければfalseを返す | 2 < 3; // true |
| ex1 <= ex2 | 以下演算子 | ex1がex2より小なりイコールであればtrueを返し、そうでなければfalseを返す | 2 <= 3; // true |

### 論理演算子
論理演算子は、基本的に真偽値を扱う演算子で`AND` `OR` `NOT` の条件を簡潔に表現でき、主にif文と一緒に使用されます。
|演算子|演算子名|説明| 例 |
|:--|:--|:--|:--|
| ex1 && ex2   | AND演算子 | ex1がfalseの場合は、ex1を返し、それ以外の場合はex2を返す | true && false; // false |
| ex1 \|\| ex2 | OR演算子  | ex1がtrueの場合は、ex1を返し、それ以外の場合はex2を返す | true \|\| false; // true |
| !ex1         | NOT演算子 | ex1がtrueの場合はfalseを返し、ex1がfalseの場合はtrueを返す | !true; // false |
#### 短絡評価
AND演算子( && ) OR演算子( \|\| ) を利用する場合、左辺だけが評価されて、右辺が評価されないケースがあります。
論理演算子では、左から右エ評価されるため、左辺を評価した時点で式の結果が確定した場合、右辺の評価は行いません。
この様な評価の事を短絡評価と言います。

AND演算子の場合、左辺が`false`と評価された時点で条件式全体が`false`となるので、右辺が評価されることはありません。
```bash
vi shortCircuitEvaluation.js 
```
```javascript
true && console.log('ex1 and true') // console.log 表示する ex1 and true
false && console.log('ex1 and false') // console.log 表示しない

true || console.log('ex1 or true') // console.log 表示しない
false || console.log('ex1 or false') // console.log 表示する ex1 or false
```
```bash
nodejs shortCircuitEvaluation.js 
ex1 and true
ex1 or false
```

### 条件演算子(三項演算子)
条件演算子では、条件式が `true` ならば、条件式の評価結果がtrueの場合の処理を返し、`false` ならば、条件式の評価結果がfalseの場合の処理を返します。
|演算子|演算子名|説明| 例 |
|:--|:--|:--|:--|
| ex1 ? ex2 : ex3 | 条件演算子<br>三項演算子 | ex1がtrueの場合はex2を返し、<br>ex1がfalseの場合はex3を返す | true ? ex2 : ex3 // ex2を返す<br>false ? ex2 : ex3 // ex3を返す |
```bash
vi ternaryOperator.js 
```
```javascript
console.log(true ? 'ex2 true' : 'ex3 true') // ex2 true 表示する
console.log(false ? 'ex2 false': 'ex3 false') // ex3 false 表示する
```
```bash
nodejs ternaryOperator.js 
ex2 true
ex3 false
```

## 関数と宣言
関数を宣言することで、一連の処理を一つの機能としてまとめることが出来ます。
1度宣言して関数を呼び出す事で、同じ処理を実行出来ます。
### function をりようした関数宣言
`function`を利用いた通常の関数宣言です。
```javascript
// 関数の宣言
function sampleFunc(引数1, 引数2) {
	return 関数の戻り値
}
// 関数の呼び出し
sampleFunc(引数1, 引数2);
```
### 無名関数による定義
無名関数で宣言した場合は、関数を変数に代入できます。
```javascript
// 関数の宣言
const sampleFunc = function(引数1, 引数2) {
	return 関数の戻り値
}
// 関数の呼び出し
sampleFunc(引数1, 引数2);
```
### アローによる定義
アロー関数式は、function式の代替え構文であり、短く記述出来ます。
```javascript
// 関数の宣言
const sampleFunc = (引数1, 引数2) => {
	return 関数の戻り値
}
// 関数の呼び出し
sampleFunc(引数1, 引数2);
```
#### アロー関数の書き方
アロー関数は以下の様に省略して記述することができます。

```javascript
// 単数式の場合は {} と return を省略出来ます。
const sampleFunc = (引数1, 引数2) =>  関数の戻り値
```
```javascript
// 引数が1つの場合は () を省略出来ます。
const sampleFunc = 引数1 =>  関数の戻り値
```
```javascript
// 引数が無い場合は () は必須です。
const sampleFunc = () =>  関数の戻り値
```
```javascript
// 複数式や文の場合は、{} で囲む必要があります。
const sampleFunc = () => {
	return 関数の戻り値
}
const sampleFunc = 引数1 => {
	return 関数の戻り値
}
const sampleFunc = (引数1, 引数2) => {
	return 関数の戻り値
}
```

## 引数
引数とは、関数に渡された値です。
関数呼び出し時に、関数宣言時に定義された、引数より多い場合は無視されます。
### コールバック関数
コールバック関数とは、関数の引数として渡された、別の関数のことです。
`setTimeout` の例で確認してみます。
第二引数で指定した3000ミリ秒後に、第一引数のコールバック関数が呼び出されます。
```javascript
setTimeout(() => {
	console.log('3秒後に表示されます')
},3000)
```
### デフォルト引数
関数の引数を省略した場合、デフォルトで代入する値を指定できます。
```javascript
const sampleFunc = (message = 'Hello') => {
	console.log(message)
}
// 引数を省略した場合
sampleFunc() // Hello 表示

// 引数を指定した場合
sampleFunc('Test Message') // Test Message 表示
```
### 可変長引数
関数の引数に可変長引数を扱う事が出来ます。
可変長引数は、固定した引数ではなく任意の個数の引数を渡すことが出来ます。
```javascript
const sampleFunc = (a, b, ...rest) => {
	console.log(rest)
}
sampleFunc(1, 2, 3, 4, 5, 6, 7, 8, 9)// [3,4,5,6,7,8,9] 表示
```
### 引数の分割代入
関数の引数にも分割代入が利用できます。
```javascript
const user = {
	name: 'akira',
	age: 45
}
const sampleFunc = ({ name }) => {
	console.log(name)
}

// user.name プロパティの値が引数として代入される
sampleFunc(user) // akira 表示
```
#### 分割代入でpropsを受け取る
React では、親コンポーネントから子コンポーネントがpropsを受け取る場合に分割代入が利用されます。
```javascript
// 親コンポーネントから渡されたprops
props = {
	name: 'akira',
	age: 45,
}
// 子コンポーネントである User コンポーネントで 
// name プロパティを props で受け取る
const User = ({name}) => {name} // props.name を分割代入して {name} として受け取ることが出来ます。
```

## 条件分岐とループ
条件分岐は、特定の条件を満たしているかどうかを評価したうえで行う処理を分岐します。
### if
`if` 文は「条件式」で条件を評価し、その評価結果によって処理を分岐する為に使用されます。
```javascript
if (条件式) {
	// 条件式が true の場合処理をする
}

if (条件式) {
	// 条件式が true の場合処理をする
}else{
	// 条件式が false の場合処理をする
}

if (条件式1) {
	// 条件式1が true の場合処理をする
}else if (条件式2) {
	// 条件式2が true の場合処理をする
}else{
	// 条件式1 and 条件式2が false の場合処理をする
}
```
if 文 利用例
```javascript
const color = 'Red'

if (color === 'Blue') {
	console.log('Blue')
}else if (color === 'Black') {
	console.log('Black')
}else{
	console.log(color) // Red 表示
}
```
### switch
`switch` 文は「条件式」の評価結果の値に応じて処理を振り分けを行います。
条件が当てはまった場合に処理を実行し、次の`break`でswitch文を終了させます。
どの条件にも当てはまらない場合は、`default`のコードが実行され終了されます。
```javascript
switch (条件式) {
	case 値1:
		// 条件式の値が、値1と同じ場合処理をする
		break;
	case 値2:
		// 条件式の値が、値2と同じ場合処理をする
		break;
	default:
		// 条件式の値が、どの case に当てはまらない場合処理をする
		break;
}
```
switch 文 利用例1
```javascript
const color = 'Red'

switch (color) {
	case 'Blue':
		console.log('Blue')
		break;
	case 'Black':
		console.log('Black')
		break;
	default:
		console.log(color) // Red 表示
		break;
}
```
switch 文 利用例2
`break`が無い場合、break が見つかるまでそのまま評価なしに`case`が実行されていきます。
```bash
vi switchNotBreak.js
```
```javascript
const suuji = 1

switch (suuji) {
	case 0:
		console.log('0')
	case 1:
		console.log('1') // 1 表示
	case 2:
		console.log('2') // 2 表示
	default:
		console.log('last') // last 表示
}
```
```bash
node switchNotBreak.js
1
2
last
```
### for
`for` 文の基本構文は以下の様になります。
```bash
vi for.js
```
```javascript
for (let i = 0; i < 3; i++) {
	console.log(i)
}
```
```bash
node for.js
0
1
2
```
### for...in
`for...in` 文は、オブジェクトから取り出したプロパティに対して
順番不定で、繰り返し処理を実行します。
```javascript
for (変数 in オブジェクト) {
	// 繰り返し処理をします
}
```
for...in 文 利用例
```bash
vi forIn.js
```
```javascript
const user = {
	name: 'akira',
	age: 45,
	gender: 'man',
}
for (let key in user) {
	console.log(key) // user プロパティ名
	console.log(user[key]) // user プロパティ値
}
```
```bash
node forIn.js
name
akira
age
45
gender
man
```
### for...of
`for...of` 文は、反復可能オブジェクト(配列) に値して、定義した順番で値を反復処理します。
```javascript
for (変数 of オブジェクト) {
	// 繰り返し処理をします
}
```
for...of 文 利用例
```bash
vi forOf.js
```
```javascript
const colors = ['Blue', 'Black', 'Red']
for (let color of colors) {
	console.log(color) // colors の値を表示
}
```
```bash
node forOf.js 
Blue
Black
Red
```

### while
`while` 文は、条件式が true の間、繰り返す処理を実行します。
条件式の条件が変化しない場合いつまでも 処理を実行して、無限ループになりますので利用する際は注意が必要です。

最初の条件が `false` の場合は、処理は1度も実行されません。
```javascript
while (条件式) {
	// 条件式が true の間、繰り返し処理をします
}
```
while 文 利用例
```bash
vi while.js
```
```javascript
let num = 0

while (num < 3) {
	console.log(num)
	num++
}
```
```bash
node while.js 
0
1
2
```

### do...while
`do...while` 文は、条件式が true の間、繰り返す処理を実行します。
条件式の条件が変化しない場合いつまでも 処理を実行して、無限ループになりますので利用する際は注意が必要です。

最初の条件が `false` の場合でも、最低1回は処理を実行されます。
```javascript
do {
	// 条件式が true の間、繰り返し処理をします
} while (条件式)
```
do...while 文 利用例
```bash
vi doWhile.js
```
```javascript
let num = 0

do {
	console.log(num)
	num++
} while (num < 3)
```
```bash
node doWhile.js 
0
1
2
```
### falsy について
**条件式**には真偽値以外にも値を指定出来ます。

`false` と判定される値の事を **falsy** (偽値) といい、7つあります。
これら７つの値はif文などで判定すると`false`となり、

これ以外はすべて`true`となります。

| falsy | 説明 |
|:--|:--|
| -0 | 数値のマイナスゼロ |
| 0 | 数値のゼロ |
| 0n | BigInt で、論理値として使用された場合 |
| undefined | 値が何も定義されていない |
| null | 値が何も存在しない |
| NaN | 数値ではない事を表す |
| "" または '' | 空文字列の値 |

## 配列
配列は値の集合を操作するためのオブジェクトで、`Array` オブジェクトといいます。
配列に格納された個々の値を**要素**、要素の先頭から**0**から始まる連番を**index**といい、順番に 1,2,3,4...と続きます。
### 配列の基本形
配列を作成するには`[]`の中に要素を入れ`,`で区切ります。
```javascript
// 空の配列を宣言
const emptyArray = [];
// 文字列の配列を宣言
const stringArray = ['値文字列1','値文字列2','値文字列3']
// 数値の配列を宣言
const numberArray = [1,2,3]
// 2次元配列
const matrixArray = [
	['A','B','C'],['X','Y','Z']
]
```
### 配列の要素にアクセスする
配列要素へのアクセスするには、アクセスしたい要素の`index`を利用します。
配列要素の位置を`index`といい`Array[index]`と言う形でアクセス出来ます。
```javascript
// 文字列の配列を宣言
const colors = ['Blue','Black','Red']

console.log(colors[0]) // Blue  表示
console.log(colors[1]) // Black 表示
console.log(colors[2]) // Red   表示

// 存在しない要素へアクセスすると undefined を返す
console.log(colors[3]) // undefined
```
### 配列であるか判定する 
`Array.isArray(obj)` を利用すると、指定した`obj`が配列であるかを真偽値で返します。
```javascript
// 空の配列を宣言
const emptyArray = []
// 空のオブジェクトを宣言
const emptyObject = {}

console.log(Array.isArray(emptyArray)) // true
console.log(Array.isArray(emptyObject)) // false
```
### 配列から要素を検索する
- `Array.indexOf()` を利用すると、配列から指定した要素がどの位置にあるか取得できます。
- `Array.includes()` を利用すると、配列に指定した要素が含まれているかを真偽値で返します。
#### Array.indexOf()
`Array.indexOf(arg)` を利用すると、配列で指定した要素の位置 `index` を検索出来ます。
`arg` と最初にマッチした要素の `index` を返し、マッチした要素が見つからない場合は `-1` を返します。

つまり、検索したい要素が見つからない場合は `-1` を返し
見つかった場合は `index` を返します。
```javascript
// 文字列の配列を宣言
const colors = ['Blue','Black','Red']

console.log(colors.indexOf('Red')) // 2 表示
console.log(colors.indexOf('Green')) // -1 表示
```
#### Array.includes()
`Array.includes(arg)` を利用すると、配列に `arg` で指定した要素が含まれているかを真偽値を返します。
```javascript
// 文字列の配列を宣言
const colors = ['Blue','Black','Red']

console.log(colors.includes('Red')) // true
console.log(colors.includes('Green')) // false
```
### 配列要素の個数を取得する
配列が持つ個数を取得するには、配列の数を返してくれる `length` プロパティを利用します。
```javascript
// 文字列の配列を宣言
const colors = ['Blue','Black','Red']

console.log(colors.length) // 3
console.log(colors[colors.length -1]) // Red 表示
```
### 配列から文字列へ変換する
`Array.toString()` を利用すると、配列から文字列へ変換できます。
```javascript
// 文字列の配列を宣言
const colors = ['Blue','Black','Red']

console.log(colors.toString()) // Blue,Black,Red 表示
```
### 配列の連結
- `Array.concat(Array,...)` を利用すると、配列と別の配列と連結して新しい配列を返します。
新しい配列が作成されるため、連結前の物と配列に変更はありません。
- `[...Array, ...Array,...Array]` を利用すると元の配列要素を展開して新しい配列を作成します。
新しい配列が作成されるため、連結前の物と配列に変更はありません。
- `Array.join(separator)` を利用すると、配列の各要素を指定した `separator` (`/`,`-`など)で連結した文字列を返します。
#### Array.concat(Array,...)
```javascript
// 文字列の配列を宣言
const colors1 = ['Blue','Black','Red']
const colors2 = ['Navy','Gray','Orange']
const colors3 = ['SkyBlue','Silver','Pink']

console.log(colors1.concat(colors2,colors3)) // ['Blue','Black','Red','Navy','Gray','Orange','SkyBlue','Silver','Pink']
console.log(colors1.concat(colors2).concat(colors3)) // ['Blue','Black','Red','Navy','Gray','Orange','SkyBlue','Silver','Pink']
```
#### [...Array, ...Array,...Array]
配列と別の配列に、スプレット構文[ES2015] `...Array` を利用する方法です。
```javascript
// 文字列の配列を宣言
const colors1 = ['Blue','Black','Red']
const colors2 = ['Navy','Gray','Orange']
const colors3 = ['SkyBlue','Silver','Pink']

console.log([...colors1,...colors2,...colors3]) // ['Blue','Black','Red','Navy','Gray','Orange','SkyBlue','Silver','Pink']
```
#### Array.join(separator)
```javascript
// 文字列の配列を宣言
const colors = ['Blue','Black','Red']

console.log(colors.join(' / ')) // Blue / Black / Red 表示
console.log(colors.join('-')) // Blue-Black-Red 表示
```
### 配列のソート
配列要素の並び替えは、元の配列そのものに変更を加えるメソッドになります。
一般的に、**破壊的メソッド** と言います。
並び替えを行う際は、元の配列への影響の有無を配慮する必要があります。
- `Array.sort()` は、配列要素を文字列に変換してから昇順に並び替えを行います。
- `Array.reverse(arr)` は、配列要素の並び順を反転させます。
#### Array.sort()
```javascript
// 文字列の配列を宣言
const aLine = ['あ','う','い','え','お']

console.log(aLine.sort()) // ['あ','い','う','え','お']
// 元の配列要素の順番が変わっている
console.log(aLine) // ['あ','い','う','え','お']
```
数値の並べ替えは、比較関数を利用します。
比較関数を利用しない場合は文字列として並び変えられます。
```javascript
// 数値の配列を宣言
const numberArray = [1, 4000, 30, 50, 200]
// 文字列として並び替え
console.log(numberArray.sort()) // [ 1, 200, 30, 4000, 50 ]

// 比較関数を定義
const ascFunc = (a, b) => a - b
const descFunc = (a, b) => b - a
// 数値として並び替え
console.log(numberArray.sort(ascFunc)) // [ 1, 30, 50, 200, 4000 ]
console.log(numberArray.sort(descFunc)) // [ 4000, 200, 50, 30, 1 ]
```
#### Array.reverse()
`Array.reverse()` は、配列の要素の並び順を反転させます。
```javascript
// 文字列の配列を宣言
const aLine = ['あ', 'う', 'い', 'え', 'お']

console.log(aLine.reverse()) // [ 'お', 'え', 'い', 'う', 'あ' ]
// 元の配列要素の順番が変わっている
console.log(aLine) // [ 'お', 'え', 'い', 'う', 'あ' ]
```
#### 元の配列を変更する事無く並べ替えするには
`Array.sort()` `Array.reverse()` と、スプレッド構文[ES2015]を組み合わせて並べ替えを行うことで、元の配列要素の並び順に影響する事無く新しい配列を作成できます。
```javascript
// 文字列の配列を宣言
const aLine = ['あ','う','い','え','お']

console.log([...aLine].sort()) // ['あ','い','う','え','お']
// 元の配列要素の順番に影響してない。
console.log(aLine) // ['あ','う','い','え','お']
```
`concat()` を利用して `Array.concat().sort()` として並び替えを行った場合も、元の配列要素の並び替え順に影響することなく新しい配列を作成出来ます。
```javascript
// 文字列の配列を宣言
const aLine = ['あ','う','い','え','お']

console.log(aLine.concat().sort()) // ['あ','い','う','え','お']
// 元の配列要素の順番に影響してない。
console.log(aLine) // ['あ','う','い','え','お']
```
### 配列要素の削除
- `Array.pop()` は、配列の最後の要素を削除します。
- `Array.shift()` は、配列の最初の要素を削除します。
- `Array.splice()` は、任意の `index` の要素を削除します。
#### Array.pop()
```javascript
// 文字列の配列を宣言
const colors = ['Blue', 'Black', 'Red']

// 配列の最後の要素を削除します。
colors.pop()
console.log(colors) // [ 'Blue', 'Black' ]
```
#### Array.shift()
```javascript
// 文字列の配列を宣言
const colors = ['Blue', 'Black', 'Red']

// 配列の最初の要素を削除します。
colors.shift()
console.log(colors) // [ 'Black', 'Red' ]
```
#### Array.splice()
任意の位置の要素を削除します。
```javascript
// 文字列の配列を宣言
const colors = ['Blue', 'Black', 'Red']

// 配列のindex 1の要素を削除します。
colors.splice(1)
console.log(colors) // ['Blue', 'Red']
```
任意の位置の要素から、指定した要素数を削除します。
```javascript
// 文字列の配列を宣言
const colors = ['Blue', 'Black', 'Red']

// 配列のindex 1の要素から 2の要素を削除します。
colors.splice(1, 2)
console.log(colors) // ['Blue']
```
任意の位置の要素から、指定した要素数を削除してから、要素を追加します。
```javascript
// 文字列の配列を宣言
const colors = ['Blue', 'Black', 'Red']

// 配列のindex 1の要素から 2の要素を削除して、要素を追加します。
colors.splice(1, 2, 'Pink')
console.log(colors) // ['Blue', 'Pink']
```
### 配列要素の追加
- `Array.push(arg)` は、配列の最後に `arg` で指定した要素を追加します。
- `Array.unshift(arg)` は、配列の最初に `arg` で指定した要素を追加します。
#### Array.push()
```javascript
// 文字列の配列を宣言
const colors = ['Blue', 'Black', 'Red']

// 配列の最後に要素を追加します。
colors.push('Pink')
console.log(colors) // ['Blue', 'Black', 'Red', 'Pink']
```
#### Array.unshift()
```javascript
// 文字列の配列を宣言
const colors = ['Blue', 'Black', 'Red']

// 配列の最初に要素を追加します。
colors.unshift('Pink')
console.log(colors) // ['Pink', 'Blue', 'Black', 'Red']
```

### 配列のフラット化
`Array.flat(depth)` を利用すると、多次元配列の低次元配列にフラット化」した配列に変換出来ます。
`Array.flat()` は元の配列に変更を加えない、非破壊メソッドです。
#### Array.flat()
`Array.flat(depth)` の引数 `depth` には、何次元までの配列をフラットにするかを数値で指定できます。
引数を指定しない場合は1段階のみのフラット化を行います。
すべての配列をフラット化した場合は、引数へ `Infinity` を渡します。
```javascript
// 多次元配列を宣言
const multiArray = [1, [2, [3, [4]], 5], [6], 7]

// 引数を指定せず1階層のみフラット化
console.log(multiArray.flat()) // [ 1, 2, [ 3, [ 4 ] ], 5, 6, 7 ]
// 2階層フラット化
console.log(multiArray.flat(2)) // [ 1, 2, 3, [ 4 ], 5, 6, 7 ]
// 引数に、Infinity を指定して、すべての配列をフラット化
console.log(multiArray.flat(Infinity)) // [ 1, 2, 3, 4, 5, 6, 7 ]
```
### 分割代入
配列における分割代入では、右辺に対する `index` の配列要素が左辺で定義した変数に代入されます。
指定した配列の `index` の値を変数として定義しなおすことができます。
```javascript
// 文字列の配列を宣言
const colors = ['Blue', 'Black', 'Red', 'Pink']

// 分割代入
const [Blue, Black, ...Etc] = colors

console.log(Blue) // Blue
console.log(Black) // Black
console.log(Etc) // ['Red', 'Pink']
```
### 配列の高階関数
高階関数とは、引数として渡され関数の事で、別名、コールバック関数とも言います。
#### Array.forEach()
`Array.forEach(callback)` は、配列における反復処理の為のメソッドです。
取り出された配列要素に対して、引数に渡されたコールバック関数で順番に処理していきます。

`Array.forEach(callback)` の `callback` コールバック関数が受け取る引数は次の通りです。
1. 第一引数の `value` へ配列要素が渡される
2. 第二引数の `index` へ0から始まるindex番号が渡される
3. 第三引数の `array` へ元の配列が渡される

配列要素を渡していく第一引数は必須ですが、第二引数と第三引数は省略可能です。
```javascript
// 文字列の配列を宣言
const colors = ['Blue', 'Black', 'Red', 'Pink']

colors.forEach((value, index, array) => {
	console.log(`value: ${value}, index: ${index}, array: ${array}`)
	// value: Blue,  index: 0, array: Blue,Black,Red,Pink
	// value: Black, index: 1, array: Blue, Black, Red, Pink
	// value: Red,   index: 2, array: Blue, Black, Red, Pink
	// value: Pink,  index: 3, array: Blue, Black, Red, Pink
})
```
#### Array.map()
`Array.map(callback)` は、配列における反復処理の為のメソッドです。
取り出された配列に対して、引数に渡されたコールバック関数で順番に処理し、
その戻り値から新たな配列を宣言する、非破壊的メソッドです。

`Array.map(callback)` の `callback` コールバック関数が受け取る引数は次の通りです。
1. 第一引数の `value` へ配列要素が渡される
2. 第二引数の `index` へ0から始まるindex番号が渡される
3. 第三引数の `array` へ元の配列が渡される

配列要素を渡していく第一引数は必須ですが、第二引数と第三引数は省略可能です。
```javascript
// 数値の配列を宣言
const numberArray = [1, 4000, 30, 50, 200]

const arrayMapResult = numberArray.map((value, index) => {
	console.log(`value: ${value}, index: ${index}`)
	// value: 1,    index: 0
	// value: 4000, index: 1
	// value: 30,   index: 2
	// value: 50,   index: 3
	// value: 200,  index: 4
	return value * index
})
console.log(numberArray)    // [ 1, 4000, 30, 50, 200 ]
console.log(arrayMapResult) // [ 0, 4000, 60, 150, 800 ]
```
#### Array.filter()
`Array.filter(callback)` は、配列における反復処理の為のメソッドです。
取り出された配列要素に対し、引数に渡されたコールバック関数で順番に処理して条件に一致するかを真偽値で返し、戻り値から新たな配列を宣言します。

`Array.filter(callback)` の `callback` コールバック関数が受け取る引数は次の通りです。
1. 第一引数の `value` へ配列要素が渡される
2. 第二引数の `index` へ0から始まるindex番号が渡される
3. 第三引数の `array` へ元の配列が渡される

配列要素を渡していく第一引数は必須ですが、第二引数と第三引数は省略可能です。
```javascript
// 数値の配列を宣言
const numberArray = [1, 4000, 30, 50, 200]

const arrayFilterResult = numberArray.filter((value, index) => {
	console.log(`value: ${value}, index: ${index}`)
	// value: 1,    index: 0
	// value: 4000, index: 1
	// value: 30,   index: 2
	// value: 50,   index: 3
	// value: 200,  index: 4

	// 3で割れる要素を見つけて、新しい配列を作成する。
	return value % 3 === 0
})
console.log(numberArray)    // [ 1, 4000, 30, 50, 200 ]
console.log(arrayFilterResult) // [ 30 ]
```
#### Array.find()
`Array.find(callback)` は、配列における反復処理の為のメソッドです。
取り出された配列要素に対し、引数に渡されたコールバック関数の戻り値が、最初に `true` になった要素の値を返し、要素を見つけた時点で処理は停止します。
条件に一致する要素が見つからない場合は、`undefined` を返します。

`Array.find(callback)` の `callback` コールバック関数が受け取る引数は次の通りです。
1. 第一引数の `value` へ配列要素が渡される
2. 第二引数の `index` へ0から始まるindex番号が渡される
3. 第三引数の `array` へ元の配列が渡される

配列要素を渡していく第一引数は必須ですが、第二引数と第三引数は省略可能です。
```javascript
// 数値の配列を宣言
const numberArray = [1, 15, 30, 50, 200]

const arrayFindResult = numberArray.find((value, index) => {
	console.log(`value: ${value}, index: ${index}`)
	// value: 1,    index: 0
	// value: 15,   index: 1

	// 3で割れる要素を見つけて、新しい配列を作成する。
	return value % 3 === 0
})
console.log(numberArray)    // [ 1, 15, 30, 50, 200 ]
console.log(arrayFindResult) // [ 15 ]
```
#### Array.findIndex()
`Array.findIndex(callback)` は、配列における反復処理の為のメソッドです。
`Array.find()` と似ていますが、`Array.findIndex()` では、取り出された配列要素に対し、引数で渡されたコールバック関数の戻り値が、最初に `true` になった要素の値の  `index` を返し、要素を見つけた時点で処理を停止します。
条件に一致する要素が見つからない場合は、`-1` を返します。

`Array.findIndex(callback)` の `callback` コールバック関数が受け取る引数は次の通りです。
1. 第一引数の `value` へ配列要素が渡される
2. 第二引数の `index` へ0から始まるindex番号が渡される
3. 第三引数の `array` へ元の配列が渡される

配列要素を渡していく第一引数は必須ですが、第二引数と第三引数は省略可能です。
```javascript
// 数値の配列を宣言
const numberArray = [1, 15, 30, 50, 200]

const arrayFindIndexResult = numberArray.findIndex((value, index) => {
	console.log(`value: ${value}, index: ${index}`)
	// value: 1,    index: 0
	// value: 15,   index: 1

	// 3で割れる要素を見つけて、最初の index を返す
	return value % 3 === 0
})
console.log(numberArray)    // [ 1, 15, 30, 50, 200 ]
console.log(arrayFindIndexResult) // 1
```
#### Array.every()
`Array.every(callback)` は、配列における反復処理の為のメソッドです。
取り出された配列要素に対し、引数に渡されたコールバック関数で順番に処理された要素のすべてが条件に一致する場合のみ `true` を返し、1つでも一致しなかった場合は `false` を返します。

`Array.every(callback)` の `callback` コールバック関数が受け取る引数は次の通りです。
1. 第一引数の `value` へ配列要素が渡される
2. 第二引数の `index` へ0から始まるindex番号が渡される
3. 第三引数の `array` へ元の配列が渡される

配列要素を渡していく第一引数は必須ですが、第二引数と第三引数は省略可能です。
```javascript
// 数値の配列を宣言
const numberArray = [3, 6, 9, 12, 15]

const arrayEveryResult = numberArray.every((value, index) => {
	console.log(`value: ${value}, index: ${index}`)
	// value: 3,  index: 0
	// value: 6,  index: 1
	// value: 9,  index: 2
	// value: 12, index: 3
	// value: 15, index: 4
	// 3で割れる要素を検証する
	return value % 3 === 0
})
console.log(numberArray)    // [ 3, 6, 9, 12, 15 ]
console.log(arrayEveryResult) // true
```
#### Array.some()
`Array.some(callback)` は、配列における反復処理の為のメソッドです。
取り出された配列要素に対し、引数に渡されたコールバック関数で順番に処理された要素のうち一つでも条件に一致すれば `true` を返します。

`Array.some(callback)` の `callback` コールバック関数が受け取る引数は次の通りです。
1. 第一引数の `value` へ配列要素が渡される
2. 第二引数の `index` へ0から始まるindex番号が渡される
3. 第三引数の `array` へ元の配列が渡される

配列要素を渡していく第一引数は必須ですが、第二引数と第三引数は省略可能です。
```javascript
// 数値の配列を宣言
const numberArray = [1, 6, 9, 12, 15]

const arraySomeResult = numberArray.some((value, index) => {
	console.log(`value: ${value}, index: ${index}`)
	// value: 1,  index: 0
	// value: 6,  index: 1
	// 3で割れる要素を検証する
	return value % 3 === 0
})
console.log(numberArray)    // [ 1, 6, 9, 12, 15 ]
console.log(arraySomeResult) // true
```
#### Array.reduce()
`Array.reduce(callback, initialValue)` は、配列における反復処理の為のメソッドです。

`Array.reduce(callback, initialValue)` の `callback` コールバック関数が受け取る引数は次の通りです。
1. 第一引数の `previousValue` へ前回の値が渡される
2. 第二引数の `currentValue` へ現在の値が渡される
3. 第三引数の `index` へ現在の `currentValue` として処理されている要素の `index` が渡される
4. 第四引数の `array` へ元の配列が渡される

`initialValue` には、初期値が入ります。

配列要素を渡していく第一引数と第二引数は必須ですが、第三引数と第四引数は省略可能です。
```javascript
Array.reduce((previousValue, currentValue, index, array)=>{
  return accumulator
}, initialValue)
```
最初にコールバック関数が呼ばれた時に `previousValue` には `initialValue` が渡された状態で反復処理が開始されます。
最終的な戻り値は、コールバック関数が最後に `return` した `accumulator` の値になります。
```javascript
// 数値の配列を宣言
const numberArray = [1, 6, 9, 12, 15]
// 初期値を代入
const initialValue = 0

const arrayReduceResult = numberArray.reduce((previousValue, currentValue) => {
	console.log(`previousValue: ${previousValue}, currentValue: ${currentValue}`)
	// previousValue: 0,  currentValue: 1
	// previousValue: 1,  currentValue: 6
	// previousValue: 7,  currentValue: 9
	// previousValue: 16, currentValue: 12
	// previousValue: 28, currentValue: 15
	// 前回の値と現在の値を足していく
	return previousValue + currentValue
}, initialValue)

console.log(numberArray) // [ 1, 6, 9, 12, 15 ]
console.log(arrayReduceResult) // 43
```
## オブジェクト
JavaScript は「オブジェクト指向」と言うプログラミング上の思想を受けついており、次の様なものをオブジェクトとして扱います。
- 数値 (Number)
- 文字列 (String)
- 真偽値 (Boolean)
- 関数 (Function)
- 配列 (Array)
- マップ (Map)
- セット (Set)
- 数学関数 (Math)
- 日付 (Date)
- 正規表現 (RegExp)
- シンボル (Symbol)
### オブジェクトとプロパティ
**オブジェクト**とは、`key`(名前) と `value`(値) のセットであるプロパティのデータを格納するコンテナであり、プロパティの集合です。プロパティの`key`には文字列またはシンボルが利用でき、`value`には任意のデータを指定できます。

配列は `index` による連番が付けられた値をまとめたものですが、オブジェクトは値に名前を付けて管理出来ます。
```javascript
// プロパティを持たないオブジェクトを宣言
const person1 = {}
// プロパティを持つオブジェクトを宣言
const person2 = {'key': 'value'}
// プロパティを複数持つオブジェクトを宣言
// , カンマで区切る事で複数プロパティを指定出来る
const person3 = {
	key: 'value',
	name: 'akira',
	age: 45,
}
```
オブジェクトのプロパティ名(`key`) と 値(`value`) の変数名が同じ場合には、**省略記法**[ES2015]を利用できます。
```javascript
// 変数を宣言
const color = 'Red'
// プロパティ名を指定せずオブジェクトを宣言
const sampleObj = {color}
console.log(sampleObj) // { color: 'Red }
```
### プロパティへのアクセス
プロパティへのアクセス方法は `.` (ドット)記法によるアクセスと `[]` (ブラケット)記法によるアクセスの2通りあります。
一般的に利用されやすいのはドット記法です。
どちらの記法でも、プロパティ名(`key`)を指定することで、値(`value`)を参照出来ます。
```javascript
// プロパティを複数持つオブジェクトを宣言
// , カンマで区切る事で複数プロパティを指定出来る
const person3 = {
	key: 'value',
	name: 'akira',
	age: 45,
}
// ドット記法で参照
console.log(person3.key) // value
console.log(person3.name) // akira
console.log(person3.age) // 45
// ブランケット記法で参照
console.log(person3['key']) // value
console.log(person3['name']) // akira
console.log(person3['age']) // 45
```
ただし、オブジェクトのプロパティ名は、文字列またはシンボルしか扱う事が出来ません。
したがって次のような場合は、ドット記法は使用できないことから、ブランケット記法でアクセスする必要があります。
- プロパティ名が数字で始まる
- プロパティ名にハイフンが含まれている
- プロパティ名がJavaScriptの予約語である

プロパティ名はシンボルの場合を除き、暗黙的に文字列に変換されます。
```javascript
// ブランケット記法でしか参照出来ないオブジェクトを宣言
const sampleObj = {
	// プロパティ名が数字
	10: 1234,
	// プロパティ名にハイフンが含まれる
	'my-name': 'akira',
	// プロパティ名が予約語
	case: false,
}
// ブランケット記法で参照
console.log(sampleObj['10']) // 1234
console.log(sampleObj['my-name']) // akira
console.log(sampleObj['case']) // false
```
プロパティ名に変数を利用したい場合も、ブランケット記法で参照します。
```javascript
// プロパティを複数持つオブジェクトを宣言
// , カンマで区切る事で複数プロパティを指定出来る
const person3 = {
	key: 'value',
	name: 'akira',
	age: 45,
}
// プロパテ名の値を代入した変数を宣言
const propatyName = 'age'
// ブランケット記法で参照
console.log(person3[propatyName]) // 45
// ドット記法で参照
console.log(person3.propatyName) // undefined
```
### プロパティの変更、追加、削除
プロパティの変更、追加、削除を行ってみます。
```javascript
// プロパティを複数持つオブジェクトを宣言
// , カンマで区切る事で複数プロパティを指定出来る
const person3 = {
	key: 'value',
	name: 'akira',
	age: 45,
}
console.log(person3) // { key: 'value', name: 'akira', age: 45 }

// age プロパティの値の変更
// const で オブジェクト person3 を宣言していても、プロパティの値の変更出来ます。
person3.age = 44
console.log(person3) // { key: 'value', name: 'akira', age: 44 }
// langage プロパティの追加
person3.langage = 'Japan'
console.log(person3) // { key: 'value', name: 'akira', age: 44, langage: 'Japan' }
// key プロパティの削除
delete person3.key
console.log(person3) // { name: 'akira', age: 44, langage: 'Japan' }
```
### スプレッド構文とレスト構文
スプレッド構文でオブジェクトをマージ出来ます。
```javascript
// sampleObj1 オブジェクトを宣言
const sampleObj1 = { a:10, b:20 }
// sampleObj2 オブジェクトを宣言
const sampleObj2 = { c:30, d:40 }
// sampleObj3 オブジェクトを宣言
// スプレット構文で オブジェクトを展開してマージ
const sampleObj3 = { ...sampleObj1, ...sampleObj2 }
console.log(sampleObj3) // { a: 10, b: 20, c: 30, d: 40 }
```
オブジェクトの `key` と同じ定数名を使うと、その `key` の値が代入されます。
残りのプロパティはオブジェクトのまま取り出すことができます。
```javascript
// sampleObj3 オブジェクトを宣言
const sampleObj3 = { a: 10, b: 20, c: 30, d: 40 }

// 分割代入とレスト構文
const {a, b, ...rest} = sampleObj3
console.log(a) // 10
console.log(b) // 20
// 残りのプロパティはオブジェクトのまま取り出す事が出来ます。(レスト構文)
console.log(rest) // { c:30, d:40 }
```
### key や value プロパティの取り出し
`key` や `value` プロパティの取り出し、配列にして返す方法を確認します。
#### Object.keys(obj)
`Object.keys(obj)` メソッドを利用すると、オブジェクトの`key`を取り出し、配列に返します。
```javascript
// sampleObj3 オブジェクトを宣言
const sampleObj3 = { a: 10, b: 20, c: 30, d: 40 }

const keys = Object.keys(sampleObj3)
console.log(keys) // [ 'a', 'b', 'c', 'd' ]
```
#### Object.values(obj)
`Object.values(obj)` メソッドを利用すると、オブジェクトの`value`を取り出し、配列に返します。
```javascript
// sampleObj3 オブジェクトを宣言
const sampleObj3 = { a: 10, b: 20, c: 30, d: 40 }

const values = Object.values(sampleObj3)
console.log(values) // [ 10, 20, 30, 40 ]
```
#### Object.entries(obj)
`Object.entries(obj)` メソッドを利用すると、オブジェクトの`[key,value]`を要素に持つ配列を返します。
```javascript
// sampleObj3 オブジェクトを宣言
const sampleObj3 = { a: 10, b: 20, c: 30, d: 40 }

const entries = Object.entries(sampleObj3)
console.log(entries) // [['a', 10], ['b', 20], ['c', 30], ['d', 40]]
```
### オブジェクトを要素に持つ配列
```javascript
// 複数のオブジェクトを持つ 配列を宣言
const persons = [
	{
		name: 'tanaka',
		age: 18
	},
	{
		name: 'suzuki',
		age: 45
	},
	{
		name: 'yamada',
		age: 51
	}
]
```
`for` メソッドを利用して、配列要素を1つ1つ取り出して返します。
```javascript
for (let i = 0; i < persons.length; i++) {
	const { name, age } = persons[i]
	console.log(`name: ${name}, age: ${age}`)
	// name: tanaka, age: 18
	// name: suzuki, age: 45
	// name: yamada, age: 51
}
```
`forEach` メソッドを利用して、配列要素を1つ1つ取り出して返します。
```javascript
persons.forEach((person) => {
	console.log(`name: ${person.name}, age: ${person.age}`)
	// name: tanaka, age: 18
	// name: suzuki, age: 45
	// name: yamada, age: 51
})
```
`map` メソッドを利用して、配列要素を1つ1つ取り出して、新しい配列を返します。
```javascript
const personsMap = persons.map((person) => {
	return `name: ${person.name}, age: ${person.age}`
})
console.log(personsMap) // [ 'name: tanaka, age: 18','name: suzuki, age: 45','name: yamada, age: 51']
```
## モジュール
ES2015で登場したJavaScriptのモジュール機能により、外部のリソースをインポートして利用出来る様になりました。
インポートを利用する前提として、別のファイルで利用したい変数や関数をあらかじめエクスポートしておく必要があります。

便利な変数や関数を再利用できる、モジュール毎にスコープがある事でグローバル変数名に対して上書きしてしまうリスクを回避出来るなど、コードの保守性が高まります。

node.js 等で、モジュールを利用するには`package.json`ファイルにてモジュールを利用を宣言する必要があります。
```bash
vi package.json
```
```json
{
	"type": "module"
}
```

Reactでは、モジュールのエクスポートとインポート機能を利用してコンポーネント間における変数や関数のやり取りをします。

エクスポートとインポートには**名前付き** と **デフォルト** があります。
### 名前付き export と import
#### 名前付き export
別のファイルからアクセス出来る様にするため、名前を付けて作成した変数や関数を名前付きでエクスポートします。
```bash
vi modules/namedExportModule.js
```
```javascript
// 変数を宣言
const namedVariable = 'sampleVariable'
// 関数を宣言
const namedFunc = () => console.log('sampleFunc')
// エクスポートを宣言
export { namedVariable, namedFunc }
```
名前付きエクスポートでは、作成した変数や関数の前に `export` を付けることで、作成時の宣言と同時にエクスポートすることもできます。
```javascript
// 変数を宣言してエクスポートする
export const namedVariable = 'sampleVariable'
// 関数を宣言してエクスポートする
export const namedFunc = () => console.log('sampleFunc')
```
#### 名前付き import
名前付きエクスポートされた関数や変数を、名前付きインポートします。
`namedExportModule.js` からエクスポートされている変数 `namedVariable` と 関数 `namedFunc` をインポートするには次の様に記述します。
```bash
vi modules/namedImportModule.js
```
```javascript
import { namedVariable, namedFunc } from "./namedExportModule.js";

console.log(namedVariable) // sampleVariable
namedFunc() // sampleFunc
```
実行してみます。
```bash
node modules/namedImportModule.js
sampleVariable
sampleFunc
```

#### 名前付き export と import の エイリアス(別名)
エイリアスの仕組みを利用する事で、宣言済みのへ変数や関数に宣言時と異なる名前を指定してインポートする事ができます。
エイリアスを付ける為には `as` の後ろに別の名前を指定します。
`namedExportModule.js` からエクスポートされている変数 `namedVariable` を `myVariable` に `namedFunc` を `myFunc` と言う名前でインポートするには下記の様に記述します。
```javascript
import { namedVariable as myVariable, namedFunc as myFunc} from "./namedExportModule.js";

console.log(myVariable) // sampleVariable
myFunc() // sampleFunc
```
名前付きエクスポートを `myModule` オブジェクトとしてまとめてインポートする事も出来ます。
`namedExportModule.js` から `myModule` と言う名前でインポート、
`myModule.namedVariable`, `myModule.namedFunc` と書いて呼び出します。
```javascript
import * as myModule from "./namedExportModule.js";

console.log(myModule.namedVariable) // sampleVariable
myModule.namedFunc() // sampleFunc
```
#### デフォルト export と import
##### デフォルト expoprt
デフォルトエクスポートは、モジュール毎に1つだけエクスポート出来る特殊なエクスポートです。

`export default` はファイルごとに**１つだけ**エクスポートする為、インポートする側も何をインポートすればよいのか明確です。
その為、関数の作成と同時にデフォルトエクスポートする場合、関数名は**省略可能**です。
```bash
vi modules/defaultExportModule.js
```
```javascript
export default () => {
	console.log('defaultFunc')
}
```
複数の変数を同時に作成できる変数については、変数宣言と同時にデフォルトエクスポートすることは出来ないので注意しましょう。
##### デフォルト import
名前付きインポートの場合は、`import` の後に `{}` が必要ですが、デフォルトインポートの場合は、`{}` は **不要**です。

また、名前付きエクスポートの場合は、指定したモジュールから同じ変数名や関数名を指定してインポートしますが、デフォルトエクスポートの場合は、**任意の名前**をつけてインポートします。
```bash
vi modules/defaultImportModule.js
```
```javascript
import Func from './defaultExportModule.js'

Func() // defaultFunc
```
#### 再エクスポート
再エクスポートとは、1度インポートしたモジュールを別のファイルが利用できるようにエクスポートし直すことです。
`export ... from ...` 構文を利用してインポートした直後にエクスポート出来ます。

再エクスポートは、複数のモジュールからエクスポートされたものをまとめてたモジュールをつくる時などに利用されます。
```javascript
// namedExportModule から　namedVariable, namedFunc をインポートして
// 再エクスポート
export { namedVariable, namedFunc } from './namedExportModule.js'

// namedExportModule から　namedVariable->myVariable, namedFunc->myFunc 
// 別名インポートして再エクスポート
export { namedVariable as myVariable, namedFunc as myFunc } from './namedExportModule.js'

// 名前付きエクスポートを myModule オブジェクトとしてまとめてインポートして
// 再エクスポート
export * as myModule from './namedExportModule.js'
```
#### HTMLファイルからモジュールを呼び出す
HTMLファイルからモジュールを利用したい場合、JavaScriptを呼び出す際に、以下の様に `type` 属性の値に `module` を指定します。
```html
<script type='module' src='./modules/importModule.js' ></script>
```
## 非同期処理
プログラムは通常「同期処理」であり、コードを上から順番に処理していき、１つの処理が終わるまで次の処理は行われません。一方で非同期処理は、ある処理が終わるのを待たずに次の処理を実行して行くため、同時に複数の処理を行います。

何気なく使っているコールバック関数も、何らかしらの関数の処理が完了してから引数で渡された処理をする非同期処理です。
### setTimeout()
`setTimeout()` は代表的な非同期処理関数であり、指定された時間が経過したところで1度だけ処理を実行します。
第一引数にコールバック関数、第二引数にミリ秒単位の時間を渡します。
```javascript
// setTimeout 基本構文
setTimeout(callback関数, ミリ秒単位の時間)
```
```javascript
// 500ミリ後に1度だけ処理が実行される。
setTimeout(()=>console.log('処理が実行されます'), 500)
```
似たような処理で `setInterval()` があります。
|メソッド|説明|
|:--|:--|
|setTimeout(callback, delay)|第二引数に渡された時間が経過した所で一度だけ処理を行う|
|setInterval(callback, during)|第二引数に渡された時間間隔で、繰り返し処理を実行、指定した時間が経過すると前回の処理が終了していなくても繰り返しの処理が始まる|
### Promise
非同期処理をよりシンプルに扱えるのが `Promise` オブジェクトです。
実行中の非同期処理を監視し、問題なく処理が完了すれば `resolve` を、問題があれば `reject` を通知します。

`Promise` オブジェクトは、 `Pending` (待機)、`Fulfilled` (成功)、`Rejected` (失敗)の3つの状態を持っていいます。

|状態<br>(PromiseStatus)|説明|次の処理<br>(Callback)|
|:--|:--|:--|
|Pending|何らかの処理を実行している状態||
|Fulfilled|処理が完了して終了した状態|Fulfilled状態なら`.then()`を呼び出す(成功後の処理)|
|Rejected|処理が失敗で終わった状態|Rejected状態なら`.catch()`を呼び出す(失敗後しの処理)|

`Promise`コンストラクタの基本構文は次の通りです。
```javascript
const statements = (resolve, reject) => {
	// resolve() 成功を通知する為の関数
	// reject() 失敗を通知する為の関数
}
// Promise インスタンスを作成
const promise = new Promise(statements)
```
`statement()`の引数である`resolve`, `reject` はそれぞれが非同期処理の成功と失敗を通知する為の関数です。
`statement()`の中で、非同期処理が成功した場合は`resolve()`を、失敗した場合には`reject()`を呼び出します。

ここでは最終的な値を返すのでなく、一連の処理を途中の値を持つ`Promise`オブジェクトを返す事により、同期処理と同じように値を返すことができます。

「今は途中の値を返しますが、あとで最終的な値を返します」と約束してくれるのが`Promise`オブジェクトです。
#### Promise.then()
`Promise` オブジェクトにおける非同期処理の結果を受けるのが `.then()` です。
結果が通知されると、次のアクションを関連付けるために使用されます。

`.then()` の第一引数に成功時のコールバック関数、第二引数に失敗時のコールバック関数が渡されます。
引数で渡されたコールバック関数の戻り値から新たな `Promise` オブジェクトが作成され、作成されたオブジェクトを返します。

`.then()` の第二引数の失敗時のコールバック関数は省略出来ます。
```javascript
// 第一引数の resolve は成功を通知する為の関数
// 第二引数の reject は失敗を通知する為の関数
const promise = new Promise((resolve, reject) => {
	resolve('非同期の処理が成功したことを通知')
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
```
`resolve()` で非同期処理が成功したという通知を受け取り、`.then()` で受け取った `inCaseOfSuccess` 第一引数のコールバック関数を実行しまうす。

また、`.then()` をつなげていくことで、非同期処理が成功した場合の処理を順番に実行させていくことが出来ます。
このことを**Promiseチェーン** と言います。
#### Promise.catch()
`Promise` オブジェクトにおける非同期処理の失敗した場合の結果を受け取るのが`.catch()` です。処理の失敗を`reject()`で通知されたことにより、つ日のアクションを関連付ける為に使用されます。
```javascript
// 第一引数の resolve は成功を通知する為の関数
// 第二引数の reject は失敗を通知する為の関数
const promise = new Promise((resolve, reject) => {
	reject('非同期の処理が失敗したことを通知')
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
// reject() で非同期が失敗したと言う通知を受け取り
// catch() で失敗した場合の処理を実行
promise.then(inCaseOfSuccess).catch(inCaseOfFailure)
```
`reject()` での非同期処理が失敗したという通知を受け取り `.then()` の第二引数でも失敗時の処理を受け取る事も出来ますが、視覚的に、`.catch()` を利用した方が見やすいです。
#### throw と エラー処理
`.catch()` は非同期処理中に発生した `throw` (例外)をキャッチ出来ます。

`.then()` の中で `throw` した場合は `Promise` の `reject` (失敗)を意味する為、`.catch()` が呼び出されます。
```javascript
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
	.then(() => {
		// エラーオブジェクトを生成し、throw(例外)でエラーを投げる
		throw new Error('例外が発生 ERROR!')
	})
	.catch((error) => {
		// 例外エラーを受け取って、エラー時の処理を実行
		console.log(error) // 例外が発生 ERROR!
	})
```
##### try...catch...finally 文
同期処理の場合 `try...catch...finally` 文を使うことで、発生した例外をキャッチする事ができます。`try` ブロック内で例外が発生すると、`catch` ブロックに処理が移動し、例外が発生した場合の処理を実行します。`fanally` ブロックは例外の有無に関わらず、必ず最後の実行されます。
```javascript
try {
	// 
} catch(error) {
	// 例外時に実行
} finally {
	// 例外有無に関わらず実行
}
```
#### Promise.finally()
`.finally()` を利用すると、非同期処理の成功失敗に関わらず実行される
コールバック関数を登録することができます。
`Promise` チェーンの最後尾に処理を書きます。
```javascript
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
```
#### Promise.all()
配列で指定された複数の `Promise` オブジェクトすべての非同期しょりが成功した場合の結果を受け取るのが `.all()` です。

複数の非同期処理を並列に実行し、そのすべてが成功した時点で `.then()` の成功コールバック関数が実行されます。
`Promise` オブジェクトのいずれか1つでも失敗した場合は `.catch()` の失敗コールバック関数が実行されます。
```javascript
const promise1 = new Promise((resolve, reject) => {
	resolve('promise1 resolve')
})
const promise2 = new Promise((resolve, reject) => {
	resolve('promise2 resolve')
})
const promise3 = new Promise((resolve, reject) => {
	resolve('promise3 resolve')
})
// promiseObjects 配列の要素すべて、Promise オブジェクト
const promiseObjects = [promise1, promise2, promise3]

Promise.all(promiseObjects)
	.then(()=>console.log('すべての非同期処理が成功しました'))
	.catch(()=>console.log('非同期処理が失敗しました'))
	.finally(()=>console.log('処理実行が終了しました'))
```
#### Promise.race()
配列で指定された複数の `Promise` オブジェクトのうち、最初に状態が変わったという通知を受けたものを実行するのが `race()` です。

複数の非同期処理を並列に実行し、最初に応答があった時点での成功または失敗のコールバック関数が1度だけ実行されます。
```javascript
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
```
### Async Function (async/await)
`Async Function` を利用すると、`Promise` をシンプルに扱うことが出来ます。
`Promise` オブジェクトの上に作られており、非同期処理を行う「`Promise` インスタンスを返す関数」を定義する構文で、`await` 文は、`Async FUnction` の中でのみ利用できます。

`Async Function(async/await)` を利用する事で、非同期関数を同期関数の様に呼び出すことが出来ます。
#### async
関数の前に `async` を付けるだけで非同期関数 `async function` を定義出来ます。
```javascript
// アロー関数で async function を宣言
const asyncSampleFunc = async () => {}
```
```javascript
const sampleFunc = async () => {
	return 'これは非同期関数です。'
}
console.log(sampleFunc()) // Promise { 'これは非同期関数です。' }

console.log(sampleFunc().then((value) => console.log(value)))
// Promise { <pending> }
// これは非同期関数です。
```
戻り値が `Promise` オブジェクトである事が確認できます。
#### await
`await` は `async function` 内でのみ利用出来ます。
`Promise` の状態の通知( `resolve` / `reject` ) が返されるまで処理を停止して待機し、`Promise` の状態が変わったとの通知を受け取ると次の処理を再開します。
```javascript
// アロー関数で async function を宣言
const asyncSampleFunc = async () => {
	// Promise の状態が変わるまで待機
	await Promise インスタンス
	// Promise の状態が変わると、次の処理を再開
}
```
`await` を利用すると、非同期の処理が完了するまで次の処理を実行しないため、非同期処理が同期処理の様に上から下へと順番に実行する様な処理になります。
```javascript
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
```
次に、 `await` を付けないと場合の動作は以下の様になります。
```javascript
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
```

`async / await` を利用することで、非同期処理が、同期処理的な形で利用できるようになります。