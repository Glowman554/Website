import { useEffect } from "preact/hooks";
import { TelemetryPacket } from "../data/telemetry.ts";

function newID() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let str = "";
    for (let i = 0; i < 20; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return str;
}

export function Telemetry() {
    useEffect(() => {
        let id = localStorage.getItem("id");
        if (!id) {
            id = newID();
            localStorage.setItem("id", id);
        }

        const packet: TelemetryPacket = {
            id: id,
            href: location.href
        };

        fetch("/api/telemetry", {
            method: "POST",
            body: JSON.stringify(packet)
        });
    });

    return (
        <></>
    );
}