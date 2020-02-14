module.exports = {
	createItem: async (req, res) => {
		const { name, price, description } = req.body;

		const db = req.app.get('db');
		await db.items
			.create_item(name, price, description)
			.then(item => res.status(200).send(item));
	},
	updateItem: async (req, res) => {
		const { item_id } = req.params;

		const db = req.app.get('db');
		await db.items
			.updateItems(item_id)
			.then(res.sendStatus(200))
			.catch(err => res.status(500).send(err));
	},
	deleteItem: async (req, res) => {
        const {item_id} = req.params;
        const db =req.app.get('db');

        db.items.delete_item(item_id)
        .then(res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },
	getAllItem: async (req, res) => {
        const db = req.app.get('db');
		await db.items
			.getItems(user_id)
			.then(items => res.status(200).send(items))
			.catch(err => res.status(500).send(err));
    },
	getItem: async (req, res) => {
        const { item_id } = req.params;
		const db = req.app.get('db');
		await db.reviews
			.get_item(item_id)
			.then(item=> res.status(200).send(item))
			.catch(err => res.status(500).send(err));
    }
};
