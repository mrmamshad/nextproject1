"use client";
import React from "react";
import Link from "next/link";
import { TiCancel } from "react-icons/ti";
import { X } from "lucide-react";

const SearchFormReset = () => {
  const handleReset = () => {
    const input = document.querySelector("input[name='query']");
    if (input) {
      input.value = ""; // Clear the input field
    }
    window.history.replaceState({}, document.title, "/"); // Clear URL query
  };

  return (
    <button type="reset" onClick={handleReset}>
      <Link href="/" className="    ">
        <X size={28} />
      </Link>
    </button>
  );
};

export default SearchFormReset;
