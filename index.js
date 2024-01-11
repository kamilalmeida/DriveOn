const btnMobile = document.getElementById('btn-mobile');

console.log(btnMobile);

function toggleMenu() {
    const nav = document.querySelector('.nav');
    console.log(nav);
    nav.classList.toggle('active')

}

btnMobile.addEventListener('click', toggleMenu);
