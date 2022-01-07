import { games, players, workers } from "./data";
import { Game, Player, Worker } from "./types";

export default {
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
};
