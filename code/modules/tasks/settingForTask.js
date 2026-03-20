'use strict';
const nameInput = document.getElementById("nameTask");
const dateInput = document.getElementById("dateTask");
const modalOverlay = document.getElementById('modalOverlay');

export const clearInputs = () =>{
    nameInput.value = "";
    dateInput.value = "";
    modalOverlay.style.display = 'none';
    errorThrowBack();
}

export const errorThrow = () =>{
    nameInput.classList.add("error");
    dateInput.classList.add("error");
    return;
}

export const errorThrowBack = () =>{
    nameInput.classList.remove("error");
    dateInput.classList.remove("error");
    return;
}



// export const 