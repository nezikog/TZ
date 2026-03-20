'use strict';
import {countOfFails} from "./failedTasksLogic.js";

export const getFailedTaskMessage = () =>{
    const fails = countOfFails();
    if(fails > 0){
        return `Просроченных задач: ${fails}`;
    }
    return 'Молодец! У тебя нет просроченных задач!';
}