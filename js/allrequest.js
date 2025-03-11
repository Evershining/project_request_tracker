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



/**
     * Handles button action.
     * @param {HTMLButtonElement} button - The clicked button.
     * @param {string} status - The action performed (approved, rejected, reviewed).
     */
function handleAction(button, status) {
  // Update the button text and disable it
  button.textContent = `${status.charAt(0).toUpperCase() + status.slice(1)}`;
  button.classList.add('btn-disabled');
  button.disabled = true;

  // Update modal content based on the status
  const modalHeading = document.getElementById('modalHeading');
  const modalMessage = document.getElementById('modalMessage');
  
  if (status === 'approved') {
    modalHeading.textContent = 'Request Approved';
    modalMessage.textContent = 'Your request has been successfully approved.';
  } else if (status === 'rejected') {
    modalHeading.textContent = 'Request Rejected';
    modalMessage.textContent = 'Your request has been rejected.';
  } else if (status === 'reviewed') {
    modalHeading.textContent = 'Request Reviewed';
    modalMessage.textContent = 'Your request has been reviewed.';
  }

  // Show the modal
  const modal = document.getElementById('actionModal');
  modal.style.display = 'flex';
}

/**
 * Closes the modal.
 */
 /**
     * Closes a specific modal.
     * @param {string} modalId - The ID of the modal to close.
     */
 function closeSpecificModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
  }
}



  //  /**
  //  * Handles button action.
  //  * @param {HTMLButtonElement} button - The clicked button.
  //  * @param {string} status - The action performed (approved, rejected, reviewed).
  //  */
  //  function handleAction(button, status) {
  //   // Display an alert with the action performed
  //   alert(`The request has been ${status}.`);

  //   // Update the button text and disable it
  //   button.textContent = ` ${status.charAt(0).toUpperCase() + status.slice(1)}`;
  //   button.classList.add('btn-disabled');
  //   button.disabled = true;
  // }


  // function createPopup(id) {
  //   let popupNode = document.querySelector(id);
  //   let overlay = popupNode.querySelector(".overlay");
  //   let closeBtn = popupNode.querySelector(".close-btn");
  //   function openPopup(){
  //       popupNode.classList.add("active");
  //   }
  //   function closePopup(){
  //       popupNode.classList.remove("active");
  //   }
  //   overlay.addEventListener("click", closePopup);
  //   closeBtn.addEventListener("click", closePopup);
  //   return openPopup;
  // }

  // let popup = createPopup ("#popup");
  // document.querySelector("#open-popup").addEventListener("click", popup);
