const express = require('express');
const router = express.Router();
const {query} = require('../../query');

router.get('/', (request, response, next) => {
    let message;
    const addSql = 'update dashboard_card set number = case id when 1 then ? when 2 then ? when 3 then ? when 4 then ? END where id in (1,2,3,4)';
    const value = [];
    for (let i = 0; i < 4; i++) {
        let number = '';
        for (j = 0; j < 10; j++) {
            number += j === 9 ? `${Math.round(Math.random() * 100000)}` : `${Math.round(Math.random() * 100000)},`
        }
        value.push(number);
    }
    query(addSql, value).then(value => {
        const searchSql = 'SELECT * FROM dashboard_card;';
        query(searchSql).then(val => {
            message = {
                success: true,
                message: val
            }
        }).catch(error => {
            throw new Error({
                success: false,
                message: error
            })
        }).finally(() => {
            response.setHeader('Access-Control-Allow-Origin', '*');
            response.send(JSON.stringify(message));
        })
    }).catch(error => {
        throw new Error({
            success: false,
            message: error
        })
    })
});

module.exports = router;