// doccumments
const generateButton = document.getElementById('generateButton');
const testimonialText = document.getElementById('testimonialText');
const generatedTestimonial = document.getElementById('generatedTestimonial');
// Eventlistner and if else

generateButton.addEventListener('click', () => {
  const text = testimonialText.value.trim();
  if (text) {
    const testimonial = generateTestimonial(text);
    generatedTestimonial.textContent = testimonial;
  } else {
    generatedTestimonial.textContent = 'Please enter your testimonial.';
  }
});

// functions
function generateTestimonial(text) {
  const name = generateRandomName();
  const company = generateRandomCompany();
  const position = generateRandomPosition();
  return `"${text}" - ${name}, ${position} at ${company}`;
}

function generateRandomName() {
  const names = ['John Doe', 'Jane Smith', 'David Johnson', 'Emily Brown', 'Michael Williams'];
  return names[Math.floor(Math.random() * names.length)];
}

function generateRandomCompany() {
  const companies = ['ABC Inc.', 'XYZ Corporation', '123 Company', 'Smith & Co', 'Johnson Enterprises'];
  return companies[Math.floor(Math.random() * companies.length)];
}

function generateRandomPosition() {
  const positions = ['CEO', 'Marketing Manager', 'Software Developer', 'HR Director', 'Sales Representative'];
  return positions[Math.floor(Math.random() * positions.length)];
}