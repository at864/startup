let sunny = "https://cdn-icons-png.flaticon.com/128/439/439842.png";
let rainy = "https://cdn-icons-png.flaticon.com/128/4088/4088981.png";
let cloudy = "https://cdn-icons-png.flaticon.com/128/1163/1163624.png";
let someCloud = "https://cdn-icons-png.flaticon.com/128/1163/1163661.png";

let weathers = ['sunny', 'someCloud', 'cloudy', 'rainy'];
let weatherIcons = [sunny, someCloud, cloudy, rainy];

let scheduleEvents = {
    'Sunday': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    'Monday': "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'Tuesday': "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    'Wednesday': "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'Thursday': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    'Friday': "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    'Saturday': "saturdayEntry"
};

function getWeather(day) {
    var precipitation = Math.floor((Math.random()*99));

    var index = Math.floor(precipitation/25);

    document.getElementById(day).src = weatherIcons[index];
    document.getElementById(day).alt = weathers[index];
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

showEvents();