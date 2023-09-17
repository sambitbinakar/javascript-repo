"use strict";//treat all js code as new version
// useto node not web server
// for output  "node file_name"
let name ="sambit";//string
let age =20; // number
let x = true; // boolean
let y;        //undefined
console.log(typeof age)
console.log(typeof x)
console.log(typeof y)
console.log (typeof null) //object 
console.log (typeof undefined)  //undefined
const id = Symbol('123');
const  id2 = Symbol ('123');
console.log( id == id2); // false  =>  itis not equal   for Symbol  datatype 
 //primtive datatype (string ,  number,boolean,undefined,null,symbol,bigint)
 // non primitive(reference type) (object ,function,array)
// data type conversion
// conversion in number 
let num ="33" // 33 
let score ="33abc";// type =>NaN 
let a ="true" ;// 1   
let z = null ; //0      
let k = undefined ; // NaN
console.log()
let valueinNum = Number(k);
console.log(typeof valueinNum);
console.log(valueinNum);


//conversion in string 
let value = 33 // string
let string = String(value);
console.log(typeof string) ;



//conversion in boolean
 let bool = 1; //true
 let bool0 = 0;//false
 let roll =""; //false
 let c = "sambit" // true
 let boolIn = Boolean(bool0);
 console.log(boolIn);



//+++++++++++++++++++++++++++++++++++++++++++++++++++++
// memeory  loction 
// primitive ( stack)  non primitive (heap )

let name1 = "sambit ";
let  name2 =  name1 ;
name2 ="kanha";
console.log(name1); //   sambit 
console.log(name2) // kanha 
/* so that   primitive datatype store value in stack memory if assign a vlaue it copy the value if we change the value of copy variable it does not affected the main  value 
  But  in non primitive  datatype if we asign the a variable in another variable if change the value  it affected original value  it give reference  */


  