function showError(input, message) {
    // Get the parent element of the input field (.form-control)
    const formControl = input.parentElement;
    // Replace the class - add error
    formControl.className = 'form-control error';
    // Get the small element for the error message
    const small = formControl.querySelector('small');
    // Replace the text for small element using the input message
    small.innerText = message;
};

// Function to update class for success
function showSuccess(input) {
    // Get the parent element of the input field (.form-control)
    const formControl = input.parentElement;
    // Replace the class - add success
    formControl.className = 'form-control success';
};



























































function showError(input, message) {
    // Get the parent element of the input field (.form-control)
    const formControl = input.parentElement;
    // Replace the class - add error
    formControl.className = 'form-control error';
    // Get the small element for the error message
    const small = formControl.querySelector('small');
    // Replace the text for small element using the input message
    small.innerText = message;
};

// Function to update class for success
function showSuccess(input) {
    // Get the parent element of the input field (.form-control)
    const formControl = input.parentElement;
    // Replace the class - add success
    formControl.className = 'form-control success';
};