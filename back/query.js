const conn = require('./databases');
const mysql = conn.getDbCon();
let query = (sql, values) => {
    return new Promise((resolve, reject) => {
        mysql.query(sql, values, (error, result) => {
            error ? reject(error) : resolve(result);
        });
    });
};

module.exports = {query};