export type Player = {
	id: number;
	name: string;
	dob: number;
	occupation: string;
	address: string;
	debt: number;
	atGameNumber: number;
	isDead?: boolean;
};

export type Game = {
	uuid: string;
	gameNo: string;
	name: string;
	description: string;
	hasCovered: boolean;
};
