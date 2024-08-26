import React from 'react';

export default function Dancing() {
  return (
    <div className="py-12 text-center min-h-screen flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-6">Where the dance never stops!</h2>
      <p className="text-lg text-zinc-700 mt-4 max-w-xl mx-auto mb-8">
        Ready to dance your heart out? Here are some social dance venues in Toronto!
      </p>
      
      <div className="max-w-4xl mx-auto flex flex-wrap justify-between text-left">
        <ul className="w-full md:w-1/2 list-disc text-zinc-700 pl-6 mb-4">
          <li className="mb-2">Lula Lounge</li>
          <li className="mb-2">El Rancho</li>
          <li className="mb-2">Dance Life X</li>
        </ul>
        <ul className="w-full md:w-1/2 list-disc text-zinc-700 pl-6 mb-4">
          {/* <li className="mb-2">Sugar Beach</li> */}
          <li className="mb-2">Tumbao Toronto</li>
          <li className="mb-2">Toronto Salsa Fridays</li>
        </ul>
      </div>
    </div>
  );
}
