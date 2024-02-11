import { useSignal } from "@preact/signals";

export function Navigation() {
	const mainBarClass = useSignal("glow-bar");
	return (
		<div class={mainBarClass}>
			<a href="/">Home</a>
			<a href="/about">About me</a>
			<a href="/blog">Blog</a>
			<a href="/fursona">Fursona</a>
			<a href="/projects">Projects</a>
			<a href="/contact">Contact me</a>
			<a href="/downloads">Downloads</a>
			<a href="https://github.com/Glowman554">GitHub</a>
			
			<a href="javascript:void(0);" onClick={() => {
				if (mainBarClass.value == "glow-bar") {
					mainBarClass.value = "glow-bar responsive";
				} else {
					mainBarClass.value = "glow-bar";
				}
				console.log("here");
			}} class="icon">
				<img src="/menu.svg" alt="Menu" style="width: 2rem;" />
			</a>
		</div>
	);
}
