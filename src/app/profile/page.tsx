"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface Booking {
  id: number;
  eventTitle: string;
  eventDate: string;
  time: string;
  location: string;
  instructor: string;
  eventType: string;
}

export default function ProfilePage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    console.log('username is:', username);
  
    if (!token) {
      localStorage.setItem('redirectUrl', window.location.pathname);
      router.push('/account?form=login');
      return;
    }
  

    if (username) {
      axios.get(`/api/classes?username=${username}`)
        .then(response => {
          console.log('Fetched bookings:', response.data);  // Debugging log
          const sortedBookings = response.data.sort((a: Booking, b: Booking) => new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime());
          setBookings(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching bookings:', error); // Debugging log
          setError('Failed to load bookings');
          setLoading(false);
        });
    } else {
      setError('User is not logged in');
      setLoading(false);
    }
  }, [router]);
  

  const today = new Date();

  const cancelBooking = async (id: number) => {
    try {
      console.log('Cancelling booking with ID:', id);  // Debugging log
      const response = await axios.delete(`/api/bookings/${id}`);
      if (response.status === 200) {
        setBookings(bookings.filter(booking => booking.id !== id));
        alert('Booking cancelled successfully');
      } else {
        alert('Failed to cancel booking');
      }
    } catch (error) {
      console.error('Error cancelling booking:', error);  // Debugging log
      alert('An error occurred while cancelling the booking');
    }
  };  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
  
        <section className="mb-8 p-4 border border-gray-300 rounded shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Past Classes</h2>
          {bookings.filter(booking => booking.eventType === 'Drop-in' && new Date(booking.eventDate) < today).length === 0 ? (
            <p>No past classes found.</p>
          ) : (
            bookings.filter(booking => booking.eventType === 'Drop-in' && new Date(booking.eventDate) < today)
              .map((booking) => (
                <div key={booking.id} className="mb-4 p-4 border rounded shadow-sm">
                  <h3 className="text-xl font-semibold">{booking.eventTitle}</h3>
                  <p>Date: {new Date(booking.eventDate).toLocaleDateString()}</p>
                  <p>Time: {booking.time}</p>
                  <p>Location: {booking.location}</p>
                  <p>Instructor: {booking.instructor}</p>
                  {/* <p>ID: {booking.id}</p> Ensure this line is included */}
                </div>
              ))
          )}
        </section>
  
        <section className="mb-8 p-4 border border-gray-300 rounded shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">Upcoming Classes</h2>
          {bookings.filter(booking => booking.eventType === 'Drop-in' && new Date(booking.eventDate) >= today).length === 0 ? (
            <p>No upcoming classes found.</p>
          ) : (
            bookings.filter(booking => booking.eventType === 'Drop-in' && new Date(booking.eventDate) >= today)
              .map((booking) => (
                <div key={booking.id} className="mb-4 p-4 border rounded shadow-sm flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{booking.eventTitle}</h3>
                    <p>Date: {new Date(booking.eventDate).toLocaleDateString()}</p>
                    <p>Time: {booking.time}</p>
                    <p>Location: {booking.location}</p>
                    <p>Instructor: {booking.instructor}</p>
                    <p className='text-xs'>To confirm this booking, payment must be made by e-transfer to{' '}<a href="mailto:copihuedancestudio@gmail.com" className="text-blue-600">copihuedancestudio@gmail.com</a>{' '}at least 24 hours before the class. A receipt will be sent by email upon payment.</p>
                    {/* <p>ID: {booking.id}</p> Ensure this line is included */}
                  </div>
                  <button
                    onClick={() => cancelBooking(booking.id)}
                    className='bg-red-500 text-white py-2 px-4 rounded-md'
                  >
                    Cancel Booking
                  </button>
                </div>
              ))
          )}
        </section>
      </div>
    </main>
  );  
}
