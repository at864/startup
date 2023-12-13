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

let varNames = new Set(['sunMood', 'monMood', 'tueMood', 'wedMood', 'thuMood', 'friMood']);

async function loadMoods() {
    try {
        const response = await fetch('/api/moods');
        storedMoods = await response.json();

        localStorage.setItem('storedMoods', JSON.stringify(storedMoods));
        console.log("success load");
    } catch {
        console.log("fail load");
        storedMoods = localStorage.getItem('storedMoods');
    }
}

async function loadEntries() {
    try {
        const response = await fetch('/api/entries');
        journalEntries = await response.json();

        localStorage.setItem('entries', JSON.stringify(journalEntries));
    } catch {
        journalEntries = localStorage.getItem('entries');
    }
}

function updateMoods(){
    if(storedMoods.length < 7){
        storedMoods = localStorage.getItem('storedMoods');
    }
    console.log(storedMoods);
    for (var key in storedMoods) {
        if(varNames.has(key)){
            document.getElementById(key).src = moodIcons[storedMoods[key]];
            document.getElementById(key).alt = moods[storedMoods[key]];
        }
        
    }
    localStorage.setItem('storedMoods', storedMoods);
    (async () => await postMoods())();
}

async function postMoods() {
    try {
        
        const reply = (await fetch('/user/userName')).json();
        console.log(`reply ${JSON.stringify(reply)}`);
        storedMoods["username"] = reply.user;
        console.log(`moods ${storedMoods.json()}`);
        const response = await fetch('/api/mood', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(storedMoods),
        });
    } catch {
        console.log("couldn't update mood to DB");
    }
}

function changeMood(id){
    const currMood = document.getElementById(id).alt;
    console.log(currMood);
    console.log(storedMoods);
    var index = moods.indexOf(currMood);
    if(index < moods.length - 1){
        index++;
    } else {
        index = 0;
    }

    print(storedMoods);

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

loadMoods();
loadEntries();
updateMoods();
showEntries();