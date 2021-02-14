// fixed menu +scroll top
const fixMenu = document.querySelector('.js-fix-menu')
const scrollTop = document.querySelector('.js-scroll-top')

window.onscroll = () => {
    if (window.scrollY > 400) {
        fixMenu.classList.add('is-active')
        scrollTop.classList.add('is-active')
    }
    else {
        fixMenu.classList.remove('is-active')
        scrollTop.classList.remove('is-active')
    }

    scrollTop.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}




