"use client";
import React, { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

interface LoginProps {
  toggleForm: () => void;
  onLoginSuccess: () => void;
}

export default function Login({ toggleForm, onLoginSuccess }: LoginProps) {
  const [loginUsername, setLoginUsername] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');
  const router = useRouter();

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginPassword(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: loginUsername.toLowerCase(),
          password: loginPassword,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        localStorage.setItem('token', data.token);
        localStorage.setItem('username', loginUsername.toLowerCase());

        if (onLoginSuccess) {
          onLoginSuccess();
        } else {
          console.error('onLoginSuccess is not defined');
        }

        const redirectUrl = localStorage.getItem('redirectUrl') || '/';
        localStorage.removeItem('redirectUrl');

        alert('Login successful');
        router.push(redirectUrl);
        

      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during login');
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Sign In</h2>
      <input
        type='text'
        name='username'
        placeholder='Username'
        value={loginUsername}
        onChange={handleUsernameChange}
        className="w-full p-2 mb-3 border border-gray-300 rounded"
      />
      <input
        type='password'
        name='password'
        placeholder='Password'
        value={loginPassword}
        onChange={handlePasswordChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <button 
        onClick={handleSubmit}
        className="w-full p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
      >
        Login
      </button>
      <p className="mt-4 text-center">
        New here?{' '}
        <a 
          href="#"
          onClick={toggleForm} 
          className="text-blue-500 hover:text-blue-700"
        >
          Sign Up
        </a>
      </p>
    </div>
  );
}
