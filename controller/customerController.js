// const { type } = require("express/lib/response");
// const sequelize = require("../config/databse");
// const { statusCode } = require("../utils/statusCodes");
// const bcrypt = require("bcrypt");
// exports.createCustomer = async (req, res) => {
//   const { name, email, password } = req.body;
//   console.log(req.body);
//   if (!name || !email || !password) {
//     return res.status(statusCode.error).json({
//       msg: "Please provide all the data",
//     });
//   }
//   try {
//     const hashPassword = await bcrypt.hash(password, 10)
//     // const customer = await sequelize.models.Customer.create({
//     //     name,
//     //     email,
//     //     password :  hashPassword,
//     //     isActive : true
//     // })

//     const query = `INSERT INTO Customers (name,email, password, isActive, createdAt, updatedAt) VALUES (:name,:email,:password,true, NOW(), NOW())`;

//     await sequelize.query(query, {
//       replacements: {
//         name,
//         email,
//         hashPassword
//       },
//       type: sequelize.QueryTypes.INSERT,
//     });

//     return res.status(statusCode.success).json({
//       msg: "Customer created successfully",
//     });
//   } catch (error) {
//     return res.status(statusCode.error).json({
//       msg: error.message,
//     });
//   }
// };


const sequelize = require("../config/databse");
const { statusCode } = require("../utils/statusCodes");
const bcrypt = require("bcrypt");

exports.createCustomer = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(statusCode.error).json({
      msg: "Please provide all the data",
    });
  }

  try {
    // Hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    // SQL query to insert a new customer
    const query = `INSERT INTO Customers (name, email, password, isActive, createdAt, updatedAt) VALUES (:name, :email, :password, true, NOW(), NOW())`;

    // Execute the query with parameter binding
    await sequelize.query(query, {
      replacements: {
        name,
        email,
        password: hashPassword,  // Pass the hashed password correctly
      },
      type: sequelize.QueryTypes.INSERT,
    });

    return res.status(statusCode.success).json({
      msg: "Customer created successfully",
    });
  } catch (error) {
    return res.status(statusCode.error).json({
      msg: error.message,
    });
  }
};
