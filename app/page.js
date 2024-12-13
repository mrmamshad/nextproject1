import Image from "next/image";
import SearchForm from "./components/SearchForm";

export default function Home({ searchParams }) {
  const query = searchParams.query;
  return (
    <div>
      <h1 className="text-5xl py-2 line-clamp-2 font-bold text-center uppercase ">
        Pitch Your Startup, <br /> <span className="font-semibold">Connect with entrepreneurs</span>
      </h1>
      <p className="text-xl py-2 line-clamp-2 font-semibold text-center ">
      Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
      </p>
      <div className="flex justify-center">
       <SearchForm  query={query}  />
      </div>
    </div>
  );
}
