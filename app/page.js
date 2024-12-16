import Image from "next/image";
import SearchForm from "./components/SearchForm";
import { image } from "@nextui-org/theme";
import StartupCard from "./components/StartupCard";

const post = [
  {
    _createdAt: new Date(),
    views: 66,
    author: { _id: 1, name: "mamshad" },
    _id: 1,
    description: "This is a sample description",
    image:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Robots"  , 
    title : "We Robots"
  },
];

export default function Home({ searchParams }) {
  const query = searchParams.query;
  return (
    <>
      <section className="space-y-2">
        <h1 className="text-5xl py-2 line-clamp-2 font-bold text-center uppercase ">
          Pitch Your Startup, <br />{" "}
          <span className="font-semibold">Connect with entrepreneurs</span>
        </h1>
        <p className="text-xl py-2 line-clamp-2 font-semibold text-center ">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <div className="flex justify-center">
          <SearchForm query={query} />
        </div>
      </section>
      <section>
        <p className="text-xl py-2 line-clamp-2 font-semibold  px-20 text-start ">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="my-7  grid  mx-20 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
        {post.length > 0 ? (
          post.map((post, index) => (
            <StartupCard key={post._id} post={post} />
          ))
        ) : (
          <p>No startups found.</p>
        )}
        </ul>
      </section>
    </>
  );
}
