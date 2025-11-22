// Get elements
const htmlTab = document.getElementById("htmlTab");
const cssTab = document.getElementById("cssTab");
const jsTab = document.getElementById("jsTab");

const htmlCode = document.getElementById("htmlCode");
const cssCode = document.getElementById("cssCode");
const jsCode = document.getElementById("jsCode");

const runBtn = document.getElementById("runBtn");
const outputFrame = document.getElementById("outputFrame");

// Hide all editors
function hideAllEditors() {
    htmlCode.style.display = "none";
    cssCode.style.display = "none";
    jsCode.style.display = "none";
}

// Show selected editor
htmlTab.addEventListener("click", () => {
    hideAllEditors();
    htmlCode.style.display = "block";
});

cssTab.addEventListener("click", () => {
    hideAllEditors();
    cssCode.style.display = "block";
});

jsTab.addEventListener("click", () => {
    hideAllEditors();
    jsCode.style.display = "block";
});

// Run code
runBtn.addEventListener("click", () => {
    const html = htmlCode.value;
    const css = "<style>" + cssCode.value + "</style>";
    const js = "<script>" + jsCode.value + "<\/script>";

    const finalCode = html + css + js;

    const iframeDoc = outputFrame.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(finalCode);
    iframeDoc.close();
});

// Load HTML editor by default
hideAllEditors();
htmlCode.style.display = "block";

