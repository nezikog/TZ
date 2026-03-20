'use strict';

import { getDataForTask } from "../tasks/form.js";
import { createTask } from "../tasks/addTaskLogic.js";

export const saveTask = () => {
    const task = getDataForTask();
    if (!task) {
        return;
    }

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    console.log("Задача сохранена:", task);

    document.getElementById("nameTask").value = "";
    document.getElementById("dateTask").value = "";
};

export const deleteTask = (index) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1); // удаляем выбранную задачу
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks(); // обновляем отображение
};

export const renderTasks = (container, tasks = null, createTaskFn) => {
    const taskList = tasks || JSON.parse(localStorage.getItem("tasks")) || [];

    const html = taskList.map(task => createTaskFn(task)).join("");
    container.innerHTML = html;
};
