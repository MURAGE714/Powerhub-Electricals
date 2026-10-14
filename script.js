// Mobile menu
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const opened = mobileMenu.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(opened));
  });

  document.querySelectorAll('#mobile-menu a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Form (demo – logs to console)
const form = document.getElementById('enquiry-form');
const errorBox = document.getElementById('form-error');
const successBox = document.getElementById('form-success');
const submitButton = document.getElementById('submit-button');

function showError(message) {
  if (!errorBox) return;
  errorBox.textContent = message;
  errorBox.classList.remove('hidden');
  if (successBox) successBox.classList.add('hidden');
}

function clearMessages() {
  if (errorBox) {
    errorBox.textContent = '';
    errorBox.classList.add('hidden');
  }
  if (successBox) successBox.classList.add('hidden');
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearMessages();

    if (!form.checkValidity()) {
      showError('Please complete all fields before submitting your request.');
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const data = {
      name: formData.get('name').trim(),
      contact: formData.get('contact').trim(),
      service_type: formData.get('service_type'),
      product_details: formData.get('product_details').trim(),
      message: formData.get('message').trim(),
      created_at: new Date().toISOString()
    };

    console.log('Enquiry submitted (demo):', data);
    form.reset();
    if (successBox) successBox.classList.remove('hidden');
  });
}

// Icons
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}
