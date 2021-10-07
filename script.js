const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

//  Unsplash API
const count = 10;
const apiKey = '0c0_ma7scksORDgVsMlIySdxAXe4qW5_AhTpu1_9rrg';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper Function to set attributes on DOM Elements

const setAttributes = (element, attributes) => {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
};

// Create Elements for Links and Photos, Add to DOM
function displayPhotos() {
  // Run function for eac h object in photosArray
  photosArray.forEach((photo) => {
    //  Create <a></a> to link to unsplash
    const item = document.createElement('a');

    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });
    //   Create <img></img> to link to photosArray
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    //   put <img> inside <a></a> , them put both imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get photos from unsplash API
const getPhotos = async () => {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (err) {
    // catch error here
  }
};

// On Load
getPhotos();
