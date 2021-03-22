module.exports = ({ pg, settings }) => {
	const { Pool } = pg;
	const { DATABASE, NODE_ENV } = settings;
	let config = NODE_ENV === 'test' ? 'TESTING_DATABASE' : DATABASE;
	return new Pool(config);
};
