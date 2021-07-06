import modalWind from './modules/modalWind';
import sliders from './modules/sliders';
import formsPostOnServ from './modules/formsPostOnServ';
import phoneMask from './modules/phoneMask';
import showMoreCards from './modules/showMoreCards';
import showCardsFromServ from './modules/showCardsFromServ';
import calculator from './modules/calculator';
import filtrationOfWorks from './modules/filtrationOfWorks';
import hoverPictsChangeing from './modules/hoverPictsChangeing';
import accordionForQuests from './modules/accordionForQuests';
import burgerMenu from './modules/burgerMenu';
import scrollingSlow from './modules/scrollingSlow';


document.addEventListener( 'DOMContentLoaded' , () => {
    console.log("main.js Connected...");
    'use strict';

    // MODULE FUNCTIONS CALLING
    modalWind();

    sliders('.feedback-slider-item', 'horizontal', '.main-next-btn', '.main-prev-btn'); 
    sliders('.main-slider-item', 'vertical');

    formsPostOnServ();
    phoneMask('[name="phone"]');
    showMoreCards('.button-styles' , '.styles-2');
    //showCardsFromServ('.button-styles' , 'http://localhost:3000/styles', '[data-cards]'); // <!-- COMMENT THIS SECTION -->
    calculator('#size' , '#material' , '#options', '.promocode', '.calc-price');
    filtrationOfWorks();
    hoverPictsChangeing( '.sizes-block');
    accordionForQuests('.accordion-block' , '.accordion-heading');
    burgerMenu('.burger', '.burger-menu');

    scrollingSlow('.pageup');

}) // document.addEventListener( 'DOMContentLoaded' END