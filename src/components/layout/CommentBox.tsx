interface CommentBoxProps{
  className?: string; // Define className as an optional prop
}


import React from "react";
import { CommentSimple } from "../UI/CommentSimple/CommentSimple";

const CommentBox:React.FC<CommentBoxProps> = ({className}) => {
  return (
    <div className={`w-full h-[28vh] flex ${className}  bg-zinc-100  gap-4 rounded-lg pt-7 pb-6 px-8`}>
      <CommentSimple />
      <div className="h-full w-[25%] bg-zinc-500 overflow-hidden rounded-md">
        <img
          className="w-full h-full object-cover "
          src="https://images.unsplash.com/photo-1531564701487-f238224b7ce3?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default CommentBox;
