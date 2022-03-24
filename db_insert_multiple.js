var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "mydb"
});

con.connect(function (err){
    if (err) throw err;
    console.log("Connected!");

    var sql = "INSERT INTO products (name) VALUES ?";
    var values = [
        ['154'],
        ['155'],
        ['156']
    ];

    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("multiple records inserted: " + result.affectedRows);
    });
});