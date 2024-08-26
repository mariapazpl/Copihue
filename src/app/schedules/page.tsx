"use client"

import Calendar from '@/components/calendar'; // Adjust path as necessary
import Deals from '@/components/deals'; // Adjust path as necessary
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
      {/* <nav className="flex justify-center mb-12 border-violet-100 p-4">
        <h1 className="font-bold text-2xl text-zinc-700">Drop-in Classes!</h1>
      </nav> */}
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Calendar onJoinClick={handleJoinClick} />
        {/* <Deals onJoinClick={handleJoinClick} /> */}
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
