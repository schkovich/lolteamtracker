module.exports = function (ChampionInfo) {
    ChampionInfo.on('dataSourceAttached', function (obj) {
        var championInfoService = obj.getDataSource();

        championInfoService.champion(function(err, response, context) {
            //console.log(arguments);
            if (err) throw err; //error making request
            if (response.error) {
                next('> response error: ' + response.error.stack);
            }
            //obj.response = response;
            //console.log(arguments);
            console.log('> champions info fetched successfully from remote server');
            //verify via `curl localhost:3000/api/Magazines`
            //next();
        });
    });
};
