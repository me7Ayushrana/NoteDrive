const notes = JSON.parse(localStorage.getItem('notes')) || [];

const notesList = document.getElementById('notesList');

if (notes.length === 0) {
  notesList.innerHTML = "<p>No notes uploaded yet.</p>";
} else {
  notes.forEach(note => {
    const div = document.createElement('div');
    div.className = 'note-card';
    div.innerHTML = `
      <h3>${note.title}</h3>
      <p><strong>Uploaded by:</strong> ${note.uploader}</p>
      <a href="${note.fileData}" download="${note.fileName}">📥 Download</a>
    `;
    notesList.appendChild(div);
  });
}
