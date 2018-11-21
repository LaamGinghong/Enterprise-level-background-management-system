const express = require('express');
const router = express.Router();
const url = require('url');
const {query} = require('../../query');

router.get('/', (request, response) => {
    let message;
    let errorMessage;
    const params = url.parse(request.url, true).query;
    const id = params.id;
    const isActive = params.isActive;
    const updateSql = 'update dashboard_message set isActive = ? where id = ?';
    query(updateSql, [isActive, id]).then(value => {
        if (value) {
            message = {
                success: true,
                message: '修改成功！'
            }
        }
    }).catch(error => {
        errorMessage = {
            success: false,
            message: error.message
        };
        throw new Error('发生错误：' + error.message);
    }).finally(() => {
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.send(JSON.stringify(errorMessage ? errorMessage : message));
    });
});

module.exports = router;