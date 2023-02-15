let ugadai = false;
let zagadka = 5;

while(ugadai != true){
    let chislo = Number(prompt('Введите число'));
    if (!isNaN(chislo)){
        if(chislo == zagadka){
            alert('Угадано');
            document.write('УГАДАНО');
            ugadai = true;
        } else {
            if(chislo > zagadka){
                alert('ваше число больше');
            } else{
                alert('ваше число меньше');
            }
        }
    }
    else{
        let chislo = prompt('НЕ ЧИСЛО!!!Введите число');
        if (!isNaN(chislo)) break;
    }
}