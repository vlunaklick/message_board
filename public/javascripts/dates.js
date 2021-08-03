const moment = require('moment')

let val1 = moment().subtract(1, 'days')
let val2 = moment().subtract(7, 'days')

const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		added: moment(val1).fromNow(),
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: moment(val2).fromNow(),
	},
]

module.exports = messages
