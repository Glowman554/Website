export interface DownloadData {
    name: string;
    file: string;
    link?: string;
}

export const downloads: DownloadData[] = [
    // {
    //     name: "RenderFox V1 (Source)",
    //     file: "/downloads/renderfox-v1.zip",
    // },
    // {
    //     name: "RenderFox V2 (Source)",
    //     file: "/downloads/renderfox-v2.zip",
    // },
    // {
    //     name: "ITLer V1 (Source)",
    //     file: "/downloads/itler-v1.zip",
    // },
    // {
    //     name: "ITLer V2 (Source)",
    //     file: "/downloads/itler-v2.zip",
    // },
    // {
    //     name: "JavaIdle V1 (Source)",
    //     file: "/downloads/javaidle-v1.zip",
    // },
    // {
    //     name: "MicroGUI (Early Alpha version)",
    //     file: "/downloads/microgui.zip",
    //     link: "/blog/10_21_2023_microgui.md",
    // },
    // {
    //     name: "Password manager",
    //     file: "/downloads/password.zip",
    //     link: "/blog/04_14_2023_password_manager.md",
    // },
    // {
    //     name: "Phoenix specifications",
    //     file: "/downloads/phoenix.pdf",
    // },
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
