const btn = document.getElementById("lightBtn");
const triangles = document.querySelectorAll(".triangle");

btn.addEventListener("click", () => {
  triangles.forEach(tri => {
    tri.classList.toggle("light");
  });
  btn.textContent = btn.textContent.includes("Zapal") ? "Zgaś światełka" : "Zapal światełka";
});
