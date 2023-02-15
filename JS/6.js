let n = Number(prompt('Введите число'))
let x = Number(prompt('Введите x'))
let y = Number(prompt('Введите y'))

if (n % x == 0 && n % y == 0){
    document.write("Делится")
} else{
    document.write("Не делится")
}