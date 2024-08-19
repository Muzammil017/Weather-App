let city = prompt("Enter a city name");

const apiKey = "6f7af4d66310f9461205fb52cac5c8a1";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("City not found");
    }
  })
  .then((data) => {
    const temperature = data.main.temp;
    const humidity = data.main.humidity;

    document.getElementById("weatherResult").innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Humidity: ${humidity}%</p>
            `;
  });
