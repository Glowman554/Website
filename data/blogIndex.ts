export interface BlogIndexEntry {
	name: string;
	date: string;
	file: string;
}

export const blogIndex: BlogIndexEntry[] = [
	{
		name: "My tech stack",
		date: "July 6 2024",
		file: "07_08_2024_my_tech_stack.md",
	},
	{
		name: "Remaking my website (once again)",
		date: "February 10 2024",
		file: "10_02_2024_remaking_my_website_once_again.md",
	},
	{
		name: "MicroGUI release (Early Alpha version)",
		date: "October 21 2023",
		file: "10_21_2023_microgui.md",
	},
	{
		name: "How does my programming language work?",
		date: "September 28 2023",
		file: "09_28_2023_my_programing_language.md",
	},
	{
		name: "Remaking my website",
		date: "April 17 2023",
		file: "04_17_2023_remaking_website.md",
	},
	{
		name: "Adding icons to the FoxOS desktop",
		date: "August 10 2022",
		file: "08_10_2022_foxos_desktop_icons.md",
	},
	{
		name: "Creating a documentation for FoxOS",
		date: "August 07 2022",
		file: "08_07_2022_foxos_docs.md",
	},
	{
		name: "Blog devlog",
		date: "August 07 2022",
		file: "08_07_2022_block_devlog.md",
	},
];
