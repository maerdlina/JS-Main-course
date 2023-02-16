let kol_vo = Number(prompt('Введите кол-во слоев елки'));
let stroka1 = '*';

document.write(`<p>${stroka1}<p>`);
for (let i = 0; i < kol_vo; i++){
    if (i % 2 == 0){
        stroka1 = stroka1.split('*').join('#');
        stroka1 += '#';
        document.write(`<p>${stroka1}<p>`);
    } else{
        stroka1 = stroka1.split('#').join('*');
        stroka1 += '*';
        document.write(`<p>${stroka1}<p>`);
    }
}
stroka1 = stroka1.replace(/[^a-zа-яё]/gi, '');
stroka1 += '||'
document.write(stroka1);

