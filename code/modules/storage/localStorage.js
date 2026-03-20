'use strict';

import { getDataForTask } from "../tasks/form.js";
import { createTask } from "../tasks/addTaskLogic.js";

export const saveTask = (container) => {
    const task = getDataForTask();
    if (!task) return;

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const idCount = tasks.length ? tasks[tasks.length - 1].id + 1 : 0;
    const taskData = { id: idCount, ...task };

    tasks.push(taskData);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    console.log("Задача сохранена:", taskData);

    document.getElementById("nameTask").value = "";
    document.getElementById("dateTask").value = "";

    renderTasks(container, null, createTask);
};


export const deleteTask = (index, container) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTasks(container, null, createTask);
};


export const renderTasks = (container, tasks = null, createTaskFn) => {
    const taskList = tasks || JSON.parse(localStorage.getItem("tasks")) || [];
    const html = taskList.map((task, index) => createTaskFn({ ...task, index })).join("");
    container.innerHTML = html;
};

export const updateTaskStatusInStorage = (taskId, checkboxChecked) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const taskIndex = tasks.findIndex(t => t.id === taskId);

    const currentStatuses = tasks[taskIndex].status;
    const updatedStatuses = updateTaskStatus(checkboxChecked, currentStatuses);

    tasks[taskIndex].status = updatedStatuses;
    localStorage.setItem("tasks", JSON.stringify(tasks));
};