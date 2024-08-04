"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SignUpSignIn() {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
      <Image
        src="/banner.jpg"
        alt="Banner Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="bg-white bg-opacity-30 backdrop-blur-sm p-8 rounded-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </h2>
          {isSignUp ? (
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Create Password"
                  className="w-full p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full p-2 rounded"
                />
              </div>
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-600 transition"
              >
                Sign Up
              </button>
              <p className="mt-4 text-sm">
                Already have an account?{' '}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setIsSignUp(false)}
                >
                  Sign In
                </span>
              </p>
            </form>
          ) : (
            <form>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 rounded"
                />
              </div>
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-600 transition"
              >
                Sign In
              </button>
              <p className="mt-4 text-sm">
                Don't have an account?{' '}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => setIsSignUp(true)}
                >
                  Sign Up
                </span>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
