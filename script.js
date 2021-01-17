

/*newstuffhere*/
const container = document.querySelector('.container');

const unsplashURL = 'https://source.unsplash.com/random/';

const rows = 500

for(let i=0; i < rows* 3; i++) {
  const div= document.createElement('div');
  div.classList.add('box');
  
  const  p =document.createElement('p');
  const img = document.createElement('img');
  img.src = `${unsplashURL}${getRandomSize()}`;
  p.appendChild(img);
  div.appendChild(p);
  container.appendChild(div);
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`
}
function getRandomNr() {
  return Math.floor(Math.random() * 1000) + 300
}


/*old stuff here */
const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll', checkBoxes)
checkBoxes()
function checkBoxes() {
  const triggerBottom = (window.innerHeight /1000 *999)
  
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top
    
    if(boxTop < triggerBottom) {
      box.classList.add('show')
      
    }
    else {
      box.classList.remove('show')
    }
  })
  
}
