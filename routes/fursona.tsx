import { Head } from "$fresh/runtime.ts";
import { Telemetry } from "../islands/Telemetry.tsx";

export default function Home() {
	return (
		<>
			<Telemetry />
		
        	<Head>
				<title>Glowman554 - Fursona</title>
			</Head>
			<div class={"glow-text"}>
                <h2>This are my fursona's glow and Firestorm :D</h2>

                <br />
                <hr />
                <br />

                <h3>Firestorm</h3>
                <img src="/fursona/fierstorm.png" />

                <br />
                <hr />
                <br />

                <h3>Glow</h3>
                <img src="/fursona/glow_ref.png" />
                <img src="/fursona/glow_suit.png" />
                <img src="/fursona/glow_new.png" />
			</div>
		</>
	);
}
