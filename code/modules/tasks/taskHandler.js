'use strict';

import { updateTaskStatus } from './taskStatus.js';
import { deleteTask } from '../storage/localStorage.js';
import { filterTasksByCurrentStatus } from '../filter/filterTasks.js';
import { updateTaskStatusInStorage } from '../storage/localStorage.js';
export const initTaskHandlers = (taskArea, ) => {

    
    taskArea.addEventListener("change", (e) => {
        if (!e.target.matches('input[type="checkbox"]')) return;

        const task = e.target.closest(".task");
        updateTaskStatus(task, e.target);
    });

    taskArea.addEventListener("click", (e) => {
        if (!e.target.classList.contains("delete")) return;

        const task = e.target.closest(".task");
        task.remove();

        deleteTask(e);
    });

    taskArea.addEventListener("change", (e) => {
    if (!e.target.matches('input[type="checkbox"]')) return;

    const taskElem = e.target.closest(".task");

    let currentStatuses = taskElem.dataset.status
        ? taskElem.dataset.status.split(",")
        : ["all", "active"];

        const updatedStatuses = updateTaskStatus(e.target.checked, currentStatuses);

        taskElem.dataset.status = updatedStatuses.join(",");

        taskElem.className = `task ${updatedStatuses.join(" ")}`;
});
};
export const initFilter = (taskArea, getCurrentFilter) =>{
    taskArea.addEventListener("change", (e) => {
        if (!e.target.matches('input[type="checkbox"]')) return;

        const taskElem = e.target.closest(".task");

        let currentStatuses = taskElem.dataset.status
            ? taskElem.dataset.status.split(",")
            : ["all", "active"];

        const updatedStatuses = updateTaskStatus(e.target.checked, currentStatuses);

        // обновляем DOM
        taskElem.dataset.status = updatedStatuses.join(",");
        taskElem.className = `task ${updatedStatuses.join(" ")}`;

        // обновляем localStorage
        const taskId = parseInt(e.target.dataset.id);
        updateTaskStatusInStorage(taskId, e.target.checked);

        // сразу применяем текущий фильтр
        filterTasksByCurrentStatus(getCurrentFilter());
    });}