'use strict';
//Функция
export const updateTaskStatus = (checkboxChecked, currentStatuses) => {
    //Проверка на пустоту
    let statuses = Array.isArray(currentStatuses) ? [...currentStatuses] : ["all", "active"];

    if (checkboxChecked) { //логика статусов
        const index = statuses.indexOf("active");
        if (index !== -1){ 
            statuses[index] = "success";

        }
    } else {
        const index = statuses.indexOf("success");
        if (index !== -1) statuses[index] = "active";
    }

    if (!statuses.includes("all")) statuses.unshift("all");

    return statuses;
};