for (let index = 0; index < 10; index++) {
  const element = index;
  // console.log(element);
}
//console.log(element);  //element not defind

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element==5) {
    // console.log('number 5');
  }
  // console.log(element);
}//1,2,3,4,'number 5',5,6,7,8,9

// for (let i = 0; i <=2; i++) {
//   console.log(`outer loop value${i}`);
//   for (let j = 0; j <=2; j++) {
//     console.log(`inner loop value ${j} and outer loop value ${i}`);
//   }}
//outer loop value0
// inner loop value 0 and outer loop value 0
// inner loop value 1 and outer loop value 0
// inner loop value 2 and outer loop value 0
// outer loop value1
// inner loop value 0 and outer loop value 1
// inner loop value 1 and outer loop value 1
// inner loop value 2 and outer loop value 1
// outer loop value2
// inner loop value 0 and outer loop value 2
// inner loop value 1 and outer loop value 2
// inner loop value 2 and outer loop value 2

//  // break and continue

// for (let index = 0; index <=20; index++) {
//   if (index==5) {
//     console.log('detected');
//     break;
//   }
//   console.log(`vlaues of i is ${index}`);
// } // run upto 4 if print detected then  stop (it break the loop )


// for (let index = 0; index <=20; index++) {
//   if (index==5) {
//     console.log('detected');
//     continue;
//   }
//   console.log(`vlaues of i is ${index}`);}
//  run totalloop but in 5 number  detected print then continue the rest part after 5

// // while loop // // 
// while (condition) {
//   //statement code
// }


// let arr =['flash','iron man','hulk']
// let num= 0;
// while (num< arr.length) {
//   console.log(`name of heros ${arr[num]}`);
//   num++;
// }

// d0-while loop
// let score = 11;
// do {
//   console.log(`score is ${score}`);
//   score++
// } while (score<=10); //scoreis 11


//for-of loop

const arr = [1,2,3,4,5]

for (const num of arr) {
  // console.log(num);
}//1,2,3,4,5

const greeting = "hello world"

for (const greet of greeting) {
  //console.log(`char is ${greet}`);
}


// maps
//  ==>  map does not contain the duplicate value 
const map = new Map()

map.set('IN',"India")
map.set('IN',"India")
map.set('UA',"united statesof america")
map.set("fr","france")

// console.log(map);//Map(3) {
//   'IN' => 'India',
//   'UA' => 'united statesof america',
//   'fr' => 'france'
// }

for (const[key,value] of map) {
  //console.log(key ,':-',value);
}
// IN :- India
// UA :- united statesof america
// fr :- france

const obj = {
  "game1":"cricket",
  "game2":"football"
}

// for (const [key,value] of obj) {
//   // console.log(key ,':-',value);//obj not itereble
// }

const language = {
  js:"javascript",
  cpp:"c++",
  py:"python",
  rb:'ruby',
  java:"java"
}

//for -in loop
// use retrive the data by key .
// for (const key in language) {
//   console.log(key);//

// }
// for (const key in language) {
//   console.log(`${key} shortcut for ${language[key]}`);//  retrive the key's value fro object

// }

const programming =["js","py","java","cpp"]
// for (const key in programming) {
//     console.log(programming[key]); // js,py,java,cpp
// }

for (const key in map) {
  // console.log(key); //map is not itereable not run
}

// // for-each loop

programming.forEach(function(item){
  // console.log(item);//js,py,java,cpp
})

// programming.forEach((item)=>{console.log(item);}) //js,py,java,cpp

function printMe(item) {
  // console.log(item);
}
programming.forEach(printMe)////js,py,java,cpp

programming.forEach((item,index,arr)=>{console.log(item,index,arr);}) //print item index and arr//js 0 [ 'js', 'py', 'java', 'cpp' ]


const mycoding =[
  {
    lang:"javascript",
    filename:".js"
  },
  {
    lang:"python",
    filename:".py"
  },
  {
    lang:"c++",
    filename:".cpp"
  },
  {
    lang:"java",
    filename:".java"
  }
]

mycoding.forEach((item)=>{
  console.log(item.lang);
})
//  for each does not return any value it return undefind