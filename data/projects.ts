export interface ProjectData {
    name: string;
    link: string;
    description: string;
}

export const projects: ProjectData[] = [
	{
		name: "Yuna",
		link: "https://yuna.glowman554.de",
		description: "Search engine"
	},
	{
		name: "MicroGUI",
		link: "/blog/10_21_2023_microgui.md",
		description: "Desktop extension for MicroOS"
	},
	{
		name: "GoofyCapture",
		link: "https://github.com/Glowman554/GoofyCapture",
		description: "A simple logic analyzer based on the rp2040"
	},
	{
		name: "TinyCore",
		link: "https://github.com/Glowman554/TinyCore",
		description: "A simple and tiny 8bit cpu core"
	},
	{
		name: "MicroOS",
		link: "https://github.com/Glowman554/MicroOS",
		description: "MicroOS is a small operating system. It's mainly made for fun, and supports ring3 execution and memory protection."
	},
	{
		name: "NextFS Loader",
		link: "https://github.com/Glowman554/nextfs-loader",
		description: "Simple bootloader & filesystem able to boot MicroOS and a custom boot protocol"
	},
	{
		name: "FireStorm",
		link: "https://github.com/Glowman554/FireStorm",
		description: "My own programming language which is interpreted or compiled to x86_64 assembly"
	},
	{
		name: "BrainASM",
		link: "https://github.com/Glowman554/BrainASM",
		description: "Brainfuck to assembly compiler supporting many architectures including x86_64, xtensa and avr"
	},
	{
		name: "TheBot",
		link: "https://github.com/Glowman554/TheBot-reloaded",
		description: "Custom Discord bot made using deno, nodejs and docker"
	},
	{
		name: "phoenix-v2",
		link: "https://github.com/Glowman554/phoenix-v2",
		description: "My own cpu architecture with custom assembler and logic circuit"
	},
	{
		name: "FoxOS",
		link: "https://theultimatefoxos.dev/",
		description: "Operating system written using c++ and c with network support"
	},
];