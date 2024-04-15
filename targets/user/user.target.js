import {Target, TejFileUploader} from 'te.js';

// To set a base path for all endpoints in this target, pass it as an argument to the Target constructor
const target = new Target('/user');

const upload = new TejFileUploader({
  destination: 'public/uploads',
  maxFileSize: 5 * 1024 * 1024,
});

// This endpoint will accept a single file with the key 'image'
target.register(
    '/updateProfileImage',
    upload.file('image'),
    (ammo) => {

      // Regardless of method, all your query parameters and request data is available in ammo.payload
      const payload = ammo.payload;

      // Payload contains your image data in the same key that you used in the request
      const uploadedImage = payload.image;

      ammo.fire({
        status: 200,
        body: payload,
      });
    },
);

// This endpoint will accept multiple files with the key 'photos'
target.register(
    '/updateGallery',
    upload.files('photos'),
    (ammo) => {

      const payload = ammo.payload;

      // Payload contains your images as an array in the same key that you used in the request
      const uploadedPhotos = payload.photos;

      ammo.fire({
        status: 200,
        body: {photos: uploadedPhotos},
      });
    },
);
