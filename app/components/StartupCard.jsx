import React from "react";
import { formatDate } from "../../lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Button from "./ui/button";

const StartupCard = ({ post }) => {
  return (
    <li className="shadow-lg border-2    border-black  dark:border-white  rounded-2xl p-4 flex flex-col gap-4">
      {/* Top Section: Date and Views */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">{formatDate(post._createdAt)}</p>
        <div className="flex items-center gap-1 text-gray-500">
          <EyeIcon size={16} />
          <span className="text-sm">{post.views}</span>
        </div>
      </div>

      {/* Middle Section: Title and Profile Image */}
      <div className="flex justify-between items-center gap-4">
        {/* Title and Author Name */}
        <div className="flex-1">
          <Link href={`/user/${post.author._id}`}>
            <p className="text-sm font-medium text-gray-800">
              {post.author.name}
            </p>
          </Link>
          <Link href={`/startup/${post._id}`}>
            <p className="text-xl font-semibold text-gray-900 line-clamp-1">
              {post.title}
            </p>
          </Link>
        </div>

        {/* Profile Image on the Right */}
        <Link href={`/user/${post.author._id}`}>
          <Image
            src={post.author.image || "https://placehold.co/48x48"}
            alt={post.author.name}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      {/* Bottom Section: Post Image */}
      <Link href={`/startup/${post._id}`}>
        <Image
          src={post.image || "https://placehold.co/600x400"}
          alt={post.title}
          width={600}
          height={400}
          className="w-full h-[164px] rounded-[10px] object-cover"
        />
      </Link>
      <div className="flex justify-between items-center gap-3 mt-5">
      <Link href={`/?query=/${post.category.toLowerCase()}`}>
          <p className="text-medial font-semibold text-gray-900">
            {post.category}
          </p>
        </Link>
        <Button
          className="rounded-full bg-black/80 font-medium text-[16px]  px-5 py-3 !important"
          asChild
        >
         <Link  href={`/startup/${post._id}`}>Details</Link>
        </Button  >
      </div>
    </li>
  );
};

export default StartupCard;
