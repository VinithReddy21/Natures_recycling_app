document.getElementById('fundraiserForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const cashAmount = document.getElementById('cashAmount').value;
    const receiptImage = document.getElementById('receiptImage').files[0];
    const statusMessage = document.getElementById('statusMessage');

    if (!cashAmount || !receiptImage) {
        alert('Please provide both cash amount and receipt image.');
        return;
    }

    const formData = new FormData();
    formData.append('cashAmount', cashAmount);
    formData.append('receiptImage', receiptImage);

    try {
        const response = await fetch('http://localhost:5000/fundraiser', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            statusMessage.textContent = 'Fundraiser data submitted successfully!';
            statusMessage.style.color = 'green';
        } else {
            throw new Error('Failed to submit fundraiser data.');
        }
    } catch (error) {
        statusMessage.textContent = error.message;
        statusMessage.style.color = 'red';
    }
});
