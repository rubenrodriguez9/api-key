const key = require('./key')
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Use any ONE of these API's that needs an API key to get data.
// Read the docs to see how to call for and get the data that you want
// Or you can use one of your choosing if you are comfortable, HOWEVER it must require an API Key
// Parse the data, and log any important information you would like to show in a nice format of your choosing.
// You can add your own spin to the data in how you present it.
// Use any tools we've practiced such as promises, destructuring, etc.
// Once everything works, upload the file and submit.

//*************************** API used "https://allsportsapi.com/" **************************************/


let matchups = `Please choose a matchup :\n
    
`

const fetch = require('node-fetch');

let url = `https://allsportsapi.com/api/basketball/?met=Livescore&APIkey=${key}`

let callMatchups = function(url){

    
    fetch(url)
    .then(x => x.json())
    .then(newData => {
        let arr = newData.result
        let matchups = arr.map(x => `${x.event_home_team} vs ${x.event_away_team}`)
        
           for(let i = 0;i < matchups.length; i++){
                console.log(`${i}. ${matchups[i]}`)
    
        }
    
        }).then(() =>  process.exit())
       
}




rl.question('Choose your match',callMatchups(url))
    

    