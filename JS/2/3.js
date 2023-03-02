//НЕ ЗНАЮ КАК ДЕЛАТЬ
let student = {
    group: 201,
    last_name: "Иванов",
    first_name: "Иван"
};

document.write(`<p>Список свойств: ${Object.keys(student)}</p>`)
document.write(`<p>Студент ${student.first_name} ${student.last_name} учится в ${student.group} группе</p>`)

// let properties = Object.keys(student).reverse();
// console.log(properties);
// for(var i = 0; i < properties.length; i++){
//     if(i == 0){
//         document.write(`Студент ${student[properties[i]]}`)
//     } else if(i == 1){
//         document.write(` ${student[properties[i]]} учится в `)
//     } else if(i == 2){
//         document.write(`${student[properties[i]]}группе`)
//     }
// }