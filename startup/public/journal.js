let happy = "https://cdn-icons-png.flaticon.com/128/166/166538.png";
let neutral = "https://cdn-icons-png.flaticon.com/128/1791/1791385.png";
let sad = "https://cdn-icons-png.flaticon.com/128/166/166527.png";
let angry = "https://cdn-icons-png.flaticon.com/128/166/166563.png";

let moods = ['happy', 'neutral', 'sad', 'angry'];
let moodIcons = [happy, neutral, sad, angry];

let storedMoods = {'sunMood': 0,
                    'monMood': 0,
                    'tueMood': 0,
                    'wedMood': 0,
                    'thuMood': 0,
                    'friMood': 0,
                    'satMood': 0};

let journalEntries = {
    'Sunday': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    'Monday': "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'Tuesday': "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    'Wednesday': "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'Thursday': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    'Friday': "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    'Saturday': "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
};

async function loadMoods() {
    console.log("loading");
    try {
        const response = await fetch('/api/moods');
        storedMoods = await response.json();

        console.log("fetching");

        console.log(storedMoods);

        localStorage.setItem('storedMoods', JSON.stringify(storedMoods));
    } catch {
        storedMoods = localStorage.getItem('storedMoods');
    }
}

async function loadEntries() {
    try {
        const response = await fetch('/api/entries');
        journalEntries = await response.json();
        console.log(journalEntries);

        localStorage.setItem('entries', JSON.stringify(journalEntries));
    } catch {
        journalEntries = localStorage.getItem('entries');
    }
}

function updateMoods(){
    console.log(storedMoods);
    for (var key in storedMoods) {
        document.getElementById(key).src = moodIcons[storedMoods[key]];
        document.getElementById(key).alt = moods[storedMoods[key]];
    }
}

function changeMood(id){
    const currMood = document.getElementById(id).alt;
    console.log(typeof currMood);
    var index = moods.indexOf(currMood);
    if(index < moods.length - 1){
        index++;
    } else {
        index = 0;
    }

    storedMoods[id] = index;
    updateMoods();

    // document.getElementById(id).src = moodIcons[index];
    // document.getElementById(id).alt = moods[index];
}

function showEntries(){
    document.getElementById("sunEntry").innerHTML = journalEntries['Sunday'];
    document.getElementById("monEntry").innerHTML = journalEntries['Monday'];
    document.getElementById("tueEntry").innerHTML = journalEntries['Tuesday'];
    document.getElementById("wedEntry").innerHTML = journalEntries['Wednesday'];
    document.getElementById("thuEntry").innerHTML = journalEntries['Thursday'];
    document.getElementById("friEntry").innerHTML = journalEntries['Friday'];
    document.getElementById("satEntry").innerHTML = journalEntries['Saturday'];
}

console.log("about to load");
loadMoods();
loadEntries();
updateMoods();
showEntries();