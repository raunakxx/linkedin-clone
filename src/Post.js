import React from "react";
import { Avatar, Input } from "@mui/material";
import "./Post.css";
import InputOption from "./InputOptions";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="Post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>

        <div className="post__buttons">
          <InputOption Icon={ThumbUpIcon} title="like" color="gray" />
          <InputOption
            Icon={ChatBubbleOutlineIcon}
            title="comment"
            color="gray"
          />
          <InputOption Icon={ShareIcon} title="share" color="gray" />
          <InputOption Icon={SendIcon} title="send" color="gray" />
        </div>
      </div>
    </div>
  );
}

export default Post;
