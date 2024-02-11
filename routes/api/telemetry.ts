import { Handlers } from "$fresh/server.ts";
import { Pages, TelemetryPacket } from "../../data/telemetry.ts";

let kv: Deno.Kv | undefined = undefined;

async function getKv() {
    if (!kv) {
        kv = await Deno.openKv(Deno.env.get("DENO_KV_URL"));
    }
    return kv;
}

export async function onTelemetry(packet: TelemetryPacket) {
    if (Deno.env.get("NO_TELEMETRY") == "true") {
        return;
    }
    const key: Deno.KvKey = [ "users", packet.id, new URL(packet.href).pathname ];

    const kv = await getKv();

    const previous = await kv.get<number>(key);
    if (previous.value) {
        await kv.set(key, previous.value + 1);
    } else {
        await kv.set(key, 1);
    }
}

export const handler: Handlers = {
	async POST(req) {
        const packet: TelemetryPacket = await req.json();
        await onTelemetry(packet);

		return new Response("OK");
	},
    
    async GET(_req, _ctx) {
        const kv = await getKv();

        const pages: Pages = {};
    
        for await (const entry of kv.list<number>({ prefix: [ "users" ]})) {
            const href = entry.key[2] as string;
            const id = entry.key[1] as string;

            if (Deno.env.get("RESET_TELEMETRY") == "true") {
                await kv.delete(entry.key);
            }
    
            if (!pages[href]) {
                pages[href] = {
                    loads: 0,
                    users: [],
                }
            }
    
            if (!(pages[href].users as string[]).includes(id)) {
                (pages[href].users as string[]).push(id);
            }
    
            pages[href].loads += entry.value;
        }

        for (const page in pages) {
            pages[page].users = (pages[page].users as string[]).length;
        }

        return new Response(JSON.stringify(pages));
    }
};