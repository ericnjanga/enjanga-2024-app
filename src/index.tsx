import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import makeMirageServer from './server/mirageServerSetup';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

// Initialize MirageJS server
if (process.env.NODE_ENV === "development") {
  makeMirageServer();
} else {
  throw new Error("Root element not found. Make sure 'root' div exists in the HTML file.");
}

// Render the react app ...
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
