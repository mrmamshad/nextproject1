"use client";
import Link from "next/link";
import LoginForm from "./LoginForm";
import { Dropdown } from "@nextui-org/react";
import ProfileDropdown from "./ProfileDropdown";
import ModeToggle from "./ModeToggle";
import Logout from "./Logout";
import { useSession } from "next-auth/react";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function NavbarExample() {
  const { data: session, status } = useSession();
  const name = session?.user?.name;
  const email = session?.user?.email;
  const image = session?.user?.image;
  console.log("Session data on the client:", session);

  return (
    <div className="px-20 py-3  shadow-sm">
      <nav className="flex justify-between items-center border-b    dark:border-white/10 font-semibold  dark:text-white py-4">
        <div className="flex">
          {/* Use Next.js Link for navigation without an <a> tag */}
          <Link href="/" className="flex items-center">
            <AcmeLogo />
            <h1 className="mt-1">NovaList</h1>
          </Link>
        </div>
        <div>
          <ul className="flex gap-4 hover:cursor-pointer">
            {/* Use Link without the <a> tag */}
            <li className="hover:text-green-400 duration-300">
              <Link href="/home">Home</Link>
            </li>
            <li className="hover:text-green-400 duration-300">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-green-400 duration-300">
              <Link href="/features">Features</Link>
            </li>
            <li className="hover:text-green-400 duration-300">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-3">
          <div className="mt-3">
            <ModeToggle />
          </div>
          <div>
            {/* Conditionally render components based on user session */}
            {session?.user ? (
              <ProfileDropdown image={image} name={name} email={email} />
            ) : (
              <div className="mt-3 ml-3 ">
                <LoginForm />
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
