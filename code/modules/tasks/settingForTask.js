'use strict';
const nameInput = document.getElementById("nameTask");
const dateInput = document.getElementById("dateTask");
const modalOverlay = document.getElementById('modalOverlay');

//Тут очищаем инпуты и закрываем модальное окно
export const clearInputs = () =>{
    nameInput.value = "";
    dateInput.value = "";
    modalOverlay.style.display = 'none';
    errorThrowBack();
}

//Тут мы сообщаем об ошибке выделениями(см.css)
export const errorThrow = () =>{
    nameInput.classList.add("error");
    dateInput.classList.add("error");
    return;
}
//Тут мы откатываем ошибку
export const errorThrowBack = () =>{
    nameInput.classList.remove("error");
    dateInput.classList.remove("error");
    return;
}