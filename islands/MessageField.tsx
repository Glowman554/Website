import { useSignal } from "@preact/signals";

export function MessageField() {
    const textareaValue = useSignal("");

	return (
        <div>
            <h2>Send me a message</h2>
            <textarea class={"glow-textarea"} value={textareaValue.value} rows={5} onChange={(e) => textareaValue.value = (e?.target as any | null)?.value || "" }></textarea>
            <button onClick={() => {
                fetch("/api/message", {
                    method: "POST",
                    body: textareaValue.value
                }).then(r => r.text().then(r => {
                    console.log(r);
                    alert("Done.");
                }));
            }}>Send</button>
        </div>
	);
}
