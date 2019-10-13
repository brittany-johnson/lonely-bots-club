var input = document.querySelector('#inputProfilePic');
var preview = document.querySelector('.preview');

input.addEventListener('change', updateImageDisplay);

function updateImageDisplay() {
  while(preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  let selectedFile = input.files;
  
  if (selectedFile.length === 0) {
    let para = document.createElement('p');
    para.textContent = 'No files currently selected for upload';
    preview.appendChild(para);
  } else {
    for(let i=0; i < selectedFile.length; i++) {
      let para = document.createElement('p');

      if(validFileType(selectedFile[i])) {
        para.textContent = "File name: " + selectedFile[i].name + "" + "File size: " + returnFileSize(selectedFile[i].size);

        let image = document.createElement("img");
        image.src = window.URL.createObjectURL(selectedFile[i]);

        preview.appendChild(para);
        preview.appendChild(image);
      } else {
        para.textContent = selectedFile[i].name + " Is not a vaild file type or size."

        preview.appendChild(para);
      }
    }
  }
    
}

const fileTypes = [
  "image/jpeg",
  "image/pjpeg",
  "image/png"
]

function validFileType(file) {
  for(let i=0; i < fileTypes.length; i++) {
    if(file.type === fileTypes[i]) {
      console.log(file);
      return true
    } 
  }
  return false;
}

function returnFileSize(number) {
  //1024 bytes||kb = 1 kb||mb
  if (number < 1024) {
    return number + "bytes";
  } else if (number >= 1024 && number < 1048576) {
      return (number).toFixed(1) + "KB";
  } else if (number >= 1048576) {
      return (number).toFixed(1) + "MB";
  }
}