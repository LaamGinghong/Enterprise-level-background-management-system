const express = require('express');
const router = express.Router();
var conn = require('../databases');
var mysql = conn.getDbCon();

router.get('/', (request, response, next) => {
    let message;
    let result = {};
    const sql = 'SELECT mt.*,mi.id as cid,mi.name as cName,mi.parent,mi.url as cUrl FROM menu_title  mt left join  menu_item mi on mt.id = mi.parent;';
    query(sql).then(value => {
        value.forEach(item => {
            if (!result.hasOwnProperty(Number(item.id))) {
                result[Number(item.id)] = {
                    id: Number(item.id),
                    name: item.name,
                    url: item.url,
                    icon: item.icon,
                    children: []
                }
            }
            if (item.parent) {
                result[item.parent]['children'].push({
                    id: item['cid'],
                    name: item['cName'],
                    url: item['cUrl']
                });
            }
        });
        message = {
            success: true,
            message: result
        };
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.send(JSON.stringify(message));
    }).catch(error => {
        throw message = {
            success: false,
            message: error
        }
    })
});

let query = (sql, values) => {
    return new Promise((resolve, reject) => {
        mysql.query(sql, values, (error, result) => {
            error ? reject(error) : resolve(result);
        });
    });
};

module.exports = router;