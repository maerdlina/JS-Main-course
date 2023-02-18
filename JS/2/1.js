function convertSpeed(speed, variant){
    if (variant == 'toMS'){
        document.write(`<p>${speed*1000/(3600)} м/c</p>`);
    } else if(variant == 'toKMH'){
        document.write(`<p>${speed * 3600 / 1000} км/ч</p>`);
    }
}

// let variant = Number(prompt('Введите правильный вариант системы СИ'));
// while(variant!='toKMH' || variant!='toMS'){
//     let variant = Number(prompt('Введите правильный вариант системы СИ'));
//     if(variant!='toKMH' || variant!='toMS'){
//         break;
//     }
// }
let variant = prompt('Введите в какую единицу изменения перевести число: toMS или toKMH');
let speed = Number(prompt('Введите число в к/ч'));

convertSpeed(speed, variant);
// document.write(`<p>${one} км/ч = ${convertSpeed(one, two)} м/с</p>`)
// document.write(`<p>${two} м/с = ${two * 3600 / 1000} км/ч</p>`)