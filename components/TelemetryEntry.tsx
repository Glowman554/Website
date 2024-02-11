import dataDir from "https://deno.land/x/dir@1.5.1/data_local_dir/mod.ts";
import { Page } from "../data/telemetry.ts";

export function TelemetryEntry(props: { href: string, data: Page }) {
    return (
        <div>
            <a href={props.href}>{props.href}</a> was loaded {props.data.loads} times by {props.data.users} unique users.
        </div>
    );
}