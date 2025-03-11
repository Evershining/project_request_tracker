/* details-scripts.js */

// Go back to previous page
function goBack() {
    window.history.back();
  }
  
  // Handle approve/reject actions
  function handleAction(action) {
    if (action === 'approve') {
      alert('Request approved successfully!');
    } else if (action === 'reject') {
      alert('Request rejected!');
    }
  }
  
  // Assign request to team
  function assignTo() {
    const team = prompt('Enter the team or member to assign this request to:');
    if (team) {
      alert(`Request assigned to ${team}`);
    }
  }
  
  // Add a comment
  function addComment() {
    const commentBox = document.getElementById('comment-box');
    const commentsList = document.getElementById('comments-list');
    
    if (commentBox.value.trim() !== '') {
      const commentDiv = document.createElement('div');
      commentDiv.className = 'comment';
      commentDiv.textContent = commentBox.value.trim();
      commentsList.appendChild(commentDiv);
      commentBox.value = ''; // Clear the text area
    } else {
      alert('Please enter a comment before adding!');
    }
  }
  