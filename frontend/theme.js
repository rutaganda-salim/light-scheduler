// Theme toggle functionality
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle")
  
    // Check for saved theme preference or use device preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  
    // Set initial theme
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.setAttribute("data-theme", "dark")
      themeToggle.checked = true
    }
  
    // Toggle theme when the switch is clicked
    themeToggle.addEventListener("change", () => {
      if (themeToggle.checked) {
        document.documentElement.setAttribute("data-theme", "dark")
        localStorage.setItem("theme", "dark")
      } else {
        document.documentElement.setAttribute("data-theme", "light")
        localStorage.setItem("theme", "light")
      }
    })
  })
  