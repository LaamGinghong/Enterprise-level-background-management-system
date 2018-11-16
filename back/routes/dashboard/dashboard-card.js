const express = require('express');
const router = express.Router();
const {query} = require('../../query');

router.get('/', (request, response, next) => {
    let message;
    const addSql = 'update dashboard_card set number = case id when 1 then ? when 2 then ? when 3 then ? when 4 then ? END where id in (1,2,3,4)';
    const number1 = Math.round(Math.random() * 100000);
    const number2 = Math.round(Math.random() * 100000);
    const number3 = Math.round(Math.random() * 100000);
    const number4 = Math.round(Math.random() * 100000);

});