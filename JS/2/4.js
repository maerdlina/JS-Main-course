math_rand = function(min, max){
    document.write(Math.floor(Math.random() * (max - min) + min));
}

let min = Number(prompt('Введите min'));
let max = Number(prompt('Введите max'));

math_rand(min, max);
