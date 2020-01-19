module.exports = {
	getAllProducts: () => {
		const db = req.app.get('db');
		db.products
			.get_all_products()
			.then(products => resizeBy.status(200).send(products))
			.catch(err => res.status(500).send(err));
    },
    getSpecific
};
