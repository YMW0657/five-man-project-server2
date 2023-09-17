const mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'five_man',
    password : 'five_man',
    database : 'five_man_sql'
});
connection.connect((err)=>{
    if(err){
        console.log(`mysql error: ${err}!`);
    }else{
        console.log("success");
    }
})
connection.on('error', function(err) {
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('db error:'+err.message);
    } else {
        throw err;
    }
});
const db = {
    query(sql,callback){
        connection.query(sql, function (error, results) {
            callback(error,results)
        })
    }
}
module.exports = db