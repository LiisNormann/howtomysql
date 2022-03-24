var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "ALTER TABLE users ALTER COLUMN favorite_product INT";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table altered");
    });
});