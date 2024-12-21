import { client } from "../../../sanity/lib/client";
import React, { Suspense } from "react";
import { STARTUP_BY_ID_QUERY } from "../../../sanity/lib/query";
import { notFound } from "next/navigation";
import { formatDate } from "../../../lib/utils";
import {Skeleton} from  "../../components/ui/skeleton"
import View from "../../components/ui/View";
export const experimental_ppr = true;

const Details = async ({ params }) => {
  const id = await params.id;
  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  if (!post || post.length === 0) return notFound();

  return (
    <div className="max-w-7xl mx-auto p-6">
      {post.map((startup) => (
        <div key={startup._id} className="space-y-12">
          {/* Profile section  */}
          <section className=" flex justify-between items-center  mx-20    ">
            <div className="flex   gap-4  mt-4 ">
              <img
                src={startup.author.image}
                alt="Profile"
                className="w-20 h-20 rounded-full"
              />
              <div className="flex flex-col mt-4 ">
                <div className="text-lg  font-bold">{startup.author.name}</div>
                <div>@{startup.author.username}</div>
              </div>
            </div>
            <div className=" font-medium text-[16px] bg-green-500 dark:bg-transparent  px-4 py-2 rounded-full ">
              {startup.category}
            </div>
          </section>

          {/* Hero Section */}
          <div className="  overflow-hidden  ">
            <img
              src={startup.image}
              alt={startup.title}
              className=" inset-1 w-5/6 h-[300px] rounded-[22px]  shadow-sm mx-auto  object-cover "
            />
          </div>
          {/* Title Section */}
          <div className="flex justify-between items-center  mx-[90px]   mt-4">
            <h1 className="text-3xl font-bold">{startup.title}</h1>
            <div className="text-md ">
              {" "}
              <span className="font-semibold mr-2">Created At: </span>{" "}
              {formatDate(startup._createdAt)}
            </div>
          </div>

          {/* Pitch Section */}
          <div className="p-6 rounded-lg  space-y-6">
            <h2 className="text-2xl ml-16 font-bold">Pitch Details</h2>
            <div
              className="text-base  max-w-4/6 tracking-wider loading-2 mx-[65px] dark:text-white md:tracking-widest mt-4"
              dangerouslySetInnerHTML={{ __html: startup.pitch }}
            />
          </div>
          <hr className="border-dotted bg-zinc-400 max-w-4xl my-10 mx-auto"/>
          {/* TODO:Editor selected startups  */}
        </div>
      ))}
      <Suspense fallback={<Skeleton/>}> 
        <View id={id} />  
       
      </Suspense>
    </div>
  );
};

export default Details;
