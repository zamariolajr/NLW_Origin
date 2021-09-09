//adicionando interatividade ao menu
// Abre e fecha menu quando ocorre evento click no hamburguer ou no x
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}
// fecha menu quando clica em algum item
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

// mudar header ao usar o scroll

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
    if (window.scrollY >= navHeight) {
        //scroll maior que altura do header
        header.classList.add('scroll')
    } else {
        //scroll menor que altura do header
        header.classList.remove('scroll')
    }
})

/* testimonials swiperjs carousel slider */

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
})