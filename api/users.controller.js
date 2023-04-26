import UsersDAO from '../dao/usersDAO.js'

export default class UsersController {
    static async apiGetAllUsers(req, res, next) {
        try {
            const response = await UsersDAO.getAllUsers();
            var { error } = response;
            if (error) {
                res.status(400).json({ error: "Unable to get all users" });
            } else {
                res.json({ Users: response });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async apiPostUser(req, res, next) {
        try {
            const response = await UsersDAO.addUser(req.body.userDetails);
            console.log(response);
            var { error } = response;
            if (error) {
                console.log(response.error);
                res.status(400).json({ error: "Unable to add user" });
            } else {
                res.json({
                    status: "Successfully added user",
                    _id: response.insertedId
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    }

    static async apiGetUserById(req, res, next) {
        try {
            const id = req.params.id || {};
            const response = await UsersDAO.getUserById(id);
            var { error } = response;
            if (error) {
                res.status(400).json({ error: "Unable to get user" });
            } else {
                res.json({ user: response });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}