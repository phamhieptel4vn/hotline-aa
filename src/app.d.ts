interface SessionData {
	fullname: string | null;
	user_id: string;
	username: string;
	token: string;
	refresh_token: string;
	tenant_name: string;
	tenant_id: string;
}

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			session: import("svelte-kit-cookie-session").Session<SessionData>;
			cookies: Record<string, string>;
		}
		interface Session extends SessionData {}

		interface PageData {
			session: SessionData;
		}
		// interface Platform {}
	}
}

export {};
