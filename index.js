const coffeeForm = document.getElementById('coffeeForm');
const modal = document.getElementById('modal');

function displayModal(numberOfDrinks) {
    const overlay = document.getElementById('overlay');
    overlay.style.visibility = 'visible';
    modal.style.visibility = 'visible';

    const modalContent = document.querySelector('.modal-content');
    modalContent.textContent = `Вы заказали ${numberOfDrinks} ${pluralizeDrinks(numberOfDrinks)}`;
}

function pluralizeDrinks(number) {
    function pluralize(number, one, few, many) {
        number = Math.abs(number);
        number %= 100;
        if (number >= 5 && number <= 20) {
            return many;
        }
        number %= 10;
        if (number === 1) {
            return one;
        }
        if (number >= 2 && number <= 4) {
            return few;
        }
        return many;
    }

    if (number === 1) {
        return 'напиток';
    } else {
        return pluralize(number, 'напиток', 'напитка', 'напитков');
    }
}

function submitForm() {

    const numberOfDrinks = document.querySelectorAll('.beverage').length;
    displayModal(numberOfDrinks);

    return false;
}


function func1(){
    const overlay = document.getElementById('overlay');
    overlay.style.visibility = 'hidden';
    modal.style.visibility = 'hidden';
    coffeeForm.submit();
}


const submitButton = document.querySelector('.submit-button');
submitButton.onclick = submitForm;


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

function destroy(btn){
    const count = document.querySelectorAll('.beverage').length;
    if (count > 1){
        btn.closest('.beverage').remove();
    }
    return;
}

let cloneButton = document.getElementById('cloneButton');
let exampleOrder = document.querySelector('.beverage').cloneNode(true);
let orderCounter = 2;
cloneButton.addEventListener('click', () => newForm());
