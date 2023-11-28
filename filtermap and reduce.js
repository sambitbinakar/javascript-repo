const mynum = [1,2,3,4,5,6,7,8]
// const newnum=mynum.filter((num)=>num > 4)//5,6,7,8

//const newnum=mynum.filter((num)=>{ return num > 4}) // in function it return statemenrt  without {},(),also with()  but statement  in {} it use to "return " key word bcz it create a block scope
const newnum2 = []
mynum.forEach((num)=>{
 
  if(num>4){
    newnum2.push(num)
  }
})
// console.log(newnum2);//[ 5, 6, 7, 8 ]
const mybooklist = [
  {title:"book1",genre:"science",publish:1989,edition:2000},
  {title:"book2",genre:"history",publish:1890,edition:2010},
  {title:"book3",genre:"fiction",publish:2000,edition:2013},
  {title:"book4",genre:"non-fiction",publish:1945,edition:2007},
  {title:"book5",genre:"adventure",publish:2001,edition:2020},
  {title:"book6",genre:"history",publish:1967,edition:2010},
  {title:"book7",genre:"science",publish:1956,edition:2022},
]

// const findbook = mybooklist.filter((bk)=> bk.genre === "science")
 const findbook = mybooklist.filter((bk)=> {
  return bk.edition >= 2010 && bk.genre === "science"})

// console.log(findbook);
// const newnums= mynum.map((num)=>num+10)//[11,12,13,14,15,16,17,18]

const newnums= mynum  // it called chaining system  inthis ist map value i/p of 2nd map and o/p 2nd map i/p of filterfunctio
                .map((num)=>num+10)
                .map((num)=>num+10)
                .filter((num)=>num>=21) 
// console.log(newnums);


// // reduce () // 

const totalnum = mynum.reduce((acc,currval)=> {
  console.log(`acc:${acc}and current value ${currval}`);
  return acc + currval
},0)
// console.log(totalnum);
const course=[
  {name:'frontend',price :4999},
  {name:'backend',price :3999},
  {name:'dsa',price :3500}
]
const totalcost = course.reduce((acc ,item)=>acc+ item.price,0)
console.log(totalcost);//12498