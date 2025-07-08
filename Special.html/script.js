window.onload = function() {
  alert("Don't forget to drink your water today! 💧");
};
document.addEventListener("DOMContentLoaded", () => {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent("Stay hydrated! Track your daily water intake 💧");

  document.getElementById("facebook").href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  document.getElementById("twitter").href = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
  document.getElementById("whatsapp").href = `https://api.whatsapp.com/send?text=${text}%20${url}`;
   document.getElementById("linkedin").href = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
});
document.addEventListener("DOMContentLoaded", () => {
  const glasses = document.querySelectorAll(".glass");
  const resetButton = document.getElementById("reset");

  glasses.forEach((glass, index) => {
    glass.addEventListener("click", () => {
      updateGlasses(index);
    });
  });

  resetButton.addEventListener("click", () => {
    glasses.forEach(g => g.classList.remove("filled"));
  });
  function updateGlasses(index) {
    glasses.forEach((glass, i) => {
      if (i <= index) {
        glass.classList.add("filled");
      } else {
        glass.classList.remove("filled");
      }
    });
}
})

if (localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "login.html";
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
});

document.getElementById("feedbackForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent actual form submission

  // Optional: collect values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Just show a success message for now
  document.getElementById("feedbackMessage").textContent = "Thank you for your feedback! 💙";

  // Clear the form
  document.getElementById("feedbackForm").reset();
});

document.getElementById("searchInput").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    e.preventDefault();
  }
});

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(query) ? "list-item" : "none";
  });


document.getElementById("searchInput").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    e.preventDefault();
  }
});

document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});