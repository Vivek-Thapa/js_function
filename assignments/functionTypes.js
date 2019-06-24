// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number to a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration

function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
// function declaration
  function addOne (n){
    return (n+1);
  }

  // function expression
  let addOne = function(n){
    return (n+1);
  };
  // arrow function
  let addOne = n => (n+1);

  // Arrow function with curly bracket
  let addOne = n =>{
    return (n+1);
  };
  // function invocation
  addOne(n+1);
  // 

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
  // function declaration
  function subOne (n){
    return (n-1);
  }
  // function expression
  let subOne = function(n){
    return (n-1);
  };
  // Arrow function
  let subOne = n => (n-1);
  // Arrow function with curley braces
  let subOne = n =>{
    return (n-1);
  };
  // function invocation
  subOne(n-1);
/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
  // function declaration
  function  sum(x,y){
  return  (x,y);
  };

  //function expression
  function sum (x,y){
    return (x+y); 
  }; 
  // Arrow function
  let sum = (x,y) => (x+y);
  // Arrow function with curley brackets
  let sum = (x,y) => {
    return (x+y);
  };
  // function invocation
  sum(x+y);
/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
  //functioal declaration
  function difference (x,y){
    return (y-x);
  }

  // functional expression
  let difference = function(x,y){
    return (y-x);
  };

  // Arrow function
  let difference = (x,y) => (y-x);

  // Arrow function with curley braces
  let difference = (x,y) =>{
    return (y-x);
  };

  // function invocation
  difference(y-x);

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

//  functional declaration
function product (x,y){
  return  (x*y);
}

// functional expression
let product = function(x,y){
  return (x*y);
}

// Arrow function
let product = (x,y) => (x*y);

// Arrow function with curley brackets
let product = (x,y) =>{
  return (x*y);
}

// function invocation
product(x*y);
/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
  //functional declaration
  function quotient (x,y){
    return  (x/y);
  } 

  // functional expression
  let quotient = function(x,y){
    return  (x/y);
  };

  // Arrow function
  let quotient = (x,y) => (x/y);

  // arrow function with curley braces
  let quotient = (x,y) =>{
    return  (x/y);
  };

  // function invocation
  quotient(x/y);
/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

 //  functional declaration
function squared (x){
  return  (x*x);
}

// functional expression
let squared = function (x){
  return (x*x);
}
// Arrow function
let squared = (x) => (x*x);
// Arrow function with curley brackets
let squared = (x) =>{
  return (x*x);
}

// function invocation
squared(4);

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */


/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

 
  function number (a,b){
    if (a>b) {
      return true;
    } else{
      return false;
    } 
  }
    
/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
  function number (a,b){
    if (a<b){
      return true;
    } else{
      return false;
    }
};
  
/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
  function number (a,b){
    if (a=b){
      return true;
    } else false;
};
  
/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
  function number (x,y){
    if (x<y){
      return x;
    } else return y;
  };

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
  function number (x,y){
    if (x>y){
      return x;
    } else return y;
  };
/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

 function number (n){
   if (n%2==0){
    return true;
   }else{
    return false; 
   }  
 };  
/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
 function number (n){
   if (n%2!=0){
     return true;
   }else{
     return false;
   }
 };


/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
 function number (word1, word2){
   let res = word1 + ' ' + word2;
   return res;
 }
