async function getWeather() {
    var city = document.getElementById('cityInput').value;
    var apiKey = 'f00c38e0279b7bc85480c3fe775d518c'; 
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        var response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }

        var weatherData = await response.json();
        displayWeather(weatherData);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    document.getElementById('cityName').textContent = data.name;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
}
