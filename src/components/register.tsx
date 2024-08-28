"use client";
import React, { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

interface RegisterProps {
  toggleForm: () => void;
  onLoginSuccess: () => void;
}

export default function Register({ toggleForm }: RegisterProps) {
  const [registerUsername, setRegisterUsername] = useState<string>('');
  const [registerEmail, setRegisterEmail] = useState<string>('');
  const [registerPassword, setRegisterPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const router = useRouter();

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterUsername(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async () => {
    if (registerPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: registerUsername.toLowerCase(),
          email: registerEmail,
          password: registerPassword,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token); // Set login state
        localStorage.setItem('username', registerUsername);
        alert('Registration successful');
        router.push('/'); // Redirect to homepage
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed');
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
      <input
        type='text'
        name='username'
        placeholder='Username'
        value={registerUsername}
        onChange={handleUsernameChange}
        className="w-full p-2 mb-3 border border-gray-300 rounded"
      />
      <input
        type='email'
        name='email'
        placeholder='Email'
        value={registerEmail}
        onChange={handleEmailChange}
        className="w-full p-2 mb-3 border border-gray-300 rounded"
      />
      <input
        type='password'
        name='password'
        placeholder='Password'
        value={registerPassword}
        onChange={handlePasswordChange}
        className="w-full p-2 mb-3 border border-gray-300 rounded"
      />
      <input
        type='password'
        name='confirmPassword'
        placeholder='Confirm Password'
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <button 
        onClick={handleSubmit}
        className="w-full p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
      >
        Sign Up
      </button>
      <p className="mt-4 text-center">
        Already have an account?{' '}
        <a 
          href="#"
          onClick={toggleForm} 
          className="text-blue-500 hover:text-blue-700"
        >
          Sign In
        </a>
      </p>
    </div>
  );
}
