class UI{
    constructor(){
        this.location = document.getElementById("w-location");
        this.desc = document.getElementById("w-desc");
        this.string = document.getElementById("w-srting");
        this.details = document.getElementById("w-details");
        this.icon = document.getElementById("w-icon");
        this.humidity = document.getElementById("w-humidty");
        this.feelsLike = document.getElementById("w-feels-like");
        this.dewpoint = document.getElementById("w-dewpoint");
        this.wind = document.getElementById("w-wind");
     
    }
    paint(weather){
        this.location.textContent = weather.display_location.full;
        this.desc.textContent = weather.weather;
        this.string.textContent =  weather.temperature_string;
        this.icon.setAttribute("src" ,Cicon_url);
        this.humidity.textContent = `Relative humidity : ${weather.relative_humidity}`;
        this.feelsLike.textContent = `Feelslike : ${weather.feelslike_string}`;
        this.dewpoint.textContent = `Dewpoint : ${weather.dewpoint_string}`;
        this.wind.textContent = `Wind : ${weather.wind_string}`;
        
    }
}