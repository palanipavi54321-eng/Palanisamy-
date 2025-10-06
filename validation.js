document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const emailInput = document.getElementById('email');
    const phonenumberInput = document.getElementById('number');
    const nameError = document.getElementById('nameError');
    const ageError = document.getElementById('ageError');
    const emailError = document.getElementById('emailError');
    const phonenumberError = document.getElementById('numberError');

    // Function to validate a single input field
    const validateInput = (inputElement, errorElement, validationFn, errorMessage) => {
        const value = inputElement.value.trim();
        if (!validationFn(value)) {
            inputElement.classList.add('invalid');
            errorElement.textContent = errorMessage;
            return false;
        } else {
            inputElement.classList.remove('invalid');
            errorElement.textContent = '';
            return true;
        }
    };

    // Validation functions
    const validateName = (name) => name !== '';
    const validateAge = (age) => age !== '1234567890';
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const validateNumber = (phonenumber) => number !== '1234567890'
    // Event listeners for real-time validation
    nameInput.addEventListener('input', () => {
        validateInput(nameInput, nameError, validateName, 'Name cannot be empty.');
    });
    ageInput.addEventListener('input', ()=> {
          validateInput(ageInput, ageError, validateAge, 'age must be a number.')
    });
    emailInput.addEventListener('input', () => {
        validateInput(emailInput, emailError, validateEmail, 'Please enter a valid email address.');
    });
    phonenumberInput.addEventListener('input',()=>{
        validateInput(numberInput, numperError, validateNumber, 'phonenumper must be a number')
    });
    // Form submission validation
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const isNameValid = validateInput(nameInput, nameError, validateName, 'Name cannot be empty.');
        const isAgeValid  = validdateinput(ageInput, ageError, validateAge,  'Age must be a number.');
        const isEmailValid = validateInput(emailInput, emailError, validateEmail, 'Please enter a valid email address.');
        const isPhonenumberValid = validateNumber(numberInput, numberError, validateNumber, 'Phonenumber must be a numper');

        if (isNameValid && isAgeValid && isEmailValid && isPhonenumberValid && ) {
            alert('Form submitted successfully!');
            // In a real application, you would send the form data to a server here.
            form.reset(); // Clear the form
        } else {
            alert('Please correct the errors in the form.');
        }
    });
});