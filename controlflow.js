//conditional Statements

// // if-else statement // // 
// odd or even
// let num = 20;
// if(num%2 === 0){
//   console.log(num,"is even");
// }
// else{
//   console.log(num,"is odd");
// }// 20 is even
// const score = 200
// if(score >100){
//   let power ="fly"
//   console.log(`use power : ${power}`);
// }
// console.log(`user power:${power}`); //not defined but in  var it work  

const balance = 1000
// if(balance > 500) console.log("text");//text //implicate scope

// // if-else if-else satement
// const userloggedin = true
// const debitcard = true
// const loggedingoogle =false
// const loggedinemail = true
// if (userloggedin && debitcard ) {
//   console.log('allow to buy');
  
// }
// else if (loggedinemail || loggedingoogle) {
//   console.log('user logged in');
  
// } 
// let mode = "blue"
// let color;

// if(mode==="dark"){
//   color= "black"
// }
// else if(mode==="blue"){
//   color='blue'
// }
// else{
//   color="white"
// }

// console.log(color); //


// // switch condition // //
// const month = 'apr'
// switch (month) {
  
//   case 1:
//     console.log('anuarry');
//     break;
//   case 2:
//     console.log('february');
//     break;
//   case 3:
//     console.log('march');
//     break;
//   case 4:
//     console.log('april');
//     break;
//   default:
//     console.log('invalid month');
    
//     break;
// }//march

// switch (month) {
  
//   case 'jan':
//     console.log('anuarry');
//     break;
//   case 'feb':
//     console.log('february');
//     break;
//   case 'mar':
//     console.log('march');
//     break;
//   case 'apr':
//     console.log('april');
//     break;
//   default:
//     console.log('invalid month');
    
//     break;
// }//april

//  //  truthy value 
// true ,1,"0 ","false" ," ", [],{} ,function(){}

//  //falsy value
//false , 0 -0, bigint 0n,null ,undefined ,NaN

// const useremail = []
// if (useremail.length === 0) {
//   console.log('Array is empty');
// }
// const emptyobj = {}
// if(Object.keys(emptyobj).length === 0){
//   console.log('object is empty');
// }

// false == 0
// true
// false ==''
// true
// 0 == ''
// true

// // Nullish coalescing operator (??): output nly null and undefind it use for datbase retrive data 
let val1;
// val1 = 5 ?? 10 //5
val1 = null ?? 10 //10
val1 = undefined ?? 20 //20
val1 = null ?? 10 ?? 20 //10 
val1 = null ?? undefined ?? 10 //10
val1 = null ?? undefined //undefind

// console.log(val1);
// ternary Operator
//condition ? trueoutput : falseoutput

let age =20;
// age>=18?console.log("adult"):console.log("not adult");
console.log(age>=18 ? "adult":"not adult"); // simpler,compact if else statement