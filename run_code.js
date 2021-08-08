
// const states = ['California', 'New York', 'New Jersey', 'Alaska', 'New Mexico', 'Montana']

// const someStates = states.some((states) => states.startsWith('New'))

// console.log(someStates)

//flatMap, maps an array and returns it flat
const wordJumble = [ 'shampoo', 'conditioner', 'soap']
//split the words in to individual letters


const splitWords =  wordJumble.flatmap((word) => word.split(' '))
console.log(splitWords)
