
const hamburger_btn = document.querySelector(".header__logo-line");
const logo_line = document.querySelector(".hamburger"); 
const navigation = document.querySelector(".hamburger__navigation"); 
const overlay = document.querySelector(".hamburger__overlay"); 
const body = document.querySelector(".body");
const logo = document.querySelector(".logo");
const closeMenu = document.querySelectorAll(".hamburger__item");



function showMenu() {
  logo_line.classList.toggle("open");
  hamburger_btn.classList.toggle("open");
  overlay.classList.toggle("open");
  navigation.classList.toggle("open");
  body.classList.toggle("open");


  if(logo_line.classList.contains("open")) {
    logo.style.opacity = "0";
    body.style.overflow = "hidden";
  } else {
    logo.style.opacity = "1";
    body.style.overflow = "visible";
  }

}



closeMenu.forEach( (item) => {
  item.addEventListener("click", () => {
    showMenu();
  })

});





// hamburger_btn.addEventListener("click", showMenu);

hamburger_btn.addEventListener('click', e => {
  e.stopPropagation();

  showMenu();
});

document.body.addEventListener('click', e => {
  let target = e.target;
  let its_menu = target == navigation || navigation.contains(target);
  let its_hamburger = target == overlay;
  let menu_is_active = overlay.classList.contains('open');
  
  if (!its_menu && !its_hamburger && menu_is_active) {
    showMenu();
  }
}); 

console.log('Если при проверке Pixel Perfect у вас скрывается меню вызовите в консоле функцию : showMenu();');
console.log('Также прошу после проверки оставить ваш Discord или telegramm для связи, ещё до конца кроссчека добавлю carousel');