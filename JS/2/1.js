convertSpeed = function(speed, variant){
    if (variant == 'toMS'){
        document.write(`<p>${speed*1000/(3600)} м/c</p>`);
    } else if(variant == 'toKMH'){
        document.write(`<p>${speed * 3600 / 1000} км/ч</p>`);
    }
}

let variant = prompt('Введите в какую единицу изменения перевести число: toMS или toKMH');
let speed = Number(prompt('Введите число в к/ч'));

convertSpeed(speed, variant);