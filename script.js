const input = document.querySelector(".word-count input");
const btn = document.querySelector(".word-count button");
const countText = document.querySelector(".count-text span");

btn.addEventListener("click", () => {
  countText.textContent = input.value.length;
});
