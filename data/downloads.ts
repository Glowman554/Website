export interface DownloadData {
    name: string;
    file: string;
    link?: string;
}

export const downloads: DownloadData[] = [
    {
        name: "Inferno core",
        file: "/downloads/inferno.zip",
    },
    {
        name: "Simple RiscV processor",
        file: "/downloads/riscv.zip",
    },
    {
        name: "Framework (1.20.4)",
        file: "/downloads/Framework-1.20.4.jar",
        link: "/framework",
    },
    {
        name: "Framework (1.20.5)",
        file: "/downloads/Framework-1.20.5.jar",
        link: "/framework",
    },
    {
        name: "Framework (1.20.6)",
        file: "/downloads/Framework-1.20.6.jar",
        link: "/framework",
    },
    {
        name: "Framework (1.21)",
        file: "/downloads/Framework-1.21.jar",
        link: "/framework",
    },
];
