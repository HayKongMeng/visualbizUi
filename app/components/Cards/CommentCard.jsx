import { getPhoto } from "@/app/utils/util_function";
import Image from "next/image";
import React from "react";

const CommentCard = ({ className, data }) => {
  return (
    <main className={"grid grid-cols-[auto_1fr] gap-6 " + className}>
      <div className="flex gap-6">
        <Image
          src={getPhoto(data?.profileImg)}
          width={1000}
          height={1000}
          alt="pf user"
          className="size-[5.5rem] rounded-full "
        />
      </div>
      <div className="bg-bg p-7 rounded-2xl flex flex-col gap-2">
        <p className="text-[1.8rem] font-medium">{data?.username}</p>
        <p className="text-normal text-justify">{data?.commentDescription}</p>
      </div>
    </main>
  );
};

export default CommentCard;
