import styles from "./MockMission.module.css";
import { useState } from "react";

import commentIcon from "../images/comment.png";
import submitIcon from "../images/submit.png";

function MockMission({src}) {
  const user = "Tom";
  const [liked, setLiked] = useState(false);
  const [isCommenting, setIsCommenting] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState([]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleCommentSubmit();
    }
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  const toggleCommentBox = () => {
    setIsCommenting(!isCommenting);
  };

  const handleCommentSubmit = () => {
    if (!commentInput.trim()) {
      alert("Please enter a comment!");
      return;
    }
    setComments([...comments, commentInput.trim()]);
    setCommentInput("");
  };

  return (
    <div>
      <div className={styles.imageContainer}>
        {/* Display the example image */}
        <img
          src={src}
          alt="Example Preview"
          className={styles.uploadedImage}
        />
        <div className={styles.iconContainer}>
          <div className={styles.likeContainer}>
            <span
              onClick={toggleLike}
              className={liked ? styles.liked : styles.unliked}
              aria-label={liked ? "Unlike" : "Like"}
            >
              <i
                className={`fa ${liked ? "fa-heart" : "fa-heart-o"}`}
                aria-hidden="true"
              ></i>
            </span>
          </div>
          <button onClick={toggleCommentBox}>
            <img
              className={styles.commentIcon}
              src={commentIcon}
              alt="Comment"
            />
          </button>
        </div>

        {/* Comments List */}
        <div className={styles.commentList}>
          {comments.map((comment, index) => (
            <div key={index} className={styles.comment}>
              <div className={styles.color}>{user}</div>
              <div>{comment}</div>
            </div>
          ))}
        </div>

        {/* Comment Input */}
        {isCommenting && (
          <div className={styles.commentSection}>
            <input
              type="text"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              className={styles.commentInput}
              placeholder="Add a comment..."
              onKeyPress={handleKeyPress}
            />
            <button
              onClick={handleCommentSubmit}
              className={styles.submitButton}
            >
              <img src={submitIcon} alt="Submit" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MockMission;
