import { Head } from "$fresh/runtime.ts";

export default function Home() {
    return (
        <>
            <Head>
                <title>Glowman554 - Framework</title>
            </Head>
            <div class="glow-text">
                <h2>Framework</h2>
                <p>
                    Framework is a simple minecraft client distributed as a
                    fabric mod.
                </p>
                <p>
                    Only the newest version will receive updated except if it is
                    a critical security issue.
                </p>
            </div>
        </>
    );
}
