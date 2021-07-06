
const calculator = ( sizeSel, materialSel, addOptionsSel, promoSelect,  resultSel ) => {
    console.log("calculator.js Connected...");

    const sizeEl = document.querySelector(sizeSel),
          materialEl = document.querySelector(materialSel),
          addOptsEl = document.querySelector(addOptionsSel),
          promoSale = document.querySelector(promoSelect),
          resultEl = document.querySelector(resultSel);
    //
    
    const makeCalculus = () => {
        let sum = Math.round( (+sizeEl.value) * (+materialEl.value) + (+addOptsEl.value) );

        if( sizeEl.value === '' || materialEl.value === '' ) {
            resultEl.textContent = 'Input Size and Material blocks';
        } else if ( promoSale.value === 'IWANTPOPART') {
            
            resultEl.textContent = Math.round(sum * 0.7);
        } else {
            
            resultEl.textContent = sum;
        }
    }
    sizeEl.addEventListener    ( 'change' , makeCalculus ); // !!! 'change' -> <option></option>
    materialEl.addEventListener( 'change' , makeCalculus );
    addOptsEl.addEventListener ( 'change' , makeCalculus );
    promoSale.addEventListener ( 'input'  , makeCalculus ); // !!! 'input' -> <input></input>
}

export default calculator;