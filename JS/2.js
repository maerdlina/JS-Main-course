let a = Number(prompt('Введите 1 сторону'));
let b = Number(prompt('Введите 2 сторону'));
let c = Number(prompt('Введите 3 сторону'));

if((a + b > c) && (a+ c > b) && (b + c > a) && (a>0) && (b>0) && (c>0)){
    let p = a+b+c;
    let s = Math.sqrt(p*(p - a)*(p - b)*(p - c));
    document.write('<p>Треугольник существует</p>', `Периметр = ${p}`, `<p>Площадь = ${s}<p/>`, `<p>Соотношение = ${p / s}</p>`)
} else{
    document.write('<p>Треугольник не существует</p>')
}