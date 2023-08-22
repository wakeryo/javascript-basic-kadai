const btnclick = document.getElementById('btn');


   btnclick.addEventListener('click', () => {
    setTimeout(() => {
  let textchange =document.getElementById('text').textContent;
  document.getElementById('text').textContent ='ボタンをクリックしました';
    },2000);
});