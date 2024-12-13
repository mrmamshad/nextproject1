"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { doLogout } from "../actions";



const getShortenedName = (fullName) => {
  const nameParts = fullName.split(" ");
  const firstName = nameParts[0]; // Get the first name
  const lastNameInitial = nameParts.length > 1 ? nameParts[nameParts.length - 1][0] : ''; // Get the first letter of the last name
  return `${firstName} ${lastNameInitial}.`; // Return the shortened name (e.g., "Margubur M.")
};

export default function ProfileDropdown( {image, name, email}  ) {
  console.log(image, name, email);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const shortenedName = getShortenedName(name);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false); // Close the dropdown if the click is outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile icon with rounded image */}
      <button
        onClick={toggleDropdown}
        className="flex  px-3 py-2 rounded-[20px] shadow-sm items-center space-x-2"
      >
        <Image
          src={image}
          alt="Profile Image"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="font-medium">{shortenedName}</span> {/* Profile name */}
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-lg shadow-lg border">
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <Link
                href="/profile"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Settings
              </Link>
            </li>
            <li>
              <form action={doLogout} className="block px-4 py-2 hover:bg-gray-100" >
                <button type="submit">Logout</button>
              </form>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}