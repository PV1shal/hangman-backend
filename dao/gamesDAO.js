import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let games;

export default class GamesDAO {
    static async injectDB(conn) {
        if (games) {
            return;
        }
        try {
            games = await conn.db(process.env.HANGMAN_DB_NAME).collection("games");
        } catch (e) {
            console.error(`Unable to establish collection handles in gamesDAO: ${e}`);
        }
    }

    static async getAllGames() {
        try {
            return await games.find().toArray();
        } catch (error) {
            console.error(`Unable to get games: ${e}`);
            return { error: e.message };
        }

    }

    static async getGameById(id) {
        try {
            return await games.findOne({ _id: id });
        } catch (error) {
            console.error(`Unable to get game: ${e}`);
            return { error: e.message };
        }
    }

    static async addGame(game) {
        try {
            var gameData = {
                _id: game.id,
                word: game.words,
            }
            return await games.insertOne(gameData);
        } catch (error) {
            console.error(`Unable to add game: ${error}`);
            return { error: error.message };
        }
    }

    static async deleteGameById(id) {
        try {
            return await games.deleteOne({ _id: id });
        } catch (error) {
            console.error(`Unable to delete game: ${error}`);
            return { error: error.message };
        }
    }
}