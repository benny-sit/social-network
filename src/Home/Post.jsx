import React, { useState, useEffect } from "react";
import {
  WebPost,
  PostAuthor,
  PostImage,
  PostDescription,
  PostFeedback,
  Divider,
  PostInputWrapper,
  PostActions,
  PostIconProvider,
  PostStats,
} from "../Components/FeedComponents";
import {
  IoHeartOutline,
  IoHeartSharp,
  IoEllipsisVerticalSharp,
  IoChatbubblesOutline,
  IoSendSharp,
  IoSendOutline
} from "react-icons/io5";
import { useRef } from "react";

const defaultDesc = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, sint
eligendi. Veniam quaerat reiciendis repellat blanditiis ratione quasi
praesentium autem neque provident fugiat illo fugit vitae quidem ut
soluta saepe, molestias debitis sit incidunt dolorum eveniet mollitia.
Excepturi maxime, quis iste autem dolore nihil reprehenderit porro
veniam incidunt nam asperiores perspiciatis minus enim mollitia dolorum
fugiat? Repellat expedita exercitationem ducimus commodi, corrupti
ratione, veniam nisi numquam impedit illo perspiciatis consectetur,
voluptas magnam quas. Quae, quidem placeat tempora quia vel ex
laudantium rerum, voluptatem, quos ducimus cum! Possimus, illum eum
eaque aspernatur unde inventore ipsam explicabo, blanditiis quidem
quisquam omnis ratione!`;

export default function Post() {
  const [showMoreDescription, setShowMoreDescription] = useState(false);
  const [liked, setLiked] = useState(false);

  const [rows, setRows] = useState(1);
  const [comment, setComment] = useState("");
  const commentAreaRef = useRef(null);

  useEffect(() => {
    const rowlen = comment.split("\n");
    if (rowlen.length > 1) {
      setRows(rowlen.length);
    }
    if (commentAreaRef) {
      commentAreaRef.current.style.height = 'min-content';
      if (commentAreaRef.current.scrollHeight > 60) {
        commentAreaRef.current.style.height = `${commentAreaRef.current.scrollHeight}px`
      }
    }
  }, [comment]);
  return (
    <WebPost>
      <PostAuthor>
        <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="profile" />
        <div>
          <div>John Doe</div>
          <div>2d ago</div>
        </div>
      </PostAuthor>
      <PostImage>
        <img src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="landscape" />
      </PostImage>
      <PostDescription>
        {showMoreDescription ? defaultDesc : defaultDesc.substring(0, 250)}
        <span onClick={() => setShowMoreDescription((prev) => !prev)}>
          {defaultDesc.length > 250 && (showMoreDescription ? "Show Less" : "Show More")}
        </span>
      </PostDescription>
      <PostStats>10 Comments 5 Shares</PostStats>
      <Divider />
      <PostFeedback>
        <PostInputWrapper>
          <textarea
            rows={rows}
            onChange={(text) => setComment(text.target.value)}
            placeholder="Type a comment..."
            ref={commentAreaRef}
          />
          <img src="https://randomuser.me/api/portraits/men/40.jpg"/>
          <button>
            <PostIconProvider>
              <IoSendOutline />
            </PostIconProvider>
          </button>
        </PostInputWrapper>
        <PostActions>
          <button onClick={() => setLiked((prev) => !prev)}>
            <PostIconProvider>
              {liked ? <IoHeartSharp className="red" /> : <IoHeartOutline />}
            </PostIconProvider>
          </button>
          <button>
            <PostIconProvider>
              <IoChatbubblesOutline />
            </PostIconProvider>
          </button>
          <button>
            <PostIconProvider>
              <IoEllipsisVerticalSharp />
            </PostIconProvider>
          </button>
        </PostActions>
      </PostFeedback>
    </WebPost>
  );
}
