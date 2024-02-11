import { PageProps } from "$fresh/server.ts";
import { CSS, render } from "$gfm";
import { Head } from "$fresh/runtime.ts";
import { blogIndex } from "../../data/blogIndex.ts";

export default function Greet(props: PageProps) {
    const file = props.params.file as string;
    const entry = blogIndex.find(idx => idx.file == file);
    
    if (!entry) {
        throw new Error("Blog entry not found!");
    }

    const markdown = Deno.readTextFileSync("blog/" + file);

    return (
        <>
            <Head>
                <style dangerouslySetInnerHTML={{ __html: CSS }} />
                <title>Glowman554 - {entry.name}</title>
            </Head>

            <div class={"glow-text"} dangerouslySetInnerHTML={{ __html: render(markdown)}}>

            </div>
        </>
    );
}
