
const accordionForQuests = ( blocksSel, headingsSel ) => {
    console.log("accordionForQuests.js Connected...");

    const blocks = document.querySelectorAll(blocksSel),
          btns = document.querySelectorAll(headingsSel);
    //

    const showBlock = (idx) => {

        if(idx || idx === 0) { // !!! 0 -> false
            // Hide All Blocks
            blocks.forEach( block => { 
                block.style.display = 'none';
                block.classList.remove('animated', 'fadeInUp');
            })
            // Show Certain Block
            blocks[idx].style.display = 'block';
            blocks[idx].classList.add('animated', 'fadeInUp');

        } else {
            // Hide All Blocks
            blocks.forEach( block => { 
                block.style.display = 'none';
                block.classList.remove('animated', 'fadeInUp');
            })
        }
    } 
    showBlock();
   

    btns.forEach( (heading, idx) => {

        heading.addEventListener('click' , () => {
            btns.forEach( heading => heading.classList.remove('active-style') ); // !!! in main.css

            heading.classList.add('active-style');
            showBlock(idx);
        })
    })


    // ALTERNATIVE OPTION

        // btns.forEach(btn => {
        //     btn.addEventListener('click', function() {
        //         this.classList.toggle('active-style');
        //         this.nextElementSibling.classList.toggle('active-content');

        //         if (this.classList.contains('active-style')) {
        //             this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
        //         } else {
        //             this.nextElementSibling.style.maxHeight = '0px';
        //         }
        //     });
        // });
        
    //
}

export default accordionForQuests;