import BookmarkIcon from "@/app/components/Icons/BookmarkIcon";
import Link from "next/link";
import React from "react";

function ViewBookmarkButton() {
  return (
    <section className="flex items-center text-near_normal">
      <Link
        className="flex gap-2 border p-3 rounded-xl items-center"
        href="/view/bookmark"
      >
        <BookmarkIcon />
        <section className="text-center">View Bookmark</section>
      </Link>
    </section>
  );
}

export default ViewBookmarkButton;
