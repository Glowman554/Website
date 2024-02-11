import { Head } from "$fresh/runtime.ts";
import { blogIndex } from "../data/blogIndex.ts";
import { Telemetry } from "../islands/Telemetry.tsx";

export default function Home() {
	return (
		<>
			<Telemetry />
			
			<Head>
				<title>Glowman554 - Blog</title>
			</Head>

			<div class="glow-text">
				<h1>Blog</h1>
				{
					blogIndex.map((entry) => <h3>{entry.date}: <a href={"/blog/" + entry.file}>{entry.name}</a></h3>)
				}
			</div>
		</>
	);
}
