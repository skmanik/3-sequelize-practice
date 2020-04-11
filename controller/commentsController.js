const db = require("../models");

module.exports = {
	findAllComments: (req, res) => {
		db.comment.findAll({}).then(result => {
			res.json(result);
		}).catch(error => {
			res.status(500).json(error);
		});
	},
	findComment: (req, res) => {
		db.comment.findByPk(req.params.id).then(result => {
			res.json(result);
		}).catch(error => {
			res.status(500).json(error);
		});
	},
	create: (req, res) => {
		db.comment.create({
			title: req.body.title,
			content: req.body.content,
			userId: req.body.userId
		}).then(result => {
			res.json(result);
		}).catch(error => {
			res.status(500).json(error);
		});
	},
	update: (req, res) => {
		db.comment.update({
			title: req.body.title,
			content: req.body.content
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
		db.comment.destroy({
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