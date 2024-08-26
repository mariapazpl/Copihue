"use client"

//import { useState, useEffect } from 'react';
import { useAuthStatus } from "@/hooks/useauthstatus";
import CoursesSection from "@/components/coursesection";
import Banner from "@/components/banner";
import Students from "@/components/students";
import Socials from "@/components/socials";
import Dancing from "@/components/dancing";
// import SignInOut from '@/components/signinout';

export default function Home() {
  const isLoggedIn = useAuthStatus();

  return (
    <main className="text-center">
      <Banner imageSrc="/banner.jpg" title="Copihue Dance Studio" />
      {isLoggedIn ? <Dancing /> : <Students />}
      <Socials />
      <CoursesSection />
    </main>
  );
}
