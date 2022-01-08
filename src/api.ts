import { Game, Player, Worker } from "./types";

const fetch = require("node-fetch");

const baseURL: string = "https://hackoverflow-cepheus.herokuapp.com";

const makeEndpoint = (url: string): string => {
	return `${baseURL}/${url}`;
};

export const fetchPlayers = async (): Promise<Player[]> => {
	let res = await fetch(makeEndpoint("players"));
	const data: any[] = (await res.json())["rows"];

	let lastPlayerID: number = 1;
	let players: Player[] = [];
	data.forEach((rawPlayer) => {
		const dobWords: string[] = rawPlayer["dob"].split("/");
		players.push({
			id: lastPlayerID,
			name: rawPlayer["name"],
			dob: new Date(`${dobWords[1]}/${dobWords[0]}/${dobWords[2]}`),
			occupation: rawPlayer["occupation"],
			address: rawPlayer["address"],
			debt: rawPlayer["debt"],
			atGameNumber: 1,
			// isDead: false,
			isDead: lastPlayerID % 2 == 0,
		});
		lastPlayerID++;
	});
	return players;
};

export const fetchWorkers = async (): Promise<Worker[]> => {
	let res = await fetch(makeEndpoint("workers"));
	const data: any[] = (await res.json())["rows"];

	let lastWorkerID: number = 1;
	let workers: Worker[] = [];
	data.forEach((rawWorker) => {
		const dobWords: string[] = rawWorker["dob"].split("/");
		workers.push({
			id: lastWorkerID,
			name: rawWorker["name"],
			dob: new Date(`${dobWords[1]}/${dobWords[0]}/${dobWords[2]}`),
			occupation: rawWorker["occupation"],
			address: rawWorker["address"],
			duty: "Guard",
		});
		lastWorkerID++;
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
			bets: [],
		});
	});
	return games;
};
