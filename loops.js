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