import Image from "next/image";
import SearchForm from "./components/SearchForm";
import StartupCard from "./components/StartupCard";
import { STARTUPS_QUERY } from "../sanity/lib/query";
import { sanityFetch, SanityLive } from "../sanity/lib/live";

export default async function Home({ searchParams }) {
  const query = searchParams.query;
  // Fetch all startups
  // const post = await client.fetch(STARTUPS_QUERY);
  const {data: post} = await sanityFetch({
    query: STARTUPS_QUERY,});

  return (
    <>
      <section className="space-y-3">
        <h1 className="text-5xl py-2 line-clamp-2 font-bold text-center uppercase">
          Pitch Your Startup, <br />{" "}
          <span className="font-semibold">Connect with entrepreneurs</span>
        </h1>
        <p className="text-xl py-2 line-clamp-2 font-semibold text-center">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>

      <section>
        <p className="text-xl py-2 line-clamp-2 font-semibold px-20 text-start">
          All Startups
        </p>

        {/* Render Startup Posts */}
        <ul className="my-7 grid mx-20 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {post.length > 0 ? (
            post.map((startup) => (
              <StartupCard key={startup._id} post={startup} />
            ))
          ) : (
            <p>No startups found.</p>
          )}
        </ul>

        <SanityLive />
      </section>
    </>
  );
}
