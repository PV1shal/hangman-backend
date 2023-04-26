import express from 'express';
import UsersController from './users.controller.js';
import GamesController from './games.controller.js';

const router = express.Router();

router.route('/users').get(UsersController.apiGetAllUsers);
router.route('/users/:id').get(UsersController.apiGetUserById);
router.route('/users').post(UsersController.apiPostUser);

router.route('/games').get(GamesController.apiGetAllGames);
router.route('/games').post(GamesController.apiPostGame);
router.route('/games/:id').get(GamesController.apiGetGameById);
router.route('/games/:id').delete(GamesController.apiDeleteGame);

export default router;