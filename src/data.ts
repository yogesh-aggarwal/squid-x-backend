import { Game, Player, Worker } from "./types";
import { fetchGames, fetchPlayers, fetchWorkers } from "./api";

export let players: Player[] = [];
export let workers: Worker[] = [];
export let games: Game[] = [];

export const setupData = async () => {
	players = await fetchPlayers();
	workers = await fetchWorkers();
	games = await fetchGames();
};
