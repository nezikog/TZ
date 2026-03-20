'use strict';

import { getTasks, saveTasks, renderTasks } from "../storage/localStorage.js";
import { createTask } from "../tasks/addTaskLogic.js";
//Удаление выполненных задач
export const deleteSuccessTasks = () => {
    const tasks = getTasks();//Получение
    //Фильтр
    const filteredTasks = tasks.filter(task => !task.status.includes("success"));

    saveTasks(filteredTasks);//сохранение

    const taskArea = document.querySelector(".tasks");
    renderTasks(taskArea, createTask); //ререндер
};