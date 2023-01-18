let popUp = document.querySelector('#popUp')
let popUpContent = document.querySelector('.popUp-content')

const popUpPage = () => {
    popUp.style.visibility = "visible"
    popUpContent.style.marginTop = "-100px"
    popUpContent.style.opacity = "1"
    document.body.style.overflow = "hidden"
}

const closePopUpPage = () => {
    popUp.style.visibility = "hidden"
    popUpContent.style.marginTop = "0px"
    document.body.style.overflowY = "auto"
    popUpContent.style.opacity = "0"

}

document.addEventListener('click', (e) => {
    if (e.target.className === "popUp-over") {
        popUp.style.visibility = "hidden"
        popUpContent.style.marginTop = "0px"
        popUpContent.style.opacity = "0"
        document.body.style.overflowY = "auto"
    }
})


// media filter
let btn = document.querySelectorAll('#filter-btn');

btn.forEach(i => {
    i.addEventListener('click', () => {
        removeActive()
        i.classList.add('active')
    })
})

const removeActive = () => {
    btn.forEach(item => {
        item.classList.remove('active')
    })
}


