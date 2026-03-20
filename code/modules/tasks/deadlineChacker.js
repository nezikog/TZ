'use strict';

import { updateTaskStatus } from './taskStatus.js';

export const startDeadlineChecker = () => {
    setInterval(() => {
        const tasks = document.querySelectorAll(".task");

        tasks.forEach(task => {
            const checkbox = task.querySelector('input[type="checkbox"]');

            if (checkbox.checked) return;

            updateTaskStatus(task, checkbox);
        });

    }, 60000); // раз в минуту
};