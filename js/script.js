// Check if the entered number is Prime. 
// Returns a message in the browser to 
// indicate the outcome

// Get references to the input and submit button elements
// so event listeners can be added and manipulate website elements
const numberInput = document.getElementById('numberInput');
const submitButton = document.getElementById('submit');
const resultMessage = document.getElementById('resultMessage');
const resetButton = document.getElementById('reset');

// Fucntion to to check enterd number is Prime.
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

// Add event listener to the submit button
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    checkPrime(numberInput);
});

// Reset environment when reset button is clicked
resetButton.addEventListener('click', function (event) {
    event.preventDefault();
    resultMessage.innerHTML = '';
    numberInput.value = null;
});