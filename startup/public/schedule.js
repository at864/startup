let sunny = "https://cdn-icons-png.flaticon.com/128/439/439842.png";
let rainy = "https://cdn-icons-png.flaticon.com/128/4088/4088981.png";
let cloudy = "https://cdn-icons-png.flaticon.com/128/1163/1163624.png";
let someCloud = "https://cdn-icons-png.flaticon.com/128/1163/1163661.png";

let weathers = ['sunny', 'someCloud', 'cloudy', 'rainy'];
let weatherIcons = [sunny, someCloud, cloudy, rainy];
let lat = 40.2338;
let long = -111.6585;

let scheduleEvents = {
    'Sunday': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    'Monday': "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'Tuesday': "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    'Wednesday': "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'Thursday': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    'Friday': "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    'Saturday': "saturdayEntry"
};

async function loadEvents() {
    try {
        const response = await fetch('/api/events');
        scheduleEvents = await response.json();

        localStorage.setItem('events', JSON.stringify(scheduleEvents));
    } catch {
        scheduleEvents = localStorage.getItem('events');
    }
}

function getLocation(){
    if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(showPosition);
	lat = position.coords.latitude;
	long = position.coords.longitude;
    }
}

function getWeather(day) {
    console.log("getting weather");

    var date_index = 0;
    switch(day) {
        case "sunWeather":
            date_index = 0;
            break;
        case "monWeather":
            date_index = 1;
            break;
        case "tueWeather":
            date_index = 2;
            break;
        case "wedWeather":
            date_index = 3;
            break;
        case "thuWeather":
            date_index = 4;
            break;
        case "friWeather":
            date_index = 5;
            break;
        case "satWeather":
            date_index = 6;
            break;
     }


    var date = new Date().getDay();
    var url = "https://api.open-meteo.com/v1/forecast?latitude=" + lat.toString() + "&longitude=" + long.toString() + "&daily=weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=America%2FDenver&past_days=" + date.toString() + "&forecast_days=" + (7-date).toString();
    console.log(url);
    fetch(url).then((response) => response.json()).then((data) => {
	console.log(date);
	console.log(data);
	weather_code = data.daily.weather_code[date_index];
        console.log(date_index);
        console.log(weather_code);

        var index;
        switch(weather_code) {
            case 0:
            case 1:
                index = 0;
                break;
            case 2:
                index = 1;
                break;
            case 3:
            case 45:
            case 48:
                index = 2;
                break;
            default:
                index = 3;
                break;
        }
    console.log(day + " " + index);
    document.getElementById(day).src = weatherIcons[index];
    document.getElementById(day).alt = weathers[index];

    });

}

function showEvents(){
    document.getElementById("sunSched").innerHTML = scheduleEvents['Sunday'];
    document.getElementById("monSched").innerHTML = scheduleEvents['Monday'];
    document.getElementById("tueSched").innerHTML = scheduleEvents['Tuesday'];
    document.getElementById("wedSched").innerHTML = scheduleEvents['Wednesday'];
    document.getElementById("thuSched").innerHTML = scheduleEvents['Thursday'];
    document.getElementById("friSched").innerHTML = scheduleEvents['Friday'];
    document.getElementById("satSched").innerHTML = scheduleEvents['Saturday'];
}

getWeather('sunWeather');
getWeather('monWeather');
getWeather('tueWeather');
getWeather('wedWeather');
getWeather('thuWeather');
getWeather('friWeather');
getWeather('satWeather');

loadEvents();
showEvents();
