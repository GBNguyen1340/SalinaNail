"use client";

import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { comments } from "@/app/lib/data";
import Comment from "@/app/ui/comment";

const CommentCarousel = () => {
  return (
    <>
      {comments.map((comment, index) => (
        <Comment key={`comment-${index}`} author={comment.name} text={comment.comment} />
      ))}
    </>
  );
};

export default CommentCarousel;
