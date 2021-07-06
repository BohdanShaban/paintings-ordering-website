
const burgerMenu = ( burgBtnSel, menuSel ) => {
    console.log("burgerMenu.js Connected...");

    const burgerBtn = document.querySelector(burgBtnSel),
          burgMenu  = document.querySelector(menuSel);
    //
    burgMenu.style.display = 'none';
    
    
    burgerBtn.addEventListener( 'click', () => {
        if( burgMenu.style.display == 'none' && window.screen.availWidth < 993 ) { // !!! window.screen.availWidth
            burgMenu.style.display = 'block'; 
        } else {
            burgMenu.style.display = 'none'; 
        }
    })

    // !!! IF TABLET WAS RESIZED
    window.addEventListener( 'resize', () => {
        if(window.screen.availWidth > 992) { burgMenu.style.display = 'none'; }
    })
}

export default burgerMenu;