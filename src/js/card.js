// header location-selector
const element = document.querySelector('.city-selection__select')
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  position: 'bottom',
})

// header-2-select
const el = document.querySelector('.header-2-bottom__2-select')
const choices2 = new Choices(el, {
  searchEnabled: false,
  itemSelectText: '',
  position: 'bottom',
})

// header-2-burger

let burgerButton = document.querySelector('.burger')
let burgerMenu = document.querySelector('.header-2-bottom__1-nav')

burgerButton.addEventListener('click',
  function() {
    burgerMenu.classList.toggle('nav--active')
    burgerButton.classList.toggle('burger--active')
})

// picture pop-up

let old = document.querySelector('.card__block-pics-1')
let popUp = document.querySelector('.card__overlay')
let xButton = document.querySelector('.card__overlay-button')

old.addEventListener('click',
  function() {
    old.classList.toggle('card__block-pics-1--active')
    popUp.classList.toggle('card__overlay--active')
})

xButton.addEventListener('click',
  function() {
    old.classList.toggle('card__block-pics-1--active')
    popUp.classList.toggle('card__overlay--active')
})

const swiper10 = new Swiper('.card__overlay-swiper', {
  direction: 'horizontal',
  loop: false,
  speed: 1000,
  // slidesPerView: 'auto',
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 80
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 80,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 80
    },

    1025: {
      slidesPerView: 4,
      spaceBetween: 80
    }
  },
  // Navigation arrows
  navigation: {
    enabled: true,
    nextEl: '.swiper__control-next-btn',
    prevEl: '.swiper__control-prev-btn',
  },
});

// card-similar-swiper

const swiper4 = new Swiper('.similar__swiper', {
  direction: 'horizontal',
  speed: 1000,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 32
    },

    1025: {
      slidesPerView: 4,
      spaceBetween: 32
    }
  },
  navigation: {
    enabled: true,
    nextEl: '.similar__btn-next',
    prevEl: '.similar__btn-prev',
  },
});

// card fast-buy

let overlay = document.querySelector('.overlay')
let inOverlayButton = document.querySelector('.box__btn')
let inOverlayButton1 = document.querySelector('.btnOne')
let exitOverlayButton = document.querySelector('.overlay__btn')

inOverlayButton.addEventListener('click',
  function() {
    overlay.classList.toggle('overlay--active')
    exitOverlayButton.classList.toggle('overlay__btn--active')
})

inOverlayButton1.addEventListener('click',
function() {
  overlay.classList.toggle('overlay--active')
  exitOverlayButton.classList.toggle('overlay__btn--active')
})

exitOverlayButton.addEventListener('click',
  function() {
    overlay.classList.toggle('overlay--active')
    exitOverlayButton.classList.toggle('overlay__btn--active')
})

let overlayForm = document.querySelector('.overlay__form')
let formButton = document.querySelector('.overlay__form-btn')
let overlaySecond = document.querySelector('.overlay__activated')

let overlayTitle = document.querySelector('.overlay__title')
let overlayDescr = document.querySelector('.overlay__descr')
let overlayContainer = document.querySelector('.overlay__container')

formButton.addEventListener('click',
  function() {
    overlayForm.classList.toggle('overlay__form--disabled')
    overlaySecond.classList.toggle('overlay__activated--active')
    overlayTitle.classList.toggle('overlay__title--disabled')
    overlayDescr.classList.toggle('overlay__descr--disabled')
    overlayContainer.classList.toggle('overlay__container--modified')
})

//card overlay-valid

document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.overlay__form')

  validation
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: 'Это поле необходимо заполнить'
      },
      {
        rule: 'customRegexp',
        value: /[а-я]/gi,
        errorMessage: "Недопустимый формат"
      }
    ])
    .addField('#tel', [
      {
        rule: 'required',
        errorMessage: 'Это поле необходимо заполнить'
      },
      {
        rule: 'minLength',
        value: 11,
        errorMessage: "Недостаточное количество символов"
      },
      {
          rule: 'maxLength',
          value: 11,
          errorMessage: "Вы ввели больше чем положено"
      },
      {
        rule: 'number',
        errorMessage: "Недопустимый формат"
      }
    ])
});
