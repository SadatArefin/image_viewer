# Image Viewer

This is a simple image viewer application built with HTML, CSS (Bootstrap 5.3), and JavaScript. It allows you to display a gallery of images from a local `img` folder. When an image in the gallery is clicked, it opens in a modal pop-up, and the background is darkened. Navigation buttons (previous/next) are provided in the modal, and keyboard arrow keys (left/right) can also be used for navigation.

## Features

- Displays images from an `img` folder.
- Supported image formats: JPG, JPEG, PNG, WEBP, GIF.
- Click on an image to open it in a modal view.
- Navigate through images in the modal using:
  - Previous/Next buttons.
  - Left/Right arrow keys.
- Navigation buttons are hidden when at the beginning or end of the image list.
- Responsive design using Bootstrap.

## Project Structure

```
image_viewer/
├── img/ # Place your images here
├── index.html # Main HTML file
├── index.css # Custom CSS styles
└── index.js # JavaScript logic
```

## How to Use

1.  **Clone the repository or download the files.**
2.  **Add Images:** Place your image files (e.g., `image1.jpg`, `photo.png`, `animation.gif`) into the `img` folder located in the root of the project directory.
3.  **Open `index.html`:** Open the `index.html` file in your web browser to view the image gallery.

The JavaScript code in `index.js` will automatically read the images from the `img` folder and display them in the gallery.

## Technologies Used

- HTML5
- CSS3
  - Bootstrap 5.3
- JavaScript (ES6+)

## Live Demo

You can view a live demo of this project here: **[https://sadatarefin.github.io/image_viewer/]**
