const fileInput = document.getElementById('file-input');
const showButton = document.getElementById('show-button');
const deleteButton = document.getElementById('delete-button');
const imageDisplay = document.getElementById('image-display');

let selectedImage = null;

fileInput.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.addEventListener('load', function() {
      const img = document.createElement('img');
      img.setAttribute('src', this.result);
      imageDisplay.innerHTML = '';
      imageDisplay.appendChild(img);
      imageDisplay.style.height = `${img.clientHeight}px`;
      selectedImage = file;
    });
    reader.readAsDataURL(file);
  } else {
    imageDisplay.innerHTML = '';
    imageDisplay.style.height = '0';
    selectedImage = null;
  }
});

showButton.addEventListener('click', function() {
  if (selectedImage) {
    const img = document.createElement('img');
    img.setAttribute('src', URL.createObjectURL(selectedImage));
    const win = window.open('', '_blank');
    win.document.write(img.outerHTML);
    win.document.title = 'Image Preview';
    win.document.close();
  }
});

deleteButton.addEventListener('click', function() {
  imageDisplay.innerHTML = '';
  imageDisplay.style.height = '0';
  selectedImage = null;
});
