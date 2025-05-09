// 1. Event Handling
document.getElementById('clickBtn').addEventListener('click', () => {
  alert('Button clicked!');
});

document.getElementById('hoverBox').addEventListener('mouseover', () => {
  document.getElementById('hoverBox').style.backgroundColor = 'lightgreen';
});

document.getElementById('keyInput').addEventListener('keydown', (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// 2. Interactive Elements
document.getElementById('colorChangeBtn').addEventListener('click', () => {
  document.getElementById('colorChangeBtn').style.backgroundColor = 'orange';
});

let images = ['https://img.freepik.com/free-photo/zebra-wild_23-2151690195.jpg?t=st=1746814298~exp=1746817898~hmac=bc6465c6165bdedc1ee160abd642918133f2ca55fc1536b4e75f78a9ab5c5d25&w=740', 'https://img.freepik.com/free-photo/elephants-national-park-sri-lanka_167946-150.jpg?t=st=1746814613~exp=1746818213~hmac=7fbfcdeefe207ecf8b207848303f3a0d69eb729bafe0014b89b43aa78c370901&w=1380', 'https://img.freepik.com/free-photo/close-up-wild-animal-nature_23-2151853144.jpg?t=st=1746814730~exp=1746818330~hmac=4d6380f45809bbdcc9122245dcaf68a4b5e397c861c1672a22a75bbd249c8431&w=740'];
let currentIndex = 0;

document.getElementById('nextImage').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('galleryImage').src = images[currentIndex];
});

// Accordion toggle
document.querySelector('.accordion-toggle').addEventListener('click', () => {
  const content = document.querySelector('.accordion-content');
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
});

// 3. Form Validation
const passwordInput = document.getElementById('password');
const feedback = document.getElementById('passwordFeedback');

passwordInput.addEventListener('input', () => {
  const val = passwordInput.value;
  if (val.length < 8) {
    feedback.textContent = 'Password too short!';
    feedback.style.color = 'red';
  } else {
    feedback.textContent = 'Strong password!';
    feedback.style.color = 'green';
  }
});

document.getElementById('signupForm').addEventListener('submit', (e) => {
  e.preventDefault();
  if (passwordInput.value.length >= 8) {
    alert('Form submitted!');
  } else {
    alert('Password must be at least 8 characters.');
  }
});
