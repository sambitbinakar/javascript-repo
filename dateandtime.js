let mydate = new Date()
console.log(mydate.toString())  //Mon Sep 18 2023 19:59:42 GMT+0530 (India Standard Time)
console.log(mydate.toDateString())  //Mon Sep 18 2023
console.log(mydate.toLocaleDateString())  //9/18/2023
console.log(mydate.toJSON()) //2023-09-18T14:29:42.959Z

let newDate = new  Date(2023 ,0 ,23)
console.log(newDate.toLocaleDateString()); // 1/23/2023