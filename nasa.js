document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'API_KEY'; // Replace with your API key
    const apiUrl = 'https://api.nasa.gov/planetary/apod';

    // Function to fetch and display APOD
    function updateAPOD(date) {
        let url = apiUrl + '?api_key=' + apiKey;
        
        if (date) {
            url += '&date=' + date;
        }

        fetch(url)
            .then(response => response.json())
            .then(data => {
                document.getElementById('apod-title').textContent = data.title;
                document.getElementById('apod-description').textContent = data.explanation;
                document.getElementById('apod-image').src = data.url;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    // Fetch today's APOD on initial load
    updateAPOD();

    // Event listener for date picker
    document.getElementById('date-picker').addEventListener('change', (event) => {
        const selectedDate = event.target.value;
        updateAPOD(selectedDate);
    });
});
