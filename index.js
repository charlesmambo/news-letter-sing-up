const form = document.querySelector('#form');
const emailInput = document.getElementById('email');
const errorText = document.querySelector('.invalid-text');
const success = document.querySelector('.success');
const mainContainer = document.querySelector('.container');

// Email validation function
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

// Form submission event listener
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    const emailValue = emailInput.value;

    // Only validate if the input is not empty
    if (emailValue.trim() !== '') {
        if (!validateEmail(emailValue)) {
            errorText.style.display = 'block'; 
            emailInput.classList.add('email'); 
        } else {
            errorText.style.display = 'none'; 
            success.style.display = 'block'; 
            mainContainer.style.display = 'none'; 
            console.log('Form submitted successfully');
        }
    } else {
        errorText.style.display = 'none'; 
        emailInput.classList.remove('email'); 
    }
});

// Listen for input events to handle key deletion
emailInput.addEventListener('input', () => {
    if (errorText.style.display === 'block') {
        errorText.style.display = 'none'; 
        emailInput.classList.remove('email'); 
    }
});

// Dismiss success message
success.addEventListener('click', () => {
    success.style.display = 'none'; 
    mainContainer.style.display = 'flex'; 
    emailInput.classList.remove('email');
    emailInput.value = ''; 
});
