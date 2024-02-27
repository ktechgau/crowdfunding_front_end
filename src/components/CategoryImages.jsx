import React from 'react';
//import importAllImages from '../utils/importImages';

function ImageForCategory(category) {
   // Import all images from the category folder
  const categoryImages = importAllImages(require.context('../assets/category', false, /\.(png|jpe?g|svg|gif)$/));

  // Get image path for category
  const imagePath = categoryImages[`${category.toLowerCase()}-image.jpg`]; // Assuming image filenames are in the format "<category>-image.jpg"

  if (!imagePath) {
    return <div>No image available for this category</div>;
  }

  return <img src={imagePath} alt={category} loading="lazy" />;
}

 export default ImageForCategory;