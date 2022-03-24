var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    var name = 'Amy';
    var adr = 'Mountain 21';
    //Escape the name and the address values with placeholder method:
    var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
    //Send an array with value(s) to replace the escaped values:
    con.query(sql, [name, adr], function (err, result) {
        if (err) throw err;
        console.log(result);
    });

    /*//Escape the address value with placeholder ? method:
    var sql = 'SELECT * FROM customers WHERE address = ?';
    //Send an array with value(s) to replace the escaped values:
    con.query(sql, [adr], function (err, result) {
        if (err) throw err;
        console.log(result);
    });*/

    //Escape the address value myysql.escape() method:
    //var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
    //Send an array with value(s) to replace the escaped values:
    /*con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });*/
});
