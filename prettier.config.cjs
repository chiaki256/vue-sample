/** @type {import("prettier").Config} */
module.exports = {
  semi: true, // セミコロンをつける
  singleQuote: true, // シングルクォートを使う
  printWidth: 100, // 1行の最大文字数（長すぎない程度に余裕あり）
  tabWidth: 2, // インデント幅
  useTabs: false, // スペースでインデント
  trailingComma: 'es5', // 配列・オブジェクト末尾にカンマ（ES5対応範囲で）
  bracketSpacing: true, // { foo: bar } のようにスペースあり
  arrowParens: 'always', // アロー関数の引数に常に括弧をつける
  endOfLine: 'lf', // 改行コード（LF推奨）
  htmlWhitespaceSensitivity: 'ignore', // HTMLの空白に厳密になりすぎない
  vueIndentScriptAndStyle: true, // Vue SFCの <script>, <style> もインデントする
  embeddedLanguageFormatting: 'auto' // Markdown や HTML 中のコードは自動整形
};
