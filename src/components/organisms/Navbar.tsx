"use client"

import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IconUserCircle } from "@tabler/icons-react";
import Link from "next/link";
import Button from "../atoms/Button";

type NavbarProps = {
    className?: string;
};

const Navbar: FC<NavbarProps> = ({ className }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loggedInStatus = localStorage.getItem('isLoggedIn');
        if (loggedInStatus === 'true') {
            setIsLoggedIn(true);
        }
    }, []);


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };
    
    return (
        <nav className={`fixed top-0 left-0 w-full flex flex-row z-10 justify-between text-midnight-black font-bold px-12 py-4 items-center text-lg ${className}`}>
            <div className="flex flex-row gap-8 items-center">
                <Image src="/assets/LuniDesk-logo.png" alt="LuniDesk Logo" width={100} height={100} />
                <p className="hover:underline">Product</p>
                <p className="hover:underline">Blog</p>
                <p className="hover:underline">Demo</p>
            </div>
            <IconUserCircle stroke={1.5} size={40} onClick={toggleDropdown} className="cursor-pointer"/>

            {dropdownOpen && (
                <div className="absolute right-12 top-16 w-24 bg-white border border-gray-200 rounded shadow-lg z-10">
                    <Link href="/profile" className="block px-4 py-2 text-foreground text-base font-normal hover:bg-gray-100 text-midnight-black">
                        Profile
                    </Link>
                    <Link href="/settings" className="block px-4 py-2 text-foreground text-base font-normal hover:bg-gray-100 text-midnight-black">
                        Settings
                    </Link>
        
                    <button
                        className="block w-full text-left px-4 py-2 text-foreground text-base font-normal hover:bg-gray-100 text-midnight-black"
                        onClick={() => {
                            localStorage.setItem('isLoggedIn', 'false');
                            setIsLoggedIn(false);
                            setDropdownOpen(false);
                        }}
                    >
                        Log out
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;