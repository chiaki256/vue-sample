// 要素取得
const btn = document.querySelector('button');

let counter = 0;
btn.addEventListener('click', () => {
  counter++;
  btn.innerText = `count is ${counter}`;
});
