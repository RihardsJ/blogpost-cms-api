module.exports = ({ express, settings, formsController }) => {
	const app = express;
	const {
		ENDPOINTS: { home },
	} = settings;

	app.get(home, formsController);

	return app;
};
