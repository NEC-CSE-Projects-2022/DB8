const dropArea = document.getElementById('dropArea');
const fileInput = document.getElementById('fileInput');
const previewDiv = document.getElementById('preview');
const dropLabel = document.getElementById('dropLabel');
const resultDiv = document.getElementById('result');
const selectBtn = document.getElementById('selectBtn');

// Drag & Drop events
dropArea.addEventListener('dragover', (e) => {
  e.preventDefault();   
  dropArea.classList.add('dragover');
});

dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('dragover');
});

dropArea.addEventListener('drop', (e) => {
  e.preventDefault();
  dropArea.classList.remove('dragover');
  if (e.dataTransfer.files.length) {
    // Directly show preview for dropped file
    showPreview(e.dataTransfer.files[0]);
    // Set fileInput.files for upload
    fileInput.files = e.dataTransfer.files;
  }
});

fileInput.addEventListener('change', () => {
  if (fileInput.files.length) {
    showPreview(fileInput.files[0]);
  }
});

function showPreview(file) {
  const reader = new FileReader();
  reader.onload = e => {
    previewDiv.innerHTML = `<img src="${e.target.result}" alt="preview">`;
    dropLabel.style.display = 'none';
  };
  reader.readAsDataURL(file);
}

document.getElementById('uploadBtn').addEventListener('click', () => {
  document.getElementById('fileInput').click();
});

document.getElementById('predictBtn').addEventListener('click', async () => {
  if (!fileInput.files.length) {
    resultDiv.textContent = 'Please select an image first.';
    return;
  }
  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append('file', file);

  resultDiv.textContent = 'Predicting...';

  const response = await fetch('/predict', {
    method: 'POST',
    body: formData
  });

  const data = await response.json();

  if (data.error) {
    resultDiv.textContent = data.error;
  } else {
    resultDiv.textContent = `Prediction: ${data.label}`;
  }
});

// Home button navigation
const homeBtn = document.getElementById('homeBtn');
if (homeBtn) {
  homeBtn.addEventListener('click', () => {
    window.open('https://lungcancerdetectionfrontend.vercel.app/', '_blank');
  });
}