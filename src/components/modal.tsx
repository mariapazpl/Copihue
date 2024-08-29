import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
  eventType: string;
  eventDate: string;
  instructor: string;
  pricing: string;
  duration: string;
  location: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  eventTitle,
  eventType,
  eventDate,
  instructor,
  pricing,
  duration,
  location,
}) => {
  const [leaders, setLeaders] = useState<string>('');
  const [followers, setFollowers] = useState<string>('');
  const [selectedRole, setSelectedRole] = useState<'leaders' | 'followers' | 'both' | ''>('');

  if (!isOpen) return null;

  const handleBooking = async () => {
    const leadersCount = leaders === '' ? 0 : Number(leaders);
    const followersCount = followers === '' ? 0 : Number(followers);

    if (
      selectedRole === '' ||
      (selectedRole === 'leaders' && leadersCount === 0) ||
      (selectedRole === 'followers' && followersCount === 0) ||
      (selectedRole === 'both' && (leadersCount === 0 || followersCount === 0))
    ) {
      alert('Please select a role and specify the number of participants.');
      return;
    }

    const username = localStorage.getItem('username');
    if (!username) {
      alert('You need to be logged in to book a class.');
      return;
    }

    const bookingData = {
      eventTitle,
      eventType,
      eventDate,
      instructor,
      leaders: leadersCount,
      followers: followersCount,
      username,
      location: '25 Capreol Court, Toronto ON',
      time: '7 PM',
    };

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        alert('Class booked successfully!');
        onClose();
      } else {
        alert('Failed to book the class.');
      }
    } catch (error) {
      console.error('Error booking class:', error);
      alert('An error occurred while booking the class.');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Book Your Spot for {eventTitle}</h2>
        <p className="mb-4">Class Date and Time: {eventDate} at 7 PM</p>
        <p className="mb-4">Instructor: {instructor}</p>
        <p className="mb-4">Pricing: {pricing} per person</p>
        <p className="mb-4">Duration: {duration}</p>
        <p className="mb-4">Location: {location}</p>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleBooking(); }}>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                id="leaders"
                name="role"
                value="leaders"
                checked={selectedRole === 'leaders'}
                onChange={() => setSelectedRole('leaders')}
                className="mr-2"
              />
              <label htmlFor="leaders" className="block text-sm font-medium text-gray-700">Leader</label>
            </div>
            {selectedRole === 'leaders' || selectedRole === 'both' ? (
              <div className="ml-4">
                <label className="block text-sm font-medium text-gray-700">Number of Leaders:</label>
                <input
                  type="number"
                  min="0"
                  value={leaders}
                  onChange={(e) => setLeaders(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-200"
                  placeholder="Optional"
                />
              </div>
            ) : null}

            <div className="flex items-center">
              <input
                type="radio"
                id="followers"
                name="role"
                value="followers"
                checked={selectedRole === 'followers'}
                onChange={() => setSelectedRole('followers')}
                className="mr-2"
              />
              <label htmlFor="followers" className="block text-sm font-medium text-gray-700">Follower</label>
            </div>
            {selectedRole === 'followers' || selectedRole === 'both' ? (
              <div className="ml-4">
                <label className="block text-sm font-medium text-gray-700">Number of Followers:</label>
                <input
                  type="number"
                  min="0"
                  value={followers}
                  onChange={(e) => setFollowers(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-200"
                  placeholder="Optional"
                />
              </div>
            ) : null}

            <div className="flex items-center">
              <input
                type="radio"
                id="both"
                name="role"
                value="both"
                checked={selectedRole === 'both'}
                onChange={() => setSelectedRole('both')}
                className="mr-2"
              />
              <label htmlFor="both" className="block text-sm font-medium text-gray-700">Both</label>
            </div>
          </div>

          <div className="mb-4 text-sm text-gray-600">
            To confirm this booking, payment must be made by e-transfer to{' '}
            <a href="mailto:copihuedancestudio@gmail.com" className="text-blue-600">
              copihuedancestudio@gmail.com
            </a>{' '}
            at least 24 hours before the class. A receipt will be sent by email upon payment.
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Book Class
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
