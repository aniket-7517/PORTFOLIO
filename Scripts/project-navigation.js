const projects = document.querySelectorAll('.project');
let currentProjectIndex = 0;

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Hide all projects except the first one
function showProject(index) {
    projects.forEach((project, i) => {
        project.style.display = (i === index) ? 'block' : 'none';
    });
}

// Show the first project by default
showProject(currentProjectIndex);

// Add event listeners for buttons
prevBtn.addEventListener('click', () => {
    if (currentProjectIndex > 0) {
        currentProjectIndex--;
        showProject(currentProjectIndex);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentProjectIndex < projects.length - 1) {
        currentProjectIndex++;
        showProject(currentProjectIndex);
    }
});
