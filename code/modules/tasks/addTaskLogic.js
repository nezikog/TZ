'use strict';

export const createTask = ({ id, name, status, deadline }) => {
    const mainStatus = Array.isArray(status) ? status[1] || status[0] : status;
    return `
    <div class="task" data-id="${id}" data-status="${status.join(',')}">
        <div class="info">
            <label class="checkbox-mark">
                <input type="checkbox" class="task-checkbox" data-id="${id}" ${mainStatus === "success" ? "checked" : ""}>
                <span></span>
            </label>
            <h1>${name}</h1>
            <img class="delete" data-id="${id}" src="../vendor/img/task/trash.svg" alt="">
        </div>
        <div class="deadline">
            <p>${deadline}</p>
        </div>
    </div>
    `;
};