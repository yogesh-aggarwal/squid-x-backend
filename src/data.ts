import { Game, Player, Report, Worker } from "./types";
import { fetchGames, fetchPlayers, fetchWorkers } from "./api";

export let players: Player[] = [];
export let workers: Worker[] = [];
export let games: Game[] = [];
export let currentGame: number = 0;

export let data: Report = {};

export const setupData = async () => {
	players = await fetchPlayers();
	workers = await fetchWorkers();
	games = await fetchGames();
};

// -- Players ----------
export const deletePlayer = (id: number) => {
	players = players.filter((player) => player.id != id);
};
export const createPlayer = (player: Player) => {
	players.push(player);
};
export const updatePlayer = (id: number, player: Partial<Player>): Player => {
	players[id - 1] = {
		...players[id - 1],
		...player,
	};
	return players[id - 1];
};

// -- Workers ----------
export const deleteWorker = (id: number) => {
	workers = workers.filter((worker) => worker.id != id);
};
export const createWorker = (worker: Worker) => {
	workers.push(worker);
};
export const updateWorker = (id: number, worker: Partial<Worker>): Worker => {
	workers[id - 1] = {
		...workers[id - 1],
		...worker,
	};
	return workers[id - 1];
};

// -- Game ----------
export const moveToNextGame = (): Game[] => {
	data[currentGame] = {
		players: [...players],
		workers: [...workers],
	};
	currentGame++;
	games.map((game) => (game.hasCovered = game.gameNo <= currentGame));
	return games;
};

// -- Report ----------
export const prepareReport = (): Report => {
	return data;
};
