const btnSec = document.getElementById('btnSec');
const figSec = document.getElementById('figSec').firstElementChild;
const imgArr = [
  ['nature', './images/nature.jpg'],
  ['bird', './images/bird.jpg'],
  ['bird', './images/bird_1.jpg'],
  ['animal', './images/lion.jpg'],
  ['animal', './images/tiger.jpg'],
  ['animal', './images/squirrel.jpg'],
]
const imgPusher = (item) => {
  if(item!==undefined||null){
  figSec.innerHTML = ``;
  item === 'all' ? imgArr.forEach(item => figSec.innerHTML += `<img src="${item[1]}" alt="${item[0]} : ${item[1]}">`) : false;
  for (let i of imgArr) {
    if (i[0] === item) {
      let ele = document.createElement('img');
      ele.src = i[1]; ele.alt = `${i[0]} : ${i[1]}`
      figSec.insertAdjacentElement('beforeend', ele)
    }
  }
  }
}
window.onload = imgPusher('all')
btnSec.addEventListener('click', item =>imgPusher(item.target.value));