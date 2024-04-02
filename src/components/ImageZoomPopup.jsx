import React, { useState, useEffect } from 'react';
import ImageZoom from 'react-image-zoom';

const ImageZoomPopup = ({ onClose, imageUrl, description }) => {
  const [popupWidth, setPopupWidth] = useState('80%'); // Initial width for the popup
  const [popupHeight, setPopupHeight] = useState('80%'); // Initial height for the popup
  const [zoomProps, setZoomProps] = useState({});

  // Update the width and height of the popup based on the window size
  const updatePopupSize = () => {
    const width = Math.min(window.innerWidth * 0.75, 800); // Set a maximum width of 800 pixels
    const height = Math.min(window.innerHeight * 0.75, 600); // Set a maximum height of 600 pixels
    setPopupWidth(`${width}px`);
    setPopupHeight(`${height}px`);
    const zoomWidth = width * 0.8;
    const zoomHeight = height * 0.8;

    setZoomProps( {
      width: zoomWidth,
      height: zoomHeight,
      zoomWidth: zoomWidth * 1.5,
      img: imageUrl,
      alt: "Research Poster",
    })
  };

  // Update the size when the window is resized
  useEffect(() => {
    updatePopupSize();
    window.addEventListener('resize', updatePopupSize);
    return () => {
      window.removeEventListener('resize', updatePopupSize);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div style={{ width: popupWidth, height: popupHeight }} className="bg-[#0a192f] p-5 rounded-lg mx-auto overflow-auto">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-white text-xl bg-red-600 hover:bg-red-700 rounded-full px-3 py-1">X</button>
        </div>
        <div className="flex flex-col items-center">
          {imageUrl && <ImageZoom {...zoomProps} />}
          <p className="text-white mt-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageZoomPopup;