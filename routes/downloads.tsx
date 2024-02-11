import { Head } from "$fresh/runtime.ts";
import { Download } from "../components/Download.tsx";
import { downloads } from "../data/downloads.ts";
import { Telemetry } from "../islands/Telemetry.tsx";

export default function Home() {
	return (
		<>
			<Telemetry />

			<Head>
				<title>Glowman554 - Downloads</title>
			</Head>
            <div class="glow-text">
                <table class={"glow-table"}>
                    {
                        downloads.map((entry) => <Download data={entry}/>)
                    }
                </table>
            </div>
		</>
	);
}
