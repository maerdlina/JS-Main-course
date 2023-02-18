function absValue(numbrt_abs){
    if (numbrt_abs < 0)
    {
        numbrt_abs *= -1;
    }
    document.write(numbrt_abs);
}

let numbrt_abs = Number(prompt('Введите число'));
document.write(`absValue(${numbrt_abs}) -> `)
absValue(numbrt_abs);