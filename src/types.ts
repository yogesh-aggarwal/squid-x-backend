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
	vipID: number;
	playerID: number;
	amount: number;
};
export type Game = {
	uuid: string;
	gameNo: number;
	name: string;
	description: string;
	hasCovered: boolean;
	bets: Bet[];
};

export type Report = {
	[key: number]: {
		players: Player[];
		workers: Worker[];
	};
};
