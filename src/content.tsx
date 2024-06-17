import React from 'react'
import ReactDOM from 'react-dom/client'
// Function to get the DOM content
// const getDOMContent = (): string => {
//     return document.documentElement.outerHTML;
//   }
  
//   // Listen for messages from the background script
//   chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
//     if (request.action === "getDOM") {
//       const domContent = getDOMContent();
//       sendResponse({ domContent });
//     }
//   });


const root = document.createElement('div')
root.id = 'crx-root'
document.body.append(root)

ReactDOM.createRoot(root).render(
	<React.StrictMode>
	  <div>Hello world</div>
	</React.StrictMode>
);