
//const { default: axios } = require("axios");

const mainParent = document.querySelector('#mainParent');

function getweather() {
    const city = document.getElementById('placeinput').value.trim(); 


axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=a480abafa3ab9db4f89c9d44b02716e1&units=metric`)
.then((response)=>{
     const data = response.data;
    const forecast = data.list[0];

        mainParent.innerHTML=`
          <div class="weather-information">
                <h2>${data.city.name}</h2>
                <p>Forecast Time: ${forecast.dt_txt}</p>
                <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" alt="icon" />
                <p>${forecast.weather[0].main}</p>
                <p>Temperature: ${forecast.main.temp} °C</p>
                <p>Feels Like: ${forecast.main.feels_like} °C</p>
                <p>Humidity: ${forecast.main.humidity}%</p>
                <p>Wind Speed: ${forecast.wind.speed} m/s</p>
          </div>
    `;
    //mainParent.appendChild(newData);
})
    .catch((error)=>{
        console.log(error)
    });
}
