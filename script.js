async function getWeather() {
  const city = document.getElementById('city').value;
  const apiKey = '91bfe9529ef1ce71fd27d0472b30bce0'; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod !== 200) {
      document.getElementById('weather').innerHTML = `<p>${data.message}</p>`;
      return;
    }

    document.getElementById('weather').innerHTML = `
      <h3>Weather in ${data.name}</h3>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Condition: ${data.weather[0].description}</p>
    `;
  } catch (err) {
    document.getElementById('weather').innerHTML = `<p>Something went wrong.</p>`;
  }
}
