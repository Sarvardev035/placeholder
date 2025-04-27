


axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
    const posts = response.data;
    const root = document.getElementById("root");
    if (!root) return;

    let html = "";
    posts.forEach((post, index) => {
      html += `
        <a href="js/post_link.html" target="_blank" class="post-link">
          <div class="post-card ${index >= 20 ? 'hidden' : ''}">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <p><b>User ID:</b> ${post.userId}</p>
          </div>
        </a>
      `;
    });

    html += `<button id="show-more" class="show-more">Show More</button>`;
    root.innerHTML = html;

    document.getElementById("show-more").addEventListener("click", () => {
      document.querySelectorAll(".post-card.hidden").forEach(post => {
        post.classList.remove("hidden");
      });
      document.getElementById("show-more").style.display = "none";
    });
  })
  .catch(error => {
    console.error("Error fetching posts:", error);
  });