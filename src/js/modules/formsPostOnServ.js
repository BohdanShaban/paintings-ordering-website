////////    FORMS  (L 5)     ///////////
import checkTxtInputs from '../modules/additional/checkTxtInputs';
import {postData} from './services/requests';

const formsPostOnServ = (  ) => {
    console.log("formsPostOnServ.js Connected...");

    const formsArr  = document.querySelectorAll('form'),
          inputsArr = document.querySelectorAll('input'), // Only For:  Clear Form Inputs
          upldPhotoInputs = document.querySelectorAll('[name="upload"]');
    //

    // ONLY CYRYLIC INPUT OR NUMBS
    //checkTxtInputs('[name="name"]');
    //checkTxtInputs('[name="message"]');

    const messages = {
        loading : 'Data is Loading...',
        success : 'Successfully Loaded !',
        error   : 'An Errrrror Ocured !!!!',

        spinnerGif : 'assets/img/spinner.gif',
        okImg      : 'assets/img/ok.png',
        failImg    : 'assets/img/fail.png'
    };
    const serverPathes = {
        designer: 'assets/designer.php',
        question: 'assets/question.php'
    };

    const clearAllInputs = () => {
        inputsArr.forEach( input => {
            input.value = ''; // Clear Form Inputs
        });
        upldPhotoInputs.forEach( inputTag => { 
            inputTag.previousElementSibling.textContent = 'Файл Не Выбран...';
        });
    }

    upldPhotoInputs.forEach( inputTag => {
        inputTag.addEventListener('input' , () => {
            const fileNameSplitedArr = inputTag.files[0].name.split('.');

            let dots;
            fileNameSplitedArr[0].length > 6 ? dots = '...' : dots = '.';

            const flileName = fileNameSplitedArr[0].substring(0,6) + dots + fileNameSplitedArr[1];
            inputTag.previousElementSibling.textContent = flileName;
        })
    })


    formsArr.forEach( form => {
        form.addEventListener( 'submit', (e) => {  // !!! 'submit'  —>  e.preventDefault();
            e.preventDefault();

            // MESSAGE EL <div> CREATION
            let messageDiv = document.createElement('div');
            messageDiv.classList.add('status');  // css class in main.css
            form.parentNode.appendChild(messageDiv);
            // Img
            let createdImg = document.createElement('img');
            createdImg.classList.add('animated', 'fadeInUp');
            messageDiv.appendChild(createdImg);
            createdImg.setAttribute('src', messages.spinnerGif);
            // div with Txt
            let textMessage = document.createElement('div');
            textMessage.textContent = messages.loading;
            messageDiv.appendChild(textMessage);

            // MAKE FORM INVIS & DISAPEAR
            form.classList.add('animated', 'fadeOutUp'); // Invisible BUT Exists
            setTimeout( () => {
                form.style.display = 'none';
            }, 400)

            // MAKE FormData OBJ
            const formData = new FormData(form);

            // SELECT END SERVER URL
            let apiPath;
            form.closest('.popup-design') || form.classList.contains('calc_form') ? 
                                            apiPath = serverPathes.designer : apiPath = serverPathes.question;

            // POST Data (FormData Obj) On Server
            postData(apiPath , formData)
            .then( res => {
                console.log(res);
                textMessage.textContent = messages.success;
                createdImg.setAttribute('src', messages.okImg)
            })
            .catch( () => { textMessage.textContent = messages.error; createdImg.setAttribute('src', messages.failImg); })
            .finally( () => {
                clearAllInputs();
                setTimeout( () => {
                    messageDiv.remove();
                    form.style.display = 'block';
                    form.classList.remove('fadeOutUp');
                    form.classList.add('fadeInUp');
                }, 3000);
            })
    
        })
    })

}

export default formsPostOnServ;