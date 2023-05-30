
const number11 = (a, b) => a > b ? b : a;

console.log(number11(8, 4))

const num13 = (a) => a % 2 === 0 ? 'число четное' : 'число не четное '

const squre = (a) => console.log(a * a)

const squren = (a) => a * a

const user = () => {
    const answer = prompt('сколько вам лет ?')
    if (answer < 0) {
        alert('Вы ввели неправильное значение')
    } else if (answer >= 0 && answer <= 12) {
        alert('Привет, друг!')
    } else {
        alert('Добро пожаловать!')
    }
}
const chekNubers = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом'
    } else {
        return a * b
    }
}
const fox = () => {
    const answer = +prompt('введите любое число')
    if (isNaN(answer)) {
        return 'Переданный параметр не является числом'
    } else {
        const result = answer ** 3
        return `n в кубе равняется ${result}`
    }
}
/*const circle1 = {
    getArea: (r) => Math.PI * r * r,
    getPerimeter: (r) => 2 * Math.PI * r
}
const circle2 = {
    getArea: (r) => Math.PI * r * r,
    getPerimeter: (r) => 2 * Math.PI * r
}
*/



const circle1 = {
    radius: 10,  
    getArea: function() {  
        return Math.PI * this.radius * this.radius; 
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius; 
    }
};

const monthNumber = () => {
    const userAnswer = +prompt('Введите номер месяца');
    if (isNaN(answer)) {
        alert('Переданный параметр не является числом');
    } else if (userAnswer >= 1 && userAnswer <= 12) {
        switch (userAnswer) {
            case 1:
            case 2:
            case 12:
                alert('зима');
                break;
            case 3:
            case 4:
            case 5:
                alert('весна');
                break;
            case 6:
            case 7:
            case 8:
                alert('лето');
                break;
            default:
                alert('осень')
                break;
        }
    } else {
        alert('вывели дичь')
    }


}