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