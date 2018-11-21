const express = require('express');
const router = express.Router();
const {query} = require('../../query');

router.get('/', (request, response) => {
    let message;
    let updateSql = 'update dashboard_ridership set value = case id';
    for (let i = 1; i <= 48; i++) {
        updateSql += ` when ${i} then ?`
    }
    updateSql += ' END where id in (';
    const updateValues = [];
    for (let i = 1; i <= 48; i++) {
        updateSql += i === 48 ? `${i})` : `${i},`;
        updateValues.push(Math.round(Math.random() * 500));
    }
    query(updateSql, updateValues).then(() => {
        const selectSql = 'select * from dashboard_ridership';
        query(selectSql).then(value => {
            const option = {};
            value.forEach(item => {
                if (!option[item['name']]) {
                    option[item['name']] = [];
                }
                option[item['name']].push(item);
            });
            const array = [];
            for (const i in option) {
                if (option.hasOwnProperty(i)) {
                    option[i].forEach(item => {
                        delete item['name'];
                    });
                    const object = {
                        name: i,
                        value: option[i]
                    };
                    array.push(object);
                }
            }
            message = {
                success: true,
                message: array
            }
        }).catch(error => {
            throw new Error({
                success: false,
                message: error
            });
        }).finally(() => {
            response.setHeader('Access-Control-Allow-Origin', '*');
            response.send(JSON.stringify(message));
        });
    }).catch(error => {
        throw new Error({
            success: false,
            message: error
        });
    })
});
module.exports = router;