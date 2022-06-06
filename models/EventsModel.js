module.exports = async (sequelize, Sequelize) => {
    return await sequelize.define("events", {
      event_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      event_title_uz: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      event_title_ru: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      event_title_eng: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      event_slug: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      event_subtitle_uz: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      event_subtitle_ru: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      event_subtitle_eng: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
      event_content_uz: {
        type: Sequelize.TEXT(),
        allowNull: false,
      },
      event_content_ru: {
        type: Sequelize.TEXT(),
        allowNull: false,
      },
      event_content_eng: {
        type: Sequelize.TEXT(),
        allowNull: false,
      },
      event_image: {
        type: Sequelize.STRING(),
        allowNull: false,
      },
    });
  };
  