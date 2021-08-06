// Loops
// not working yet

var n = 3

function multiply(n) {
for (var n = 0; n <= 10; n = n*+) {
  console.log(n)
}
}

multiply(n)

// not working but closer 

var n = 3

function print(n){

  while ( n < 11){
      console.log(n)
    if ( n > 10){
      break
    }
    n = n +1
  }

}

print(n)

// results 3, 4, 5, 6, 7, 8, 9, 10

//this actually works the same but much cleaner

var n = 3

function print(n){
  while ( n < 11){
      console.log(n)
    n++
  }
}

print(n)

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line wit 6 places after the decimal. https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one


arr = [1,1,0,-1, -1]

//creater a var for the array
// iterate the variable for +  - and 0;scottyArray, divide each by total length

// result ? .oooooR (6 places after decimal) - print all ratios
//no return value from function!!!!!


arr = [1,1,0,-1, -1]


var arrLength = arr.length

var positiveInt = 0 
var negativeInt = 0
var zero = 0

function ratio(arr){
for(var i = 0; i < arrLength; i++){
 if (arr[i] < 0){
   negativeInt++
 }
 else if (arr[i]> 0) {
   positiveInt++
  //  console.log(positiveInt)
 }
 else if (arr[i] == 0)
  zero++
 }
}

console.log(negativeInt)
console.log(positiveInt)
console.log(zero)x encodeURIComponent


// fuckin around to learn a bit
// function testLength(){
// for(var i = 0; i < arr2.length; i++)
//  if (arr[i] > 0){
//    return arr + arr2
//  }
// }

// console.log(testLength(arr, arr2))

function ratio(arr) {
  for(var i = 0; i < arrLength; i++){
   if (arr[i] < 0){
     negativeInt++
   }
   else if (arr[i]> 0) {
     positiveInt++
     console.log(positiveInt)
  
   }
   else (i ==  (len -1)) {
   var  zeroInt = len - (negativeInt+positiveInt)
    console.log(zeroInt)
   }
  }


  //Arrays work


const pets = [ 'dog', 'cat', 'rabbit' , 'hamster ']

const petsLength = pets.length

// pets.forEach((e) => console.log(e))

const scores = [ 50,60,70,80,90,100]

const logScore = (scores) => console.log('Score Over 65', scores)

scores.forEach((e) => {
 if (e > 65)
 logScore(e)
})

const grades = [88, 94, 71,99, 53, 77]

grades.sort((a, b) => a - b)
console.log(grades)