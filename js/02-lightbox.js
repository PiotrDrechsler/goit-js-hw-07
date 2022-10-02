import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector("ul.gallery");
const createGallery = galleryItems // gallery
  .map(
    (item) =>
      `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", createGallery); // Create gallery
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
console.log(galleryItems);
