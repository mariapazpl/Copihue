"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

interface SignInOutProps {
  isLoggedIn: boolean;
  onSignIn: () => void;
  onSignOut: () => void;
}

export default function SignInOut({ isLoggedIn, onSignIn, onSignOut }: SignInOutProps) {
  const router = useRouter();

  const handleClick = () => {
    if (isLoggedIn) {
      onSignOut(); // Perform logout and refresh
    } else {
      onSignIn(); // Redirect to login
    }

  };

  return (
    <button
      //onClick={isLoggedIn ? onSignOut : () => window.location.href = '/account?form=login'}
      onClick={handleClick}
      className="ml-5 p-2 bg-red-400 text-white font-bold rounded hover:bg-red-500 text-sm md:text-base lg:text-lg"
    >
      {isLoggedIn ? 'Sign Out' : 'Sign In'}
    </button>
  );
}
