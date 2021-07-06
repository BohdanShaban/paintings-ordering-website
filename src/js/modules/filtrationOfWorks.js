
const filtrationOfWorks = ( ) => { // Imperative Style (with no Args)
    console.log("filtrationOfWorks.js Connected...");

    // MENU VARS :
        const menu = document.querySelector('.portfolio-menu'),
            allBtnsArr = document.querySelectorAll('.portfolio-menu > li'),
            allBtn = menu.querySelector('.all'),
            loversBtn = menu.querySelector('.lovers'),
            chefBtn = menu.querySelector('.chef'),
            girlBtn = menu.querySelector('.girl'),
            guyBtn  = menu.querySelector('.guy'),
            grandyBtn = menu.querySelector('.grandmother'),
            grandFathBtn = menu.querySelector('.granddad');
    //

    // PORTFOLIOS VARS :
        const wrapper = document.querySelector('.portfolio-wrapper'),
            allDivs = wrapper.querySelectorAll('.all'),
            loversDivs = wrapper.querySelectorAll('.lovers'),
            chefDivs = wrapper.querySelectorAll('.chef'),
            girlDivs = wrapper.querySelectorAll('.girl'),
            guyDivs  = wrapper.querySelectorAll('.guy'),
            grandyDivs = wrapper.querySelectorAll('.grandmother'),
            grandFathDivs = wrapper.querySelectorAll('.granddad'),
            notExistCurrently = document.querySelector('.portfolio-no');
    //
    //console.dir(`allBtnsArr: ${allBtnsArr}`);


    const filterElms = (elmsArr) => {

        // Hide All
        allDivs.forEach( el => {
            el.style.display = 'none';
            el.classList.remove('animated', 'fadeInUp');
        });
        notExistCurrently.style.display = 'none';
        notExistCurrently.classList.remove('animated', 'fadeInUp');

        // Show Certain
        if(elmsArr) {
            elmsArr.forEach( el => {
                el.style.display = 'block';
                el.classList.add('animated', 'fadeInUp');
            })
        } else {
            notExistCurrently.style.display = 'block';
            notExistCurrently.classList.add('animated', 'fadeInUp');
        }
        
    }
    // EVENT LISTENERS
    allBtn.addEventListener( 'click' , () => { filterElms(allDivs) } );
    loversBtn.addEventListener( 'click' , () => { filterElms(loversDivs) } );
    chefBtn.addEventListener( 'click' , () => { filterElms(chefDivs) } );
    girlBtn.addEventListener( 'click' , () => { filterElms(girlDivs) } );
    guyBtn.addEventListener( 'click' , () => { filterElms(guyDivs) } );

    // Not Exist Currently
    grandyBtn.addEventListener( 'click' , () => { filterElms() } );
    grandFathBtn.addEventListener( 'click' , () => { filterElms() } );

    // MENU ELMS CLICK  ->  Change Active
    menu.addEventListener( 'click', (e) => {
        const target = e.target;

        if(target && target.tagName === 'LI') {

            allBtnsArr.forEach( menuItem => { menuItem.classList.remove('active'); })
            target.classList.add('active');
        }
    })
}

export default filtrationOfWorks;