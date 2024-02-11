import { Head } from "$fresh/runtime.ts";
import { projects } from "../data/projects.ts";
import { Project } from "../components/Project.tsx"
import { Telemetry } from "../islands/Telemetry.tsx";

export default function Home() {
	return (
		<>
			<Telemetry />

			<Head>
				<title>Glowman554 - Projects</title>
			</Head>
			<div class={"glow-text"}>
				<h1>My Projects</h1>
				{
					projects.map((project) => <Project data={project}/>)
				}
			</div>
		</>
	);
}
