const moment = require('moment')

let val1 = moment().startOf('day').fromNow()
let val2 = moment().startOf('week').fromNow()

const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		added: val1,
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: val2,
	},
]

module.exports = messages
