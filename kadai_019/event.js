const btnclick = document.getElementById('btn');
btnclick.addEventListener('click', () => {
  let textchange = document.getElementById('text').textContent;
  document.getElementById('text').textContent='ボタンをクリックしました';
});

