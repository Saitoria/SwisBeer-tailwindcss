const menuButton = document.querySelector('#menuButton');
const mobileMenu = document.querySelector('#mobileMenu');
const mainNav = document.querySelector('#mainNav');

menuButton.addEventListener('click', () => {
    if(mainNav.classList.contains('h-24'))
    {
        mainNav.classList.remove('h-24'); 
        mainNav.classList.add('h-48');
    }
    else
    {
        mainNav.classList.remove('h-48'); 
        mainNav.classList.add('h-24');
    }

    if(mobileMenu.classList.contains('hidden')){
        mobileMenu.classList.remove('hidden');
    }
    else{
        mobileMenu.classList.add('hidden');
    }

})

