module.exports = async (sequelize, Sequelize) => {
  return await sequelize.define("admin", {
    admin_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    admin_email: {
      type: Sequelize.STRING(),
      allowNull: false,
      unique: true,
    },
    admin_password: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
  });
};
