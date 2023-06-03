let str ='строка';
console.log(str.toUpperCase());

//2//
function searchStart(arr, str) {
    const regExp = new RegExp(str);
    return arr.filter((it) => regExp.test(it.toLowerCase())); 
}
 console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));

//3//
console.log(Math.ceil(32,58884));
console.log(Math.floor(32,58884));
console.log(Math.round(32,58884));
//4//
const num = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...num));
console.log(Math.max(...num));
//5//
function numbs(){
return Math.floor(Math.random() * 10) + 1
    }
 console.log(numbs());
  
//6//
function getRandomArr(num) {
    const sun = [];
    for(let i = 0; i < num / 2; i++){
        const random = Math.floor(Math.random() * num) 
        sun.push(random)
    }
return sun
}
console.log(getRandomArr(10))

//7//
function numbs(a,b){
    const max = Math.max(a,b)
    const min = Math.min(a,b)
  return Math.floor(Math.random() * (max - min + 1) + min)
        }
     console.log(numbs(15,3));
//8//
let currentDate = new Date();
console.log(currentDate);
//9//
let myDate = new Date();
let days73 = 73 * 24 * 60 * 60 * 1000;
let searchDate = myDate + days73;
let daysAgo73 = new Date(searchDate)
console.log(daysAgo73);
//10//

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь","Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date();

let fullDate = myDate.getDate() + " " + months[myDate.getMonth()] +" " + myDate.getFullYear() + ", " + days[myDate.getDay()];
let time = myDate.getHours() + ":" + myDate.getMinutes()+ ":" + myDate.getSeconds();
 
console.log(fullDate);
console.log(time);

//11//
const frutis =['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

frutis = frutis.sort(() => Math.random() - 0.5);

alert(frutis);

const user = (frutis) => {
    const answer = prompt('Чему равнялся первый элемент массива?')
    if (answer < 0) {
        alert('Вы ввели неправильное значение')
    } else if (answer >= 0 && answer <= 12) {
        alert('Привет, друг!')
    } else {
        alert('Добро пожаловать!')
    }
}

?




