//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function() {
    const text = document.getElementById("text").value;
    const delay = parseInt(document.getElementById("delay").value);
    const outputDiv = document.getElementById("output");

    if (!text || isNaN(delay) || delay < 0) {
        return;
    }
    await delayMessage(delay);
    outputDiv.textContent = text;
});

function delayMessage(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
