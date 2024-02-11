import { Head } from "$fresh/runtime.ts";
import { getAge } from "../data/age.ts";

export default function Home() {
	return (
		<>
			<Head>
				<title>Glowman554 - About me</title>
			</Head>
			<div class="glow-text">
				<h1>whoami</h1>
				<div>
					<p>Im janick aka Glowman554.</p>
					<p>I'm gay, and an average furry, don't try to fix me I won't change.</p>
					<br />
					<p>What am i interested in?</p>
					<p>I love coding my own operating system. It can teach you a lot on how computers work internally. I also love to program Discord bots and much more.</p>
				</div>

				<br />
				<hr />
				<br />

				<h2>My programming skills</h2>

				<h3>Programming languages I know</h3>
				<ul>
					<li>
						<img src="/labels/java.svg" />
					</li>
					<li>
						<img src="/labels/javascript.svg" />
					</li>
					<li>
						<img src="/labels/c_cpp.svg" />
					</li>
				</ul>
				<h3>Tools i use</h3>
				<ul>
					<li>
						<img src="/labels/discord.svg" />
					</li>
					<li>
						<img src="/labels/vscode.svg" />
					</li>
					<li>
						<img src="/labels/git.svg" />
					</li>
					<li>
						<img src="/labels/github.svg" />
					</li>
				</ul>
			
				<br />
				<hr />
				<br />

				<h2>More information about me</h2>
				<table class="glow-table">
					<tr class="glow-tr">
						<td class="glow-td">Age</td>
						<td class="glow-td">{getAge()}</td>
					</tr>
					<tr class="glow-tr">
						<td class="glow-td">Pronouns</td>
						<td class="glow-td">He/him</td>
					</tr>
					<tr class="glow-tr">
						<td class="glow-td">Location</td>
						<td class="glow-td">Germany</td>
					</tr>
					<tr class="glow-tr">
						<td class="glow-td">Languages</td>
						<td class="glow-td">German and English</td>
					</tr>
				</table>
			</div>
		</>
	);
}
