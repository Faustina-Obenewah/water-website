document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Demo: Hardcoded username and password
  const validUser = "Tetteh";
  const validPass = "1234";

  if (username === validUser && password === validPass) {
    // Store a "logged in" flag and redirect
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
  } else {document.getElementById("error").textContent = "Invalid username or password";
  }
});
