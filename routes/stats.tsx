import { Head } from "$fresh/runtime.ts";
import { TelemetryView } from "../islands/TelemetryView.tsx";

export default function Home() {
	return (
		<>
			<Head>
				<title>Glowman554 - Stats</title>
			</Head>
			<div class={"glow-text"}>
                <h2>Stats</h2>
				<TelemetryView />
			</div>
		</>
	);
}
