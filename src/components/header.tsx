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
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('username');
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
            
            <nav className="flex items-center gap-x-5">
                <ul className="flex gap-x-5 text-[16px] sm:text-[14px]">
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
            </nav>

            <SignInOut 
                isLoggedIn={isLoggedIn} 
                onSignIn={handleSignIn} 
                onSignOut={handleSignOut}
            />
        </header>
    );
}