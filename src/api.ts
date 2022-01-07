import { Game, Player } from "./types";

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

export const fetchGames = async (): Promise<Game[]> => {
	let res = await fetch(makeEndpoint("games"));
	const data: any[] = (await res.json())["rows"];

	let games: Game[] = [];
	data.forEach((rawPlayer) => {
		games.push({
			uuid: rawPlayer["uuid"],
			gameNo: rawPlayer["game_no"],
			name: rawPlayer["name"],
			description: rawPlayer["description"],
			hasCovered: false,
		});
	});
	return games;
};
