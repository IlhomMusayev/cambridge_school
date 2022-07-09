module.exports = async (sequelize, Sequelize) => {
  return await sequelize.define("branchs", {
    branch_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    branch_name_uz: {
      type: Sequelize.STRING(),
      allowNull: false,
      unique: true,
    },
    branch_name_ru: {
      type: Sequelize.STRING(),
      allowNull: false,
      unique: true,
    },
    branch_name_eng: {
      type: Sequelize.STRING(),
      allowNull: false,
      unique: true,
    },
    branch_slug: {
      type: Sequelize.STRING(),
      allowNull: false,
      unique: true,
    },
    branch_grades: {
      type: Sequelize.ARRAY(Sequelize.STRING()),
      allowNull: false,
    },
    branch_phone: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
    branch_location_link: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
  });
};
