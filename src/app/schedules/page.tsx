"use client"

import Calendar from '@/components/calendar'; // Adjust path as necessary
import Deals from '@/components/deals'; // Adjust path as necessary
import { useState } from 'react';
import Modal from '@/components/modal'; // Adjust path as necessary

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEventTitle, setSelectedEventTitle] = useState('');
  const [selectedEventDate, setSelectedEventDate] = useState('');

  const handleJoinClick = (title: string, date: string) => {
    setSelectedEventTitle(title);
    setSelectedEventDate(date);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className="flex justify-center mb-12 border-violet-100 p-4">
        <h1 className="font-bold text-2xl text-zinc-700">Drop-in Classes!</h1>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Calendar />
        <Deals onJoinClick={handleJoinClick} />
        {/* Modal Component */}
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          eventTitle={selectedEventTitle}
          eventDate={selectedEventDate}
        />
      </main>
    </>
  );
}
