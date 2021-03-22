require('dotenv').config();

const {
	DB_HOST,
	DABATABASE,
	DB_USER,
	DB_PORT,
	DB_PASSWORD,
	NODE_ENV,
	PORT,
} = process.env;

module.exports = {
	NODE_ENV,
	PORT,
	DATABASE: {
		host: DB_HOST,
		database: DABATABASE,
		user: DB_USER,
		port: DB_PORT,
		password: DB_PASSWORD,
	},

	ENDPOINTS: {
		home: '/',
	},
};
