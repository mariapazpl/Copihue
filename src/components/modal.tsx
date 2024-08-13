import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
  eventDate: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, eventTitle, eventDate }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
        <h2 className="text-xl font-bold mb-4">Book Your Spot for {eventTitle}</h2>
        <p className="mb-4">Class Date and Time: {eventDate} at 7 PM</p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <input type="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required />
          </div>
          <div className="flex justify-between">
            <div className="w-full mr-2">
              <label className="block text-sm font-medium text-gray-700">Number of Men:</label>
              <input type="number" min="0" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required />
            </div>
            <div className="w-full ml-2">
              <label className="block text-sm font-medium text-gray-700">Number of Women:</label>
              <input type="number" min="0" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required />
            </div>
          </div>
          <div className="mb-4 text-sm text-gray-600">
            To confirm this booking, don't forget to send an email at <a href="mailto:studio@gmail.com" className="text-blue-600">studio@gmail.com</a>
          </div>
          <div className="flex justify-between">
            <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded-md" onClick={onClose}>
              Book Class
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;