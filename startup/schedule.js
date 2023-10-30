let sunny = "https://cdn-icons-png.flaticon.com/128/439/439842.png";
let rainy = "https://cdn-icons-png.flaticon.com/128/4088/4088981.png";
let cloudy = "https://cdn-icons-png.flaticon.com/128/1163/1163624.png";
let someCloud = "https://cdn-icons-png.flaticon.com/128/1163/1163661.png";

let weathers = ['sunny', 'someCloud', 'cloudy', 'rainy'];
let weatherIcons = [sunny, someCloud, cloudy, rainy];

function getWeather(day) {
    var precipitation = Math.floor((Math.random()*99));

    var index = Math.floor(precipitation/25);

    document.getElementById(day).src = weatherIcons[index];
    document.getElementById(day).alt = weathers[index];
}

getWeather('sunWeather');
getWeather('monWeather');
getWeather('tueWeather');
getWeather('wedWeather');
getWeather('thuWeather');
getWeather('friWeather');
getWeather('satWeather');
