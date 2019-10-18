const weightInput = document.querySelector('#weightInput');
const output = document.querySelector('#output');
const grams = document.querySelector('#gramsOutput');
const kilograms = document.querySelector('#kgOutput');
const ounces = document.querySelector('#ozOutput');
const weightInfo = document.querySelector('#weightInfo');

const messageForm = document.querySelector('#messageForm');
const nameInput = document.querySelector('#name');
const message = document.querySelector('#message');

output.style.visibility = 'hidden';
weightInput.addEventListener('input', convert);


function convert (e){

    let weightInput = e.target.value;
    if (weightInput >= 0) {
        output.style.visibility = 'visible';
        grams.innerHTML = weightInput / 0.0022046;

        kilograms.innerHTML = weightInput / 2.2046;

        ounces.innerHTML = weightInput * 16;
        weightInfo.style.visibility = 'hidden';
    }
    else {
        weightInfo.classList.add('error');
        weightInfo.innerHTML = 'Wrong Input'
        output.style.visibility = 'hidden';
        weightInfo.style.visibility = visible;
    }
}

messageForm.addEventListener('submit', quote);

function quote(e) {
    e.preventDefault();
    if (nameInput.value === ''){
        message.classList.add('error');
        message.innerHTML = 'Please Fill The Field';
        setTimeout(() => message.remove(), 5000);
    }
    else {
        message.classList.add('good');
        message.innerHTML = `Thanks You ${nameInput.value} For Your Time`;
    }

    nameInput.value = '';
}


