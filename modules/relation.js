const { Sequelize, DataTypes } = require("sequelize");

module.exports = async (db) => {
  // ADMIN RELETION
  await db.admins.hasMany(db.sessions, {
    foreignKey: {
      name: "admin_id",
      allowNull: true,
    },
  });

  await db.sessions.belongsTo(db.admins, {
    foreignKey: {
      name: "admin_id",
      allowNull: true,
    },
  });
  // BREACH EVENT REALTIONS
  await db.branchs.hasMany(db.events, {
    foreignKey: {
      name: "branch_id",
      allowNull: false,
    },
  });

  await db.events.belongsTo(db.branchs, {
    foreignKey: {
      name: "branch_id",
      allowNull: false,
    },
  });
  // ADMINSSION REALTIONS
  await db.branchs.hasMany(db.adminssions, {
    foreignKey: {
      name: "branch_id",
      allowNull: true,
    },
  });

  await db.adminssions.belongsTo(db.branchs, {
    foreignKey: {
      name: "branch_id",
      allowNull: true,
    },
  });
};
