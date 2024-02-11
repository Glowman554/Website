import { Handlers } from "$fresh/server.ts";
import { Webhook, Embed } from "npm:@hyunsdev/discord-webhook";

async function sendWebHook(message: string) {
	if (message.trim() == "") {
		return;
	}

	const webhookUrl = Deno.env.get("MESSAGE_WEBHOOK");
	if (!webhookUrl) {
		throw new Error("Missing MESSAGE_WEBHOOK");
	}

	const client = new Webhook(webhookUrl, "Suggestions");
	const embed = new Embed({
		title: "Suggestion",
		description: message
	});
	await client.send("", [ embed ]);
}

export const handler: Handlers = {
	async POST(req) {
		await sendWebHook(await req.text());
		return new Response("OK");
	}
};