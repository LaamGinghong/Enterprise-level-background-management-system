const express = require('express');
const router = express.Router();
const url = require('url');
const {query} = require('../query');

router.get('/getSaleOrVolume', (request, response) => {
	let message;
	const params = url.parse(request.url, true).query;
	const type = params.type;
	const selectSql = 'select * from analysis_sale_volume where type = ?';
	query(selectSql, [type]).then(value => {
		const option = {};
		value.forEach(item => {
			if (!option[item.name]) {
				option[item.name] = [];
			}
			option[item.name].push(item);
		});
		for (const i in option) {
			if (option.hasOwnProperty(i)) {
				option[i].forEach(item => {
					delete item.name;
				});
			}
		}
		message = {
			success: true,
			message: option
		};
	}).catch(error => {
		message = {
			success: false,
			message: error.message
		};
		throw new Error('发现错误：' + error.message);
	}).finally(() => {
		response.setHeader('Access-Control-Allow-Origin', '*');
		response.send(JSON.stringify(message));
	});
});
module.exports = router;