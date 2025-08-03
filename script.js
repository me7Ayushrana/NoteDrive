// 🌗 Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

themeToggle.addEventListener("click", () => {
  if (htmlElement.getAttribute("data-theme") === "dark") {
    htmlElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    htmlElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
});

// Apply saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  htmlElement.setAttribute("data-theme", savedTheme);
});

// 📁 Show selected file name on upload
document.getElementById("upload-file").addEventListener("change", function () {
  const fileName = this.files[0]?.name || "No file selected";
  document.getElementById("file-label").textContent = fileName;
});

// 🔍 Search Functionality
document.getElementById("searchBar").addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const notes = document.querySelectorAll(".note-item");

  notes.forEach((note) => {
    const text = note.textContent.toLowerCase();
    note.style.display = text.includes(filter) ? "" : "none";
  });
});

// 🎓 Filter by Branch & Semester
function applyFilters() {
  const selectedBranch = document.getElementById("branchFilter").value;
  const selectedSemester = document.getElementById("semesterFilter").value;
  const notes = document.querySelectorAll(".note-item");

  notes.forEach((note) => {
    const noteBranch = note.getAttribute("data-branch");
    const noteSemester = note.getAttribute("data-semester");

    const matchBranch = selectedBranch === "all" || noteBranch === selectedBranch;
    const matchSemester = selectedSemester === "all" || noteSemester === selectedSemester;

    note.style.display = matchBranch && matchSemester ? "" : "none";
  });
}

document.getElementById("branchFilter").addEventListener("change", applyFilters);
document.getElementById("semesterFilter").addEventListener("change", applyFilters);
