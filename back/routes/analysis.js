const express = require('express');
const router = express.Router();
const url = require('url');
const {query} = require('../query');

router.get('/getSaleOrVolume', (request, response) => {
    let message;
    let updateSql = 'update analysis_sale_volume set month = case id ';
    for (let i = 1; i <= 12; i++) {
        updateSql += ` when ${i} then ?`;
    }
    updateSql += ' END where id in (';
    const updateValues = [];
    for (let i = 1; i <= 12; i++) {
        updateSql += i === 12 ? `${i})` : `${i},`;
        updateValues.push(i);
    }
    query(updateSql, updateValues).then(() => {

    }).catch(error => {
        message = {
            success: false,
            message: error.message
        };
        throw new Error('发生错误：' + error.message);
    })
});
module.exports = router;