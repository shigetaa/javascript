// namedExportModule から　namedVariable, namedFunc をインポートして再エクスポート
export { namedVariable, namedFunc } from './namedExportModule.js'

// namedExportModule から　namedVariable->myVariable, namedFunc->myFunc 別名インポートして再エクスポート
export { namedVariable as myVariable, namedFunc as myFunc } from './namedExportModule.js'

// 名前付きエクスポートを myModule オブジェクトとしてまとめてインポートして再エクスポート
export * as myModule from './namedExportModule.js'