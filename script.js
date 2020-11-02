let weather = 
  {
    paris: {
      temp: 19.7,
      humidity: 80
    },
    tokyo: {
      temp: 17.3,
      humidity: 50
    },
    lisbon: {
      temp: 30.2,
      humidity: 20
    },
    "san francisco": {
      temp: 20.9,
      humidity: 100
    },
    moscow: {
      temp: -5,
      humidity: 20
    }
  }
;
let city = prompt("Enter a city?");
city = city.toLowerCase().trim();
if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  let farTemperature = Math.round((temperature * 9) / 5 + 32);
  let celsiusTemperature = Math.round(temperature);
  alert(
    `It is ${farTemperature}F | ${celsiusTemperature}C in ${city} with humidity of ${humidity}%.`
  );
} else {
  alert(
    `I am sorry, we do not have data for that city right now. Please visit Google Weather for temperatures in ${city}. Bye bye.`
  );
}