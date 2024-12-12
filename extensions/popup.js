// // const CLIENT_ID = '974785943949-kamthk00gd0qrkg74gj4jcfbk21pe3mo.apps.googleusercontent.com'; // Updated Client ID
// // const API_KEY = 'AIzaSyApb3C73hIbyqBjoE9nMvV9gM_SzZwLvJs'; // Use your new API key if you updated it
// // const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly'; // Gmail API scope
// // // const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.modify';


// // function authenticate() {
// //     chrome.runtime.sendMessage({ action: "authenticate" }, (response) => {
// //         if (response.success) {
// //             console.log("Authentication Successful1. Token:", response.token);
// //             document.getElementById('scan-btn').disabled = false; // Enable the scan button
// //             loadGmailMessages(response.token); // Load Gmail messages using the token
// //         } else {
// //             console.error("Authentication failed:", response.error);
// //         }
// //     });
// // }

// // function extractUrls(text) {
// //     const urlPattern = /https?:\/\/[^\s]+/g;
// //     return text.match(urlPattern) || [];
// // }



// // function loadGmailMessages(token) {
// //     console.log("Fetching Gmail messages with token1:", token);
// //     fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages", {
// //         method: "GET",
// //         headers: { Authorization: `Bearer ${token}` },
// //     })
// //         .then((response) => response.json())
// //         .then((data) => {
// //             console.log("Fetched Gmail messages:", data);
// //             const messages = data.messages || [];
// //             if (messages.length > 0) {
// //                 messages.forEach((message) => getMessageContent(message.id, token));
// //             } else {
// //                 console.log("No unread emails.");
// //             }
// //         })
// //         .catch((error) => {
// //             console.error("Error fetching Gmail messages:", error);
// //         });
// // }

// // function checkPhishing(url, messageId, token) {
// //     fetch("http://127.0.0.1:5000/check_url", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ text: url }),
// //     })
// //         .then((response) => response.json())
// //         .then((data) => {
// //             const color = data.prediction === "phishing" ? "red" : "green";
// //             labelEmail(messageId, color, token);
// //         })
// //         .catch((error) => {
// //             console.error("Error:", error);
// //         });
// // }



// // function getMessageContent(messageId, token) {
// //     fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}`, {
// //         method: "GET",
// //         headers: { Authorization: `Bearer ${token}` },
// //     })
// //     .then((response) => response.json())
// //     .then((data) => {
// //         let rawContent = "";
        
// //         // Check if the message has payload.body data or parts
// //         if (data.payload.body && data.payload.body.data) {
// //             // If body is directly available
// //             rawContent = atob(data.payload.body.data.replace(/-/g, '+').replace(/_/g, '/'));
// //         } else if (data.payload.parts) {
// //             // If the email is multipart, extract text from the parts
// //             data.payload.parts.forEach(part => {
// //                 if (part.mimeType === "text/plain" || part.mimeType === "text/html") {
// //                     rawContent = atob(part.body.data.replace(/-/g, '+').replace(/_/g, '/'));
// //                 }
// //             });
// //         }

// //         // Log the raw content to see if it's empty or has the expected data
// //         console.log("Message content:", rawContent);

// //         // Now extract URLs if content is available
// //         if (rawContent) {
// //             const urls = extractUrls(rawContent);
// //             if (urls.length > 0) {
// //                 checkPhishing(urls[0], messageId, token);
// //             }
// //         } else {
// //             console.log("No body content found for message ID:", messageId);
// //         }
// //     })
// //     .catch((error) => {
// //         console.error("Error getting message content:", error);
// //     });
// // }


// // function labelEmail(messageId, color, token) {
// //     const label = color === "red" ? "Phishing" : "Safe";
// //     fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}/modify`, {
// //         method: "POST",
// //         headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
// //         body: JSON.stringify({ addLabelIds: [label] }),
// //     })
// //         .then(() => {
// //             console.log(`Email labeled as: ${label}`);
// //         })
// //         .catch((error) => {
// //             console.error("Error labeling email:", error);
// //         });
// // }

// // // Label the email based on phishing result
// // // Label the email based on phishing result
// // // function labelEmail(messageId, color, token) {
// // //     const label = color === "red" ? "Phishing" : "Safe";
// // //     fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}/modify`, {
// // //         method: "POST",
// // //         headers: { 
// // //             Authorization: `Bearer ${token}`,
// // //             "Content-Type": "application/json"
// // //         },
// // //         body: JSON.stringify({
// // //             "addLabelIds": [label] // Add the appropriate label
// // //         }),
// // //     })
// // //     .then((response) => {
// // //         if (response.ok) {
// // //             console.log(`Email labeled as: ${label}`);
// // //         } else {
// // //             console.error("Error labeling email: " + response.statusText);
// // //         }
// // //     })
// // //     .catch((error) => {
// // //         console.error("Error labeling email:", error);
// // //     });
// // // }

// // document.getElementById('auth-btn').addEventListener('click', authenticate);


// const CLIENT_ID = '974785943949-kamthk00gd0qrkg74gj4jcfbk21pe3mo.apps.googleusercontent.com';
// const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';

// // function authenticate() {
// //     chrome.runtime.sendMessage({ action: "authenticate" }, (response) => {
// //         if (response.success) {
// //             console.log("Authentication Successful. Token:", response.token);
// //             document.getElementById('open-results-btn').disabled = false; // Enable the view emails button
// //         } else {
// //             console.error("Authentication failed:", response.error);
// //         }
// //     });
// // }

// // document.getElementById('auth-btn').addEventListener('click', authenticate);

// // // Open results page
// // document.getElementById('open-results-btn').addEventListener('click', () => {
// //     chrome.tabs.create({ url: 'result.html' });
// // });


// function authenticate() {
//     chrome.runtime.sendMessage({ action: "authenticate" }, (response) => {
//         if (response.success) {
//             console.log("Authentication Successful. Token:", response.token);
//             updateButtons(true); // Enable buttons
//         } else {
//             console.error("Authentication failed:", response.error);
//         }
//     });
// }

// function updateButtons(isProcessing) {
//     document.getElementById('open-results-btn').disabled = !isProcessing;
//     document.getElementById('stop-btn').disabled = !isProcessing;
// }

// // Open results page
// document.getElementById('open-results-btn').addEventListener('click', () => {
//     chrome.tabs.create({ url: 'result.html' });
// });

// // Stop background processing
// document.getElementById('stop-btn').addEventListener('click', () => {
//     chrome.runtime.sendMessage({ action: "stopProcessing" }, () => {
//         console.log("Background processing stopped.");
//         updateButtons(false); // Disable buttons
//     });
// });

// // On popup load, query the background for the current state
// chrome.runtime.sendMessage({ action: "getState" }, (response) => {
//     updateButtons(response.isProcessing);
// });

// document.getElementById('auth-btn').addEventListener('click', authenticate);


const CLIENT_ID = '974785943949-kamthk00gd0qrkg74gj4jcfbk21pe3mo.apps.googleusercontent.com';
const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';

const continueBtn = document.getElementById('continue-btn');
const authBtn = document.getElementById('auth-btn');
const openResultsBtn = document.getElementById('open-results-btn');
const stopBtn = document.getElementById('stop-btn');
const welcomeScreen = document.getElementById('welcome-screen');
const mainScreen = document.getElementById('main-screen');

// Switch to main screen on continue
continueBtn.addEventListener('click', () => {
    welcomeScreen.classList.add('hidden');
    mainScreen.classList.remove('hidden');
});

// Authenticate with Gmail
authBtn.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'authenticate' }, (response) => {
        if (response.success) {
            console.log('Authentication Successful. Token:', response.token);
            updateButtons(true); // Enable buttons
        } else {
            console.error('Authentication failed:', response.error);
        }
    });
});

// Open results page
openResultsBtn.addEventListener('click', () => {
    chrome.tabs.create({ url: 'result.html' });
});

// Stop background processing
stopBtn.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'stopProcessing' }, () => {
        console.log('Background processing stopped.');
        updateButtons(false); // Disable buttons
    });
});

// Update button states
function updateButtons(isProcessing) {
    openResultsBtn.disabled = !isProcessing;
    stopBtn.disabled = !isProcessing;
}

// On popup load, query the background for the current state
chrome.runtime.sendMessage({ action: 'getState' }, (response) => {
    updateButtons(response.isProcessing);
});

