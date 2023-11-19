var c = 300//global scope

if(true){//block scope
  let a=10
  const b =20
  var c= 30
 // console.log("inner: ",a);//10
}

// console.log(a);//a is not defined
// console.log(b);//b is not defined
// console.log(c);//300

// nested scope
function one(){
  const username = "sambit"


  function two(){
    const age = 21
    //console.log(username);
  }
  //console.log(age);//age is not defined

  two() //if we comment  the two   nothing print
}
one()//sambit

if(true){
  const username="sambit"
  if(username === "sambit"){
    const age = 21
   // console.log(username+age);
  }
  //console.log(age);  Error not defind 
}
//console.log(username);//error not defind
//sambit21

//console.log(addone(5)); //6 / hoisting
function addone(num){
  return num +1
}
//console.log(addone(5));//6

//console.log(addtwo(5));// return  error 
const addtwo = function(num){
  return num+2
}
// console.log(addtwo(5));//7