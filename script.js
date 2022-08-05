'use strict'
let a = 5;

//модальные окна
//alert("Игорь вредина");
//let question = confirm("Согласны ли вы с этим утверждением?");
//let secondQuestion = prompt('Как ваше имя?', "не Игорь");
//console.log(5 + '5');
//console.log(typeof(5== '5'));
//console.log(5-'5');
//console.log(5*'5');
//console.log(5/'5');
//console.log('js'/'5');
//console.log(!!5);
//console.log(String(10)+5);
//console.log(Number(33)+5);
//console.log(parseInt('10',2));
//console.log(parseFloat('10.5'));


function hello(name, age){
    alert("Hello, "+name+`\nТебе ${age}`);
    return name;
}
hello(prompt("Как вас зовут?"), prompt("Сколько тебе лет?"));

const foo = function(){
    console.log("Здарова");
}
foo();
const constrFoo = new Function('alert("Я создан конструктором")')
constrFoo();