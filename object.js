//singleton

//object literals
const mySym = Symbol("keys")
const jsUser = {
    name: "sambit",
    age : 20,
    [mySym]:"keys", //[Symbol(keys)]: 'keys' ( on print )
    location:"Bhubaneswar",
    email:"sambit@gmail.com",
    "full_name":"sambit binakar"
}
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full_name"]);
console.log(jsUser[mySym]);

jsUser.email ="sambit@yahoo.com" // change  the object value
Object.freeze(jsUser) // freez the object cant change the value inside it
jsUser.email = "sambit@google.com" // not change the value in object
//console.log(jsUser);
//object create by new keyword
const user1 = new Object() // singlton object

const user2 = {} // multiton object

// nested objects
const regUser ={
    fullname:{
        userName:{
            firstName:"sambit",
            lastName:"Binakar"
        }
    }
}

console.log(regUser.fullname.userName.firstName);//sambit  (access the nested object)

//merge objecs
const obj ={1:"a",2:"b"}
const obj2 ={3:"a",4:'b'}

//const obj4 = Object.assign({},obj,obj2)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj4 = {...obj ,...obj2}// spreed method { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } 
console.log(obj4);

const users = [
    {
    id:1,
    email: "sam@gmail.com"
    },
   {
    id:1,
    email: "sambit@gmail.com"
    },
    {
    id:1,
    email: "sam@google.com"
    }
]

console.log(users[1].email);//sam@gmail.com
console.log(Object.keys(jsUser)); // return  keys  of object
console.log(Object.values(jsUser));//return  values  of object
console.log(Object.entries(jsUser));//[[ 'name', 'sambit' ],[ 'age', 20 ],[ 'location', 'Bhubaneswar' ],[ 'email', 'sambit@yahoo.com' ],[ 'full_name', 'sambit binakar' ]]  (return  all key and value  in the array  from )

console.log(jsUser.hasOwnProperty('email'));// true   (return  true/false value)

const course = {
    course_name : "javascript",
    price:0,
    source:"youtube"
}

const {source : src } = course // destructuring of object

//console.log(source); //youtube
console.log(src); 

const nav =({company})=>{

}  // also use in react called destructuring  
nav(company = "sambit")
//object constructor
function user(id,name,age,email,gender){
    this.id=id;
    this.name=name;
    this.age =age;
    this.email=email;
    this.gender=gender;
}
var profilecreate =new user( 1,"sambit", 20,"sam@gmail.com","male");
console.log(profilecreate);//user {id: 1,name: 'sambit',age: 20,email: 'sam@gmail.com',gender: 'male' }

console.log(Object.entries("foo"));//[ [ '0', 'f' ], [ '1', 'o' ], [ '2', 'o' ] ]

console.log(Object.entries(100)); //[]

//display object 1.by name 2. ina loop 3. .value() 4.JSON.stringify()
const person = {
    name:"sambit",
    age:20,
    city:"BBSR"
};
console.log(person.name +" "+person.age+" "+person.city);//sambit 20 BBSR (by name property)
let txt ="";
for(let x in person){
    txt += person[x]+" "
};
console.log(txt);//sambit 20 BBSR (by loop for display)

console.log(Object.values(person));//[ 'sambit', 20, 'BBSR' ]
console.log(Object.keys(person));//[ 'name', 'age', 'city' ]

const chai = {
    name :'masala chai',
    price:180,
    isAvalable:true
}
console.log(Object.getOwnPropertyDescriptor(chai,'name'));
/*{
  value: 'masala chai',
  writable: true,
  enumerable: true,
  configurable: true
} */
Object.defineProperty(chai ,"name",{
    writable:false,
    enumerable:true,

})//change the object properties
console.log(Object.getOwnPropertyDescriptor(chai,'name'));
/* {
  value: 'masala chai',
  writable: false,
  enumerable: true,
  configurable: true
}*/
const chai2 = {
    name :'ginger chai',
    price:100,
    isAvalable:true,
    orderChai:function(){
        console.log('chai nenhi bani');
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai2,'name'));
for(let [key,value] of Object.entries(chai2)){
    if(typeof vlaue != 'function'){
        console.log(`${key} => ${value}`);
    }
}
/*name => ginger chai
price => 100
isAvalable => true
orderChai => function(){
        console.log('chai nenhi bani');

    }*/