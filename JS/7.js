let n_month = Number(prompt('Введите число'));

if (!isNaN(n_month)){
    if(n_month <= 3){
        document.write("1 квартал")
    } else if(n_month > 3 && n_month <= 6){
        document.write("2 квартал")
    } else if(n_month > 6 && n_month <= 9){
        document.write("3 квартал")
    } else if(n_month > 9 && n_month <= 12){
        document.write("4 квартал")
    }
} else{
    while (isNaN(n_month)){
        let n_month = Number(prompt('Неверный тип данных, введите ЧИСЛО!'));
        if(!isNaN(n_month)) break;
    }
}