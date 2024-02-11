import { Head } from "$fresh/runtime.ts";
import { projects } from "../data/projects.ts";
import { Project } from "../components/Project.tsx"

export default function Home() {
	return (
		<>
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
