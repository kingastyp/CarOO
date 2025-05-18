document.addEventListener("DOMContentLoaded", function() {
  const currentPagePath = window.location.pathname;
  const currentPage = currentPagePath.split("/").pop(); // Pobieramy tylko nazwę strony np. "offert.html"

  // Jeśli strona to "zoom-photos.html" albo zawiera "zoom-photos" -> NIE wstawiamy navbaru
  if (currentPage.includes("zoom-photos")) {
    return; 
  }

  const navbarContainer = document.createElement("div");
  navbarContainer.innerHTML = `
<div id="hero-top">
    <nav class="navbar navbar-expand-md bg-body" style="box-shadow: 0px 0px 10px;">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">
  <img src="assets/img/logo.png" alt="Logo" style="width: 75px; height: 50px; object-fit: contain;">
</a>

            <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-1">
                <span class="visually-hidden">Toggle navigation</span>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navcol-1" class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto" style="font-family: 'Montserrat'; font-size: 13px;">
                    <li class="nav-item"><a class="nav-link" href="offert.html">CARS</a></li>
                    <li class="nav-item"><a class="nav-link" href="about-us.html">ABOUT US</a></li>
                    <li class="nav-item"><a class="nav-link" href="contact.html">CONTACT</a></li>
                </ul>
                <ul class="navbar-nav ms-auto" style="font-family: Montserrat, sans-serif;">
                    <li class="nav-item">
                        <a class="nav-link" href="login.html" style="font-weight: bold;font-size: 13px;" id="auth-link">SIGN IN</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
`;

  // Wstawiamy navbar na początek body
  document.body.insertBefore(navbarContainer, document.body.firstChild);

  // Pogrubiamy odpowiedni link w zależności od bieżącej strony
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link"); // Pobieramy wszystkie linki w navbarze

  navLinks.forEach(link => {
    const linkHref = link.getAttribute("href");

    // Jeśli href w linku odpowiada bieżącej stronie, to dodajemy klasę "active" i pogrubiamy tekst
    if (linkHref === currentPage) {
      link.classList.add("active");
      link.style.fontWeight = "bold"; // Pogrubiamy tekst
    } else {
      // Jeśli nie, to usuwamy aktywną klasę i normalizujemy tekst
      link.classList.remove("active");
      link.style.fontWeight = "normal";
    }
  });

  // Dodatkowo obsługa logowania / wylogowania
  const authLink = document.getElementById("auth-link");
  const token = localStorage.getItem("authToken");

  if (token) {
      authLink.textContent = "SIGN OUT";
      authLink.href = "#";
      const userEmail = localStorage.getItem("email");
      if (userEmail) {
          const emailSpan = document.createElement("span");
          emailSpan.textContent = ` (${userEmail})`;
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
