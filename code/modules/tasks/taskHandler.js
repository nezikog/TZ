'use strict';
//Импорт
import {
    deleteTaskById,
    updateTaskStatusById,
    renderTasks
} from '../storage/localStorage.js';

//Функция для удаления задач
export const initTaskHandlers = (taskArea, createTaskFn, getCurrentFilter, applyFilter) => {

    taskArea.addEventListener("click", (e) => { 
        if (!e.target.classList.contains("delete")) return;

        const id = parseInt(e.target.dataset.id);

        deleteTaskById(id);

        renderTasks(taskArea, createTaskFn);
        applyFilter(getCurrentFilter());
    });
    //Обновление статусов с 'активно' на 'выполненно'
    taskArea.addEventListener("change", (e) => {
        if (!e.target.matches('input[type="checkbox"]')) return;

        const id = parseInt(e.target.dataset.id);

        updateTaskStatusById(id, e.target.checked);

        renderTasks(taskArea, createTaskFn);
        applyFilter(getCurrentFilter());
    });
};