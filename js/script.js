const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function () {
  const myObj = JSON.parse(this.responseText);

  // Ensure the target element exists
  const root = document.getElementById("root");
  if (!root) {
    console.error("Element with id 'root' not found in the HTML.");
    return;
  }

  // Loop through the data and display user information as cards
  let html = "";
  myObj.forEach(user => {
    html += `
      <div class="user">
        <h3>${user.name}</h3>
        <p><b>Username:</b> ${user.username}</p>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Address:</b> ${user.address.street}, ${user.address.city}</p>
      </div>
    `;
  });

  // Update the root element with the generated HTML
  root.innerHTML = html;
};
xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
xmlhttp.send();  