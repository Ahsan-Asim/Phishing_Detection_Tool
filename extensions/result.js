chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "updateEmails" && message.emails) {
      const emailsContainer = document.getElementById('emails');
      emailsContainer.innerHTML = ''; // Clear old results

      message.emails.forEach((email) => {
          const emailDiv = document.createElement('div');
          emailDiv.className = `email ${email.isPhishing ? 'phishing' : 'safe'}`;
          emailDiv.innerHTML = `
              <p><strong>Subject:</strong> ${email.subject || 'No Subject'}</p>
              <p><strong>Content:</strong> ${email.content}</p>
              <p><strong>Status:</strong> ${email.isPhishing ? 'Phishing' : 'Safe'}</p>
          `;
          emailsContainer.appendChild(emailDiv);
      });
  }
});
