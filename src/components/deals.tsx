import React from 'react';
import Image from 'next/image';

export default function Deals({ onJoinClick }: { onJoinClick: (title: string, type: string, date: string, instructor: string, pricing: string, duration: string, location: string) => void }) {
  return (
    <section className="w-full max-w-4xl mx-auto mb-12">
      <h2 className="text-2xl font-bold mb-6 text-zinc-700">Deals</h2>
      
      {/* Deal 1: Beginner Bachata */}
      <div className="flex items-center border-b border-gray-300 py-6">
        <Image src="/bacha.jpg" alt="Beginner Bachata" className="w-28 h-28 object-cover mr-6" />
        <div>
          <h3 className="text-xl font-semibold mb-2">Beginner Bachata</h3>
          <p className="text-sm mb-2">Oct 7, 2024 - Nov 25, 2024</p>
          <p className="text-sm mb-4">Join our 8-week course every Monday to master the basics of Bachata. Perfect for beginners!</p>
          <p className="font-bold mb-4">$60</p>
          <button 
            onClick={() => onJoinClick('Beginner Bachata', 'Deal', 'Oct 7, 2024 - Nov 25, 2024', 'Maria', ' $60 CAD', ' 1 hour', '25 Capreol Court, Toronto ON')}
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Join
          </button>
        </div>
      </div>

      {/* Deal 2: Beginner Salsa */}
      <div className="flex items-center py-6">
        <Image src="/salsa2.jpg" alt="Beginner Salsa" className="w-28 h-28 object-cover mr-6" />
        <div>
          <h3 className="text-xl font-semibold mb-2">Beginner Salsa</h3>
          <p className="text-sm mb-2">Oct 10, 2024 - Nov 28, 2024</p>
          <p className="text-sm mb-4">Join our 8-week course every Thursday to learn the fundamentals of Salsa. Perfect for newcomers!</p>
          <p className="font-bold mb-4">$60</p>
          <button 
            onClick={() => onJoinClick('Beginner Salsa', 'Deal', 'Oct 10, 2024 - Nov 28, 2024', 'Ingmar', ' $60 CAD', ' 1 hour', '25 Capreol Court, Toronto ON')}
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Join
          </button>
        </div>
      </div>
    </section>
  );
}
