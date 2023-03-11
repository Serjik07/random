// console.log(Math.ceil(Math.random() * 100));

const p = document.querySelector('.title > p');
const chanse = document.querySelector('.chanse > p');
const input = document.querySelector('input');
const inputBox = document.querySelector(".inputBox");

function randomFunc() {
  let randomNum = Math.ceil(Math.random() * 100);
  let chanseN = 7;
  chanse.innerText = `You have ${chanseN} chanses`;
  console.log(randomNum)
  inputBox.addEventListener('submit', function(evn) {
    evn.preventDefault();
    chanseN--;
    chanse.innerText = `You have ${chanseN} chanses`;
    if (chanseN === 0 && randomNum !== (+input.value)) {
      p.innerText = 'memorized number changed, start over';
      input.value = '';
      randomFunc();
    } else if ((+input.value) > 100 || (+input.value) < 0) {
      p.innerText = `Dzer mutkagrac tivy durs e mijakayqic`;
    } else if ((+input.value) > randomNum) {
      p.innerText = `the memorized number is smaller`;
    } else if ((+input.value) < randomNum) {
      p.innerText = `the memorized number is larger`;
    } else {
      p.innerText = `that's right, you guessed it`;

      function pro() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(randomFunc)
          }, 2000)
        })
      }
      pro().then((func) => {

        p.innerText = 'memorized number changed, start over';
        func();
      })
    }
  })

}

randomFunc();
