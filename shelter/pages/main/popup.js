const pets = [
  {
    "name": "Jennifer",
    "img": "../../assets/images/page_our-pets/our_pets/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/page_our-pets/our_pets/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/page_our-pets/our_pets/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/page_our-pets/our_pets/scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/page_our-pets/our_pets/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/page_our-pets/our_pets/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/page_our-pets/our_pets/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/page_our-pets/our_pets/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]; 



const list_pets = document.querySelector('.our-friends__container');
const pet_item = document.querySelectorAll('.our-friends__item');
const pet_img = document.querySelectorAll('.item__image');
const popup = document.getElementById('popup');
const popup_body = document.querySelector('.popup__body');
const popup_content = document.querySelector('.popup__content');
const popup_btn = document.querySelectorAll('.item__button.openpopup');
const close_btn = document.querySelector('.popup__close');
let data = document.querySelectorAll('[data-name]');

// const body = document.querySelector(".body");


// popup_content
const POPUP__IMAGE = document.querySelector('.popup__image');
const POPUP_CONTAINER = document.querySelector('.popup__container'); 
const POPUP_TITLE = document.querySelector('.popup__title');
const POPUP__SUBTITLE = document.querySelector('.popup__subtitle');
const POPUP__DESCRIPTION = document.querySelector('.popup__description');
const POPUP_LIST_AGE = document.querySelector('.list__item_age');
const POPUP_LIST_INOCULATIONS = document.querySelector('.list__item_inoculations');
const POPUP_LIST_DISEASES = document.querySelector('.list__item_diseases');
const POPUP_LIST_PARASITES = document.querySelector('.list__item_parasites');



function showModal() {
  
  list_pets.addEventListener('click', function(event) {
    console.log(this, event.target); 

    // Если ивент равен data-name - тогда показывай модалку. Если клик произошёл по другой области , ничего не делай.  
    if(event.target.dataset.name != undefined) {
      event.target.classList.add('show');
      popup.classList.add('show');
      document.body.classList.add('show');
    } else {
      return;
    }

    for(let i = 0; i < pets.length; i++) {
      if(pets[i].name === event.target.dataset.name) {
        console.log(true); 
        POPUP__IMAGE.src= `${pets[i].img}`;
        POPUP_TITLE.innerHTML = pets[i].name; 
        POPUP__SUBTITLE.innerHTML = `${pets[i].type} - ${pets[i].breed}`;
        POPUP__DESCRIPTION.innerHTML = ` ${pets[i].description}`;
        POPUP_LIST_AGE.innerHTML = ` ${pets[i].age}`;
        POPUP_LIST_INOCULATIONS.innerHTML = ` ${pets[i].inoculations}`;
        POPUP_LIST_DISEASES.innerHTML = ` ${pets[i].diseases}`;
        POPUP_LIST_PARASITES.innerHTML = ` ${pets[i].parasites}`;
      }  
    }


  });
};


function closeModal() {
  list_pets.classList.remove('show');
  popup.classList.remove('show');
  document.body.classList.remove('show');
}

document.body.addEventListener('click', e => {
  let target = e.target;
  let popupBody = target == popup_body;
  console.log(popupBody);

  if (popupBody) {
    closeModal();
  }
}); 

close_btn.addEventListener('click', closeModal);

showModal();
closeModal();

