const mobileMenuBtn = document.getElementById("mobile-menu-btn")
mobileMenuBtn.addEventListener("click",function(){
    let mobileMenu = document.getElementById("mobile-menu")

    let menuIcon = document.getElementById("menu-icon")

    if(mobileMenu.style.height !== '90%' || mobileMenu.style.top !== '10%'){
        mobileMenu.style.height = '90%'
        mobileMenu.style.top = '10%'
        mobileMenu.style.paddingTop = '20px'
        menuIcon.className = menuIcon.className.replace("fa-solid fa-bars","fa-solid fa-xmark")

    }else{
        mobileMenu.style.height = '0%'
        mobileMenu.style.top = '0%'
        menuIcon.className = menuIcon.className.replace("fa-solid fa-xmark","fa-solid fa-bars")
    }
})