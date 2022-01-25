// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. 
// (That is, do not repeat any numbers in the returned list.)

// You can trust that this function will never be called with n < 0 or n > 10.


// Write your code below this line.
function luckyNumbers(size) {
    array = []; // Empty array, this will be our result at the end of the function

    // Run this code *size* times
    for(let i = 0; i < size; i++) {
        let luckyNumber = Math.ceil(Math.random() * 10); // Create a new random number, randging from 1-10

        // Run this code every time the array includes our random number
        while (array.includes(luckyNumber)) {
            // If it's not unique, try again
            luckyNumber = Math.ceil(Math.random() * 10);
        }
        // We know for sure that our new number is unique
        array.push(luckyNumber); // Add the number to the array
    }
    
    return array; // Return the array to whatever code needs the data
}

console.log(luckyNumbers(10)); // Log the result