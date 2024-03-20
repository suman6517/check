const apiKeys = "a5d0410147eeb6af47f287da75bb0f60";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q= ";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
checkweather = async (city) => {
    const response = await fetch(`${apiUrl} ${city}&appid=${apiKeys}`);
    if (response.status == 404){
        document.querySelector(".error").style.display = "block";
    }
    else {
        document.querySelector(".error").style.display = "none";
        const data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
        document.querySelector(".weather").style.display="block";
    }

}
searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);
});
