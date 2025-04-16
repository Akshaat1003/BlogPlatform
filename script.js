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
