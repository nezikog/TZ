'use strict';

import { getTasks, saveTasks, renderTasks } from "../storage/localStorage.js";
import { createTask } from "../tasks/addTaskLogic.js";

export const deleteSuccessTasks = () => {
    // Получаем все задачи
    const tasks = getTasks();

    // Фильтруем: оставляем только те задачи, у которых нет "success" в статусе
    const filteredTasks = tasks.filter(task => !task.status.includes("success"));

    // Сохраняем обновленный список
    saveTasks(filteredTasks);

    // Перерисовываем задачи на странице
    const taskArea = document.querySelector(".tasks");
    renderTasks(taskArea, createTask);
};