// let firstName = 'ijaz';
// console.log(firstName);

// let javaScritIsFunn = true;
// console.log(javaScritIsFunn);

// const now = 2022;
// const ageIjaz = now - 1994;
// const  ageSama = now - 1999;
// console.log(ageIjaz , ageSama , ageIjaz);
// console.log(ageIjaz * 2 , ageSama / 2);

// const firstName =  "ijaz";
// const lastName = 'sial';
// console.log(firstName + ' ' + lastName);

// let x = 10 + 5 ;
// x += 10;
// console.log(x);

// // //   code challenge no 1

// // const massJohn = 78 ;    // TEST DATA 1
// // const hieghtMark = 1.69 ;
// // const massJohn = 92;
// // const hieghtJohn  = 1.95;

// const massMark = 95;    //TEST DATA 2
// const hieghtMark = 1.88;
// const massJohn = 85;
// const hieghtJohn = 1.76;

// const BMIMark = massMark / hieghtMark ** 2;
// const BMIJohn = massJohn / (hieghtJohn * hieghtJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI)

// const firstName = 'ijaz';
// const job = 'programmer';
// const birthDayYear = 1994;
// const year = 2022;

// const ijaz = "I'm " + firstName + ', ' + (year - birthDayYear) + ' years old ' + job + '!';

// console.log(ijaz);

// const ijazNew = `I'm ${firstName}, ${(year - birthDayYear)} years old ${job}!`;
// console.log(ijazNew);

// console.log(`Just a regular string`);
// console.log(` string
// on multple
// lines `);

//  dsecision takinf i f else

// let age = 16;
// // const isOldEnough = age >= 18;

// if (age >= 18) {
//     console.log('Hi you are ready for applying for the liseince !');
// }
// else{
//     const yearsLeft = 18 - age;

//     console.log(` Hi there you are too young yet . Please wait for more ${yearsLeft}  Years`);
// }

// // //   code challenge no 2

// const massMark = 78 ;    // TEST DATA 1
// const hieghtMark = 1.69 ;
// const massJohn = 92;
// const hieghtJohn  = 1.95;

// // const massMark = 95;    //TEST DATA 2
// // const hieghtMark = 1.88;
// // const massJohn = 85;
// // const hieghtJohn = 1.76;

// const BMIMark = massMark / hieghtMark ** 2;
// const BMIJohn = massJohn / (hieghtJohn * hieghtJohn);
// console.log(BMIMark, BMIJohn);

// if ( BMIMark > BMIJohn ) {
//     console.log(` Mark's BMI (${BMIMark}) is higher then John's BMI (${BMIJohn}) !`)
// } else {
//     console.log(` John's BMI (${BMIJohn} is higher then Mark's (${BMIMark}) !`)
// }

// cinvert  numbers to string

//  type of conversaion

// let inputYear = '1994';
// console.log(Number(inputYear) + 28 );
// console.log(String(23), 23);

// type of coercion

// console.log('I am ' + 23 + ' Years old');

// console.log('23' - '10 ' - 4);
// console.log('23' + '10 ' + 4);
// console.log('23' * 4);
// console.log('20' /  '4');

// let n= '1' + 1; // 11
// n = n - 1;  // 11 into -1 = 10
//  console.log(n);

// boleans

//   //  operator and   or    not

// const  hasDriveringLicnese = true;  //tru tru && tru
// const  hasGoodVision  = true;   //tru false && false
// // console.log(hasDriveringLicnese && hasGoodVision);
// // console.log(hasDriveringLicnese || hasGoodVision);
// // console.log(! hasDriveringLicnese);

// if (hasDriveringLicnese && hasGoodVision ) {
//     console.log('He is able to drive ');
// } else {
//     console.log('he is unable to derive');
// }

// //  code  challneg  2

// const scoreDolpins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) /3;

// console.log(scoreDolpins , scoreKoalas);

// if(scoreDolpins > scoreKoalas){
//     console.log(' Team Doplphins is the eligible for the torphy ');
// } else if (scoreKoalas > scoreDolphins ) {
//     console.log('Team Koalas is the winner of the trophy');

// } else if ( scoreDolpins === scoreKoalas ) {
//     console.log('Bith teams are the winnenr  Yeah');

// } ;

// const scoreDolpins = (97 + 90 + 90) / 3;  // code challnge   test 1
// const scoreKoalas = (109 + 95 + 90) /3;

// console.log(scoreDolpins , scoreKoalas);
// if(scoreDolpins > scoreKoalas && scoreDolpins >= 100){
//     console.log(' Team Doplphins is the eligible for the torphy ');
// } else if (scoreKoalas > scoreDolpins  && scoreKoalas >= 100) {
//     console.log('Team Koalas is the winner of the trophy');

// } else if ( scoreDolpins === scoreKoalas && scoreDolpins >= 100 && scoreKoalas >= 100 ) {
//     console.log('Bith teams are the winnenr  Yeah');

// } else{
//     console.log("The mathc is draw");
// }

//  swite  statement

//  let day = 'monady';

//  switch (day) {
//     case 'thursday':
//         console.log('Go to office and do some work !')

//         break;
//         case 'friday':
//             console.log('Go to pray');
//             break;
//             case 'saturday':
//             case 'sunday':
//                 console.log('weekend  bro enjoy ')
//                 console.log('Just chill saturday and sunday is yours days')
//                 break;
//                 case 'monady':
//                     console.log('Go to work and write some code and help ohters');
//                     break;
//                     case 'tusday':
//                         console.log('do some better code this is tuseday');
//                         break;
//     default:
//         console.log('Please enter a valid day name to see you work details ');
//                 break;
//  }

// let day = 'mondafy';  challge  1

// if (day === 'monday') {
//     console.log('Please this  is  monday go to  ')
// } else if (day === 'tuseday') {
//     console.log('Please this is tuseday ')
// } else if (day === 'satureday') {
//     console.log('Please this is satureday ')
// } else if (day === 'wednseday') {
//     console.log('Please this is wednsay  ')
// } else if (day === 'thursday') {
//     console.log('Please this is thrsday ')
// } else if (day === 'friday') {
//     console.log('Please  this is friday go to prayer')
// } else if (day === 'sunday') {
//     console.log('Please ')
// } else {
//     console.log('Please enter a valid day ! thank you ')
// };

//  conditional operators    state ment s

// let age = 5 ;
// age >=18 ? console.log('You can drink tea') :
//  console.log('Please drink Water you are now a  child ');

// const age = 14;
//   let  tea = age >= 18 ? 'Tea' : 'Water';
//   console.log(tea);

// let age = 14;

// console.log(` I like to drink ${age >= 18 ? 'Tea' : 'Water '}`);

// code challeng no 4

// const bill = 275;       // 275; 40 ; 430 ;

// const tip = bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100;

// console.log(`The bill was ${bill}, the tip was ${tip} , and the total value ${bill + tip}`);

//  funtions  arrays loops

// 'use strict';

// let hasDriverLicense = false;
// const passTest = true;

// if(passTest) hasDriverLicense = true;
// if(hasDriverLicense) console.log('I can drive yeah');

//  const interface  = 'ijaz';

// const private = 3445

//  functions

//  function logger (){
//     console.log('Hi i am ijaz shere ')
//  }
// // calling runny    invoking  the functions
//  logger();

// function fruitProcessor (mangos, apples){
//     const juice = `Juice with ${mangos} mangoes and ${apples} apples.`;
//     return juice;
// }
// const applesJuice = fruitProcessor (5, 6);
//  console.log(applesJuice)

// function fruitProcessor(mangos, bnanas) {
//     // console.log(mangos , bnanas);
//     const juice = `Your Juice make with ${mangos} Mangoes and ${bnanas} Bnanas .`;
//     return juice;
// }

// const pureJuice = fruitProcessor(6, 5);
// console.log(pureJuice);

// const mangosBnanaJuice = fruitProcessor(6, 8);
// console.log(mangosBnanaJuice);

// const orangeJusiceOnly = fruitProcessor( 0 , 0);
// console.log(orangeJusiceOnly);

// const num = Number('234234');   // cosnole  and number is alos a function built in
// console.log(num);

// function foodProssesor (apples , mangos , bnana , oranges){
//     const juice =   ` Your Juice contains ${apples} apples ${mangos} mangose
//      ${bnana} bnanas ${oranges} and Oranges`;
//      return juice;
// }

// const myJuice = foodProssesor(4 ,6 ,7 ,2 );
// console.log(myJuice);

//   // fucntion decalrtion
// function calcAge1(birthYear){
//     // const age = 2022 - birthYear;
//     // return age;
//     return 2022 - birthYear;

// }

// const age1 = calcAge1(1994);
// console.log(age1)

// // fucntion experetion

// const calcAge2 = function(birthYear){
//     return 2022- birthYear;
// }
// const age2 = calcAge2(1994);
// console.log(age2 , age1)

//  arrow function

// const calcAge3 = birthYear => 2022 - birthYear;
// const age3 = calcAge3(1994);
// console.log(age3);

// const ageRemainingRetirement = (birthYear , firsName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age ;
//   return  `${firsName} retires in ${retirement} after years `;

// }
// console.log(ageRemainingRetirement(1992 , 'Ijaz Sial'));
// console.log(ageRemainingRetirement(1882 , 'sajad Sial'));
// console.log(ageRemainingRetirement(1990 , 'ifitikhar Sial'));
// console.log(ageRemainingRetirement(1992 , 'Rafi Sial'));

//  calling one function other functions

// function fruitCutter(fruit) {
//   return fruit * 4;

// }

// function fruitJuiceProcessor(apples , bnanas, oranges) {
//   const appleJuicePeaces =fruitCutter(apples);
//   const bnanaJuicePecies = fruitCutter(bnanas);
//   const orangesJuicePeaces = fruitCutter(oranges);

//   const jusice = `Your Juice is made with ${appleJuicePeaces} peaices Of apples
//    ${bnanaJuicePecies} pecies of bnanas and ${orangesJuicePeaces} pecies of ornages !`
//    return jusice;

// }
// console.log(fruitJuiceProcessor(3 , 4 , 5));
// console.log(fruitJuiceProcessor(7 , 3 , 2));
// console.log(fruitJuiceProcessor(9 , 3 , 7));
// console.log(fruitJuiceProcessor(5 , 3 , 0));

// function ageCalc(birthYear) {
//   return 2022 - birthYear ;
// }

// function ageRemainingRetirement(birthYear , fristName) {
//   const age = ageCalc(birthYear);
//   const remainingYearsOfRetiremnet = 65 - age;

//   if (remainingYearsOfRetiremnet > 0 ) {
//     console.log(`${fristName} please wait for ${remainingYearsOfRetiremnet} Years more`);
//     return remainingYearsOfRetiremnet;

//   } else {
//     console.log(`${fristName} has already ${remainingYearsOfRetiremnet} retired`);
//     return remainingYearsOfRetiremnet;

//   }

// }
// console.log(ageRemainingRetirement(1994 , 'ijaz sial'));

// code challenge  no 1 2nd lecture

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// // console.log(calcAverage(1 ,5 ,6));

// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);
// // console.log(scoreDolphins , scoreKoalas)

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win ( ${avgDolphins}  vs. ${avgKoalas}.)`)
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win(${avgKoalas} vs. ${avgDolphins}.)`)

//     } else {
//         console.log('No team win the match')
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// arrays  to stoer data

// const ageArray = new Array('ijaz sial ' ,  898998 , 'ijaz ' , 1994) // method 1

// console.log(ageArray)

// const calcAge = function age(birthYear) {
//     return  2022 -birthYear ;
// }

// const ages = [1990 , 1992 , 1994 , 1995 , 1991 , 1990]      // methhod 2

// const age1 = calcAge(ages[0]);
// const age2 = calcAge(ages[3]);
// const age3 = calcAge(ages[2]);
// const age4 = calcAge(ages[5]);
// const age5 = calcAge(ages[ages.length  - 1]);
// console.log(age1  , age2 ,age3 , age4 , age5)

// const ages1 = [ 1929  , 1922 , 1888 , 1992 , 1994]
// console.log(ages1)

// basic arrays methods

// const friends = ['ijaz', 'sial', 'sajad']

// friends.push('rafi');
// console.log(friends)

// friends.pop();

// friends.unshift('sial')

// console.log(friends)

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('ijaz'));
// console.log(friends.indexOf('saisa'));

// console.log(friends.includes('ijaz'));
// console.log(friends.includes('askjdakl'));

// if (friends.includes('sajad') ) {
//      console.log('You have a good freind name is sajad')
// } else {
//     console.log('Sorry bro you dont have a good friend for this time ')
// }

// code challinge no arrays videos 3

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// }

// //arror function

// // const calcTip = bill => bill <= 50 && bill >= 300 ? bill * 0.15 : bill * 0.20;

// // console.log(calcTip(100));

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// // console.log(tips)

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// const total1 = [(bills[0] + tips[0]) + (bills[1] + tips[1]) + (bills[2] + tips[2])];
// console.log(`Your total bills are include tips is ${total}`);
// console.log(`Your total bills ammount is  ${total1}`);

// console.log(bills , tips , total)

// objects

// const ijazArray = [
//     'Ijaz',
//     'sail',
//     2022 - 1994,
//     'Programmer',
//     ['rafi', 'amir', 'unknown']
// ]
// console.log(ijazArray[0],ijazArray[1] , ijazArray[3] , ijazArray[4], ijazArray[5]);

// const ijazArray2 = {
//     firstName: 'Ijaz',
//     lastName: 'Sial',
//     dateOfBirth: 2022 - 1994,
//     friends: ['rafi', 'amir', 'hammad']
// }

// // console.log(ijazArray2)   //dot notation // bracket notaintion[]
// console.log(ijazArray2.firstName)

// console.log(ijazArray2['lastName'])

// const nameKey = 'Name';
// console.log(ijazArray2['first'+ nameKey] )
// console.log(ijazArray2['last'+ nameKey , 'friends'], )

// const firstName = 'Ijaz';
// const lastName = 'Sial';

// console.log(firstName + lastName)

// console.log(`Hi ${firstName} ${lastName} How  are you  `)

// //  code challnge

// const massMark = 78;
// const massJohn = 92;

// const hieghtMark = 1.69;
// const hieghtJohn = 1.95;

// const BMIMark = massMark / hieghtMark ** 2;
// const BMIJohn = massJohn / (hieghtJohn * hieghtJohn);

// const markHigherBMI = BMIMark > BMIJohn;
// const johnHigherBMI = BMIJohn > BMIMark;

// if (markHigherBMI > johnHigherBMI) {
//     console.log('Marks BMI is greater then John')

// } else if (johnHigherBMI > markHigherBMI) {
//     console.log('John BMI is greater then marks BMI')

// }else {
//     console.log("mark and JOhn BMI is equal or we get error")

// }

// // ternary opeator

// const age = 14;
// age >= 18 ? console.log(`I am ${age} Old`) : console.log(` I am not better yet `);

// //code challeng ternary operator

// const bill = 430;

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// console.log(`The bill was ${bill} , the tip was ${tip}, and the total bill value is ${bill + tip}`);

// function

// function fruitProcessor(apple , oranges){
//     const juice = console.log(`My Juice is make with ${apple} apple and with ${oranges} oranges `);
//     return juice;
// }

// const appleJuice = fruitProcessor(4 ,5);

// console.log(appleJuice);

// const oprangeJuice = fruitProcessor(7 ,8 );
// console.log(oprangeJuice);

// tpes of functions

// function decalrtion

// function calcAge(birthyear) {
//     return 2022 - birthyear;
// }
// const age = calcAge(1994);
// console.log(`my age is ${age}`);

// // function experation

// const calAGe2 = function (birthDayYear) {
//     return 2022 - birthDayYear;
// }

// const age1 = calAGe2(1995);

// console.log(`My age with experation function is ${age1}`);

// // arrow functions
// const calAge3 = birthDayYear => 2022 - birthDayYear;
// const age3 = calAge3(1996)
// console.log(`My age is ${age3}`)

// const yearsUnitlRtire = (birthDayYear1, firsname) => {
//     const age = 2022 - birthDayYear1;
//     const yearsLeft = 65 - age;
//     return `${firsname} has ${yearsLeft} years left untile retirements`
// }

// console.log(yearsUnitlRtire(1994, 'ijaz'))
// console.log(yearsUnitlRtire(1996, 'sajad'))

// const ageCalulator = function (birthyear) {
//     return 2022 - birthyear;
// }

// const ageCalc4 = function (birthday, firstName) {
//     const age = ageCalulator(birthday);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(`${firstName} is remainnign ${retirement} years more so chill`);
//         return retirement;
//     } else {
//         console.log(`${firstName} is already retired `)
//         return -1;

//     }
// }

// ageCalc4(1994, 'ijaz');

// coding challnge

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// // console.log(calcAverage(55, 66, 77))

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// // console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`team Dolphins winn ${scoreDolphins, scoreKoalas}`)
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`team koalas win ${scoreKoalas, scoreDolphins}`)
//     } else {
//         console.log('No team win today')
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

// checkWinner(scoreDolphins , scoreKoalas)

//arrays

// const friends = ['ijaz', 'sial' , 'kwl' , 'frifs']

// console.log(friends);

// const years = new Array(30002 , 6676 , 'ijaz')
// console.log(years)

// console.log(years[2] , years[1])
// console.log(years[years.length -1])

// friends[friends.length - 1 ] = 'sajad';
// console.log(friends)

// const friends = ['ijaz', 'sial' , 'kwl' , 'frifs']

// friends.push('khanewal');
// friends.unshift('ijaijs')
// friends.pop();
// console.log(friends.indexOf('ijaz'))
// console.log(friends.indexOf('ijaz'))
// console.log(friends.includes('ijaz'))

// // coding challge no 2  arrays
// const calctip = function(bill){
//     return bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.20;
// }

// const bill = [125 , 555 , 44];
// const tips = [calctip(bill[0]) , calctip(bill[1]),calctip(bill[2])]
// const total = [bill[0] + tips[0], bill[1] + tips[1] , bill[2] + tips [2] ];

// console.log(bill , tips , total)

// objects

// const ijaz = {
//     firstname : 'ijaz',
//     lastName: 'sial',
//     friends: ['iajz', 'sial' , 'saajd']
// }

// console.log(ijaz.lastName)
// console.log(ijaz.firstname)
// console.log((ijaz['firstname']))

// console.log(    `${ijaz.firstname} has ${ijaz.friends.length} friends and best firend is ${ijaz.friends[2]}`)

// const ijaz = {
//     firstName: 'ijaz',
//     lastNmae: 'sial',
//     birthyear: 1994,
//     friends: ['sajad', 'ijaz', 'rafi', 'iftikahr'],
//     job: 'developer',
//     hasDriverLicence: false,
//     // calcAge: function (birthyear) {   //calcage is now peroperty
//     //     return 2022 - birthyear;
//     // }

//     calcAge: function () {   //calcage is now peroperty
//         this.age = 2022 - this.birthyear;
//         return this.age;
//     },
//      getSummery : function(){
//         return `${this.firstName} is a ${this.calcAge()} -years old and working as ${this.job} and has ${this.hasDriverLicence ? 'a' : 'no '} derving licnece. `

//      }
// }

// console.log(ijaz['calcAge'](1994));
// console.log(ijaz.calcAge());
// console.log(ijaz.getSummery());

// //coding challnge arrays

// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     weight: 78,
//     hieght: 1.69,
//     BMI: function () {
//         this.BMI = this.weight / this.hieght ** 2;
//         return this.BMI;
//     }
// }

// const John = {
//     firstName: 'John',
//     lastName: 'Smith',
//     weight: 92,
//     hieght: 1.95,
//     BMI: function () {
//         this.BMI = this.weight  / (this.hieght * this.hieght);
//         return this.BMI;
//     }
// }

// John.BMI();
// mark.BMI();

// if (mark.BMI > John.BMI ) {
//     console.log(`${mark.firstName +' ' + mark.lastName} BMI (${mark.BMI}) is higher than ${John.firstName +' ' + John.lastName} (${John.BMI})`)

// }else{
//     console.log(`${John.firstName +' ' + John.lastName} BMI (${John.BMI}) is higher than ${mark.firstName +' ' + mark.lastName} (${mark.BMI})`)
// }

//   loops   for loop

// for loop keep running while th econdition is true

// for (let rep = 1 ; rep <= 10 ;  rep++){
//     console.log(`Repeat this please ${rep}`)
// }

// const ijaz=[
//     'ijaz',
//     'sial',
//     'kwl',
//     1994,
//     'pakistan',

// ]
// const types = [];

// for (let i = 0; i < ijaz.length; i++) {
//      console.log(ijaz[i] , typeof ijaz[i]);

//     //  //filling types of the loop
//     //  types[i] = typeof ijaz[i];

//     types.push(typeof ijaz[i]);
// }

// console.log(types)

// // store  in arrayes from 1 loop to another

// const byears = [1994 , 1993, 1999 , 1992];
// const ages = [];

// for (let i = 0 ; i < byears.length ; i++){

//     ages.push(2022 - byears[i]);

// }

// console.log(ages);
// //continue ad break

// const ijaz = [
//     'ijaz',
//     'sial',
//     'kwl',
//     1994,
//     'pakistan',

// ]

// console.log('------Onlys string will be -------')
// for (let i = 0; i < ijaz.length; i++) {

//     if (typeof ijaz[i] !== 'string') continue;
//     console.log(ijaz[i], typeof ijaz[i]);

// }

// console.log('------Onlys only numbers -------')
// for (let i = 0; i < ijaz.length; i++) {

//     if (typeof ijaz[i] === 'number') break;
//     console.log(ijaz[i], typeof ijaz[i]);

// }

// loop backwards   and loop in loop

// const ijaz = [
//     'ijaz',
//     'sial',
//     'kwl',
//     1994,
//     'pakistan',

// ]

// for(let i = ijaz.length - 1 ; i >= 0 ; i--){
//     console.log(i , ijaz[i])
// }

// for (let exercise = 1 ; exercise < 4 ; exercise++){
//     console.log(`------- starting the exercise ${exercise}`)

//     for (let rep = 1 ; rep <10 ; rep++){
//         console.log(`Exercise loop in ${exercise } Lets repeat the exercise ${rep}`)
//     }
// }

//while loop

// let i = 1;
// while (i < 7) {
//     console.log(`this is while statement no ${i}`)
//     i++;
// }

// let dice = Math.trunc(Math.random() * 20) + 1;

// while (dice !== 20) {
//     console.log(`Dice rolle the number ${dice}`)
//      dice = Math.trunc(Math.random() * 20) + 1;

//      if (dice === 20 ) {
//         console.log('Your loop is end at the number of 20')
//      }
// }

// // coding challenge arryas and funtions all  last in fundamentasls 2

// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(calcAverage([44, 455, 234, 23423, 32432, 2234, 23]));
// console.log(calcAverage(bills));
// console.log(calcAverage(tips));
// console.log(calcAverage(totals));

// finish the fundamentals 2 here


// real world exercize 

// const tempratures = [23, 44, 45, 12, 2, 'error ', 43 , 34 , 12 , 34];



// const calcTempAmplitude = function (amp) {
//   let max = amp[0];
//   let min = amp[0];

//   for ( let i = 0 ; i < amp.length ; i++){
//     const curTemp = amp[i];

//     if (typeof  curTemp !== 'number' ) continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;

//   }
//   console.log(max , min)
//   return max - min;


// }

// const tempAmplitude = calcTempAmplitude(tempratures);
// console.log(tempAmplitude);


// const measureKalvin = function () {

//   const measurement ={
//     type: 'temp',
//     unit: 'calciuce',
//     value:Number(prompt('Celciuse in degrees')),
//   }
//   const kalvin = measurement.value + 273;
//   return kalvin;

// }

// // console.log(measureKalvin());


// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// const printForecast = function(arr){
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//      str += `${arr[i]}C in ${i + 1} days ...`;
    
//   }
//   console.log('... ' + str)
// }
// printForecast(data1);
// printForecast(data2);


