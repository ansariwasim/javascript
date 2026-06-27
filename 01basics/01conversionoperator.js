let score = "13";

// console.log(typeof score)
// console.log(typeof (score))

let valueInNumber = Number(score);
//  console.log(typeof valueInNumber);

//   "33" => 33
// "33abc" => NaN
// true => 1; false => 0

 let isloggedIn = 0

 let booleanIsLoggedIn = Boolean(isloggedIn)
//  console.log(booleanIsLoggedIn);

//  1 = true; 0 = false
//  "" => false
//  "hitesh" => ture

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// +++++++++++++++++++++++++++++++++++++++++++++++

// two type of memory in javascript

// 1. stack memory  
// 2. heap memory  

//  stack (primitive) , Heap (Non-Primitive)


let myYoutubename = "codewithwasim";

let anothername = myYoutubename;
anothername = "wasim ansari"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "wasim@gmail.com";
console.log(userOne.email)
console.log(userTwo.email);

