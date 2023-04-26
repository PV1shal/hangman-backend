import GamesDAO from "../dao/gamesDAO.js";

export default class GamesController {
    static async apiGetAllGames(req, res, next) {
        try {
            const response = await GamesDAO.getAllGames();
            var { error } = response;
            if (error) {
                res.status(400).json({ error: "Unable to get all games" });
            } else {
                res.json({ Games: response });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async apiPostGame(req, res, next) {
        try {
            const response = await GamesDAO.addGame(req.body.gameDetails);
            // console.log(response);
            var { error } = response;
            if (error) {
                console.log(response.error);
                res.status(400).json({ error: "Unable to add game" });
            } else {
                res.json({
                    status: "Successfully added game",
                    _id: response.insertedId
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    }

    static async apiGetGameById(req, res, next) {
        try {
            const id = req.params.id || {};
            const response = await GamesDAO.getGameById(id);
            var { error } = response;
            if (error) {
                res.status(400).json({ error: "Unable to get game" });
            } else {
                res.json({ game: response });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async apiDeleteGame(req, res, next) {
        try {
            const id = req.params.id || {};
            const response = await GamesDAO.deleteGameById(id);
            var { error } = response;
            if (error) {
                res.status(400).json({ error: "Unable to delete game" });
            } else {
                res.json({ game: response });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}