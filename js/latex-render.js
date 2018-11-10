document.addEventListener("DOMContentLoaded", () => {
    renderMathInElement(document.getElementById("postBody"), {
        delimiters: [{
            left: "\\(",
            right: "\\)",
            display: false
        }]
    });
});
