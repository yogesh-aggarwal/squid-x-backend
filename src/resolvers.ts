import {
	createPlayer,
	createWorker,
	deletePlayer,
	deleteWorker,
	games,
	players,
	updatePlayer,
	updateWorker,
	workers,
} from "./data";
import { Game, Player, Worker } from "./types";
var GraphQLDate = require("graphql-date");

export default {
	GraphQLDate: GraphQLDate,
	QueryResolver: {
		getAllPlayers: (_: any, __: {}): Player[] => {
			return players;
		},
		getAllWorkers: (_: any, __: {}): Worker[] => {
			return workers;
		},
		getAllGames: (_: any, __: {}): Game[] => {
			return games;
		},
	},
	MutationResolver: {
		// -- Player ----------
		deletePlayer: (_: any, args: { id: number }): boolean => {
			deletePlayer(args.id);
			return true;
		},
		createPlayer: (_: any, args: { player: Player }): Player => {
			const newPlayer = {
				...args.player,
				id: players.length + 1,
			};
			createPlayer(newPlayer);
			return newPlayer;
		},
		updatePlayer: (
			_: any,
			args: { id: number; player: Partial<Player> }
		): Player => {
			return updatePlayer(args.id, args.player);
		},
		// -- Worker ----------
		deleteWorker: (_: any, args: { id: number }): boolean => {
			deleteWorker(args.id);
			return true;
		},
		createWorker: (_: any, args: { worker: Worker }): Worker => {
			const newWorker = {
				...args.worker,
				id: workers.length + 1,
			};
			createWorker(newWorker);
			return newWorker;
		},
		updateWorker: (
			_: any,
			args: { id: number; worker: Partial<Worker> }
		): Worker => {
			return updateWorker(args.id, args.worker);
		},
	},
};
