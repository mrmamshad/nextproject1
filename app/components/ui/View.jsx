import React from "react";
import Ping from "./Ping";
import { client } from "../../../sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "../../../sanity/lib/query";
import { writeClient } from "../../../sanity/lib/writeclient";
import { after } from 'next/server'

const View = async ({ id }) => {
  const { views: totalviews } = await client
    .withConfig({
      useCdn: false,
    })
    .fetch(STARTUP_VIEWS_QUERY, { id });


 after(async () => {
  await writeClient
  .patch(id)
  .set({views: totalviews + 1,})
  .commit(); 
 }) 

  return (
    <div className="flex justify-end items-center mt-5 fixed bottom-3 right-3">
      <div className="absolute -top-2 -right-2 ">
        <Ping />
      </div>

      <p className="font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-lg capitalize">
        <span className="font-black">{totalviews} views</span>
      </p>
    </div>
  );
};

export default View;
