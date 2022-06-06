module.exports = async (sequelize, Sequelize) => {
  return await sequelize.define("adminssions", {
    adminssion_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    adminssion_user_fullname: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
    adminssion_user_email: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
    adminssion_user_phone: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
    adminssion_user_birthdate: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
    adminssion_user_grade: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
    adminssion_user_english_degree: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
    adminssion_user_region: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
    adminssion_user_address: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
    adminssion_user_partents_fullname: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
    adminssion_user_partents_phone: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
    adminssion_user_grade_certificate: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
    adminssion_user_passport: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
    adminssion_user_partents_passport: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
  });
};
