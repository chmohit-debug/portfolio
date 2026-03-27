// Typing Effect
const roles = ["Sr. Technical Content Writer", "SEO Expert", "Content Strategist"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  current = roles[i];

  if (!isDeleting) {
    document.getElementById("role").innerHTML = current.substring(0, j++);
    if (j > current.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.getElementById("role").innerHTML = current.substring(0, j--);
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
    }
  }
  setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Resume Download
function downloadResume(){
    window.open('Resume/Mohit Chaudhary Resume.pdf', '_blank');
}

// Form
function submitForm(e) {
  e.preventDefault();
  document.getElementById("msg").innerText = "Message sent successfully!";
}

function filterProjects(category) {
  let items = document.querySelectorAll('.project-item');

  items.forEach(item => {
    if (category === 'all') {
      item.style.display = 'block';
    } else {
      item.style.display = item.classList.contains(category) ? 'block' : 'none';
    }
  });
}