module.exports = ({ express }) =>
	function start(port) {
		const app = express();
		if (!port)
			throw new Error('Port is missing. Please provide server with a port');

		app.listen(port, () =>
			console.log(`Server is running on http://localhost:${port} `)
		);
	};
