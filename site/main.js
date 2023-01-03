var menu= document.querySelector('nav ul');
var menuBar= document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click', function(){

    if (iconMenu.getAttribute("src") == 'images/hamburger.png'){
        iconMenu.setAttribute("src", "images/close.png");
    }else{
        iconMenu.setAttribute("src", "images/hamburger.png");
    }
    menu.classList.toggle('active');
});
