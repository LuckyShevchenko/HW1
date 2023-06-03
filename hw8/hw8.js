const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
]
console.log(people.sort((a,b) => a.age - b.age);
//2//
function isPositive(num) {
    return num > 0;
    }
    function isMale(obj) {
    return obj.gender === 'male'
    
    }
    function filter(arr,cb) {
     const result = [];
     arr.forEach((sun) => {
       if(cb(sun)){
         result.push(sun)
       }
     })
      return result
    }
    
    console.log(filter([3, -4, 1, 9], isPositive)); 
    
    const people = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people, isMale)); 
//3//
let myDate = (new Date);
    console.log(my Date);
    myDate = setInterval(() => {
        myDate + 1;
        console .log (mtDate)
    },3000);
    setTimeout(() =>{
        clearInterval(myDate);
        console.log('30 секунд прошло');
    } myDate =30000)
    //4//
function dalayForSecond(cb){
    setTimeout(cb,1000);
}
    dalayForSecond(function()){
        console.log('Привет Глеб!')
    });
    //5//
    
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond(function() {
    sayHi('Глеб')
  });
     
