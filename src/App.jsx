import React, { useState } from 'react';
import "./App.css";

function App() {
  const [qrValue, setQRValue] = useState('');
  const [preValue, setPreValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generateQRCode = () => {
    if (!qrValue || preValue === qrValue) return;
    setPreValue(qrValue);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleInputChange = (e) => {
    setQRValue(e.target.value.trim());
    if (!e.target.value.trim()) {
      setPreValue('');
    }
  };

  return (
      <div className="wrapper">
        <header>
          <h1>QR Code Generator</h1>
          <p>Paste a URL or enter text to create QR code</p>
        </header>
        <div className="form">
          <input
              type="text"
              spellCheck="false"
              placeholder="Enter text or URL"
              value={qrValue}
              onChange={handleInputChange}
          />
          <button onClick={generateQRCode}>
            {isLoading ? 'Generating QR Code...' : 'Generate QR Code'}
          </button>
        </div>
        <div className="qr-code">
          <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`} alt="qr-code" />
        </div>
      </div>
  );
}

export default App;
