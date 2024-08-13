import React from 'react';
import NextVideo from 'next-video';


export default function Socials() {
  return (
        <section className="relative w-full h-screen bg-black">
            <div className="absolute inset-0 z-0">
                <h2 className="text-3xl text-red-50 font-bold mb-3 mt-3">Where the Dance Never Stops!</h2>
                <NextVideo
                src="/videos/baile.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                disablePictureInPicture
                controls={false} // Disable video controls
                />
            </div>
            
        </section> 
    );
}

