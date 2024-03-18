// form.js
document.addEventListener("DOMContentLoaded", function() {
    const blogForm = document.getElementById("blogForm");
    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    blogForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;

        if (!username || !title || !content) {
            alert("Please complete all fields");
            return;
        }

        const post = {
            username: username,
            title: title,
            content: content
        };

        posts.push(post);
        localStorage.setItem("posts", JSON.stringify(posts));
        window.location.href = "blog.html";
    });
});
