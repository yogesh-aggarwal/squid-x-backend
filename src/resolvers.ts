export default {
	QueryResolver: {
		getUser: (_: any, args: { id: string }) => {
			return args.id;
		},
	},
};
