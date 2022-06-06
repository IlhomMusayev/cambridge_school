module.exports = async (sequelize, Sequelize) => {
  return await sequelize.define("news", {
    new_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    new_title_uz: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
    new_title_ru: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
    new_title_eng: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
    new_slug: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
    new_subtitle_uz: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
    new_subtitle_ru: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
    new_subtitle_eng: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
    new_content_uz: {
      type: Sequelize.TEXT(),
      allowNull: false,
    },
    new_content_ru: {
      type: Sequelize.TEXT(),
      allowNull: false,
    },
    new_content_eng: {
      type: Sequelize.TEXT(),
      allowNull: false,
    },
    new_image: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
  });
};
