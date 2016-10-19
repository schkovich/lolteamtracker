 /**
 * Created by Bluehoke on 16/10/2015.
 * Game data processing is found here
 * Data is prepared for calculations
  * This set of functions generally gets specific data from the games array
  * within the .json object that is returned from API
 */
 var staticData = {
     "games": [
         {
             "fellowPlayers": [
                 {
                     "championId": 10,
                     "teamId": 100,
                     "summonerId": 58013112
                 },
                 {
                     "championId": 21,
                     "teamId": 200,
                     "summonerId": 53573202
                 },
                 {
                     "championId": 107,
                     "teamId": 100,
                     "summonerId": 43100887
                 },
                 {
                     "championId": 201,
                     "teamId": 100,
                     "summonerId": 23790514
                 },
                 {
                     "championId": 63,
                     "teamId": 200,
                     "summonerId": 41277538
                 },
                 {
                     "championId": 105,
                     "teamId": 200,
                     "summonerId": 41139532
                 },
                 {
                     "championId": 10,
                     "teamId": 200,
                     "summonerId": 51894197
                 },
                 {
                     "championId": 105,
                     "teamId": 100,
                     "summonerId": 48622047
                 },
                 {
                     "championId": 64,
                     "teamId": 200,
                     "summonerId": 56386794
                 }
             ],
             "gameType": "MATCHED_GAME",
             "stats": {
                 "goldEarned": 3870,
                 "item2": 1055,
                 "totalDamageDealtToChampions": 2101,
                 "item1": 1055,
                 "wardPlaced": 2,
                 "totalDamageTaken": 3201,
                 "physicalDamageDealtPlayer": 10058,
                 "playerRole": 3,
                 "totalUnitsHealed": 2,
                 "playerPosition": 4,
                 "largestCriticalStrike": 187,
                 "level": 4,
                 "magicDamageDealtPlayer": 1213,
                 "magicDamageDealtToChampions": 341,
                 "magicDamageTaken": 1248,
                 "numDeaths": 2,
                 "totalTimeCrowdControlDealt": 48,
                 "physicalDamageTaken": 1832,
                 "win": false,
                 "team": 100,
                 "totalDamageDealt": 11272,
                 "totalHeal": 405,
                 "item6": 3340,
                 "minionsKilled": 34,
                 "timePlayed": 1230,
                 "physicalDamageDealtToChampions": 1760,
                 "trueDamageTaken": 120,
                 "goldSpent": 1050
             },
             "gameId": 1515125766,
             "ipEarned": 0,
             "spell1": 7,
             "teamId": 100,
             "spell2": 4,
             "gameMode": "CLASSIC",
             "mapId": 11,
             "level": 30,
             "invalid": false,
             "subType": "NORMAL",
             "createDate": 1474027417119,
             "championId": 202
         },
         {
             "fellowPlayers": [
                 {
                     "championId": 40,
                     "teamId": 100,
                     "summonerId": 31758073
                 },
                 {
                     "championId": 72,
                     "teamId": 100,
                     "summonerId": 41113368
                 },
                 {
                     "championId": 103,
                     "teamId": 100,
                     "summonerId": 25885808
                 },
                 {
                     "championId": 102,
                     "teamId": 200,
                     "summonerId": 32643205
                 },
                 {
                     "championId": 126,
                     "teamId": 100,
                     "summonerId": 24603497
                 },
                 {
                     "championId": 48,
                     "teamId": 200,
                     "summonerId": 34867208
                 },
                 {
                     "championId": 12,
                     "teamId": 200,
                     "summonerId": 43113427
                 },
                 {
                     "championId": 67,
                     "teamId": 100,
                     "summonerId": 37926351
                 },
                 {
                     "championId": 131,
                     "teamId": 200,
                     "summonerId": 25540025
                 }
             ],
             "gameType": "MATCHED_GAME",
             "stats": {
                 "totalDamageDealtToChampions": 36206,
                 "item2": 3031,
                 "goldEarned": 17063,
                 "item1": 3140,
                 "wardPlaced": 19,
                 "item0": 3033,
                 "totalDamageTaken": 29889,
                 "trueDamageDealtPlayer": 1047,
                 "physicalDamageDealtPlayer": 260490,
                 "visionWardsBought": 1,
                 "trueDamageDealtToChampions": 843,
                 "killingSprees": 1,
                 "playerRole": 3,
                 "totalUnitsHealed": 3,
                 "playerPosition": 4,
                 "largestCriticalStrike": 1551,
                 "level": 18,
                 "doubleKills": 1,
                 "tripleKills": 1,
                 "neutralMinionsKilledYourJungle": 24,
                 "magicDamageDealtToChampions": 1995,
                 "turretsKilled": 2,
                 "magicDamageDealtPlayer": 5048,
                 "neutralMinionsKilledEnemyJungle": 1,
                 "assists": 8,
                 "magicDamageTaken": 7738,
                 "numDeaths": 9,
                 "totalTimeCrowdControlDealt": 175,
                 "largestMultiKill": 3,
                 "physicalDamageTaken": 19465,
                 "team": 200,
                 "win": false,
                 "totalDamageDealt": 266585,
                 "largestKillingSpree": 3,
                 "totalHeal": 4770,
                 "item4": 3006,
                 "item3": 3085,
                 "item6": 3363,
                 "item5": 3094,
                 "minionsKilled": 271,
                 "timePlayed": 2583,
                 "wardKilled": 4,
                 "physicalDamageDealtToChampions": 33367,
                 "championsKilled": 7,
                 "trueDamageTaken": 2686,
                 "goldSpent": 15125,
                 "neutralMinionsKilled": 25
             },
             "gameId": 1395969733,
             "ipEarned": 77,
             "spell1": 7,
             "teamId": 200,
             "spell2": 4,
             "gameMode": "CLASSIC",
             "mapId": 11,
             "level": 30,
             "invalid": false,
             "subType": "RANKED_SOLO_5x5",
             "createDate": 1461088891419,
             "championId": 51
         }   ],
     "summonerId": 33843888
 };

 function getFullTime(gameData) { //gets total time played
    var totalTime = 0;
    for (var i = 0; i < gameData.games.length; i++) { //loop through array games
        totalTime = totalTime + gameData.games[i].stats.timePlayed; //increase time by value of matchDuration at games[i]
    }
    return totalTime; //returns value of time
}

var gameTime = getFullTime(staticData); //gameTime is equal to the return of getFullTime

 console.debug(gameTime); //for debugging


 function getTotalGames(gameData) { //gets the total number of games played from array games
     return gameData.games.length; //returns the length of the array games (total number of games
 }
 var totalGames = getTotalGames(staticData); //total games is equal to getTotalGames

 console.debug(totalGames); //for debugging

 function getFullTimeWin(gameData) { //gets total time played during winning games
     var timeWin = 0;
     for(var j = 0; j < gameData.games.length; j++){ //for all items in games array of object
        if(gameData.games.stats.win == true) { //if game is a win
            timeWin = timeWin + gameData.games.stats.timePlayed; //then add the game duration to timeWin
     }

    }
     return timeWin; //return total time when winning
 }

 var timeWhenWinning = getFullTime(staticData); //timeWhenWinning is the full time played over all the wins

 function getFullTimeLoss() { //get time when losing
     return gameTime - timeWhenWinning;
 }

 function getTotalWins(gameData) { //get total number of games won
     var totalWins = 0;
     for(var i = 0; i < gameData.games.length; i++) { //loop through array games in object
         if(gameData.games.stats.win == true) { //if game is a win then add one to total wins
             totalWins++
         }
     }
     return totalWins; //return the total number of wins
 }

 var totalWins = getTotalWins(staticData); //number of total wins is equal top passed data

 function getTotalLosses() {  //get the total number of losses
     return totalGames - totalWins;
 }

 var totalLosses = getTotalLosses(); //total number of losses set