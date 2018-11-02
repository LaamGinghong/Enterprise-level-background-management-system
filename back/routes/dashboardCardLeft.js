const express = require('express');
const router = express.Router();
const {query} = require('../query');

router.get('/', (request, response, next) => {
    let message;
    const sql = 'select * from dashboard_card_left';
    query(sql).then(value => {
        message = {
            success: true,
            message: value
        };
    }).catch(error => {
        throw message = {
            success: false,
            message: error
        };
    }).finally(() => {
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.send(JSON.stringify(message));
    })
});

module.exports = router;