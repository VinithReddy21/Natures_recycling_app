document.getElementById('wasteForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const fileInput = document.getElementById('wasteImage');
    const locationInput = document.getElementById('location');
    const statusMessage = document.getElementById('statusMessage');

    if (fileInput.files.length === 0 || !locationInput.value) {
        alert('Please provide both an image and location.');
        return;
    }

    const formData = new FormData();
    formData.append('image', fileInput.files[0]);
    formData.append('location', locationInput.value);

    try {
        const response = await fetch('http://localhost:5000/upload', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            statusMessage.textContent = 'Waste data submitted successfully!';
            statusMessage.style.color = 'green';
        } else {
            throw new Error('Failed to submit waste data.');
        }
    } catch (error) {
        statusMessage.textContent = error.message;
        statusMessage.style.color = 'red';
    }
});

// Example map integration (Google Maps API, Leaflet, etc.)
function initializeMap() {
    const mapDiv = document.getElementById('map');
    mapDiv.textContent = 'Map will be displayed here.'; // Placeholder for map integration
}

initializeMap();
