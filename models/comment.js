module.exports = (sequelize, DataTypes) => {
	const Comment = sequelize.define("comment", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		title: DataTypes.STRING,
		content: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	});

	Comment.associate = models => {
		Comment.belongsTo(models.user);
	}

	return Comment;
}