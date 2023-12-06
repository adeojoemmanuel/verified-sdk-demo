import React, { useState } from 'react';
import './App.css';

function App() {
  const [connected, setConnected] = useState(false);

  const handleConnect = async () => {
    try {
      // Load the Verified SDK from CDN
      const sdkScript = document.createElement('script');
      sdkScript.src = 'https://cdn.verified.network/js/verified-sdk.js';
      sdkScript.async = true;
      document.head.appendChild(sdkScript);

      // Wait for the script to load
      await new Promise(resolve => {
        sdkScript.onload = resolve;
      });

      // Initialize the SDK
      window.VerifiedSdk.initialize();

      // Connect using the SDK
      await window.VerifiedSdk.connect();

      // Update the state to indicate successful connection
      setConnected(true);
    } catch (error) {
      console.error('Error connecting:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleConnect} disabled={connected}>
          {connected ? 'Connected' : 'Connect'}
        </button>
      </header>
    </div>
  );
}

export default App;
