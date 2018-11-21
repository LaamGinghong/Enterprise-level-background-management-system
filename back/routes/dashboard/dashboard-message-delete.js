const express = require('express');
const router = express.Router();
const url = require('url');
const {query} = require('../../query');

router.get('/', (request, response, next) => {
    let message;
    let errorMessage;
    const params = url.parse(request.url, true).query;
    const id = params.id;
    const isDelete = params.isDelete;
    const updateSql = 'update dashboard_message set isDelete = ? where id = ?';
    query(updateSql, [isDelete, id]).then(value => {
        if (value) {
            message = {
                success: true,
                message: '删除成功！'
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
    })
});

module.exports = router;