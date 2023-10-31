let happy = "https://cdn-icons-png.flaticon.com/128/166/166538.png";
let neutral = "https://cdn-icons-png.flaticon.com/128/1791/1791385.png";
let sad = "https://cdn-icons-png.flaticon.com/128/166/166527.png";
let angry = "https://cdn-icons-png.flaticon.com/128/166/166563.png";

let moods = ['happy', 'neutral', 'sad', 'angry'];
let moodIcons = [happy, neutral, sad, angry];


let journalEntries = {
    'Sunday': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    'Monday': "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'Tuesday': "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    'Wednesday': "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'Thursday': "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    'Friday': "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    'Saturday': "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
};

function changeMood(id){
    const currMood = document.getElementById(id).alt;
    console.log(typeof currMood);
    var index = moods.indexOf(currMood);
    if(index < moods.length - 1){
        index++;
    } else {
        index = 0;
    }

    document.getElementById(id).src = moodIcons[index];
    document.getElementById(id).alt = moods[index];
}

function showEntries(){
    document.getElementById("sunEntry").value = journalEntries['Sunday'];
    document.getElementById("monEntry").value = journalEntries['Monday'];
    document.getElementById("tueEntry").value = journalEntries['Tuesday'];
    document.getElementById("wedEntry").value = journalEntries['Wednesday'];
    document.getElementById("thuEntry").value = journalEntries['Thursday'];
    document.getElementById("friEntry").value = journalEntries['Friday'];
    document.getElementById("satEntry").value = journalEntries['Saturday'];
}

showEntries();