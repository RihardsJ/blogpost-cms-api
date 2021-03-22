module.exports = ({ formsModel }) => {
	async function getForms(req, res, next) {
		console.log('res ', res);
		try {
			const response = await formsModel.get();
			await res.status(200).send('response');
		} catch (error) {
			next(eror);
		}
	}
	return getForms;
};
