document.addEventListener("DOMContentLoaded", () => {
    let post = document.getElementById('postBody')
    if (post){
        renderMathInElement(post, {
            delimiters: [{
                left: "\\(",
                right: "\\)",
                display: false
            }]
        });
    }
});
