module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define("user", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});

	User.associate = models => {
		User.hasMany(models.comment);
	}

	return User;
}