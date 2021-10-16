
// const states = ['California', 'New York', 'New Jersey', 'Alaska', 'New Mexico', 'Montana']

// const someStates = states.some((states) => states.startsWith('New'))

// console.log(someStates)

//flatMap, maps an array and returns it flat
const wordJumble = [ 'shampoo', 'conditioner', 'soap' ]
//split the words in to individual letters


const splitWords =  wordJumble.flatmap((word) => word.split(' '))
console.log(splitWords)


// map + 5
const grades = [88, 94, 71,99, 53, 77]

const gradesPlusFive = grades.map((grade) => grade + 5)

console.log(gradesPlusFive)

const friends = [
    { firstname: 'Ghostface', lastname: 'Killa'},
    { firstname: 'Michael', lastname: 'Jordan'},
    { firstname: 'Skylah', lastname: 'Haile'}
  ]
  
  // Create a new array includeing both f/l
  
  // const fullName = friends.map((friends) => friends.firstname + ' ' + friends.lastname)
  
  // console.log (fullName)
  
  
  // can also use temporate literal 
  
  const fullName = friends.map((friend) => `${friend.firstname} ${friend.lastname}`
  )
  
  console.log (fullName)

  const pets = [
    { name: 'Denver', type: 'dog'},
    { name: 'Lola', type: 'dog'},
    { name: 'Bella', type: 'cat'}
  ]
  
  const cats = pets.filter((pet) => pet.type === 'cat')
  const dogs = pets.filter((pet) => pet.type === 'dog')
  
  // console.log(cats)
  console.log(dogs)

  const movies = [
    { title: 'Avatar', year: '2009', rating: 'PG-13'},
    { title: 'I Am Legend', year: '2007', rating: 'PG-13'},
    { title: '300', year: '2006', rating: 'R'},

    { title: 'The Avengers', year: '2012', rating: 'PG-13'},
    { title: 'The Wolf of Wallstreet', year: '2013', rating: 'R'}
]

// new array just titles

let movieTitles = movies.map((movies) => movies.title)
// console.log(movieTitles)


// new array only PG-13

let movieRating = movies.filter((movie) => movie.rating === 'PG-13')
// console.log(movieRating)

// how many movies are rated R --important to note here reduce REQUIRES ACC, and often an 'i' (of 0) so there is no implicit return value

let howManyR = movies.reduce((acc, movie) => {
 if(movie.rating === 'R'){
   acc++
 }
 return acc
}, 0)


console.log(howManyR)


