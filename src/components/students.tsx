import React from 'react';
import Link from 'next/link';

export default function Students() {
  return (
    <section className="py-12 text-center min-h-screen flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
      <p className="text-lg text-zinc-700 mt-4 max-w-xl mx-auto mb-8">
        Ready to dance your heart out? Whether you're new to salsa or a seasoned pro, our community is the perfect place to get moving, make friends, and have fun. Sign up to kick off your dance adventure or sign in to keep the rhythm going with us.            
      </p>
      <div className='flex justify-center'> 
        <Link href="/schedules" legacyBehavior>
          <a className="bg-red-400 text-white py-2 px-6 rounded transition-colors duration-300 hover:bg-red-500">
            View Class Schedules
          </a>
        </Link>
      </div>
      
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
        <div className="text-left md:text-right">
          <h3 className="text-xl font-semibold">New to our studio?</h3>
          <Link href="/account?form=register" legacyBehavior>
            <a className="text-red-500 flex items-center justify-start">
              Create an account <span className="ml-2">&rarr;</span>
            </a>
          </Link>
        </div>
        <div className="text-left md:text-left">
          <h3 className="text-xl font-semibold">Already a student?</h3>
          <Link href="/account?form=login" legacyBehavior>
            <a className="text-red-500 flex items-center justify-start">
              Sign in here <span className="ml-2">&rarr;</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
