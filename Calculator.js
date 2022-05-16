let screen = document.getElementById('output_screen');
let screen2 = document.getElementById('output_screen2');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);

        if(screenValue=="0"){
            screenValue='';
        }

        if (buttonText == '*') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText=='/'){
            buttonText='/'
            screenValue+=buttonText;
           screen.value= screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "0";
            screen.value='';
            screen2.value = screenValue;
            screen.style.animation="";
            screen2.style.animation ="";
        }
        else if (buttonText == '=') {
            screen2.value = eval(screenValue);
            screen.style.animation="small 0.2s ease-in-out";
            screen2.style.animation ="big 0.2s ease-in-out";
            screen2.style.animationFillMode="forwards";
            screen.style.animationFillMode="forwards";
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

