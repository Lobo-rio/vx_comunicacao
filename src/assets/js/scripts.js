document.querySelector(".menu-icons").addEventListener('click', closeMenu)

const menuLi = document.querySelectorAll("#mobile ul li")

for (item in menuLi) {
    menuLi[item].addEventListener('click', closeMenu)
}

function closeMenu() {
    document.querySelector("#mobile").classList.toggle('close')
}