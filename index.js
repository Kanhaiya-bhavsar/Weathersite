const buttons = document.querySelector('#buttons');
const inputvalue = document.querySelector('#inputvalue');
const cityname = document.querySelector('.cityname');
const tem = document.querySelector('.tem');
const weatherinfo = document.querySelector('.weatherinfo');
buttons.addEventListener('click', () => {
   const city =inputvalue.value || 'pune' ;
   console.log(inputvalue.value);
   console.log(city);
   
   fetch(`http://api.weatherapi.com/v1/current.json?key=ffe3602f60ee4b04a8783633242203&q=${city}`)
   .then(response => response.json())
   .then(weatherData => {
      console.log(weatherData)
      tem.innerHTML=`<h1>Temp(C)<br>${weatherData.current.temp_c} <br>Temp(F)<br>${weatherData.current.temp_f}</h1>`
      cityname.innerHTML=` <h2>${weatherData.location.name} </h2>
      <p>Region- ${weatherData.location.region}</p> 
      <p>Country-${weatherData.location.country} </p>
      <p>Localtime-${weatherData.location.localtime} </p>`

      weatherinfo.innerHTML=`<p> Humidity:${weatherData.current.humidity}</p><p> Condition:${weatherData.current.condition.text} </p>
                             <p> Temp_c:${weatherData.current.temp_c} </p>
                            <p>  Temp_f:${weatherData.current.temp_f} </p>
                            <p>  UV:${weatherData.current.uv} </p>
                            <p>  Wind_dir:${weatherData.current.wind_dir}</p>
                            <p> Wind_kph:${weatherData.current.wind_kph}</p>`
      
   })
   .catch(error => {
      console.error('Error fetching weather data:', error);
   });
});
