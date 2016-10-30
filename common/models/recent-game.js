/**
 * Created by goran on 30/10/16.
 */
module.exports = function (RecentGame) {
    RecentGame.on('dataSourceAttached', function (obj) {
        var RecentGameService = obj.getDataSource();

        RecentGameService.games(function(err, response, context) {
            //console.log(arguments);
            if (err) throw err; //error making request
            if (response.error) {
                next('> response error: ' + response.error.stack);
            }
            //obj.response = response;
            //console.log(arguments);
            console.log('> recent games info fetched successfully from remote server');
            //verify via `curl localhost:3000/api/Magazines`
            //next();
        });
    });
};
