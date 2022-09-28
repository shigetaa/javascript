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

## オブジェクト

## モジュール

## 非同期処理