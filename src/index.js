//create Button
const button = document.createElement('button');
//set text
button.innerText = 'Click me';
// inside this function where are going to put the function to show the image_viewer
button.onclick = () => {
    // It can import any more modules that this image_viewer depends on, in this case it doesn't
    System.import('./image_viewer').then(module => {
        module.default();
    });
};

document.body.appendChild(button);