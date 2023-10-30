let happy = "https://cdn-icons-png.flaticon.com/128/166/166538.png";
let neutral = "https://cdn-icons-png.flaticon.com/128/1791/1791385.png";
let sad = "https://cdn-icons-png.flaticon.com/128/166/166527.png";
let angry = "https://cdn-icons-png.flaticon.com/128/166/166563.png";

let moods = ['happy', 'neutral', 'sad', 'angry'];
let moodIcons = [happy, neutral, sad, angry];

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