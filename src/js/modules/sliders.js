////////    SLIDERS  (L 4)     ///////////

const sliders = ( slidesSel, direction, nextBtnSel, prevBtnSel ) => {  // 
    console.log("sliders.js Connected...");

    const slidesArr = document.querySelectorAll(slidesSel);
    let slideIdx = 1; // !!!  ->  slidesArr[slideIdx-1] ALWAYS WHEN WORK WITH ARR !!!
    let paused = false; // !!! let only & false ?

    const showSlide = (idx) => {

        // BOUNDARIES
        if( idx > slidesArr.length) { slideIdx = 1 }
        if( idx < 1) { slideIdx = slidesArr.length }

        slidesArr.forEach( slide => {
            slide.classList.add('animated'); // animate.css library
            slide.style.display = 'none';    
        })

        slidesArr[slideIdx-1].style.display = 'block'; 
    }
    showSlide(slideIdx);

    // SOME SLIDER DON'T HAVE BTNS 
    try {
        const nextBtn = document.querySelector(nextBtnSel);
        const prevBtn = document.querySelector(prevBtnSel);

        nextBtn.addEventListener( 'click', () => {
            showSlide(++slideIdx);
            slidesArr[slideIdx - 1].classList.remove('slideInRight'); // animate.css
            slidesArr[slideIdx - 1].classList.add('slideInLeft');
        })
        prevBtn.addEventListener( 'click', () => {
            showSlide(--slideIdx);
            slidesArr[slideIdx - 1].classList.remove('slideInLeft'); // animate.css
            slidesArr[slideIdx - 1].classList.add('slideInRight');
        })

    } catch(e) {  }   // alert('ERROR !!!');  throw new Error(e);

    // AUTOMATICALY SWITHC SLIDERS 
    const activateAnimation = (time) => {

        if (direction === 'vertical') {
            paused = setInterval( () => {
                showSlide(++slideIdx);
                slidesArr[slideIdx - 1].classList.add('slideInDown'); // animate.css
            }, time)
        }
        if (direction === 'horizontal') {    
            paused = setInterval( () => {
                showSlide(++slideIdx);
                slidesArr[slideIdx - 1].classList.remove('slideInRight'); // animate.css
                slidesArr[slideIdx - 1].classList.add('slideInLeft');
            }, time)
        }
    }
    activateAnimation(3000);

    // STOP SLIDES SWITCHING IF(mouseenter) & LAUNCH SWITCHING IF(mouseleave)
    slidesArr[0].parentNode.addEventListener('mouseenter', () => {  // !!! slidesArr[0].parentNode.
        clearInterval(paused);
    });
    slidesArr[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation(2500);
    }); 

}

export default sliders;