
//init ui
const ui = new UI();
const storage = new Storage();
const weatherLocation = storage.getLocation();
const weather = new Weather(getLocation.city, getLocation.state);
// add evnet listener 
document.addEventListener("DOMContentLoaded" , getWeather)

// change location event
document.getElementById("w-change-btn").addEventListener("click", (e)
=> {

    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value
;

weather.changeLocation(city , state);
//set localstor
storage.setLocationData(city,state);

// get and display weather
getWeather();
//close modal by jquery
$("#locModal").modal("hide");
})

function getWeather(){
    weather.getWeather()
    .then(results =>{
        console.log(results);
        ui.paint(results);
    })
    .catch(err => {
        console.log(err);
        console.log(" not found");
    })
}



