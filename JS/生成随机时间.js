const fs = require('fs');

function getRandomDate() {
    let year = 2023;
    let month = Math.floor(Math.random() * 12) + 1; // 1-12
    let day = Math.floor(Math.random() * 28) + 1; // 1-28 to ensure valid for all months
    let hour = Math.floor(Math.random() * 24); // 0-23
    let minute = Math.floor(Math.random() * 60); // 0-59
    let second = Math.floor(Math.random() * 60); // 0-59

    // Pad single digit numbers with leading zero
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

// Generate 39 random dates
let dates = Array.from({length: 73}, getRandomDate);

// Write to arr.txt
fs.writeFileSync('arr.txt', dates.join('\n'));