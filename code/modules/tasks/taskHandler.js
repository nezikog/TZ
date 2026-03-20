'use strict';

import {
    deleteTaskById,
    updateTaskStatusById,
    renderTasks
} from '../storage/localStorage.js';

export const initTaskHandlers = (taskArea, createTaskFn, getCurrentFilter, applyFilter) => {

    // DELETE
    taskArea.addEventListener("click", (e) => {
        if (!e.target.classList.contains("delete")) return;

        const id = parseInt(e.target.dataset.id);

        deleteTaskById(id);

        renderTasks(taskArea, createTaskFn);
        applyFilter(getCurrentFilter());
    });

    // CHECKBOX
    taskArea.addEventListener("change", (e) => {
        if (!e.target.matches('input[type="checkbox"]')) return;

        const id = parseInt(e.target.dataset.id);

        updateTaskStatusById(id, e.target.checked);

        renderTasks(taskArea, createTaskFn);
        applyFilter(getCurrentFilter());
    });
};