const coffeeForm = document.getElementById('coffeeForm');
const modal = document.getElementById('modal');

function displayModal() {
    modal.style.visibility = 'visible';
}

function submitForm() {
    // Пусть здесь отправка данных на сервер, не хочу чтобы страница перезагружалась

    displayModal();

    return false;
}

function func1(){
    modal.style.visibility = 'hidden';
}

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', submitForm);
function newForm(){
    let form = Array.from(document.querySelectorAll('.beverage')).pop();
    let new_form = exampleOrder.cloneNode(true);
    let orderNumber = new_form.querySelector('.beverage-count');
    orderNumber.textContent = `Напиток №${orderCounter}`;
    let radioTroubleMaker = new_form.querySelectorAll('.field')[1];
    for (let elem of radioTroubleMaker.querySelectorAll('.checkbox-field')){
        let milkChoise = elem.querySelector('input');
        milkChoise.name = `milk${orderCounter}`
    }
    orderCounter++;
    form.after(new_form);
}

let cloneButton = document.getElementById('cloneButton');
let exampleOrder = document.querySelector('.beverage').cloneNode(true);
let orderCounter = 2;
cloneButton.addEventListener('click', () => newForm());
