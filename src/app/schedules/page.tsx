"use client"

import Calendar from '@/components/calendar'; // Adjust path as necessary
import { useState, useEffect } from 'react';
import Modal from '@/components/modal'; // Adjust path as necessary
import { useRouter } from 'next/navigation';

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEventTitle, setSelectedEventTitle] = useState('');
  const [selectedEventDate, setSelectedEventDate] = useState('');
  const [selectedInstructor, setSelectedInstructor] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedPricing, setSelectedPricing] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      localStorage.setItem('redirectUrl', window.location.pathname);
      router.push('/account?form=login');
    }
  }, [router])

  const handleJoinClick = (title: string, type: string, date: string, instructor: string, pricing: string, duration: string, location: string) => {
    setSelectedEventTitle(title);
    setSelectedType(type);
    setSelectedEventDate(date);
    setSelectedInstructor(instructor);
    setSelectedPricing(pricing);
    setSelectedDuration(duration);
    setSelectedLocation(location);
    setIsModalOpen(true);
  };


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <main className="flex flex-col min-h-screen">
        <div className="flex-grow p-4">
          <div className="mt-8"> 
            <Calendar onJoinClick={handleJoinClick} />
          </div>
        </div>        
        {/* Modal Component */}
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          eventTitle={selectedEventTitle}
          eventType={selectedType}
          eventDate={selectedEventDate}
          instructor={selectedInstructor}
          pricing={selectedPricing}
          duration={selectedDuration}
          location={selectedLocation}
        />
      </main>
    </>
  );
}
