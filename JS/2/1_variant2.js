let type = prompt('Введите в какую единицу изменения перевести число: toMS или toKMH');
let speed = Number(prompt('Введите число в к/ч'));

alert(type)

test = {
    type_of_speed: {
        toMS: speed*1000/(3600),
        toKMH: speed * 3600 / 1000
    },
    function_property: function(type){
        if(type=='toMS'){
            document.write(`<p>${this.type_of_speed[type]} м/c</p>`);
        } else{
            document.write(`<p>${this.type_of_speed[type]} км/ч</p>`);
        }
        
    }
}

test.function_property(type);