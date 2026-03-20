'use strict';
import { applyTheme, switcherTheme } from "./modules/switcher/switcherLogic.js";
import { loadTheme } from "./modules/switcher/saveSwitcherTheme.js";
import {typesObj} from "./modules/types/typeLoadLogic.js";
// import { deleteSuccesLogic } from "./modules/deleteSuccesTasks/delButtSuccesLogic.js";
import {createTask} from "./modules/tasks/addTaskLogic.js";
import {clearInputs, errorThrow, errorThrowBack } from "./modules/tasks/settingForTask.js";
import { Empty } from "./modules/tasks/empty.js";
import { initTaskHandlers } from './modules/tasks/taskHandler.js';
import { getDataForTask } from "./modules/tasks/form.js";
import { saveTask, renderTasks } from "./modules/storage/localStorage.js";

const modalOverlay = document.getElementById('modalOverlay');
const addTaskBtn = document.getElementById('addTask');
const closeSettingsBtn = document.getElementById('closeSettings');
const saveBtn = document.getElementById('saveTask');
const nameInput = document.getElementById("nameTask");
const dateInput = document.getElementById("dateTask");
const taskArea = document.querySelector(".tasks");
const butt = document.getElementById("addTask");

document.addEventListener("DOMContentLoaded", () => {
    
    initTaskHandlers(taskArea);
    renderTasks(taskArea, null, createTask);
    saveBtn.addEventListener("click", () => {
        const data = getDataForTask();
        if(!data){
            errorThrow();
            return;
        }

        const taskData = {
            ...data
        }

        const task = createTask(taskData);
        taskArea.innerHTML += task;
        saveTask();
        clearInputs();
    });
});

// saveBtn.addEventListener("click", () => {
//     let idCount = 0;
//     const data = getDataForTask();
//     if(!data){
//         errorThrow();
//         return;
//     }
//     const taskData = {
//     id: idCount++,
//     ...data
//     };
//     const task = createTask(taskData);
//     taskArea.innerHTML += task;
    
//     clearInputs();
// })


//SETTINGS FOR TASK
addTaskBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
});

closeSettingsBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.style.display = 'none';
        errorThrowBack();
    }
});







//SETTINGS FOR TASK


// butt.addEventListener("click", () =>{
//     const taskData = getTaskData();
//     if(!taskData) return;
//     taskArea.innerHTML += createTask(taskData);
//     console.log(taskData);
// });

// if(1 > 0){
//     taskArea.innerHTML += Empty();
// }
//КОГДА БУДУ СОХРАНЯТЬ ЗАДАЧИ В LOCALSTORAGE СМОТРЕТЬ ЕСТЬ ЛИ ТАМ ЗАДАЧИ ЕСЛИ НЕТ ТО ЧТОБЫ ВКЛЮЧАЛАСЬ ЭТА ЧАСТЬ КОДА

// toggleTypes(); ДЛЯ ФИЛЬТРА

// document.addEventListener('click', () => {
//     console.log("type:", getCurrentType());
// }); ДЛЯ ФИЛЬТРА

applyTheme(loadTheme());

// const deleteSuccesTasksButton = document.getElementById("delSucces");
// deleteSuccesTasksButton.style.display = deleteSuccesLogic();

const switcher = document.querySelector('.switcher');
switcher.addEventListener('click', switcherTheme);