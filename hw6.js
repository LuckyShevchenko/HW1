const numbs = [1, 5, 4, 10, 0, 3];
for(let i = 0; i < numbs.length; i++){
    console.log(numbs[i]);
    if (numbs[i] === 10){
        break;
    }
}

const numbers = [1, 5, 4, 10, 0, 3];
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] === 4){
//         console.log(i);
//         break;
//     }
// }
console.log(numbers.findIndex(4));

const nun = [1, 3, 5, 10, 20];
console.log(nun.join(' ')) ;

const arr = [
    [1, 1 ,1],
    [1, 1 ,1],
    [1, 1 ,1]
];
const result = [];
for(let i = 0; i < arr.length; i++){
for(let j = 0; j < arr[i].length; i++){
    result.push(arr[i][j]);
}   
}
console.log(result);

const sun =[1 , 1, 1];
sun.push(2, 2, 2);
console.log(sun);

const word = [9, 8 , 7, 'a', 6, 5];
const res = word.sort().pop();
console.log(res);

const test =[9, 8, 7, 6, 5];
const run = +prompt('Ввидите любое число от 1 до 10');
if(test.includes(run)){
    console.log('число есть в массиве') 
} else{
    console.log('числа нет в массиве')
}

const str = 'abcdef';
const strResult = str.split('').reverse().join('');
console.log(strResult);

const myArray = [[1, 2 , 3],[4, 5, 6]];
// const myResult = [];
// for(let i = 0; i < myArray.length; i++){
// for (let j =0; j < myArray[i].length; j++){
//     myResult.push(myArray[i][j]);
// }
// }
// console.log(myResult);
console.log([].concat(myArray[0],myArray[1]))

const star = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = star + sum;
for(let i = 0; i < star.length; i++){
    console.log(sum);
}

const nubs = [1, 4, 9];
const roots = numbers.map((item) => Math.pow(item, 2));

function sum(){
    const numbs = [];
    for(let i = 0; i < 10; i++){
      const result = Math.floor(Math.random() * 10);
      numbs.push(result); 
    }
    console.log(numbs);
    for(let i = 0; i < numbs.length -1 ; i++){
      console.log(numbs[i] + numbs[i + 1]);
    }
  }
  sum()

function getLengthWords(arr) {
  return arr.map((item) => item.length);
}
console.log(getLengthWords);








function numbs(){
    const arr = [];
    const sun = [];
    for(let i = 0; i < 10; i++){
      const result = Math.floor(Math.random() * 10); 
      arr.push(result);
      if(result %2 === 0){
        sun.push(result);
      }
    }
    console.log(arr);
    console.log(sun);
  }
  numbs()