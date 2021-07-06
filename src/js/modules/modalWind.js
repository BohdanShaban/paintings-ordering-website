////////    MODAL  WINDOWS  (L 3)     ///////////

const modalWind = () => {
    console.log("modalWind.js Connected...");

    // OPEN / CLOSE  Modal Wind
    const openModalWind = (modal) => {
        modal.style.display = 'block';
        document.body.classList.add('modal-open');  // BootStrap class
        //document.body.style.overflow = 'hidden';
    }
    const closeModalWind = (modal) => {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open'); // BootStrap class
        //document.body.style.overflow = '';
    }
    // SHOW IN 60 SECS
    const showModalByTime = ( modalSelector, time ) => {

        setTimeout(function() { // !!! Set TimeOut First
            let display;

            // IF SOME MODAL IS CURRENTLY OPEN
            document.querySelectorAll('[data-modal]').forEach( modal => {
                if (getComputedStyle(modal).display !== 'none') { display = "block"; }
            });

            if (!display) {
                openModalWind( document.querySelector( modalSelector) ) ;
            }
        }, time);
    }
    // SHOW GIFT POPUP MODAL IF ANY BUTTON WAS NOT PRESSED
    let btnPressed = false;
    const showGiftModal = ( selector ) => {

        window.addEventListener( 'scroll', () => {
            //let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
            if( !btnPressed & (window.pageYOffset + document.documentElement.clientHeight 
                >= document.documentElement.scrollHeight) ) {

                document.querySelector(selector).click(); // Gift Btn Triggered -> Gift Btn Destroyed
            }
        })
        
    }


    function bindModalWind( trigersSelector, modalSelector, closeSelector, destrClckedEl = false  ) {

        const openTrigs = document.querySelectorAll( trigersSelector),
              modal   = document.querySelector( modalSelector),
              closeTriger   = document.querySelector( closeSelector ),
              // CLOSE ALL MODAL WINDS
              allModal = document.querySelectorAll('[data-modal]');
        //
        
        openTrigs.forEach( triger => {
            triger.addEventListener( 'click' , (e) => {
                if (e.target ) {  e.preventDefault(); } // ???  e.preventDefault()

                // DESTROY PRESENT
                if ( destrClckedEl ) { triger.remove(); }
                
                btnPressed = true;

                // CLOSE ALL MODAL WINDS
                //allModal.forEach( window => { window.style.display = 'none'; })
                allModal.forEach( window => { closeModalWind(window)});

                openModalWind(modal);
            })
        })

        closeTriger.addEventListener( 'click' , (e) => {
            // ???
            if (e.target ) {  e.preventDefault(); } // ???  e.preventDefault()
            // CLOSE ALL MODAL WINDS
            //allModal.forEach( window => { window.style.display = 'none'; })
            allModal.forEach( window => { closeModalWind(window)});

            closeModalWind(modal);
        })

        // By Click Outside of Mod Win  ->  Close It
        modal.addEventListener( 'click' , (e) => {
            if (e.target === modal ) { 
                closeModalWind(modal); 
                // CLOSE ALL MODAL WINDS
                //allModal.forEach( window => { window.style.display = 'none'; }) 
                allModal.forEach( window => { closeModalWind(window)});
            }
        })
        
    }

    bindModalWind( '.button-design',  '.popup-design',  '.popup-design .popup-close' ); // !!! - NOT _
    bindModalWind( '.button-consultation',  '.popup-consultation',  '.popup-consultation .popup-close' );
    //showModalByTime('.popup-consultation', 60000);

    // PRESENT
    bindModalWind( '.fixed-gift',  '.popup-gift',  '.popup-gift .popup-close', true ); 
    // SHOW GIFT POPUP MODAL IF ANY BUTTON WAS NOT PRESSED
    showGiftModal('.fixed-gift');
}

export default modalWind;