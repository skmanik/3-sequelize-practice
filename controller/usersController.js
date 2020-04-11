const db = require("../models");

module.exports = {
	findAllUsers: (req, res) => {
		db.user.findAll({
			include: [{
				model: db.comment
			}]
		}).then(result => {
			res.json(result);
		}).catch(error => {
			res.status(500).json(error);
		});
	},
	findUser: (req, res) => {
		db.user.findByPk(req.params.id).then(result => {
			res.json(result);
		}).catch(error => {
			res.status(500).json(error);
		});
	},
	findCommentsByUser: (req, res) => {
		db.comment.findAll({ 
			where: {
				userId: req.params.id
			} 
		}).then(result => {
			res.json(result);
		}).catch(error => {
			res.status(500).json(error);
		});
	},
	create: (req, res) => {
		db.user.create({
			username: req.body.username
		}).then(result => {
			res.json(result);
		}).catch(error => {
			res.status(500).json(error);
		});
	},
	update: (req, res) => {
		db.user.update({
			username: req.body.username
		},
		{
			where: {
				id: req.params.id
			}
		}).then(result => {
			res.json(result);
		}).catch(error => {
			res.status(500).json(error);
		});
	},
	delete: (req, res) => {
		db.user.destroy({
			where: {
				id: req.params.id
			}
		}).then(result => {
			res.json(result);
		}).catch(error => {
			res.status(500).json(error);
		});
	}
}