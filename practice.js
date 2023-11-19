// //console.log('hello world!')
// const accid =144435;
// let accemail ="sambit@gmail.com";
// var accpass ="1234";
// accountcity="konark"
// accemail ="s@gmail.com"
// accpass ="3443434334"
// accountcity="bbsr"
// let state;//  undefined
// //console.table([accemail,accpass,accountcity,state])
// let name1="hitesh"
// let score = '33'
// //console.log(typeof score);

// //let value =Number(score)
// //console.log(typeof value);

// let  value =3
// let neg = -value
// // njconsole.log(neg)
// let str2 ="hello";
// let str3="sambit";
// let str4 = str2+str3
// // console.log(str4) 
// // console.log("1"+1);
// // console.log(1+"2");
// // console.log("1"+2+2);
// // console.log(1+2+"2");
// // console.log((3+4)*5 %3);
// // console.log((true));
// let num1,num2,num3;
// num1=num2=num3 = 2+2;
// // console.log(num3);
// let num4=100;
// let num =++num4;
// //  console.log(num);

// //  console.log("1"=== 1);
// //  console.log(undefined ==0);
// //stack primirive
// //heap non promitive
// let name = "sambit";
// let anothername= name;
// // console.log(anothername);
// // console.log(name);
// let userone ={
//   email :"sambit@gamil",
//   no:56789890090909
// }
// let  user2 = userone
// user2.email = "binakar@gamil.com"
// // console.log(user2.email);
// // console.log(userone.email);
// const name2 ="sambit_binakar"
// const repo = 5
// // console.log(`hello lmy  name is ${name2} no  of repo  is ${repo}`);
// const getname = new String ('sambit')
// // console.log(getname[1]);
// // console.log(getname.charAt(3));
// // console.log(getname.indexOf('i'));
//  let nm = getname.substring(0,3);
// //  console.log(nm);

//  const name5= "  kanha  "
// //  console.log(name5);
// //  console.log(name5.trim());

// //  console.log(name2.split('_'));
//  const url ="http://sambit%20binakr+about+name+password"
// //  console.log(url.includes('sambit  '));
// const score = 400;
// const balncee = new Number(100)
// const othernm = 13.345
// const hundred = 1000000
// console.log(hundred.toLocaleString('en-IN'));
// console.log(score);
// console.log(balncee);
// console.log(othernm.toPrecision(7));
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(3.567));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.8));
// console.log(Math.max(4,5,6,6,7,7,45));
// console.log(Math.random());
// const min =10;
// const max =20

// console.log(Math.floor(Math.random()*(max-min+1))+10);
// console.log(Math.pow(3,5));

// let date1 =  new Date();
// // console.log(date1);
// console.log(date1.toDateString()+1);
// // console.log(date1.toLocaleDateString());
// // console.log(date1.toLocaleString());
// const myTimestamp = Date.now()
// console.log(myTimestamp);
//  let newdate = new Date();
// let cart=newdate.getDate()+1;
// console.log(cart);
// let date=newdate.toLocaleString('default',{
//   weekday:'long',
//   month:'long'
// })
// console.log(date);

// //console.log(arr2);
// const myarr = [0,1,2,3,4,5,6]
// const arr2 = new Array(1,2,3,4,5,6,7)
// myarr.push(7)
// myarr.pop(7)
// myarr.unshift(9)
// myarr.shift()
// console.log(myarr.includes(8));

// const newarr = myarr.join()//convert  to string
//console.log(newarr);
// console.log("A",myarr);
// const n1 = myarr.slice(1,3)
// console.log(n1);
// console.log("B",myarr);

// const n2 = myarr.splice(1,3)
// console.log(n2);
// console.log("c",myarr);


// // myarr.push(arr2)
// const alln = myarr.concat(arr2)
// const alln =[...myarr,...arr2]
// console.log(alln); 
const user1 = {
  name:"sambit",
  "fullname":"sambitbianakar",
  age:20,
  location:"Bhubaneswar",
  email:"sambit@gmail.com",
  isloggedin:false,
  lastloginday:["monday","saturday"]
}
// console.log(user.email);
// console.log(user["email"]);
// console.log(user['fullname']);
const user2 ={}
user2.name = "sambit"
user2.id = 3
user2.isloggedin = false
// console.log(user2);
const reguser={
  email:"sambit@gmail.com",
  fullname:{
    userfullname:{
      firstname :"sambit",
      lastname:"binakar"
    }
  }

}
//console.log(reguser.fullname.userfullname.lastname);
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)
const obj3 ={...obj1,...obj2}
// console.log(obj3);
const user=[
  {
    id:1,
    email:"sambi@gamil.com"
  },
  {
    id:2,
    email:"sambitbina@gamil.com"
  },
  {
    id:3,
    email:"sambitbinakar@gamil.com"
  }
  
]
// console.log(user[1].email);
// {
//   "name":"sambit"
// }