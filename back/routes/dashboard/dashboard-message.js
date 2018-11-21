const express = require('express');
const router = express.Router();
const {query} = require('../../query');

router.get('/', (request, response, next) => {
    let message;
    const updateSql = 'update dashboard_message set isDelete = 0';
    query(updateSql).then(() => {
        const selectSql = 'select * from dashboard_message';
        query(selectSql).then(value => {
            message = {
                success: true,
                message: value
            };
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
});

module.exports = router;