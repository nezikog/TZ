'use strict';
import { getTasks, saveTasks, renderTasks } from "../storage/localStorage.js";

export const enableTaskNameEditing = (taskArea) => {
    taskArea.addEventListener("dblclick", (e) => {
        const target = e.target;
        if (!target.classList.contains("task-name")) return;
        e.preventDefault();

        const taskElement = target.closest(".task");
        if (!taskElement) return;
        const taskId = Number(taskElement.dataset.id);
        const originalText = target.textContent;

        const input = document.createElement("input");
        input.type = "text";
        input.classList.add = "rename-input";
        input.value = originalText;
        input.className = "task-edit-input";
        input.style.width = `${target.offsetWidth}px`;
        target.replaceWith(input);
        input.focus();

        let saved = false; 

        const saveName = () => {
            if (saved) return;
            saved = true;

            const newName = input.value.trim() || originalText;

            const tasks = getTasks();
            const task = tasks.find(t => t.id === taskId);
            if (task) {
                task.name = newName;
                saveTasks(tasks);
            }

            if (input.parentNode) {
                const nameH1 = document.createElement("h1");
                nameH1.className = "task-name";
                nameH1.textContent = newName;
                input.replaceWith(nameH1);
            }
        };


        input.addEventListener("keydown", (event) => {
            if (event.key === "Enter") saveName();
        });

        input.addEventListener("blur", saveName);
    });
};