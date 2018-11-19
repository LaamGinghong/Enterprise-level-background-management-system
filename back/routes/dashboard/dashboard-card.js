const express = require('express');
const router = express.Router();
const {query} = require('../../query');

router.get('/', (request, response, next) => {
    let message;
    const updateNumberSql = 'update dashboard_card set number = case id when 1 then ? when 2 then ? when 3 then ? when 4 then ? END where id in (1,2,3,4)';
    const numberValue = [];
    for (let i = 0; i < 4; i++) {
        let number = '';
        for (j = 0; j < 10; j++) {
            number += j === 9 ? `${Math.round(Math.random() * 100000)}` : `${Math.round(Math.random() * 100000)},`
        }
        numberValue.push(number);
    }
    query(updateNumberSql, numberValue).then(() => {
        const updateDateSql = 'update dashboard_card set date = case id when 1 then ? when 2 then ? when 3 then ? when 4 then ? END where id in (1,2,3,4)'
        const dateValue = [];
        for (let i = 0; i < 4; i++) {
            const date = new Date();
            date.setTime(date.getTime() - i * 24 * 60 * 60 * 1000);
            dateValue.push(date);
        }
        query(updateDateSql, dateValue).then(() => {
            const searchSql = 'SELECT * FROM dashboard_card;';
            query(searchSql).then(val => {
                val.forEach(item => {
                    item.number = item.number.split(',').map(item => {
                        return Number(item);
                    });
                    item.date=item.date.toLocaleString()
                });
                message = {
                    success: true,
                    message: val
                }
            }).catch(error => {
                throw new Error({
                    success: false,
                    message: error
                });
            }).finally(() => {
                response.setHeader('Access-Control-Allow-Origin', '*');
                response.send(JSON.stringify(message));
            })
        }).catch(error => {
            throw new Error({
                success: false,
                message: error
            });
        })
    }).catch(error => {
        throw new Error({
            success: false,
            message: error
        });
    })
});

module.exports = router;