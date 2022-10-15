// 1 ways to print in java script


// alert('Hi i am ijaz sial here');
// document.write('hello ')

// alert('there is an error in console check this ');
// 2 java script console api

// console.warn('This is waring ');

// console.log('ijaz sial');
// console.error('this is an error')
// console.log('Hi there', 9+4, 'This is total of You input number');


//3  javascript variables      >>   // containers to store data  values


// let number1 = 34;
// let  number2 = 45;
// console.log(number1 + number2);


//  // 4  data types in java script

//  // numbers

//  let nuber1 = 56;
//  let nuber2 = 57.6;

//  // strings
//  let str2 = " this is double qouts string ";
//  let str1 = 'this is strig ';

//  //  object

//  let marks = {
//     hamza:49,
//     ijaz: 55,
//     hamad:67.44,

//  }

//  console.log(marks);


// // bloeans

// let a = true;
// let b = false;
// console.log(a, b);

// var und
// let und;
// console.log(und);



// // null


// let n = null;
// console.log(n);



// premetive  kisi se mill kr  ni bana data types:  undefine , null , numbers , bolean , symbol, string



// refrence  data type   me   arrays aor objects

// let arr= [1,2,34,5,6 ];
// console.log(arr[2]);


// operator in java scripts

// let a = 58;
// let b = 66;
// console.log('The value of a + b is ', a + b);
// console.log('The value of a - b is ', a -b);
// console.log('The value of a / b is ', a / b);
// console.log('The value of a * b is ', a * b);
// // assignmetn operatoroe 

// let c= b;
// c +=b;

// console.log(c);


// caparison operatoro s

// let x = 44;
// let y = 84;
// let z = 54;

// console.log( x==y==z);
// console.log( x += y);
// console.log(x  <= z);
// console.log( x>= z);
// console.log(x  < z);
// console.log( x> z);

//   ///   logivcal   and 

// console.log(true && true);
// console.log(true && false);
// console.log(false && false);

//   ///   logivcal   or 
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);


//   ///   logivcal   not
//   console.log(!true);
// console.log(!false);

// java  scripte  funtions




// function avg(a, b){           // function
//     c = (a + b)/2;
//     return c;
// }

// c1 = avg(4 , 6);
// c2 = avg (18 ,  8);
// console.log(c1, c2);            // function in java  script    is  know  as  do not  rpeat your  self



// conditionals  in java scrptips

//  let age = 12;
//   if (age > 16){
//     console.log('You are not a  kid ');

//   }

//   else {
//     console.log('You are  a  kid  chal bhag ');
//   }



/*var age = 22;

if (age > 32 ){
    console.log("You are a not a kid  32");
}

// else if (age > 30 ){
//     console.log('You are now  not a  kid 30');
// }
// else if (age > 22 ){
//     console.log('You are now  not a  kid 22');
// }
// else if (age > 20 ){
//     console.log('You are now  not a  kid 20');
// }
// else if (age > 16 ){
//     console.log('You are now  not a  kid 16');
// }
// else if (age > 11 ){
//     console.log('You are now  not a  kid 11');
// }

// console.log("End of ladder");  */



// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// // console.log(arr);
// // for (let i=0; i<arr.length; i++){
// // console.log(arr[i]);
// // }




// // arr.forEach(function(element){
// //     console.log(element);
// // })


// // let j = 0;
// // const a = 0;
// // a = a + 1;


// let j = 0;  //while loops
// // while (j < arr.lenght) {
// //     console.log(arr[j]);
// //     j++;
// // };

// do {
//     console.log(arr[j]);

//     j++;

// } while (j < arr.length);


// // 149 mint 

// let myArr = [ 'fan ', 'camera ', 45 , 78, 'pakistan', true,  null, ];
// //methods of  array 
// // myArr.pop();

// // myArr.push('Ijaz');

// // myArr.shift();


// myArr.unshift('Sial');
// console.log(myArr);

// let myArryString = 'Hi i am ijaz sial here how r you ';
// // console.log(myArryString.length);
// // console.log(myArryString.indexOf('ijaz'));
// // console.log(myArryString.lastIndexOf('sial'));
// // 
// d = myArryString.replace('ijaz' , ' Sajad');
// console.log(d , myArryString);

// let myDate = new Date;
// // console.log(myDate);
// // console.log(myDate.getDate());
// // console.log(myDate.getDay());
// // console.log(myDate.getTime());
// // console.log(myDate.getFullYear());
// // console.log(myDate.getTimezoneOffset());


// //    Dom manimplation

// let ell = document.getElementById('click')
// console.log(ell);


// let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);
// elemClass[0].style.background=   'yellow' ;



// tn = document.getElementsByTagNameNS('div');
// console.log(tn);
// createdElement = document.createElement('p')
// createdElement.innertext = 'This  is a Created paragraph';
// tn[0].appendChild(createdElement);

// createdElement2.innertext = document.createElement('b');
// createdElement2.innertext = 'This  is a Created paragraph bold';
// tn[0].replaceChild(createdElement2, createdElement);
// // removeChild(Element); ---> remove an Element




//  selevting using Query  ]


// sel = document.querySelector('.container');
// console.log(sel);


// sel = document.querySelectorAll('.container');
// console.log(sel);


// event in java script



// function clicked(){
//     console.log('Button was clicked');
// }

// window.onload = function(){
//     console.log('The load function was loaded');
// }



// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = '<b> We have clicked by ijaz </b>'
//     console.log('clicked was successfull ');

// })

// firstContainer.addEventListener('mousehover', function(){
//     console.log('Mouse hover  ');

// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log('mouse out of coantainer ');

// })
// firstContainer.addEventListener('mouseup', function(){
//     console.log('mouse up on the  coantainer ');

// })

// let prevHtml = document.querySelectorAll('.container')[1].innerHTML;
// firstCointainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHtml;
//     console.log('Mouse up when clicked on container');

// })

// firstCointainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = '<b> We have cliccked</b>';
//     console.log('Mouse down when clicked on container');
// })

// Arrow function

// function sum (a, b){
//     return a + b;
// }


// sum =  (a, b) =>{
//     return a +b;
// }

// logKaro = ()=>{
//     console.log('I am you rLog ');
// }


// // setTimeout and setInterval


// // setTimeout(logKaro, 3000);
// clr = setInterval(logKaro, 3000);
// clr = setTimeout(logKaro, 3000);



 ///  local storage  in java  script

//  localStorage.setItem('name','ijazsial');

//  localStorage.getItem('name');
// localStorage.clear();

// localStorage.removeItem('name');


// json  eccept double quts  obj to json convert

// obj = {name: 'ijaz', lenght: 1, a: {this: "That"}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)


// parsed = JSON.parse(`{name: 'ijaz', lenght: 1, a: {this: "That"}}`)
// console.log(parsed);




//  template litteral s-- backtickes


