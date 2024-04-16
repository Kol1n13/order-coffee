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
