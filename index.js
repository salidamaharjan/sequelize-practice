require('dotenv').config();
const { DataTypes, Model } = require("sequelize");
const sequelize = require("./config/db.js");
const Department = require("./model/department");

connection();

async function connection() {
  await sequelize.sync({ force: true });
  console.log("All models were synchronized successfully.");
  //CRUD

  //CREATE
  await Department.create({ name: "Sales" });
  await Department.create({ name: "Human Resource" });

  //READ
  const departments = await Department.findAll({
    attributes: ['name'],
    order: [['name', 'ASC']],
    // where: {name: 'sales'}
  }
  );
  console.table(departments);

  //UPDATE
  await Department.update({name: 'Updated Human Resource'}, {
    where: {
      name: "Human Resource"
    }
  });
  const updatedTable = await Department.findAll({
    attributes: ['id', 'name']
  });
  // console.table(updatedTable);

  //DELETE
  // await Department.destroy({
  //   where: {
  //     name: "Sales"
  //   }
  // });
  const deleteDepartment = await Department.findOne({
    name: "Sales"
  })
  deleteDepartment.destroy();
  console.log("delete")
  const updated = await Department.findAll({
    attributes: ["name"]
  });
  console.table(updated);

  const updatedDepartment = await Department.findAll({
    attributes: ["name"]
  });
  // console.table(updatedDepartment);
}
