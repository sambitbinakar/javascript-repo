const score = 400
console.log(score);//400

 const balance = new Number(100);
 console.log(balance);//[Number: 100]

 console.log(balance.toString());//100 type is string
 console.log(balance.toFixed(2));//100.00
console.log((2.35).toFixed(1)) //2.4 it roundup

console.log(Number.isFinite(Infinity)) //false
console.log(Number.isFinite(NaN)) //false
console.log(Number.isFinite(null)) //false
console.log(isFinite(null)); //true it assign the number 0
 //const num = 123.3453   //123
 //const num = 123.8765 //124
 const num  = 23.8765 //23.9
 console.log(num.toPrecision(3));
 
 console.log(num.toExponential()); //2.38765e+1

 const num2 = 10000000
 console.log(num2.toLocaleString('en-IN')) //1,00,00,000


 //+++++++++++=Math++++++++++
 console.log('math')
 console.log(Math)

 console.log (Math.abs(-4))//4
 console.log(Math.abs(null)) //0
 console.log(Math.cbrt(2))//1.2599210498948732 // cube root of 2
console.log(Math.pow(3,4))//81
 console.log(Math.round(4.6))//5
 console.log(Math.ceil(4.4))//5
 console.log(Math.floor(4.7))//4
 console.log(Math.max(3,4,5,6,78,456))//456
 console.log(Math.random()) // 0.34586748406602763
console.log(Math.round(4.6234))//5