"use client";
import React from "react";
import Link from "next/link";
import { TiCancel } from "react-icons/ti";
import { X } from "lucide-react";



const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector("search-form");

    if (form) {
      form.reset();
    }
  };

  return (
    <button type="reset" onClick={reset}>
      <Link
        href="/"
        className="    "
      >
        <X size={28} />
      </Link>
    </button>
  );
};

export default SearchFormReset;
