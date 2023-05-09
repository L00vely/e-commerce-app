const pool = require('../model/database');

const { getUsers,
    createUser,
    updateUser
} = require('../model/ecommerce');

/* USERS */
exports.getUsers = async(req, res, next) => {
    try {
        const users = await getUsers();
        return res.json({ data: users.rows })
    } catch(err) {
        return res.status(404).json({
            error: err
        })
    }
}

exports.createUser = (req, res, next) => {
    const { name, email, password, phone } = req.body;
    try {
        const user = createUser(name, email, password, phone);
        return res.status(201).json(user.rows);
    } catch(err) {
        return res.status(400).json({
            error:err
        })
    }
}

exports.updateUser = (req, res, next) => {
    const { id, name, email, password, phone } = req.body;
    try {
        const user = updateUser(id, name, email, password, phone);
        return res.status(200).json(user.rows);
    } catch(err) {
        return res.status(400).json({
            error:err
        })
    }
}