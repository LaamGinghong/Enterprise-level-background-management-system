const express = require('express');
const router = express.Router();
const {query} = require('../../query');

router.get('/', (request, response) => {
    let message;
    const updateSql = 'update dashboard_article set value = case id when 1 then ? ' +
        'when 2 then ? when 3 then ? when 4 then ? when 5 then ? when 6 then ? ' +
        'when 7 then ? when 8 then ? when 9 then ? when 10 then ? ' +
        'when 11 then ? when 12 then ? END where id in (1,2,3,4,5,6,7,8,9,10,11,12)';
    const values = [];
    for (let i = 0; i < 12; i++) {
        values.push(Math.round(Math.random() * 1000))
    }
    query(updateSql, values).then(() => {
        const selectSql = 'select * from dashboard_article';
        query(selectSql).then(value => {
            const option = {};
            value.forEach(item => {
                if (option[item.name]) {
                    option[item.name].push({
                        id: item.id,
                        value: item.value
                    });
                } else {
                    option[item.name] = [{id: item.id, value: item.value}];
                }
            });
            const array = [];
            for (const i in option) {
                if (option.hasOwnProperty(i)) {
                    const object = {
                        name: i,
                        value: option[i]
                    };
                    array.push(object);
                }
            }
            array.forEach(item => {
                item.value.forEach(val => {
                    val['month'] = `${val.id}月`;
                    delete val.id;
                });
            });
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
        })
    }).catch(error => {
        throw new Error({
            success: false,
            message: error
        });
    })
});
module.exports = router;