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

const students = [
  { name: 'Sean' , grade: 75},
  { name: 'Pookie' , grade: 93},  
  { name: 'Samantha' , grade: 90},  
  { name: 'Michael' , grade: 94}
]


students.sort((a,b) => b.grade - a.grade)
console.log(students)
console.log(students.reverse())


const overNinety = students.find((students) => students.grade > 90)

const variableForfunctioin = students.find((students) => students.grade > 90)
console.log(overNinety)


//includes arr.includes()
const professions = ['lawyer', 'doctor', 'developer', 'olympic athlete', 'rapper']

const rapperIncluded = professions.includes('rapper')

console.log(rapperIncluded)


const states = ['California', 'New York', 'New Jersey', 'Alaska', 'New Mexico', 'Montana']


const someStates = states.some((states) => states.startsWith('New'))

const everyStates = states.every((states) => states.startsWith('New'))

console.log(someStates)
console.log(everyStates)

const bowlingScores = [154, 204, 300, 184, 286]

let score = bowlingScores.includes(300)

console.log('Perfect score',score)

let someScore = bowlingScores.some((bowlingScores) => (bowlingScores < 150))

console.log('Scores under 300', someScore)

let isScoreEven = bowlingScores.every((bowlingScores) => { bowlingScores % 2 === 0 })

console.log('Is every score even', isScoreEven)

const drinks = [ 'coffee', 'tea', 'soda', 'water']


drinks.shift() //moves it from the front
drinks.unshift('beer') //add it to the front

console.log(drinks)

const foods = [
  { food: 'raspberries', type: 'fruit'},
  { food: 'orange', type: 'fruit'},
  { food: 'broccoli', type: 'vegetable'},
  { food: 'quinoa', type: 'grain'}
  ]
  
  const blackBeans = { food: 'black beans', type: 'legume'}
  const chiaSeeds =  { food: 'chia seeds', type: 'seed'}
    
    
  foods.pop()
    // console.log(foods)
  
  foods.shift()
      // console.log(foods)
  
  foods.unshift(blackBeans)
    // console.log(foods)
  
  foods.push(chiaSeeds)
    console.log(foods)
  