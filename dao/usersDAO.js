import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let users;

export default class UsersDAO {
    static async injectDB(conn) {
        if (users) {
            return;
        }
        try {
            users = await conn.db(process.env.HANGMAN_DB_NAME).collection("users");
        } catch (e) {
            console.error(`Unable to establish collection handles in userDAO: ${e}`);
        }
    }

    static async getAllUsers() {
        try {
            return await users.find().toArray();
        } catch (error) {
            console.error(`Unable to get users: ${e}`);
            return { error: e.message };
        }

    }

    static async getUserById(id) {
        try {
            return await users.findOne({ _id: id });
        } catch (error) {
            console.error(`Unable to get user: ${e}`);
            return { error: e.message };
        }
    }

    static async addUser(user) {
        try {
            const userData = {
                username: user.username,
                score: user.score,
            }
            const result = await users.insertOne({ _id: userData.username, username: userData.username, score: userData.score });
            return { message: "Added New User successfully", insertedId: result.insertedId };
        } catch (error) {
            console.error(`Unable to add user: ${error}`);
            return { error: error.message };
        }
    }
}