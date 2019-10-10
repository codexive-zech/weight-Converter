const weightInput = document.querySelector('#weightInput');
const output = document.querySelector('#output');
const grams = document.querySelector('#gramsOutput');
const kilograms = document.querySelector('#kgOutput');
const ounces = document.querySelector('#ozOutput');

const messageForm = document.querySelector('#messageForm');
const nameInput = document.querySelector('#name');
const message = document.querySelector('#message');

output.style.visibility = 'hidden';
weightInput.addEventListener('input', convert);

function convert (e){
    output.style.visibility = 'visible';
    let weightInput = e.target.value;
    
    grams.innerHTML = weightInput / 0.0022046;

    kilograms.innerHTML = weightInput / 2.2046;

    ounces.innerHTML = weightInput * 16;
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
        setTimeout(() => message.remove(), 5000);
    }

    nameInput.value = '';
    
}
