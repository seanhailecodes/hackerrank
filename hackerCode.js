          // test code here Objective In this challenge, we're going to learn about the difference between a class and an instance; because this is an Object Oriented concept, 
          
        //   Task Write a Person class with an instance variable,, and a constructor that takes an integer, , as a parameter. The constructor must assign to after confirming the argument passed as is not negative; if a negative argument is passed as , the constructor should set to and print Age is not valid, setting age to 0.. In addition, you must write the following instance methods:     yearPasses() should increase the  instance variable by  .amIOld() should perform the following conditional actions:   If , print You are young..If and        , print You are a teenager..    Otherwise, print You are old..To help you learn by example and complete this challenge, much of the code is provided for you, but you'll be writing everything in the future. The code that creates each instance of your Person class is in the main method. Don't worry if you don't understand it all quite yet! Note: Do not remove or alter the stub code in the editor. Input Format Input is handled for you by the stub code in the editor. The first line contains an integer, (the number of test cases), and the subsequent lines each contain an integer denoting the of a Person instance. Constraints Output FormatComplete the method definitions provided in the editor so they meet the specifications outlined above; the code to test your work is already in the editor. If your methods are implemented correctly, each test case will print or lines (depending on whether or not a valid was passed to the constructor).

// Variabes 
// 1 age 
// 2 initialAge
// 3 

// Rules
// 1 Person Class
// 2 constructor sets age to 0, and print "Age is not valid, setting age to 0.." 
// 3 fx yearpasses() **increases age by 1
// 4 amIOld() should perform follwing conditionals
//      if age < 13, print "You are young.."
//      if age >= 13 and age < 18 "print You are a teenager.."
//      if else  print "You are old.."



//My first wrong answer -I'LL TAKE IT!  =) 

//1-Write a Person class 
function Person(initialAge){
 //3 - and a constructor that takes an integer, initialAge as param
 //5 - after confirming (5) argument passed as initialAge is not negative; 
        if (initialAge <= 1){
          //2 - instance variable, age ,
          //4 - The constructor must assign initialAge to Age after confirming (5)
        age = initialAge
        }
        //6 if a negative argument is passed as , the constructor should set to and print Age is not valid, setting age to 0
        else {
            age = 0
            console.log("Age is not valid, setting age to 0.")
        }

       }

 yearPasses: yearPasses(){
        return ++person.age
       }


      //  Updated Response


      function Person(initialAge){
            if (initialAge <0){
            age = initialAge
            }
            else {
                age = 0
                console.log("Age is not valid, setting age to 0.")
            }
        
      this.amIOld=function(){
        if (age < 13){
            console.log('You are young.')
        }
        else if(age > 13 && age < 18) {
                console.log('You are a teenager.')
        }
        else {
            console.log('You are old')
        }
      };
        this.yearPasses=function(){
            age++
    };
  }
  function Person(initialAge){
    // Add some more code to run some checks on initialAge
        if (initialAge < 0){
         this.age = initialAge
            console.log("Age is not valid, setting age to 0.")
        }
        else {
            this.age = 0
        }
        
            
  this.amIOld = function(){
   // Do some computations in here and print out the correct statement to the console
    if (this.age > 0 && this.age < 13){
        console.log('You are young.')
    }
    else if(this.age >= 13 && this.age < 18) {
            console.log('You are a teenager.')
    }
    else {
        console.log('You are old')
    }
  };
   this.yearPasses=function(){
          // Increment the age of the person in here
        this.age++
   };
}

// returns ValidityState, but 2nd check reads 'are old should be young ?????'