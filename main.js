let cityInput = document.querySelector("#cityInput");
let temperature = document.querySelector("#temperature"); //temperature

let boxOfWeather = document.querySelector(".boxOfWeather"); //boxOfWeather
let city = document.querySelector(".city"); //city
let feelsLike = document.querySelector("#feelsLike"); //feelsLike
let condition = document.querySelector("#condition"); //condition
let humidity = document.querySelector("#humidity"); //humidity
let windSpeed = document.querySelector("#windSpeed"); //windSpeed
let weatherIMG = document.querySelector(".weatherIMG");
let sun =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAQBJREFUaN7t2csNwyAMBmBGYYSMwhgdgxEYjRW6ARu4HNyqB0CKednElf5b2/hLSALGAICRHKMABSjgUMDdD7xfLifkxByoJOJ33O3/nwHIhVgsKDWKriXhb+0WQD6wJxZegvhlADzrcUDhpeFlpwLyAa5BZ711Na4pgAXFNxFdABw2K4r/R9iRgLiw+N89MQSATxvYFN8F2DB0qkOJCggbi/8m9AASA0AiAXBuA0ziKIDACBAogMgIECkAYBUFKEABzwOIf4yKf5HJnkqIn8wxmk775y5oxC8pj1jUH9FWEd/YOqK1eERz94j2euFqUCF7NzjYbzHpLqUCFKCAJfkAq7RimK7qUtAAAAAASUVORK5CYII=";
let cloud =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBqfLiDiHRt_J__fCxdqV8i_tXLe0MsK7fmQ&s";
let snow =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNtF54pw9NDfA2a5Eb6XYWHpeT3hNTvjnXpA&s";
let rain =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJdDWaK8B90EW_S-Ue3uaW5oV0vLMMTKTx3g&s";

cityInput.addEventListener("keyup", (e) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=4cf1fe3ab5c2657d07c5c11c9834f4cb`
  )
    .then((data) => data.json())
    .then((data) => {
      if (data.cod !== "404") {
        switch (data.weather[0].main.toLowerCase()) {
          case "clouds":
            weatherIMG.src = cloud;
            break;
          case "clear":
            weatherIMG.src = sun;
            break;
          case "snow":
            weatherIMG.src = snow;
            break;
          case "rain":
            weatherIMG.src = rain;
            break;
        }
        boxOfWeather.style.display = "block";
        city.innerHTML = data.name;
        condition.innerHTML = data.weather[0].main;
        feelsLike.innerHTML = Math.round(data.main.feels_like - 273.15);
        temperature.innerHTML = Math.round(data.main.temp - 273.15);
        humidity.innerHTML = data.main.humidity;
        windSpeed.innerHTML = data.wind.speed;
      }
    });
});
