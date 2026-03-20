'use strict';
// Импортируем модули
import { applyTheme, switcherTheme } from "./modules/switcher/switcherLogic.js";
import { loadTheme } from "./modules/switcher/saveSwitcherTheme.js";
import { deleteSuccessTasks } from "./modules/deleteSuccesTasks/delButtSuccesLogic.js";
import {createTask} from "./modules/tasks/addTaskLogic.js";
import {clearInputs, errorThrow} from "./modules/tasks/settingForTask.js";
import { getDataForTask } from "./modules/tasks/form.js";
import { renderTasks, addTask  } from "./modules/storage/localStorage.js";
import { filterTasksByCurrentStatus } from "./modules/filter/filterTasks.js";
import { initTaskHandlers } from './modules/tasks/taskHandler.js';
import { enableTaskNameEditing } from "./modules/tasks/editTaskName.js";
// Импортируем модули

//Создаем константы/переменные
const modalOverlay = document.getElementById('modalOverlay');
const addTaskBtn = document.getElementById('addTask');
const closeSettingsBtn = document.getElementById('closeSettings');
const saveBtn = document.getElementById('saveTask');
const taskArea = document.querySelector(".tasks");

const deleteSuccesTasksButton = document.getElementById("delSucces");

const filterAll = document.getElementById("all");
const filterActive = document.getElementById("active");
const filterSuccess = document.getElementById("success");

const switcher = document.querySelector('.switcher');

let currentFilter = "all"; 

const resetButtonStyles = () => {
    filterAll.style.backgroundColor = "";
    filterActive.style.backgroundColor = "";
    filterSuccess.style.backgroundColor = "";
};
//Создаем константы/переменные



//Переключатель темы приложения
switcher.addEventListener('click', switcherTheme);
applyTheme(loadTheme());//Подгрузили в localStorage

//Вариации закрытия модального окна
addTaskBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
});

closeSettingsBtn.addEventListener('click', () => {
    clearInputs();
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        clearInputs();
    }
});
//Вариации закрытия модального окна

deleteSuccesTasksButton.addEventListener('click', () => deleteSuccessTasks());//Для удаления выполненных задач

//Тут считываем подгрузку страницы и ререндерим наши задачи, чтобы подгрузить сохраненные в localStorage
document.addEventListener("DOMContentLoaded", () => {
    renderTasks(taskArea, createTask);
    enableTaskNameEditing(taskArea);//Для редактирования db кликом
    saveBtn.addEventListener("click", () => {
        const data = getDataForTask(); //Получаем данные с инуптов
        if (!data) { //Валидатор
            errorThrow();
            return;
        }

        addTask({ //настройка
            id: Date.now(),
            ...data,
            status: ["all", "active"]
        });

        renderTasks(taskArea, createTask); // Ререндер
        clearInputs(); //Скидываем нарушения и данные в инпутах
    });

    enableTaskNameEditing(taskArea); //Для редактирования db кликом
    
});

initTaskHandlers(
    taskArea,
    createTask,
    () => currentFilter,
    filterTasksByCurrentStatus
);

filterAll.addEventListener("click", () => {
    currentFilter = "all";
    resetButtonStyles();
    filterAll.style.backgroundColor = "rgb(124, 154, 242)";
    filterTasksByCurrentStatus(currentFilter);
});

filterActive.addEventListener("click", () => {
    currentFilter = "active";
    resetButtonStyles();
    filterActive.style.backgroundColor = "rgb(124, 154, 242)";
    filterTasksByCurrentStatus(currentFilter);
});

filterSuccess.addEventListener("click", () => {
    currentFilter = "success";
    resetButtonStyles();
    filterSuccess.style.backgroundColor = "rgb(124, 154, 242)";
    filterTasksByCurrentStatus(currentFilter);
});








//SETTINGS FOR TASK








//SETTINGS FOR TASK






