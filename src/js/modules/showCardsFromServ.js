import {getResource} from './services/requests';

const showCardsFromServ = (trigBtnSelector , url , parentSelector) => {
    console.log("showCardsFromServ.js Connected...");

    const trigBtn = document.querySelector(trigBtnSelector);

    trigBtn.addEventListener( 'click' , () => {
        getResource(url)
            .then( ArrOfObjcts => {
                ArrOfObjcts.forEach( obj => {
                    const {src, title, link} = obj;
                    makeCards(src, title, link);
                })
            } )
            .catch(error => console.log(error));
        this.remove();
    })

    const makeCards = ( src, title, link) => {

        const mainDiv = document.createElement('div');
        mainDiv.classList.add( 'col-sm-3' , 'col-sm-offset-0' , 'col-xs-10' , 'col-xs-offset-1' );
        mainDiv.classList.add('animated', 'fadeInUp');

        mainDiv.innerHTML  = `<div class=styles-block> 
                                    <img src=${src} alt=${title}>
                                    <h4>${title}</h4>
                                    <a href="${link}">Подробнее</a>
                                </div>
        `;
        document.querySelector(parentSelector).appendChild(mainDiv);
    };

}

export default showCardsFromServ;