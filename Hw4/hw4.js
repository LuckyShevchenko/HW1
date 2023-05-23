//1 задания
for(let say = 0,say = 2,say++);
console.log( say );
//2 задания
for(let i = 1,i < 6,i++);
console.log(i);
//3 задания
for(let i = 7,i <= 22,i++);
console.log(i);
//4 задания
const obj{
  Коля:200,
  Вася:300,
  Петя:400 
};
for(let worker in obj){
  consol.log(`${worker}-зарплата,${obj[worker]}`)
};
//5 задания
let n = 1000;
let num = 1;
do{
  n = n / 2;
  num = ++num;
}while(n > 50);
console.log(`получилось число ${n} при количестве интераций ${--num}`);
//6 задания
let friday = 5;
for(let i = 1, i <= 31, i++){
  if (i === friday){
    console.log(`сегодня пятницаб${friday}-е`);
    friday = friday + 7;
  }
}