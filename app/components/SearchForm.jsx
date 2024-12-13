import Form from "next/form";
import { FiSearch } from "react-icons/fi"; // Search icon from react-icons
import SearchFormReset from "./SearchFormReset";
import { IoMdSearch } from "react-icons/io";
import { Search } from "lucide-react";

export default function SearchBox({ query }) {
  

  return (
    <Form
      action={`/`}
      scroll={false}
      className="relative search-form w-full max-w-md mx-auto"
    >
      <div className="relative">
        <input
          name="query"
          placeholder="Search..."
          defaultValue={query}
          className="w-full pl-4 pr-12 text-lg  font-semibold  my-5 py-3 border border-gray-600 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-200 "
        />

        {/* Search reset and search icon */}
        <div className="absolute inset-y-0 right-2 flex items-center gap-2">
          {query && <SearchFormReset />}
         <Search size={22} />
        </div>
      </div>
    </Form>
  );
}
