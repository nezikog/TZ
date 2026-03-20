'use strict';

const nameInput = document.getElementById("nameTask");
const dateInput = document.getElementById("dateTask");
//Тут логика получения данных
export const getDataForTask = () => {
    const name = nameInput.value.trim();
    const deadline = dateInput.value;

    if (!name || !deadline) return null;

    return {
        name,
        status: ["all", "active"],  //по умолчанию
        deadline
    };
};