          // test code here Objective In this challenge, we're going to learn about the difference between a class and an instance; because this is an Object Oriented concept, it's only enabled in certain languages. Check out the Tutorial tab for learning materials and an instructional video! Task Write a Person class with an instance variable,, and a constructor that takes an integer, , as a parameter. The constructor must assign to after confirming the argument passed as is not negative; if a negative argument is passed as , the constructor should set to and print Age is not valid, setting age to 0.. In addition, you must write the following instance methods:     yearPasses() should increase the  instance variable by  .amIOld() should perform the following conditional actions:   If , print You are young..If and        , print You are a teenager..    Otherwise, print You are old..To help you learn by example and complete this challenge, much of the code is provided for you, but you'll be writing everything in the future. The code that creates each instance of your Person class is in the main method. Don't worry if you don't understand it all quite yet! Note: Do not remove or alter the stub code in the editor. Input Format Input is handled for you by the stub code in the editor. The first line contains an integer, (the number of test cases), and the subsequent lines each contain an integer denoting the of a Person instance. Constraints Output FormatComplete the method definitions provided in the editor so they meet the specifications outlined above; the code to test your work is already in the editor. If your methods are implemented correctly, each test case will print or lines (depending on whether or not a valid was passed to the constructor).

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



let initialAge = -1

class Person {  
  constructor(initialAge){
      // assign  iA to A after confirming the argument passed as is not negative; if a negative argument is passed as iA , the constructor should set age to 0 and print Age is not valid, setting age to 0.. 
      if (initialAge < 0)
        console.log("Age is not valid, setting age to 0.")
        this.age = 0
      }
    
}