import { DownloadData } from "../data/downloads.ts";

export function Download(props: {data: DownloadData}) {
    return (
        <tr class={"glow-tr"}>
            <td class={"glow-td"}>
                <a href={props.data.file}>{props.data.name}</a>
            </td>
            <td class={"glow-td"}>
                {
                    props.data.link ? <a href={props.data.link}>More information</a> : <></>
                }
            </td>
        </tr>
    );
}