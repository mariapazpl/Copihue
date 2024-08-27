"use client";
import React, { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { GetServerSideProps } from 'next';
import Register from '@/components/register';
import Login from '@/components/login';
import Banner from '@/components/banner';

const Content = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const searchParams = useSearchParams();
  const form = searchParams?.get('form');

  const [showRegister, setShowRegister] = useState(true);

  useEffect(() => {
    if (form === 'login') {
      setShowRegister(false);
    } else {
      setShowRegister(true);
    }
  }, [form]);

  const toggleForm = () => {
    setShowRegister(!showRegister);
  };
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);  // Update the login state immediately
    console.log('Login successful!');
    // You can redirect or update the UI as needed here
  };

    return           showRegister ? (
      <Register toggleForm={toggleForm} onLoginSuccess={handleLoginSuccess}/>
    ) : (
      <Login toggleForm={toggleForm} onLoginSuccess={handleLoginSuccess}/>
    )
}

export default function Page() {

  return (
    <main className="relative">
      <Banner imageSrc="/registerSalsa.jpg" title="" />
      <div className="absolute inset-0 flex items-center justify-center p-8 z-10">
        <div className="w-full max-w-md p-6 bg-white bg-opacity-90 rounded shadow-md">
          <Suspense fallback={null}>
          <Content />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
