/**
 * Created by Bluehoke on 19/10/2016.
 */
//start static data
var gameTime = 45122;
var totalGames = 10;
var timeWhenWinning = 21320;
var timeWhenLosing = 23802;
var totalWins = 6;
var totalLosses = 4;
//end static data


function averageGameTime() { //output average time of a game
    return gameTime/totalGames;
}

function averageTimeWhenWinning() { //output average time of game when winning
    return timeWhenWinning/totalWins;
}

function averageTimeWhenLosing() { //output average time of game when losing
    return timeWhenLosing/totalLosses;
}

