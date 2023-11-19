function saymyname(){
  console.log("sambit");
  console.log("binakar");
}
//saymyname();
// function add2no(num1,num2){
//   console.log(num1+num2);
// }
// add2no(3,5)//8
// add2no(3,"5")//35
// add2no(3,"a")//3a
// const result = add2no(3,5)
// console.log(result);//undefind = bcz in function cant return a value a print a value  
// function add2no(num1,num2){
//     return num1+num2;
//  }
//  const result = add2no(3,5)
//  console.log("result:",result);//result: 8  bcz it return a perticular value 
// function loginuser(user){
//   return`${user} current logged in`
// }
// console.log(loginuser("sambit"));

// function calcartprice(...num1){ //rest operator it use to convert multipule value in a array
//   return num1
// }

// console.log(calcartprice(200,300,400)); //[200,300,400]
// const user={
//   username:"sambit",
//   age:21
// }
// function handelobject(anyobject){
//   console.log(`username${anyobject.username} and age is${anyobject.no}`);
// }
// // handelobject(user)

// handelobject({
//   username:"sambit",
//   no:7846896881
// })//object define in functionv                                                                              

// const array = [200,300,400] //function with array
// function returnvalue(getarray){
//   return getarray[1]
// }
// console.log(returnvalue(array));

//=============Arrow function  ===============
//this keyword:-crurrent context

// const user={
//   username :"sambit",
//   price:1000,

//   welcomemsg: function(){
//     console.log(`${this.username},welcome to website`)
//     console.log(this);//{ username: 'sambit', price: 1000, welcomemsg: [Function: welcomemsg] }
//   }
// }
// user.welcomemsg()//sambit,welcome to website
// user.username="sam"//
// user.welcomemsg()//sam,welcome to website
// console.log(this);//{ username: 'sam', price: 1000, welcomemsg: [Function: welcomemsg] }

// function chai(){
//   let username ="sambit"
//   console.log(this.username);//this is only use in object //undefind
// }

// function chai(){
//   let username ="sambit"
//   console.log(this.username);
// }
// chai()
