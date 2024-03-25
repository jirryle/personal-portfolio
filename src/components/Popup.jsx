import React from 'react';

const Popup = ({ onClose, videoSrc, description }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#0a192f] p-5 rounded-lg max-w-[90%] md:max-w-[600px] mx-auto">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-white text-xl bg-red-600 hover:bg-red-700 rounded-full px-3 py-1">X</button>
        </div>
        <div className="flex flex-col items-center">
          <video width="100%" controls>
            <source src={videoSrc} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <p className="text-white mt-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;