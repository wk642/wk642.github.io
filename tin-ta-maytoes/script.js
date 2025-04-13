const sidebar = document.getElementById("mySidebar");
const content = document.getElementById("mainContent");
const toggleBtn = document.querySelector(".toggle-btn");

function toggleSidebar() {
    sidebar.classList.toggle("collapsed");
    content.classList.toggle("collapsed");
    toggleBtn.classList.toggle("collapsed");
}

async function displayCollaborators(owner, repo, containerId) {
    const apiUrl = `https://api.github.com/repos/${wk642}/${tin-ta-mayto}/collaborators`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const collaborators = await response.json();
  
      const container = document.getElementById(containerId);
      if (container) {
        collaborators.forEach(collaborator => {
          const collaboratorDiv = document.createElement('div');
          collaboratorDiv.classList.add('collaborator'); // You can style this with CSS
  
          const avatarImg = document.createElement('img');
          avatarImg.src = collaborator.avatar_url;
          avatarImg.alt = collaborator.login;
          avatarImg.width = 50;
          avatarImg.height = 50;
  
          const usernameLink = document.createElement('a');
          usernameLink.href = collaborator.html_url;
          usernameLink.textContent = collaborator.login;
          usernameLink.target = '_blank'; // Open in a new tab
  
          collaboratorDiv.appendChild(avatarImg);
          collaboratorDiv.appendChild(usernameLink);
          container.appendChild(collaboratorDiv);
        });
      } else {
        console.error(`Container with ID '${containerId}' not found.`);
      }
  
    } catch (error) {
      console.error('Error fetching collaborators:', error);
      const container = document.getElementById(containerId);
      if (container) {
        container.textContent = 'Failed to load collaborators.';
      }
    }
  }
  
  // Call the function with your repository details and the ID of the HTML container
  displayCollaborators('your-username', 'your-repository', 'collaborator-list');