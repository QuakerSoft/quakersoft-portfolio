/*Function for the copy buttons on code blocks. Adds a "Copy" button to each <pre> element and copies the code to the clipboard when clicked.*/
function addCopyButtons() {

    document.querySelectorAll("pre").forEach(pre => {

        if (pre.querySelector(".copy-btn")) return;

        const btn = document.createElement("button");
        btn.innerText = "Copy";
        btn.className = "copy-btn";

        pre.style.position = "relative";
        pre.appendChild(btn);

        btn.addEventListener("click", () => {
            const code = pre.querySelector("code").innerText;
            navigator.clipboard.writeText(code);

            btn.innerText = "Copied!";
            setTimeout(() => btn.innerText = "Copy", 2000);
        });
    });
} 
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const postId = parseInt(params.get("id"));

    fetch("data/blogPosts.json")
        .then(res => res.json())
        .then(posts => {
            const post = posts.find(p => p.id === postId);

            if (!post) {
                document.body.innerHTML = "<h1>Post not found</h1>";
                return;
            }
            document.getElementById("post-title").textContent = post.title;
            document.getElementById("post-date").textContent = post.date;

            // Fetch the Markdown file
            fetch(`data/posts/${post.file}`)
                .then(res => res.text())
                .then(md => {
                    // Convert Markdown to HTML
                    const postContent = document.getElementById("post-content");
                    postContent.innerHTML = marked.parse(md);
                    //Prism highlight the code blocks
                    Prism.highlightAll();
                    // Calls the copy button function
                    addCopyButtons();
                    // Make all text white
                    postContent.style.color = "white";
                })
                .catch(err => {
                    document.getElementById("post-content").innerHTML =
                        "<p>Failed to load post content.</p>";
                    console.error(err);
                });
        });
});
