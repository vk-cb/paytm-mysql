const sequelize = require("../config/databse");
const { statusCode } = require("../utils/statusCodes");

exports.transactionAddController = async (req, res)=>{
    const {userId, amount} = req.body;
    if(!userId || !amount){
        return res.status(statusCode.badRequest).json({msg : "Please provide all the details userId and amount also"})
    }
    if(amount<=0){
        return res.status(statusCode.badRequest).json({msg : "Amount should be greater than zero"})
    }
    try {
        const query = `UPDATE INTO TansactionAmount (userId, amount) VALUES (:userId, :amount)`

        await sequelize.query(query, {
            replacements: {
                userId,
                amount
            },
            type: sequelize.QueryTypes.UPDATE,
        })
        return res.status(statusCode.success).json({msg: "Transaction added successfully"})
    } catch (error) {
        return res.status(statusCode.error).json({
            msg: error.message,
          });
    }
}