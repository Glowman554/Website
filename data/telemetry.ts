export interface TelemetryPacket {
    id: string;
    href: string;
}

export interface Page {
    users: string[] | number;
    loads: number;
}

export interface Pages {
    [ href: string ]: Page;
}