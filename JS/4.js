let kol_vo = Number(prompt('Введите кол-во слоев елки'));
let stroka = "*";

document.write(`<p>${stroka}<p>`);
for (let i = 0; i < kol_vo; i++){
    if (i % 2 == 0){
        stroka = stroka.split("*").join("#") + "#";
        document.write(`<p>${stroka}<p>`);
    } else{
        stroka = stroka.split('#').join("*") + "*";
        document.write(`<p>${stroka}<p>`);
    }
}
stroka = stroka.replace(/[^a-zа-яё]/gi, "");
stroka += "||"
document.write(stroka);