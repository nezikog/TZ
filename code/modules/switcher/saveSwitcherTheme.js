'use strict';
//Сохраняем тему, которую выбрал пользователь
export const saveTheme = (theme) =>{
    localStorage.setItem('theme', theme);
};
//Подгружаем
export const loadTheme = () =>{
    return localStorage.getItem('theme') || 'light';
}