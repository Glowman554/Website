import { Head } from "$fresh/runtime.ts";
import { projects } from "../data/projects.ts";
import { Project } from "../components/Project.tsx"
import { VisitCounter } from "../islands/VisitCounter.tsx";

export default function Home() {
	return (
		<>
			<Head>
				<title>Glowman554 - Home</title>
			</Head>
			<div class={"glow-text"}>
				<h1>Hello my name is Glowman554 and I'm happy to meet you 👍!</h1>
				<h1>I'm mainly here to have fun 👾!</h1>
				<br />
				<hr />
				<br />

				<h2>My Latest Projects</h2>
				{
					projects.slice(0, 5).map((project) => <Project data={project}/>)
				}
				<VisitCounter />
			</div>
		</>
	);
}
