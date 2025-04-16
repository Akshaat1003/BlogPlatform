document.addEventListener("DOMContentLoaded", () => {
  // 🌙 Dark Mode Toggle
  const darkModeToggle = document.getElementById("darkModeToggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  // 👤 Avatar Dropdown Toggle
  const avatar = document.querySelector(".avatar");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  if (avatar && dropdownMenu) {
    avatar.addEventListener("click", () => {
      dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // ❌ Hide dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".avatar-dropdown")) {
        dropdownMenu.style.display = "none";
      }
    });
  }
});

// Login
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("show-login");
  const registerBtn = document.getElementById("show-register");
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  loginBtn.addEventListener("click", () => {
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
    loginBtn.classList.add("active");
    registerBtn.classList.remove("active");
  });

  registerBtn.addEventListener("click", () => {
    registerForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    registerBtn.classList.add("active");
    loginBtn.classList.remove("active");
  });

  document.querySelectorAll(".toggle-password").forEach(toggle => {
    toggle.addEventListener("click", () => {
      const input = toggle.previousElementSibling;
      const icon = toggle.querySelector("i");

      input.type = input.type === "password" ? "text" : "password";
      icon.classList.toggle("fa-eye");
      icon.classList.toggle("fa-eye-slash");
    });
  });

  // Error simulation on submit (example)
  loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;
    const error = loginForm.querySelector(".error-message");

    if (!email || !password) {
      error.classList.remove("hidden");
      error.textContent = "Please fill in both fields.";
    } else {
      error.classList.add("hidden");
      alert("Logged in (simulation)");
    }
  });
  const tabButtons = document.querySelectorAll(".tab-btn");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
  
  registerForm.addEventListener("submit", e => {
    e.preventDefault();
    const fields = registerForm.querySelectorAll("input");
    const error = registerForm.querySelector(".error-message");

    let isEmpty = false;
    fields.forEach(field => {
      if (!field.value.trim()) isEmpty = true;
    });

    if (isEmpty) {
      error.classList.remove("hidden");
      error.textContent = "All fields must be filled out!";
    } else {
      error.classList.add("hidden");
      alert("Registered (simulation)");
    }
  });
});
