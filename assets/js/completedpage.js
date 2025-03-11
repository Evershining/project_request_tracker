// Function to open the modal and populate it with details
function openModal(title, description, company, requester, contact, department, address, priority, category, date, status) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-company').textContent = company;
    document.getElementById('modal-requester').textContent = requester;
    document.getElementById('modal-department').textContent = department;
    document.getElementById('modal-contact').textContent = contact;
    document.getElementById('modal-address').textContent = address;
    document.getElementById('modal-priority').textContent = priority;
    document.getElementById('modal-category').textContent = category;
    document.getElementById('modal-date').textContent = date;
    document.getElementById('modal-status').textContent = status;

    document.getElementById('request-modal').style.display = 'flex';
  }

  // Function to close the modal
  function closeModal() {
    document.getElementById('request-modal').style.display = 'none';
  }

  // Get the button element
  const refreshButton = document.getElementById('refreshButton');

  // Add a click event listener to the button
  refreshButton.addEventListener('click', function () {
      // Refresh the page
      location.reload();
  });