// blog.js
document.addEventListener("DOMContentLoaded", function() {

    const postsContainer = document.getElementById("postsContainer");
    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    posts.forEach(function(post) {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p>By ${post.username}</p>
        `;
        postsContainer.appendChild(postElement);
    });
});
