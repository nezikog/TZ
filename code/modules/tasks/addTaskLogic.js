'use strict';

export const createTask = ({ id, name, status = ["all", "active"], deadline }) => {
    const mainStatus = Array.isArray(status) ? status[1] || status[0] : status;
    const formName = name.charAt(0).toUpperCase() + name.slice(1);
    return `
    <div class="task ${status.join(' ')}" data-id="${id}" data-status="${status.join(',')}">
        <div class="info">
            <div class="text-block">
                <div class="checkbox-mark">
                    <input type="checkbox" class="task-checkbox" data-id="${id}" ${mainStatus === "success" ? "checked" : ""}>
                    <h1 class="task-name">${formName}</h1>
                    <img class="delete" data-id="${id}" src="../vendor/img/task/trash.svg" alt="Удалить">
                </div>
                <div class="deadline">
                    <img src="../vendor/img/task/alarm.svg">
                    <p>${deadline}</p>
                </div>
            </div>
        </div>
    </div>
    `;
};