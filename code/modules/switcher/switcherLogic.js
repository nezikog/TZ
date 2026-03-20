'use strict';
import { saveTheme, loadTheme } from "./saveSwitcherTheme.js";

const body = document.body;
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");

//Логика распределения тем + анимации(см.css)

export const applyTheme = (theme) => {
    if(theme === "dark"){
        body.classList.add('dark');
        body.classList.remove('light');

        moon.className = 'img-2';
        sun.className = 'img-1';
    }else{
        body.classList.add('light');
        body.classList.remove('dark');

        moon.className = 'img-1';
        sun.className = 'img-2';
    }

    saveTheme(theme);
}
//Обыкновенный свитчер + подгружаем тему, которую пользователь ставил в последний раз
export const switcherTheme = () =>{
    const currentTheme = loadTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
}