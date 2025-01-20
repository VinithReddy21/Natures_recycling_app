document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const phoneNumber = document.getElementById('phoneNumber').value;
    const statusMessage = document.getElementById('statusMessage');

    if (!/^[0-9]{10}$/.test(phoneNumber)) {
        statusMessage.textContent = 'Please enter a valid 10-digit phone number.';
        statusMessage.style.color = 'red';
        return;
    }

    statusMessage.textContent = 'Login successful!';
    statusMessage.style.color = 'green';
});
