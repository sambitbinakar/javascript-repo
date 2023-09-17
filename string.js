 const name ="sambit"
 const age = 21

//console.log(name + age + "say hii");  // not recommened 

console.log(` hello may name is  ${name} and my age is ${age} `)

 const newName = new String('sambit'); 

console.log (newName.length);
console.log(newName.charAt(3));
const sen = "a dog is jump over a child "
//const word= 'dog'  //the dog is found in sen
const word ='car' //thevcar is not found in sen
console.log (`the ${word} is ${sen.includes(word) ?'found' :'not found'} in sen`)
const str1 = "blue whale"
console.log(str1.indexOf('lue'));//1
console.log(str1 . indexOf('whale'))//5
console .log (str1.indexOf('Whale'))//-1  (case-sensetive)
console.log(str1.indexOf('l' ,2))//8

console.log(str1.replace('blue' ,'yellow'));//yellow whale

console.log (word.repeat(3));//carcarcar


const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(30));//the lazy dog.
console.log(str.slice(20 , 40))//jumps over the lazy
console.log(str.slice(-10))//lazy dog.

console.log(str.split( '',3))//[ 'T', 'h', 'e' ]

console.log(str.substring(3,20))//quick brown fox 

const  newString = newName.substring(0 , 5);
console.log(newString);

const strname = new String('hii');
console.log(strname); //[String: 'hii']
console.log(strname.toString())//hii


console.log(newName.toUpperCase());



const str3 = "  sambit  "
console.log( str3);//  sambit   
 console.log(str3.trim());//sambit

console.warn("Ill-formed strings encountered.");