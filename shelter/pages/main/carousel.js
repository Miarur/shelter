



const BTN_LEFT = document.querySelector('.item__button.--left-button');
const BTN_RIGHT = document.querySelector('.item__button.--rigth-button');
const CAROUSEL = document.querySelector('#carousel');
const ITEM_LEFT = document.querySelector('#item-left');
const ITEM_RIGHT = document.querySelector('#item-right'); 


const cardWrapp = document.querySelector('.card__item');
const itemCard = document.querySelector('.our-friends__item');
const cardImage = document.querySelector('.item__image');
const cardContent = document.querySelector('.item__content');
const cardBtn = document.querySelector('.item__button.openpopup'); 


function moveLeft() {
  CAROUSEL.classList.add('transition-left');
  BTN_LEFT.removeEventListener('click', moveLeft);
  BTN_RIGHT.removeEventListener('click', moveRight);
}

function moveRight() {
  CAROUSEL.classList.add('transition-right');
  BTN_LEFT.removeEventListener('click', moveLeft);
  BTN_RIGHT.removeEventListener('click', moveRight);
}


BTN_LEFT.addEventListener('click', moveLeft);
BTN_RIGHT.addEventListener('click', moveRight);


CAROUSEL.addEventListener('animationend', (animationEvent) => {
  console.log(animationEvent);

  let newItem; 
  if (animationEvent.animationName === 'move-left') {
    CAROUSEL.classList.remove('transition-left');
    newItem = ITEM_LEFT;
    console.log(newItem);

    const leftItems = ITEM_LEFT.innerHTML;
    document.querySelector('#item-active').innerHTML = leftItems;

    const card1 = () => {
      let random = Math.floor(Math.random()* 8);
      let CARD_ITEM;
        
      CARD_ITEM = document.createElement('div');
      CARD_ITEM.classList.add('our-friends__item');
      CARD_ITEM.setAttribute('data-name', `${pets[random].name}`);
      cardImage.setAttribute('data-name', `${pets[random].name}`);
      cardImage.src = `${pets[random].img}`;
      cardContent.setAttribute('data-name', `${pets[random].name}`);
      cardContent.innerHTML= `${pets[random].name}`;
      cardBtn.setAttribute('data-name', `${pets[random].name}`);
      CARD_ITEM.appendChild(cardImage);
      CARD_ITEM.appendChild(cardContent);
      CARD_ITEM.appendChild(cardBtn);
      return CARD_ITEM;
    }


    const card2 = () => {
      let random = Math.floor(Math.random()* 8);
      let CARD_ITEM;
        
      CARD_ITEM = document.createElement('div');
      CARD_ITEM.classList.add('our-friends__item');
      CARD_ITEM.setAttribute('data-name', `${pets[random].name}`);
      cardImage.setAttribute('data-name', `${pets[random].name}`);
      cardImage.src = `${pets[random].img}`;
      cardContent.setAttribute('data-name', `${pets[random].name}`);
      cardContent.innerHTML= `${pets[random].name}`;
      cardBtn.setAttribute('data-name', `${pets[random].name}`);
      CARD_ITEM.appendChild(cardImage);
      CARD_ITEM.appendChild(cardContent);
      CARD_ITEM.appendChild(cardBtn);
      return CARD_ITEM;
    }

    const card3 = () => {
      let random = Math.floor(Math.random()* 8);
      let CARD_ITEM;
        
      CARD_ITEM = document.createElement('div');
      CARD_ITEM.classList.add('our-friends__item');
      CARD_ITEM.setAttribute('data-name', `${pets[random].name}`);
      cardImage.setAttribute('data-name', `${pets[random].name}`);
      cardImage.src = `${pets[random].img}`;
      cardContent.setAttribute('data-name', `${pets[random].name}`);
      cardContent.innerHTML= `${pets[random].name}`;
      cardBtn.setAttribute('data-name', `${pets[random].name}`);
      CARD_ITEM.appendChild(cardImage);
      CARD_ITEM.appendChild(cardContent);
      CARD_ITEM.appendChild(cardBtn);
      return CARD_ITEM;
    }

    ITEM_LEFT.innerHTML = '';
    ITEM_LEFT.appendChild(card1());
    ITEM_LEFT.appendChild(card2());
    ITEM_LEFT.appendChild(card3());

  } else {
    CAROUSEL.classList.remove('transition-right');
    newItem = ITEM_RIGHT;
    CAROUSEL.classList.remove('transition-left');
    const rightItems = ITEM_RIGHT.innerHTML;
    document.querySelector('#item-active').innerHTML = rightItems;

    const card4 = () => {
      let random = Math.floor(Math.random()* 8);
      let CARD_ITEM;
        
      CARD_ITEM = document.createElement('div');
      CARD_ITEM.classList.add('our-friends__item');
      CARD_ITEM.setAttribute('data-name', `${pets[random].name}`);
      cardImage.setAttribute('data-name', `${pets[random].name}`);
      cardImage.src = `${pets[random].img}`;
      cardContent.setAttribute('data-name', `${pets[random].name}`);
      cardContent.innerHTML= `${pets[random].name}`;
      cardBtn.setAttribute('data-name', `${pets[random].name}`);
      CARD_ITEM.appendChild(cardImage);
      CARD_ITEM.appendChild(cardContent);
      CARD_ITEM.appendChild(cardBtn);
      return CARD_ITEM;
    }

    const card5 = () => {
      let random = Math.floor(Math.random()* 8);
      let CARD_ITEM;
        
      CARD_ITEM = document.createElement('div');
      CARD_ITEM.classList.add('our-friends__item');
      CARD_ITEM.setAttribute('data-name', `${pets[random].name}`);
      cardImage.setAttribute('data-name', `${pets[random].name}`);
      cardImage.src = `${pets[random].img}`;
      cardContent.setAttribute('data-name', `${pets[random].name}`);
      cardContent.innerHTML= `${pets[random].name}`;
      cardBtn.setAttribute('data-name', `${pets[random].name}`);
      CARD_ITEM.appendChild(cardImage);
      CARD_ITEM.appendChild(cardContent);
      CARD_ITEM.appendChild(cardBtn);
      return CARD_ITEM;
    }

    const card6 = () => {
      let random = Math.floor(Math.random()* 8);
      let CARD_ITEM;
        
      CARD_ITEM = document.createElement('div');
      CARD_ITEM.classList.add('our-friends__item');
      CARD_ITEM.setAttribute('data-name', `${pets[random].name}`);
      cardImage.setAttribute('data-name', `${pets[random].name}`);
      cardImage.src = `${pets[random].img}`;
      cardContent.setAttribute('data-name', `${pets[random].name}`);
      cardContent.innerHTML= `${pets[random].name}`;
      cardBtn.setAttribute('data-name', `${pets[random].name}`);
      CARD_ITEM.appendChild(cardImage);
      CARD_ITEM.appendChild(cardContent);
      CARD_ITEM.appendChild(cardBtn);
      return CARD_ITEM;
    }

    ITEM_RIGHT.innerHTML = '';
    ITEM_RIGHT.appendChild(card4());
    ITEM_RIGHT.appendChild(card5());
    ITEM_RIGHT.appendChild(card6());

  }
  BTN_LEFT.addEventListener('click', moveLeft);
  BTN_RIGHT.addEventListener('click', moveRight);
});
