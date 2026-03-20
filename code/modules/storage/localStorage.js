'use strict';
//Сохраняем задачи
export const saveTasks = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};
//Добавляем задачи
export const addTask = (taskData) => {
    const tasks = getTasks();
    tasks.push(taskData);
    saveTasks(tasks); 
};
//Удаляем задачи
export const deleteTaskById = (id) => {
    const tasks = getTasks();
    const updated = tasks.filter(t => t.id !== id);

    saveTasks(updated);
};
//Обновление статуса
export const updateTaskStatusById = (id, checked) => {
    const tasks = getTasks();

    const task = tasks.find(t => t.id === id);
    if (!task) return;

    task.status = checked
        ? ["all", "success"]
        : ["all", "active"];

    saveTasks(tasks); 
};
//Ререндер
export const renderTasks = (container, createTaskFn) => {
    const tasks = getTasks();

    const html = tasks
        .map(task => createTaskFn(task))
        .join("");

    container.innerHTML = html;
};
//Получение
export const getTasks = () => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
};