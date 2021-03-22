module.exports = ({ app }) =>
	function start(port) {
		if (!port)
			throw new Error('Port is missing. Please provide server with a port');

		app.listen(port, () =>
			console.log(`Server is running on http://localhost:${port} `)
		);
	};
