import app from './index.js';
import mongodb from 'mongodb';
import dotenv from 'dotenv';
import UsersDAO from './dao/usersDAO.js';
import GamesDAO from './dao/gamesDAO.js';

async function main() {
    dotenv.config();

    const client = new mongodb.MongoClient(process.env.HANGMAN_DB_URI);

    const port = process.env.PORT || 8000;

    try {
        await client.connect();
        await UsersDAO.injectDB(client);
        await GamesDAO.injectDB(client);
        app.listen(port, () => {
            console.log(`listening on port ${port}`);
        });
    } catch (e) {
        console.error(`Unable to establish connection to MongoDB: ${e}`);
        process.exit(1);
    }
}

main().catch(console.error);