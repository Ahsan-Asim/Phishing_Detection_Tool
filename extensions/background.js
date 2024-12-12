// const CLIENT_ID = '974785943949-kamthk00gd0qrkg74gj4jcfbk21pe3mo.apps.googleusercontent.com'; // Updated Client ID
// const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';

// // // chrome.runtime.onInstalled.addListener(() => {
// // //     console.log("Phishing Detection Extension Installed");
// // // });

// // // chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
// // //     if (request.action === "authenticate") {
// // //         // Attempt to fetch token silently
// // //         chrome.identity.getAuthToken({ interactive: false }, (token) => {
// // //             if (chrome.runtime.lastError) {
// // //                 console.log("Silent token fetch failed. Switching to interactive mode.");
// // //                 // Fallback to interactive mode
// // //                 chrome.identity.launchWebAuthFlow(
// // //                     {
// // //                         url: `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(
// // //                             `https://${chrome.runtime.id}.chromiumapp.org/`
// // //                         )}&scope=${encodeURIComponent(SCOPES)}`,
// // //                         interactive: true,
// // //                     },
// // //                     (redirectUri) => {
// // //                         if (chrome.runtime.lastError) {
// // //                             console.error("Interactive login failed:", chrome.runtime.lastError.message);
// // //                             sendResponse({ success: false, error: chrome.runtime.lastError.message });
// // //                         } else {
// // //                             const token = new URL(redirectUri).hash.match(/access_token=([^&]+)/)[1];
// // //                             console.log("Interactive Token:", token);
// // //                             sendResponse({ success: true, token });
// // //                         }
// // //                     }
// // //                 );
// // //             } else {
// // //                 console.log("Silent Token:", token);
// // //                 sendResponse({ success: true, token });
// // //             }
// // //         });
// // //         // Required for asynchronous sendResponse
// // //         return true;
// // //     }
// // // });

// // const CLIENT_ID = '974785943949-kamthk00gd0qrkg74gj4jcfbk21pe3mo.apps.googleusercontent.com'; // Updated Client ID
// // const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';
// // let accessToken = null; // Store token for background polling

// // chrome.runtime.onInstalled.addListener(() => {
// //     console.log("Phishing Detection Extension Installed");
// // });

// // chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
// //     if (request.action === "authenticate") {
// //         authenticate((token) => {
// //             if (token) {
// //                 accessToken = token; // Save the token for background use
// //                 startBackgroundProcessing();
// //                 sendResponse({ success: true, token });
// //             } else {
// //                 sendResponse({ success: false, error: "Authentication failed" });
// //             }
// //         });
// //         return true; // Required for asynchronous `sendResponse`
// //     }
// // });

// // function authenticate(callback) {
// //     // Attempt to fetch token silently
// //     chrome.identity.getAuthToken({ interactive: false }, (token) => {
// //         if (chrome.runtime.lastError) {
// //             console.log("Silent token fetch failed. Switching to interactive mode.");
// //             // Fallback to interactive mode
// //             chrome.identity.launchWebAuthFlow(
// //                 {
// //                     url: `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(
// //                         `https://${chrome.runtime.id}.chromiumapp.org/`
// //                     )}&scope=${encodeURIComponent(SCOPES)}`,
// //                     interactive: true,
// //                 },
// //                 (redirectUri) => {
// //                     if (chrome.runtime.lastError) {
// //                         console.error("Interactive login failed:", chrome.runtime.lastError.message);
// //                         callback(null);
// //                     } else {
// //                         const token = new URL(redirectUri).hash.match(/access_token=([^&]+)/)[1];
// //                         console.log("Interactive Token:", token);
// //                         callback(token);
// //                     }
// //                 }
// //             );
// //         } else {
// //             console.log("Silent Token:", token);
// //             callback(token);
// //         }
// //     });
// // }

// // // Start background processing to fetch unread emails periodically
// // function startBackgroundProcessing() {
// //     if (!accessToken) {
// //         console.error("Access token not available. Cannot start background processing.");
// //         return;
// //     }

// //     console.log("Starting background processing...");
// //     // Poll Gmail API every 5 minutes
// //     setInterval(() => {
// //         fetchUnreadEmails(accessToken);
// //     }, 5 * 60 * 1000);
// // }

// // // Fetch unread emails and process them for phishing detection
// // function fetchUnreadEmails(token) {
// //     console.log("Fetching unread emails in background...");

// //     fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages?q=is:unread", {
// //         method: "GET",
// //         headers: { Authorization: `Bearer ${token}` },
// //     })
// //         .then((response) => response.json())
// //         .then((data) => {
// //             const messages = data.messages || [];
// //             if (messages.length > 0) {
// //                 console.log(`Found ${messages.length} unread emails.`);
// //                 messages.forEach((message) => getMessageContent(message.id, token));
// //             } else {
// //                 console.log("No unread emails.");
// //             }
// //         })
// //         .catch((error) => {
// //             console.error("Error fetching Gmail messages:", error);
// //         });
// // }

// // function getMessageContent(messageId, token) {
// //     fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}`, {
// //         method: "GET",
// //         headers: { Authorization: `Bearer ${token}` },
// //     })
// //         .then((response) => response.json())
// //         .then((data) => {
// //             let rawContent = "";

// //             // Extract the email content
// //             if (data.payload.body && data.payload.body.data) {
// //                 rawContent = atob(data.payload.body.data.replace(/-/g, "+").replace(/_/g, "/"));
// //             } else if (data.payload.parts) {
// //                 data.payload.parts.forEach((part) => {
// //                     if (part.mimeType === "text/plain" || part.mimeType === "text/html") {
// //                         rawContent = atob(part.body.data.replace(/-/g, "+").replace(/_/g, "/"));
// //                     }
// //                 });
// //             }

// //             if (rawContent) {
// //                 console.log("Message content:", rawContent);
// //                 const urls = extractUrls(rawContent);
// //                 if (urls.length > 0) {
// //                     checkPhishing(urls[0], messageId, token);
// //                 }
// //             } else {
// //                 console.log("No body content found for message ID:", messageId);
// //             }
// //         })
// //         .catch((error) => {
// //             console.error("Error getting message content:", error);
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
// //             const isPhishing = data.prediction === "phishing";
// //             console.log(`URL ${url} is ${isPhishing ? "phishing" : "safe"}`);
// //             labelEmail(messageId, isPhishing ? "red" : "green", token);
// //         })
// //         .catch((error) => {
// //             console.error("Error checking phishing:", error);
// //         });
// // }

// // function labelEmail(messageId, color, token) {
// //     const label = color === "red" ? "Phishing" : "Safe";
// //     fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}/modify`, {
// //         method: "POST",
// //         headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
// //         body: JSON.stringify({ addLabelIds: [label] }),
// //     })
// //         .then((response) => {
// //             if (response.ok) {
// //                 console.log(`Email labeled as: ${label}`);
// //             } else {
// //                 console.error(`Error labeling email: ${response.statusText}`);
// //             }
// //         })
// //         .catch((error) => {
// //             console.error("Error labeling email:", error);
// //         });
// // }

// // function extractUrls(text) {
// //     const urlPattern = /https?:\/\/[^\s]+/g;
// //     return text.match(urlPattern) || [];
// // }



// let accessToken = null;
// let emails = []; // Store processed emails

// chrome.runtime.onInstalled.addListener(() => {
//     console.log("Phishing Detection Extension Installed");
// });

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.action === "authenticate") {
//         authenticate((token) => {
//             if (token) {
//                 accessToken = token;
//                 startBackgroundProcessing();
//                 sendResponse({ success: true, token });
//             } else {
//                 sendResponse({ success: false, error: "Authentication failed" });
//             }
//         });
//         return true; // Async response
//     }
// });

// function authenticate(callback) {
//     chrome.identity.getAuthToken({ interactive: false }, (token) => {
//         if (chrome.runtime.lastError) {
//             chrome.identity.launchWebAuthFlow(
//                 {
//                     url: `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(
//                         `https://${chrome.runtime.id}.chromiumapp.org/`
//                     )}&scope=${SCOPES}`,
//                     interactive: true,
//                 },
//                 (redirectUri) => {
//                     if (chrome.runtime.lastError) {
//                         callback(null);
//                     } else {
//                         const token = new URL(redirectUri).hash.match(/access_token=([^&]+)/)[1];
//                         callback(token);
//                     }
//                 }
//             );
//         } else {
//             callback(token);
//         }
//     });
// }

// function startBackgroundProcessing() {
//     setInterval(() => {
//         if (accessToken) {
//             fetchUnreadEmails(accessToken);
//         }
//     }, 1 * 60 * 1000);
// }

// function fetchUnreadEmails(token) {
//     fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages?q=is:unread", {
//         method: "GET",
//         headers: { Authorization: `Bearer ${token}` },
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             const messages = data.messages || [];
//             messages.forEach((message) => getMessageContent(message.id, token));
//         })
//         .catch((error) => {
//             console.error("Error fetching Gmail messages:", error);
//         });
// }

// function getMessageContent(messageId, token) {
//     fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}`, {
//         method: "GET",
//         headers: { Authorization: `Bearer ${token}` },
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             let rawContent = "";

//             if (data.payload.body && data.payload.body.data) {
//                 rawContent = atob(data.payload.body.data.replace(/-/g, "+").replace(/_/g, "/"));
//             } else if (data.payload.parts) {
//                 data.payload.parts.forEach((part) => {
//                     if (part.mimeType === "text/plain" || part.mimeType === "text/html") {
//                         rawContent = atob(part.body.data.replace(/-/g, "+").replace(/_/g, "/"));
//                     }
//                 });
//             }

//             const urls = rawContent ? extractUrls(rawContent) : [];
//             if (urls.length > 0) {
//                 checkPhishing(urls[0], rawContent, data.snippet);
//             }
//         })
//         .catch((error) => {
//             console.error("Error getting message content:", error);
//         });
// }

// function checkPhishing(url, content, subject) {
//     fetch("http://127.0.0.1:5000/check_url", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ text: url }),
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             const isPhishing = data.prediction === "phishing";
//             emails.push({ content, subject, isPhishing });
//             updateResultPage();
//         })
//         .catch((error) => {
//             console.error("Error checking phishing:", error);
//         });
// }

// function updateResultPage() {
//     chrome.runtime.sendMessage({ action: "updateEmails", emails }, (response) => {
//         if (chrome.runtime.lastError) {
//             console.error("Error sending updateEmails message:", chrome.runtime.lastError.message);
//         } else {
//             console.log("Emails sent to result page:", emails);
//         }
//     });
// }


// function extractUrls(text) {
//     const urlPattern = /https?:\/\/[^\s]+/g;
//     return text.match(urlPattern) || [];
// }



const CLIENT_ID = '974785943949-kamthk00gd0qrkg74gj4jcfbk21pe3mo.apps.googleusercontent.com';
const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';
let accessToken = null;
let emails = [];
let intervalId = null;

chrome.runtime.onInstalled.addListener(() => {
    console.log("Phishing Detection Extension Installed");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "authenticate") {
        authenticate((token) => {
            if (token) {
                accessToken = token;
                startBackgroundProcessing();
                sendResponse({ success: true, token });
            } else {
                sendResponse({ success: false, error: "Authentication failed" });
            }
        });
        return true;
    } else if (request.action === "stopProcessing") {
        stopBackgroundProcessing();
        sendResponse({});
    } else if (request.action === "getState") {
        sendResponse({ isProcessing: !!intervalId });
    }
});

function authenticate(callback) {
    chrome.identity.getAuthToken({ interactive: false }, (token) => {
        if (chrome.runtime.lastError) {
            chrome.identity.launchWebAuthFlow(
                {
                    url: `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(
                        `https://${chrome.runtime.id}.chromiumapp.org/`
                    )}&scope=${SCOPES}`,
                    interactive: true,
                },
                (redirectUri) => {
                    if (chrome.runtime.lastError) {
                        callback(null);
                    } else {
                        const token = new URL(redirectUri).hash.match(/access_token=([^&]+)/)[1];
                        callback(token);
                    }
                }
            );
        } else {
            callback(token);
        }
    });
}

function startBackgroundProcessing() {
    if (intervalId) return;
    console.log("Starting background processing...");

    intervalId = setInterval(() => {
        if (accessToken) {
            fetchUnreadEmails(accessToken);
        }
    }, 1 * 60 * 1000);
}

function stopBackgroundProcessing() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        console.log("Background processing stopped.");
    }
}

function fetchUnreadEmails(token) {
    fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages?q=is:unread", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
    })
        .then((response) => response.json())
        .then((data) => {
            emails = [];
            const messages = data.messages || [];
            messages.forEach((message) => getMessageContent(message.id, token));
        })
        .catch((error) => {
            console.error("Error fetching Gmail messages:", error);
        });
}

function getMessageContent(messageId, token) {
    fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
    })
        .then((response) => response.json())
        .then((data) => {
            let rawContent = "";
            if (data.payload.body && data.payload.body.data) {
                rawContent = atob(data.payload.body.data.replace(/-/g, "+").replace(/_/g, "/"));
            } else if (data.payload.parts) {
                data.payload.parts.forEach((part) => {
                    if (part.mimeType === "text/plain" || part.mimeType === "text/html") {
                        rawContent = atob(part.body.data.replace(/-/g, "+").replace(/_/g, "/"));
                    }
                });
            }

            const urls = rawContent ? extractUrls(rawContent) : [];
            if (urls.length > 0) {
                checkPhishing(urls[0], rawContent, data.snippet);
            }
        })
        .catch((error) => {
            console.error("Error getting message content:", error);
        });
}

function checkPhishing(url, content, subject) {
    fetch("http://127.0.0.1:5000/check_url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: url }),
    })
        .then((response) => response.json())
        .then((data) => {
            const isPhishing = data.prediction === "phishing";
            emails.push({ content, subject, isPhishing });
            updateResultPage();
        })
        .catch((error) => {
            console.error("Error checking phishing:", error);
        });
}

function updateResultPage() {
    chrome.runtime.sendMessage({ action: "updateEmails", emails });
}

function extractUrls(text) {
    const urlPattern = /https?:\/\/[^\s]+/g;
    return text.match(urlPattern) || [];
}
