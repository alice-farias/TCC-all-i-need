document.addEventListener('DOMContentLoaded', function() {
    const cardNumberInput = document.getElementById('card-number');
    const cardHolderInput = document.getElementById('card-holder');
    const cardExpirationMonthInput = document.getElementById('card-expiration-month');
    const cardExpirationYearInput = document.getElementById('card-expiration-year');
    const cardCVVInput = document.getElementById('card-cvv');

    const cardNumberDisplay = document.getElementById('card-number-display');
    const cardHolderDisplay = document.getElementById('card-holder-display');
    const cardExpirationDisplay = document.getElementById('card-expiration-display');
    const cardCVVDisplay = document.getElementById('card-cvv-display');

    cardNumberInput.addEventListener('input', function() {
        let cardNumber = cardNumberInput.value;
        cardNumber = cardNumber.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
        cardNumberDisplay.textContent = cardNumber || '';
    });

    cardHolderInput.addEventListener('input', function() {
        cardHolderDisplay.textContent = cardHolderInput.value.toUpperCase() || 'FULL NAME';
    });

    cardExpirationMonthInput.addEventListener('input', updateExpirationDate);
    cardExpirationYearInput.addEventListener('input', updateExpirationDate);

    cardCVVInput.addEventListener('input', function() {
        cardCVVDisplay.textContent = cardCVVInput.value || '###';
    });

    cardCVVInput.addEventListener('focus', function() {
        document.querySelector('.container').classList.add('flipped');
    });

    cardCVVInput.addEventListener('blur', function() {
        document.querySelector('.container').classList.remove('flipped');
    });

    function updateExpirationDate() {
        const month = cardExpirationMonthInput.value.padStart(2, '0');
        const year = cardExpirationYearInput.value.padStart(2, '0');
        cardExpirationDisplay.textContent = `${month}/${year}` || 'MM/YY';
    }
});


// chatbot 

