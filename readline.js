const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const key = require('./key')


const fetch = require('node-fetch');

let url = `https://allsportsapi.com/api/basketball/?met=Livescore&APIkey=${key}`

let newArr;


fetch(url)
.then(x => x.json())
.then(newData => {
    let arr = newData.result
    let matchups = arr.map((x, i)=> console.log( `${i}. ${x.event_home_team} vs ${x.event_away_team}`))
     newArr = newData.result;

    //    for(let i = 0;i < matchups.length; i++){
    //         console.log(`${i}. ${matchups[i]}`)

    // }
    
    })

    
rl.question(`Key in a number to choose your matchup:\n`,  x=> {
    
    if(x < newArr.length){
        console.log(newArr[x].event_final_result)
        rl.close()
    }
})




