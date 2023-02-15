
let fizz_buzz = Number(prompt('Введите число'));

if (!isNaN(fizz_buzz)){
    for(let i = 0; i <= fizz_buzz; i++){
        if(i % 2  == 0){
            document.write(`<p>${i} buzz</p>`)
        }
        else if(i % 5 == 0){
            document.write(`<p>${i} fizz buzz</p>`)
        } else{
            document.write(`<p>${i} fizz</p>`)
        }
    }
} else{
    while (isNaN(fizz_buzz)){
        let fizz_buzz = Number(prompt('Неверный тип данных, введите ЧИСЛО!'));
        if(!isNaN(fizz_buzz)) break;
    }
}