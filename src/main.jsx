import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import spicesData from './data/spices.json'

// Mock global fetch to handle api calls since backend is removed
const originalFetch = window.fetch;
window.fetch = async (url, options) => {
  if (url === '/api/spices') {
    return {
      ok: true,
      status: 200,
      json: async () => spicesData,
    };
  }
  if (url === '/api/contact') {
    return {
      ok: true,
      status: 200,
      json: async () => ({ success: true, message: 'Message sent successfully' }),
    };
  }
  return originalFetch(url, options);
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
