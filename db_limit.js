var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    //starts from position 3 and takes 5 rows
    var sql = "SELECT * FROM customers LIMIT 2, 5";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});