import { Handlers } from "$fresh/server.ts";

interface ServerInfoFeatured {
    name: string;
    address: string;
}

export const handler: Handlers = {
	GET(_req) {
        const servers: ServerInfoFeatured[] = [
            {
                name: "2b2t",
                address: "2b2t.org"
            }
        ]
		return new Response(JSON.stringify(servers));
	}
};