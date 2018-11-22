const express = require('express');
const router = express.Router();
const url = require('url');
const {query} = require('../query');

router.get('/card', (request, response) => {
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
                    item.date = item.date.toLocaleString()
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
            message = {
                success: false,
                message: error.message
            };
            throw new Error('发现错误：' + error.message);
        })
    }).catch(error => {
        message = {
            success: false,
            message: error.message
        };
        throw new Error('发现错误：' + error.message);
    });
});

router.get('/article', (request, response) => {
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

router.get('/ridership', (request, response) => {
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

router.get('/message', (request, response) => {
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

router.get('/message/delete', (request, response) => {
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

router.get('/message/active', (request, response) => {
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