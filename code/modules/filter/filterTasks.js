'use strict';

export const  filterTasksByCurrentStatus = (currentFilter) => {
    const allTasksElements = document.querySelectorAll(".task");
    
    allTasksElements.forEach(task => {
        const taskStatuses = task.dataset.status.split(","); 
        
        if (currentFilter === "all" || taskStatuses.includes(currentFilter)) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
}