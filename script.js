// Fetch data from data.json and display it in the dashboard
fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('data-container');
        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'border border-gray-300 rounded p-4 mb-4';
            card.innerHTML = `
                <h2 class="text-lg font-bold mb-2">${item.title}</h2>
                <p class="text-sm text-gray-500 mb-1">Topic: ${item.topic}</p>
                <p class="text-sm text-gray-500 mb-1">Intensity: ${item.intensity}</p>
                <p class="text-sm text-gray-500 mb-1">Published: ${item.published}</p>
                <p class="text-sm text-gray-500 mb-1">URL: <a href="${item.url}" target="_blank">${item.url}</a></p>
            `;
            dataContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
