const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('chinook.db');
db.serialize(function () {
    db.all("select name from sqlite_master where type='table'", function (err, tables) {
        console.log(tables);
    });
});