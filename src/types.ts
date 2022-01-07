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

export type Game = {
	uuid: string;
	gameNo: number;
	name: string;
	description: string;
	hasCovered: boolean;
};
