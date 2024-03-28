import React, { useState, useEffect } from 'react';

const ImagePopup = ({ onClose, imageUrl, description }) => {
  const [popupWidth, setPopupWidth] = useState('80%'); // Initial width for the popup

  // Update the width of the popup based on the window size
  const updatePopupWidth = () => {
    const width = Math.min(window.innerWidth * 0.75, 800); // Set a maximum width of 800 pixels
    setPopupWidth(`${width}px`);
  };

  // Update the width when the window is resized
  useEffect(() => {
    updatePopupWidth();
    window.addEventListener('resize', updatePopupWidth);
    return () => {
      window.removeEventListener('resize', updatePopupWidth);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div style={{ width: popupWidth }} className="bg-[#0a192f] p-5 rounded-lg mx-auto">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-white text-xl bg-red-600 hover:bg-red-700 rounded-full px-3 py-1">X</button>
        </div>
        <div className="flex flex-col items-center">
          <img src={imageUrl} alt="Popup Image" style={{ maxWidth: '100%', height: 'auto' }} />
          <p className="text-white mt-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImagePopup;
