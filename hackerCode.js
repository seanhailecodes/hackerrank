//day 4

function Person(initialAge){
  // Add some more code to run some checks on initialAge
  if (initialAge < 0){
      this.age = 0
      console.log("Age is not valid, setting age to 0.")
  }
  else {
      this.age = initialAge 
  }
               
this.amIOld = function(){
 // Do some computations in here and print out the correct statement to the console
  if (this.age < 13){
      console.log("You are young.")
  }
  else if(this.age >= 13 && this.age < 18) {
          console.log("You are a teenager.")
  }
  else {
      console.log("You are old.")
  }
};
  this.yearPasses=function(){
        // Increment the age of the person in here
      this.age++
 };
}


// day 5 

// array of Int, calculate ratios of + - and 0 Print decimal on new line 6 places after

const arr = [ 1, 1, 0, -1, -1]
 
//  reduce the arr to toals of + - and 0, and divide it by total arr for ratio



//reduce
 const negativeVal = arr.reduce((acc, arr ) => {
   if(arr < 0 ){
     acc++
   }
    return acc
   }, 0)

  // console.log(negativeVal)

 const positiveVal = arr.reduce((acc, arr ) => {
   if(arr > 0 ){
     acc++
   }
    return acc
   }, 0)

  // console.log(positiveVal)

   const zeroVal = arr.reduce((acc, arr ) => {
   if(arr === 0 ){
     acc++
   }
    return acc
   }, 0)

  // console.log(zeroVal)

//divide

let negRatio = (negativeVal/arr.length)
let posRatio = (positiveVal/arr.length)
let zeroRatio = (zeroVal/arr.length)

console.log(negRatio.toFixed(6))
console.log(posRatio.toFixed(6))
console.log(zeroRatio.toFixed(6))


//this was the day 5 answer they wanted (shrug) mine worked too!

function plusMinus(arr) {
  // Write your code here
  let length = arr.length
  let positiveCount = 0
  let negativeCount = 0
  let zeroCount = 0
  
  for(let i =0; i < length; i++){
      if (arr[i] > 0){
          positiveCount ++
      }
      else if (arr[i] < 0){
          negativeCount ++
      }
      else if (arr[i] == 0){
          zeroCount ++
      }
  }
let negRatio = (positiveCount/length)
let posRatio = (negativeCount/length)
let zeroRatio = (zeroCount/length)

console.log(negRatio.toFixed(6))
console.log(posRatio.toFixed(6))
console.log(zeroRatio.toFixed(6))
}

//sockMerchant

// const map = {};

// let res = 0

// ar.forEach(num => {
//   if(!map[num] map[num] = true)
//   else  {
//     delete map[num]
//     res ++
//   }
//   return res
// })

//sockMerchant with sort

function sockMerchant(n, ar) {
  const sortedSocks = ar.sort((a, b) => a - b)
  let pairs = 0

  for (let i = 0; i < n; i ++) {
    if (sortedSocks[i] === sortedSocks[i + 1]{
      pairs++
      i++
    }
  }
  return pairs
}

//valley/mountain

//steps, each step 1 unit
//U. D (walks start and end at sea level (0))
// Mountain is a sequence of steps above sea level and a Vallet below
// print Valleys walked through

function countingValleys(n, s) {
  let altitude = 0
  let num_valleys = 0
 for (let i = 0; i < n; i++) {
      if (s[i] == 'D'){
          altitude--
      }
       else {
           if (elevation == -1) {
               altitude++
           }
           altitude++
       }
       return num_valleys
}


//loops day 5 hackerrank

let n = 3 
let i = 1
var result

while (i <= 10) {
  result = i * n
  console.log(n + ' x ' + i + ' = ' + result)
  i++
}
