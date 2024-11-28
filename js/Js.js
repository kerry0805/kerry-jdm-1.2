document.addEventListener("DOMContentLoaded", function () {
  console.log("Page Loaded");

  const images = document.querySelectorAll("img");

  images.forEach((image) => {
    image.setAttribute("tabindex", "0");
    image.addEventListener("focus", () => handleFocus(image));
    image.addEventListener("blur", () => handleBlur(image));
    image.addEventListener("mouseover", () => handleMouseOver(image));
    image.addEventListener("mouseleave", () => handleMouseLeave(image));
  });
});

function handleFocus(img) {
  img.style.border = "3px solid blue";
  console.log(`Focused on image: ${img.alt}`);
}

function handleBlur(img) {
  img.style.border = "none";
  console.log(`Blurred from image: ${img.alt}`);
}

function handleMouseOver(img) {
  img.style.opacity = "0.8";
  console.log(`Mouse over image: ${img.alt}`);
}

function handleMouseLeave(img) {
  img.style.opacity = "1";
  console.log(`Mouse left image: ${img.alt}`);
}
