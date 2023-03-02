//НЕ ЗНАЮ КАК ДЕЛАТЬ
let student = {
    group: 201,
    last_name: "Иванов",
    first_name: "Иван"
    };

let properties = Object.keys(student).reverse();
document.write(`<p>Список свойств: ${Object.keys(student)}</p>`)
document.write(`<p>Студент ${student.first_name} ${student.last_name} учится в ${student.group} группе</p>`)