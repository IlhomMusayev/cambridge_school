const { generateHash } = require("../modules/bcript");

const breanchs = [
  {
    breanch_name: "Tashkent 1",
  },
  {
    breanch_name: "Tashkent 2",
  },
  {
    breanch_name: "Samarqand",
  },
];
module.exports = async function init(db) {
  const count = await db.admins.count();

  if (count === 0) {
    const admin = await db.admins.create({
      admin_email: "admin@admin.uz",
      admin_password: generateHash("admin"),
    });
  }

  // breanchs.forEach(async (breanch) => {
  //   await db.breanchs.create({
  //     breanch_name: breanch.breanch_name,
  //   });
  // });
};
