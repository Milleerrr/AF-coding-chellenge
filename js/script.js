// Check if the entered number is Prime. 
// Returns a message in the browser to 
// indicate the outcome
const checkPrime = number => {
    const enteredNumber = Number(number.value);

    // Is a valid number
    if (isNaN(enteredNumber)) {
        alert('Please enter a valid number.');
        return;
        // Is bigger than 2, Prime numbers must
        // be bigger than 2
    } else if (enteredNumber < 2) {
        alert('Please enter a number greater than 1.');
        return;
    }
    
    // Array to capture factors of the entered number if
    // there are any. Initilised as empty.
    let factorsArray = [1];
    // Counts the factors 
    let factorCounter = 0

    for (let i = 2; i <= enteredNumber; i++) {

        // Ift there is a factor, add it to 
        // the factors array and increment the 
        // factorCounter
        if (enteredNumber % i === 0) {
            factorsArray.push(i);
            factorCounter++;
        }
    }

    // Updates the website elemtn p with the appropriate message.
    // Counter variable used a condition, if there are less than 3 
    // factors then the number must Prime. Otherwise number is Prime 
    // and factors are outputted 
    if (factorCounter < 3) {
        // Number is Prime.
        resultMessage.innerHTML = `Prime!`;
    } else {
        resultMessage.innerHTML = `Not Prime! Here the factors: ${factorsArray} number.`;
    }
};