// request-form-scripts.js

document.getElementById('requestForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from refreshing the page
  
    // Validate form fields
    const projectTitle = document.getElementById('projectTitle').value.trim();
    const description = document.getElementById('description').value.trim();
    const urgency = document.getElementById('urgency').value.trim();
    const clientName = document.getElementById('clientName').value.trim();
    const clientEmail = document.getElementById('clientEmail').value.trim();
  
    if (!projectTitle || !description || !urgency || !clientName || !clientEmail) {
      alert('Please fill out all required fields.');
      return;
    }
  
    // Simulate submission process
    document.getElementById('requestForm').reset();
    document.getElementById('confirmationMessage').classList.remove('hidden');
  });

  document.getElementById('backButton').addEventListener('click', function () {
    // Navigate back to the previous page
    window.history.back();
  
    // OR Navigate to a specific page, e.g., dashboard
    // window.location.href = '/dashboard';
  });
  