const sequelize = require('../config/databse');

// Create a new user using a raw SQL query
const createUser = async (req, res) => {
  const { firstName, lastName, age } = req.body;

  // Basic validation
  if (!firstName || !lastName) {
    return res.status(400).json({ message: 'Please provide all required fields: firstName, lastName' });
  }
  

  try {
    // SQL query to insert a new user
    const query = `
      INSERT INTO Users (firstName, lastName,age, createdAt, updatedAt)
      VALUES (:firstName, :lastName, :age, NOW(), NOW())
    `;

    // Execute the query with parameter binding
    await sequelize.query(query, {
      replacements: {
        firstName,
        lastName,
       age
      },
      type: sequelize.QueryTypes.INSERT,
    });

   return  res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

module.exports = {
  createUser,
};
