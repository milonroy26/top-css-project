// let root = document.querySelector(":root");
// let button = document.querySelector("button");

// button.addEventListener('click', () => {
//     event.preventDefault();
//     root.classList.toggle('dark');
// })

const toggleBtn = document.querySelector("#toggle-mode");
const body = document.querySelector("body");

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");
});