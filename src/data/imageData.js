// src/data/imageData.js

const images = import.meta.glob("/src/assets/images/all/*.{jpg,png,gif,svg}", {
  eager: true,
});

const imageData = Object.keys(images).map((path, index) => ({
  id: index + 1,
  src: images[path].default,
}));

export default imageData;
