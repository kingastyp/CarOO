<script>
  document.addEventListener("DOMContentLoaded", function() {
    const authLink = document.getElementById("auth-link");
    const token = localStorage.getItem("authToken");

    if (token) {
      authLink.textContent = "SIGN OUT";
      authLink.href = "#";

      // Dodaj email użytkownika obok przycisku
      const userEmail = localStorage.getItem("email");
      if (userEmail) {
        const emailSpan = document.createElement("span");
        emailSpan.textContent = `(${userEmail})`;
        emailSpan.style.marginLeft = "8px";
        emailSpan.style.fontWeight = "normal";
        authLink.parentNode.appendChild(emailSpan);
      }

      authLink.addEventListener("click", function(e) {
        e.preventDefault();
        localStorage.removeItem("authToken");
        localStorage.removeItem("email");
        window.location.href = "index.html";
      });

    } else {
      authLink.textContent = "SIGN IN";
      authLink.href = "login.html";
    }
  });
</script>
