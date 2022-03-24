var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    /*Connect two tables by using one field from each table as the connection point:*/
    var sql = "SELECT users.name AS user,\n" +
        "products.name AS favorite\n" +
        "FROM users\n" +
        "LEFT JOIN products ON users.favorite_product = products.id";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});
