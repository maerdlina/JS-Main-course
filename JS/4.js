let kol_vo = Number(prompt('Введите кол-во слоев елки'));
let stroka1 = '*';
let stroka2 = '';

document.write(`<p>${stroka1}<p>`);
for (let i = 0; i < kol_vo; i++){
    if (i % 2 == 0){
        stroka2 += '##';
        document.write(`<p>${stroka2}<p>`);
    } else{
        stroka1 += '**';
        document.write(`<p>${stroka1}<p>`);
    }
}
document.write(`<p>||<p>`);