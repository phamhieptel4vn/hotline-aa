export type Route = {
	path: string;
	name: string;
	icon: string;
	childRoutes: {
		name: string;
		path: string;
	}[] | null;
};
