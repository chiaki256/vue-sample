'use strict';

(() => {
  // 要素取得
  const btn = document.querySelector('#btn');

  let count = 0;

  const updateBtnLabel = () => {
    btn.innerText = `count is ${count}`;
  };

  btn.addEventListener('click', () => {
    count++;
    updateBtnLabel();
  });

  // 初期表示
  updateBtnLabel();
})();
