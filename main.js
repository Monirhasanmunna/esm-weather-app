import axios from "axios";
import { weatherIcon } from "./weathericon";

  document.querySelector('#searchBtn').addEventListener('click',function(){
      const cityName = document.getElementById('inputCity').value;
      const apiKey = '344ad1e8e2756c8febe3cf95e8985deb'

      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
        .then(response => {
          setInfo(response.data)
        })
        .catch(error => {
          console.log(error.error);
        })
  });

  const setInfo = function(data){
    console.log(data);

    const html = `
      <div class="d-flex">
        <h6 class="flex-grow-1">${data.name} (${data.sys.country})</h6>
      </div>

      <div class="d-flex flex-column text-center mt-5 mb-4">
        <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;"> ${parseInt(data.main.temp)}°C </h6>
        <span class="small" style="color: #868B94">${data.weather[0].main}</span>
      </div>

      <div class="d-flex align-items-center">
        <div class="flex-grow-1" style="font-size: 1rem;">
          <div>Wind :<i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${data.wind.speed} km/h
            </span></div>
          <div>Humidity :<i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${data.main.humidity}% </span>
          </div>
        </div>
        <div>
          ${weatherIcon(data.weather[0].main)}
        </div>
      </div>
    `;

    document.getElementById('cardBody').innerHTML = html;
  }


  