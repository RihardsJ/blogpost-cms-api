module.exports = ({ connection }) => {
	async function get() {
		let response;
		try {
			const { rows } = await connection.query('SELECT * FROM forms');
			response = rows[0];
		} catch (error) {
			throw error;
		}
		return response;
	}

	return { get };
};
