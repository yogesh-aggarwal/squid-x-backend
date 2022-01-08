export type Player = {
	id: number;
	name: string;
	dob: Date;
	occupation: string;
	address: string;
	debt: number;
	atGameNumber: number;
	isDead: boolean;
};

export type Worker = {
	id: number;
	name: string;
	dob: Date;
	occupation: string;
	address: string;
	duty: "Manager" | "Guard" | "Utility";
};

export type Bet = {
	// PlayerID : Amount
	[key: number]: number;
};
export type Bets = {
	// UserID : Bet
	[key: string]: Bet;
};
export type Game = {
	uuid: string;
	gameNo: number;
	name: string;
	description: string;
	hasCovered: boolean;
	bets: Bets;
};

export type Report = {
	[key: number]: {
		game: Game;
		players: Player[];
		workers: Worker[];
	};
};
