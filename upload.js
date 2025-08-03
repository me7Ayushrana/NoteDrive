const form = document.getElementById('uploadForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('uploaderName').value;
  const title = document.getElementById('noteTitle').value;
  const fileInput = document.getElementById('file');
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select a file.");
    return;
  }

  const reader = new FileReader();

  reader.onload = function() {
    const noteData = {
      title: title,
      uploader: name,
      fileName: file.name,
      fileData: reader.result // base64
    };

    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(noteData);
    localStorage.setItem('notes', JSON.stringify(notes));

    alert("Note uploaded successfully!");
    form.reset();
  };

  reader.readAsDataURL(file);
});
