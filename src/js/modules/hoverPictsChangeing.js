
const hoverPictsChangeing = ( picsSel) => {
    console.log("hoverPictsChangeing.js Connected...");

    const picsDivs = document.querySelectorAll(picsSel);


    const showPicture = (divBlock) => {
        const imgTag = divBlock.querySelector('img');

        // assets/img/sizes-1.png  =>  assets/img/sizes-1-1.png
        imgTag.src = imgTag.src.slice( 0, -4 ) + '-1.png';

        const allParagrapTags = divBlock.querySelectorAll('p:not(.sizes-hit)'); // !!!
        allParagrapTags.forEach( p => { p.style.display = 'none' });
    }

    const hidePicture = (divBlock) => {
        const imgTag = divBlock.querySelector('img');

        // assets/img/sizes-1-1.png  =>  assets/img/sizes-1.png
        imgTag.src = imgTag.src.slice( 0, -6 ) + '.png';

        const allParagrapTags = divBlock.querySelectorAll('p:not(.sizes-hit)'); // !!! 
        allParagrapTags.forEach( p => { p.style.display = 'block' });
    }

    // EVENTS
    picsDivs.forEach( (picture) => {

        picture.addEventListener( 'mouseover', () => { showPicture(picture) });
        picture.addEventListener( 'mouseout', () => { hidePicture(picture) });
    })
}

export default hoverPictsChangeing;