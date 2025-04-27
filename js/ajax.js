const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

xhr.onload = function () {
  if (xhr.status === 200) {
    const posts = JSON.parse(xhr.responseText);
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

    const showMoreButton = document.getElementById("show-more");
    showMoreButton.addEventListener("click", () => {
      const hiddenPosts = document.querySelectorAll(".post-card.hidden");
      hiddenPosts.forEach(post => post.classList.remove("hidden"));
      showMoreButton.style.display = "none"; 
    });
  } else {
    console.error("Error fetching posts:", xhr.status);
  }
};

xhr.onerror = function () {
  console.error("Request failed");
};

xhr.send();