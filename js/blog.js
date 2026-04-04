document.addEventListener("DOMContentLoaded", () => {
  fetch("data/blogPosts.json")
    .then(response => response.json())
    .then(posts => renderPosts(posts))
    .catch(error => console.error("Error loading blog posts:", error));
});

function renderPosts(posts) {
  const container = document.getElementById("blog-container");

  posts.forEach(post => {
    const article = document.createElement("article");
    article.classList.add("blog-post");

    article.innerHTML = `
      <h2>${post.title}</h2>
      <p class="date">${post.date}</p>
      <p class="excerpt">${post.excerpt}</p>
      <button class="read-more" data-id="${post.id}">Read More</button>
    `;
    container.appendChild(article);
  });
  attachReadMoreHandlers(posts);
}

function attachReadMoreHandlers(posts) {
  const buttons = document.querySelectorAll(".read-more");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const postId = parseInt(button.dataset.id);
      window.location.href = `post.html?id=${postId}`;
    });

  });
}

