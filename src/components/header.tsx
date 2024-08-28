"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from 'react';
import SignInOut from "./signinout"; // Import SignInOut component

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/classes", label: "Classes" },
    { href: "/instructors", label: "Our Instructors" },
    { href: "/schedules", label: "Schedule" },
    { href: "/profile", label: "My Profile" }
];

export default function Header() {
    const pathname = usePathname();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, [pathname]);

    const handleSignOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setIsLoggedIn(false);
        router.push('/'); // Redirect to homepage after sign out
        window.location.reload();
    };

    const handleSignIn = () => {
        router.push('/account?form=login');
    };

    return (
        <header className="flex justify-between items-center py-4 px-7 border-b bg-transparent z-20">
            <Link href="/">
                <Image 
                    src="/copihueOficial.png"
                    alt="Logo"
                    className="w-[50px] h-[50px]"
                    width="50"
                    height="50"
                />
            </Link>

            {/* Sidebar Button */}
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden p-2 text-zinc-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>

                    </button>
                </div>
                <nav className="flex flex-col p-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`py-2 text-lg ${pathname === link.href ? "text-zinc-900" : "text-zinc-400"}`}
                            onClick={() => setIsSidebarOpen(false)}>
                                {link.label}
                        </Link>
                    ))}
                    {/* SignInOut button is Sidebar for Mobile */}
                    <div className="mt-4">
                        <SignInOut 
                            isLoggedIn={isLoggedIn} 
                            onSignIn={handleSignIn} 
                            onSignOut={handleSignOut} 
                        />
                    </div>
                </nav>
            </div>

            {/* Navigation links for larger screens */}
            <div className="hidden lg:flex items-center gap-x-5">
                <ul className="flex gap-x-5 text-[16px]">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link 
                                className={`${
                                    pathname === link.href ? "text-zinc-900" : "text-zinc-400"
                                }`}
                                href={link.href}>
                                {link.label}
                            </Link>   
                        </li>
                    ))}
                </ul>
                <SignInOut 
                isLoggedIn={isLoggedIn} 
                onSignIn={handleSignIn} 
                onSignOut={handleSignOut}
                />
            </div>
        </header>
    );
}