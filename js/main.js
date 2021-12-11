const elHamburger =  document.querySelector('.nav__burger')
const elHeader  = document.querySelector('body')
 
elHamburger.addEventListener('click', () => {
    elHeader.classList.toggle('body--active')
})