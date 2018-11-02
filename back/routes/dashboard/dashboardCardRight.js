const express = require('express');
const router = express.Router();
const url = require('url');
const {query} = require('../../query');

router.get('/', (request, response, next) => {
    const params = url.parse(request.url, true).query;
    const today = params['today'].split(' ')[0];
    const year = Number(today.split('-')[0]);
    const month = Number(today.split('-')[1]) - 1;
    const todayDate = Number(today.split('-')[2]);
    const dateBox = []
    for (let i = todayDate; i > todayDate - 5; i--) {
        const date = new Date(year, month, todayDate - i - 1);
        dateBox.push(date)
    }
    console.log(dateBox)
    const sql = 'SELECT * FROM `dashboard_card_right` where cardDate=DATE(?) or cardDate=DATE(?) or cardDate=DATE(?) or cardDate=DATE(?) or cardDate=DATE(?);';
    query(sql, dateBox).then(value => {
        console.log(value);
    })
});

module.exports = router;