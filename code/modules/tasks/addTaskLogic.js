'use strict';

export const createTask = ({name, status, deadline}) =>{
    const mainStatus = Array.isArray(status) ? status[1] || status[0] : status;
    return `
    <div class="task ${status.join(" ")}"data-status="${status.join(",")}">
        <div class="info">
            <div class="text-block">
                <div class="base-info">
                    <label class="checkbox-mark">
                        <input type="checkbox" ${mainStatus === "success" ? "checked" : ""}>
                        <span></span>
                    </label>
                    <h1>${name}</h1>
                    <img class="delete" id="deleteTaskButton" src="../vendor/img/task/trash.svg" alt="">
                </div>

                <div class="dedline">
                    <img src="../vendor/img/task/alarm.svg" alt="">
                    <p>${deadline}</p>
                </div>
            </div>
        </div>
    </div>
    `
}

{/* <p class="status">• ${status}</p> добавить тогда когда либо выполненно, либо просроченно*/ }