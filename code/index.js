'use strict';
import { applyTheme, switcherTheme } from "./modules/switcher/switcherLogic.js";
import { loadTheme } from "./modules/switcher/saveSwitcherTheme.js";
// import {typesObj} from "./modules/types/typeLoadLogic.js";
import { deleteSuccessTasks } from "./modules/deleteSuccesTasks/delButtSuccesLogic.js";
import {createTask} from "./modules/tasks/addTaskLogic.js";
import {clearInputs, errorThrow, errorThrowBack } from "./modules/tasks/settingForTask.js";
import { Empty } from "./modules/tasks/empty.js";
import { getDataForTask } from "./modules/tasks/form.js";
import { saveTasks, renderTasks, addTask, getTasks  } from "./modules/storage/localStorage.js";
import { filterTasksByCurrentStatus } from "./modules/filter/filterTasks.js";
import { initTaskHandlers } from './modules/tasks/taskHandler.js';
import { enableTaskNameEditing } from "./modules/tasks/editTaskName.js";


const modalOverlay = document.getElementById('modalOverlay');
const addTaskBtn = document.getElementById('addTask');
const closeSettingsBtn = document.getElementById('closeSettings');
const saveBtn = document.getElementById('saveTask');
const taskArea = document.querySelector(".tasks");

const deleteSuccesTasksButton = document.getElementById("delSucces");

const filterAll = document.getElementById("all");
const filterActive = document.getElementById("active");
const filterSuccess = document.getElementById("success");


const resetButtonStyles = () => {
    filterAll.style.backgroundColor = "";
    filterActive.style.backgroundColor = "";
    filterSuccess.style.backgroundColor = "";
};


deleteSuccesTasksButton.addEventListener('click', () => deleteSuccessTasks());



let currentFilter = "all"; 

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



document.addEventListener("DOMContentLoaded", () => {
    renderTasks(taskArea, createTask);
    enableTaskNameEditing(taskArea);
    saveBtn.addEventListener("click", () => {
        const data = getDataForTask();

        if (!data) {
            errorThrow();
            return;
        }

        addTask({
            id: Date.now(),
            ...data,
            status: ["all", "active"]
        });

        renderTasks(taskArea, createTask);
    });

    enableTaskNameEditing(taskArea);
    clearInputs();
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
// deleteSuccesTasksButton.style.display = deleteSuccesLogic(data);

const switcher = document.querySelector('.switcher');
switcher.addEventListener('click', switcherTheme);