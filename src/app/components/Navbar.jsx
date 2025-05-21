"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  { title: "Beranda", path: "#beranda" },
  { title: "Tentang Kami", path: "#tentang" },
  { title: "Produk Kami", path: "#produk" },
  { title: "Kontak", path: "#kontak" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-thirdary bg-opacity-100">
      <div className="flex items-center justify-between px-4 py-2 container mx-auto">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <img src="/images/logow.png" width={100} height={100} alt="logo" />
        </Link>

        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white bg-secondary"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="text-[#33353F] hover:text-primary transition-all duration-300"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 w-2/3 h-full bg-primary bg-opacity-100 z-20 transform transition-transform duration-300 ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setNavbarOpen(false)}
            className="text-black p-2 hover:text-gray-500 bg-secondary"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-6 mt-12">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className="text-2xl text-[#33353F] hover:text-thirdary transition-all duration-300"
                onClick={() => setNavbarOpen(false)}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
