const btn = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
}

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    
    let theme = "light";
    if (document.body.classList.contains("dark-theme")) {
        theme = "dark";
    }
    localStorage.setItem("theme", theme);
});