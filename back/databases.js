/**
 * Created by paul on 2017/10/16.
 */
(function() {
    var client, mysql, settings;

    settings = require('./settings');

    client = null;

    mysql = require('mysql');

    exports.getDbCon = function() {
        var err;
        try {
            if (client) {
                client = mysql.createConnection(settings.db);
                client.connect();
            } else {
                client = new mysql.createConnection(settings.db);
                client.connect();
            }
        } catch (_error) {
            err = _error;
            throw err;
        }
        return client;
    };

}).call(this);