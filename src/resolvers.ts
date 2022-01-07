import {
	createPlayer,
	deletePlayer,
	games,
	players,
	updatePlayer,
	workers,
} from "./data";
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
	MutationResolver: {
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
	},
};
