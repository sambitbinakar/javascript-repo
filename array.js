// arrays

const arr = [1,2,3,4,5,6,7,8]
const stu = ["sam", "hari","rama"]
const arry2 = new Array(1,2,3,4)
console.log(arry2[1]);


arry2.push(5) //insert a value in last 
console.log(arry2)//[ 1, 2, 3, 4, 5 ]

arry2.pop() //remove the last item
console.log(arry2)//[ 1, 2, 3, 4 ]

arry2.unshift(9)//item add in array in 1st position
console.log(arry2);//[ 9, 1, 2, 3, 4 ]

arry2.shift() // remove 1st item
console.log(arry2)//[ 1, 2, 3, 4 ]
const arr3 = arry2.join() // convert array to  string 
console.log(arr3)
console.log(typeof(arr3));

//slice , splice

console.log("A ",arry2);//A  [ 1, 2, 3, 4 ]
const ny1 = arry2.slice(1 , 3)// start index inclusive and end index exclusive no change in main array
console.log(ny1);//[ 2, 3 ]
console.log('B ',arry2);//B  [ 1, 2, 3, 4 ]

const ny2 = arry2 .splice(1 ,3)// show all start and end index but it remove this part from  the main array
console.log(ny2);//[ 2, 3, 4 ]
console.log('c ',arry2);//c  [ 1 ]

const num =[1,2,3,4,5,6,7]
const lett = ["a","b","c","d","e"]
const all = num.concat(lett)
console.log(all);//[ 1, 2, 3, 4, 5, 6, 7, 'a', 'b', 'c', 'd', 'e' ]

const all2 =[...num , ...lett] //spread function  same as concat
console.log(all2);

const num2 = [1,2,3,[4,5,6],7,8,[9,10,[11,12]]]
const num3 = num2.flat(Infinity)//flat use concate the nested array
console.log(num3);[1,2,3,4,5,6,7,8,9,10,11,12]
console.log(Array.isArray("sambit"));//false
console.log(Array.from("sambit"));//[ 's', 'a', 'm', 'b', 'i', 't' ]   convert array to string,object etc
console.log(Array.from({name:"sambit"}));//[] not conert to array gives a proper instruction  for key or value 

let  score = 100;
let  score2 = 200;
let  score3 = 300;
console.log(Array.of(score,score2,score3));//[ 100, 200, 300 ]
//console.log(num3.copyWithin(6,3,9));
console.log(num3.fill(0,8,11));//[1,2,3,4,5,6,7,8,0,0,0,12]

console.log([1,3,4].reverse())//[ 4, 3, 1 ]
console.log([4,20,15,30,34,56,67].sort());
