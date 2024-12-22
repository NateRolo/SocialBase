// copy function
async function copyText(text) {
    try {
        await navigator.clipboard.writeText(text);
        console.log("Text copied");
    }
    catch (err) {
        console.error("Failed to copy:", err);
    }
}


