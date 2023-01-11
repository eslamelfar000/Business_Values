let nav = document.querySelector('#nav');
// let links = document.querySelectorAll('.link');

document.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('nav-change')
        // links.forEach(i => {
        //     i.classList.add('link-color')
        // })
    }
    else {
        nav.classList.remove('nav-change')
        // links.forEach(i => {
        //     i.classList.remove('link-color')
        // })
    }
})




let searchIn = document.querySelector('#search-input')
let searchCover = document.querySelector('#search-cover')
let close_search_btn = document.querySelector('#close-search-btn')
let open_search_btn = document.querySelector('#search-btn')
const openSearch = () => {
    searchIn.classList.add('search-open')
    close_search_btn.classList.add('btn-show')
    open_search_btn.classList.add('btn-hide')
    searchCover.classList.add('coverChange')
}


const closeSearch = () => {
    searchIn.classList.remove('search-open')
    close_search_btn.classList.remove('btn-show')
    open_search_btn.classList.remove('btn-hide')
    searchCover.classList.remove('coverChange')
}


let side = document.querySelector('.side-nav')
let sideOver = document.querySelector('.side-overlay')
const openSide = () => {
    side.style.left = "0px"
    sideOver.style.right = "0px"
    side.style.opacity = "1"
    sideOver.style.opacity = "1"
    document.body.style.overflow = "hidden";
}

const closeSide = () => {
    side.style.left = "-360px"
    sideOver.style.right = "-100%"
    side.style.opacity = "0"
    sideOver.style.opacity = "0"
    document.body.style.overflow = "auto";
}

document.addEventListener('click', (e) => {
    if (e.target.className === "side-overlay") {
        side.style.left = "-360px"
        sideOver.style.left = "100%"
        side.style.opacity = "0"
        sideOver.style.opacity = "0"
        document.body.style.overflow = "auto";
    }
})


let up = document.querySelector('.toUp')
document.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        up.classList.add('upShow')
    }
    else {
        up.classList.remove('upShow')

    }
})

up.addEventListener('click', () => {
    scrollTo(0, 0, "smooth")
})
