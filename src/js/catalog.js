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

//catalog-tabs
let catBtn = document.querySelectorAll('.cat__content-button')
let catItem = document.querySelectorAll('.cat__grid')

catBtn.forEach(function(element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    catBtn.forEach(function(btn) { btn.classList.remove('cat__content-button--active')});
    e.currentTarget.classList.add('cat__content-button--active');

    catItem.forEach(function(element) { element.classList.remove('cat__grid--active')});
    document.querySelector(`[data-target="${path}"`).classList.add('cat__grid--active');
  });
})

//catalog-select
const elem = document.querySelector('.select-1')
const choices3 = new Choices(elem, {
  searchEnabled: false,
  itemSelectText: '',
  position: 'bottom',
})

const e = document.querySelector('.select-2')
const choices4 = new Choices(e, {
  searchEnabled: false,
  itemSelectText: '',
  position: 'bottom',
})

const ele = document.querySelector('.select-3')
const choices5 = new Choices(ele, {
  searchEnabled: false,
  itemSelectText: '',
  position: 'bottom',
})

const eleme = document.querySelector('.select-4')
const choices6 = new Choices(eleme, {
  searchEnabled: false,
  itemSelectText: '',
  position: 'bottom',
})

//catalog range-slider

const rangeInput = document.querySelectorAll(".filters-range__range input"),
priceInput = document.querySelectorAll(".filters-range__block input"),
range = document.querySelector(".slider .slider__progress");
let priceGap = 0;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "range-block__m-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range__min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});
