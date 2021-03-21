require('dotenv').config();

const { DB_HOST, DABATABASE, DB_USER, DB_PORT, DB_PASSWORD } = process.env;

console.log(DB_PORT);

module.exports = {
	DATABASE: {
		host: DB_HOST,
		database: DABATABASE,
		user: DB_USER,
		port: DB_PORT,
		password: DB_PASSWORD,
	},
};
