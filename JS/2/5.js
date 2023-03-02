begin_array = function(kol_vo){
    for(var i=0; i < kol_vo; i++){
        arr[i] = Number(prompt('Введите число массива'));
    }
    return arr;
}

new_array = function(kol_vo){
    // document.write(`<p>${kol_vo}</p>`);
    for (var i = 0; i < kol_vo; i++){
        arr_new[i] = arr[Math.floor(Math.random() * arr.length)];
    }
    return (arr_new);
}
var arr = [];
var arr_new = [];

var kol_vo = Number(prompt('Введите кол-во элементов массива'));
document.write(begin_array(kol_vo));

var kol_vo = Number(prompt('Введите сколько чисел нужно вывести'));
document.write(`<p>${new_array(kol_vo)}</>`);