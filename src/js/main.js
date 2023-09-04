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

// banner-1
const swiper1 = new Swiper('.banner__swiper', {
  direction: 'horizontal',
  speed: 1000,
  spaceBetween: 0,
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// special-offers
const swiper2 = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 32
    },

    // 1311: {
    //   slidesPerView: 3,
    //   spaceBetween: 32
    // },
  },
  navigation: {
    enabled: true,
    nextEl: '.special-offers__btn-next',
    prevEl: '.special-offers__btn-prev',
  },
});


// useful-swiper
const swiper3 = new Swiper('.useful__swiper', {
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  breakpoints: {
    320: {
      slidesPerView: 1,
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
      slidesPerView: 2,
      spaceBetween: 32
    }
  },
  // Navigation arrows
  navigation: {
    enabled: true,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// greet-form
document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.greet__content-form')

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
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Это поле необходимо заполнить'
      },
      {
        rule: 'email',
        errorMessage: 'Недопустимый формат',
      }
    ])
});

// tooltips
tippy('.greet__content-block-btn', {
  content: 'Реплицированные с зарубежных источников, исследования формируют глобальную сеть.',
  trigger: 'click',
  delay: 100,
  maxWidth: 200,
});

