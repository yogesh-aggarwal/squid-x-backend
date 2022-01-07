import { Game, Player, Worker } from "./types";

const fetch = require("node-fetch");

const baseURL: string = "https://hackoverflow-cepheus.herokuapp.com";

const makeEndpoint = (url: string): string => {
	return `${baseURL}/${url}`;
};

export const fetchPlayers = async (): Promise<Player[]> => {
	let res = await fetch(makeEndpoint("players"));
	const data: any[] = (await res.json())["rows"];

	let players: Player[] = [];
	data.forEach((rawPlayer) => {
		players.push({
			id: Date.now(),
			name: rawPlayer["name"],
			dob: rawPlayer["dob"],
			occupation: rawPlayer["occupation"],
			address: rawPlayer["address"],
			debt: rawPlayer["debt"],
			atGameNumber: 1,
			isDead: false,
		});
	});
	return players;
};

export const fetchWorkers = async (): Promise<Worker[]> => {
	let res = await fetch(makeEndpoint("workers"));
	const data: any[] = (await res.json())["rows"];

	let workers: Worker[] = [];
	data.forEach((rawWorker) => {
		workers.push({
			id: Date.now(),
			name: rawWorker["name"],
			dob: rawWorker["dob"],
			occupation: rawWorker["occupation"],
			address: rawWorker["address"],
			duty: "Guard",
		});
	});
	return workers;
};

export const fetchGames = async (): Promise<Game[]> => {
	let res = await fetch(makeEndpoint("games"));
	const data: any[] = (await res.json())["rows"];

	let games: Game[] = [];
	data.forEach((rawGame) => {
		games.push({
			uuid: rawGame["uuid"],
			gameNo: +rawGame["game_no"],
			name: rawGame["name"],
			description: rawGame["description"],
			hasCovered: false,
		});
	});
	return games;
};
