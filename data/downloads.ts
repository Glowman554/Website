export interface DownloadData {
    name: string;
    file: string;
    link?: string;
}

export const downloads: DownloadData[] = [
    {
        name: "RenderFox V1 (Source)",
        file: "/downloads/renderfox-v1.zip"
    },
    {
        name: "RenderFox V2 (Source)",
        file: "/downloads/renderfox-v2.zip"
    },
    {
        name: "ITLer V1 (Source)",
        file: "/downloads/itler-v1.zip"
    },
    {
        name: "ITLer V2 (Source)",
        file: "/downloads/itler-v2.zip"
    },
    {
        name: "JavaIdle V1 (Source)",
        file: "/downloads/javaidle-v1.zip"
    },
    {
        name: "MicroGUI (Early Alpha version)",
        file: "/downloads/microgui.zip",
        link: "/blog/10_21_2023_microgui.md"
    },
    {
        name: "Password manager",
        file: "/downloads/password.zip",
        link: "/blog/04_14_2023_password_manager.md"
    },
    {
        name: "Phoenix specifications",
        file: "/downloads/phoenix.pdf"
    },
    {
        name: "Phoenix ip core",
        file: "/downloads/phoenix_ip.zip"
    },
    {
        name: "Framework (1.20.4)",
        file: "/downloads/Framework-1.20.4.jar"
    }
];