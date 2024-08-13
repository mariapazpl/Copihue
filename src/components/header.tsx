"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/classes",
        label: "Classes"
    },
    {
        href: "/schedules",
        label: "Schedules"
    },
    {
        href: "/instructors",
        label: "Our Instructors"
    }
]

export default function Header() {
    const pathname = usePathname();

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
        

        <nav>
            <ul className="flex gap-x-5 text-[14px]">
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <Link 
                            className={`${
                                pathname===link.href ? "text-zinc-900" : "text-zinc-400"
                                }`}
                                href={link.href}>
                                {link.label}
                        </Link>   
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  );
}
