// @ts-nocheck
import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector("div.gallery");
const createGallery = galleryItems // gallery
  .map(
    (item) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}" 
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </div>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", createGallery); // Create gallery
gallery.addEventListener("click", openLightbox); // Lightbox open by mouse "click"
function openLightbox(event) {
  event.preventDefault(); // block new page opening
  if (event.target.nodeName !== "IMG") {
    return; // open only images
  }
  const instance = basicLightbox.create(` 
    <div class="modal">
         <img src="${event.target.dataset.source}"/>
    </div>
`);
  instance.show(); // create and open Lightbox with image
  gallery.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close(); // close Lightbox by "Esc" button
    }
  });
}
console.log(galleryItems);
