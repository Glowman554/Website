import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { TelemetryPacket, Pages } from "../data/telemetry.ts";
import { TelemetryEntry } from "../components/TelemetryEntry.tsx";

export function TelemetryView() {
    const telemetryData = useSignal({} as Pages);

    useEffect(() => {
        if (Object.keys(telemetryData.value).length == 0) {
            fetch("/api/telemetry").then(r => r.json().then(r => telemetryData.value = r));
        }
    });

    return (
        <ul>
            {
                Object.keys(telemetryData.value).map(page => <li><TelemetryEntry href={page} data={telemetryData.value[page]}/></li>)
            }
        </ul>
    );
}