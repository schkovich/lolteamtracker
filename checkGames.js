/** The function teamGames is used to identify games that will be used in calculations
 *
 * from any team member A's list of games the function outputs all games that pass a test
 * A) All 5 team members (var team) must be in the game
 * B) All team members must have the same teamID*/

var team = [58013112, 43100887, 23790514, 48622047];
var gamesData = {
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
}; //static data for testing

function teamGames(gamesData) {

    var checkPlayers = function (player) {  //sets variable if all members are in a certain game or not
        return team.some(function(teamMemberId) {
            return player.summonerId == teamMemberId;
        });
    };

    var getSummonerTeamId = function (game) { //find player A's team
        var one = game.fellowPlayers.filter(function(player) {
            return 100 === player.teamId;
        });
        if (4 == one.length) { //if team A has 4 players player A is on team A
            return 100;
        } else {
            return 200; //else player A is on team B
        }
    };

    return gamesData.games.filter(function(game) { //filter games that have all players on the same team
        var summonerTeamId = getSummonerTeamId(game);
        var summonerTeam = game.fellowPlayers.filter(function(player) {
            return player.teamId === summonerTeamId;
        });
        console.debug(summonerTeam);
        return summonerTeam.every(function(player) {
            return checkPlayers(player);
        });
    });
}

var gamesSummary = teamGames();

console.debug(games);