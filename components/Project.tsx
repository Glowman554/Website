import { ProjectData } from "../data/projects.ts";

export function Project(props: {data: ProjectData}) {
    return (
        <div class={"glow-row"} style={"margin-bottom: 1rem"}>
            <div class={"glow-row-rest"} style={"background-color: #252525"}>
                <h3><a href={props.data.link}>{props.data.name}</a></h3>
                {props.data.description}
            </div>
        </div>
    );
}