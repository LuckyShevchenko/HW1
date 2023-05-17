//задания1//
let password = ('пароль');
let password = prompt('Введите пароль');
if (password === answer) {  
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно'); 
}
//задания2//
let c = prompt('Введите любое число');
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
    
}
//задания3//
let d = prompt('Введите пароль');
let е = prompt('Введите пароль');
if (d > 100 || e > 100) {
    console.log('Верно'); 
} else {
    console.log('Неверно');
}
//задания4//
let a = '2';
let b = '3';
a = Number(a);
b = Number(b);
alert(a + b);
//задания5//
let monthNumber = Number(prompt('Введите номер месяца,чтобы узнать к какому сезону пренадлежить'));
switch (monthNumber) {
    case 'Январь зима':
        console.log('Первый месяц в году');
        break;
    case 'Январь зима':
        console.log('1 месяц в году');
        break;
    case 'Февраль зима':
            console.log('2 месяц в году');
            break;
    case 'Март весна':
        console.log('3 месяц в году');
        break; 
    case 'Апрель весна':
        console.log('4 месяц в году');
        break;
    case 'Май весна':
        console.log('5 месяц в году');
        break;
    case 'Июнь лето':
        console.log('6 месяц в году');
        break;
    case 'Июль лето':
        console.log('7 месяц в году');
        break;
    case 'Август лето':
        console.log('8 месяц в году');
        break;
    case 'Сентябрь осень':
        console.log('9 месяц в году');
        break;
    case 'Октябрь осень':
        console.log('10 месяц в году');
        break;
    case 'Ноябрь осень':
        console.log('11 месяц в году');
        break;
    case 'Декабрь зима':
        console.log('12 месяц в году');
        break;   

    default:console.log('такого месяца не сушествует')

        break;
}