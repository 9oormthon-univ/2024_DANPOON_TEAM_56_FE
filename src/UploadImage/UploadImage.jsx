import styles from "./UploadImage.module.css";
import { useState, useRef, useEffect } from "react";

import cameraIcon from "../images/camera.png";
import commentIcon from "../images/comment.png";
import submitIcon from "../images/submit.png";

function UploadImage() {
  const [image, setImage] = useState(null);
  const [liked, setLiked] = useState(false);
  const [isCommenting, setIsCommenting] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState([]);

  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(Object.assign(file, { preview: URL.createObjectURL(file) }));
    } else {
      alert("Please upload a valid image file (JPEG, PNG, etc.).");
    }
  };

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

  useEffect(() => {
    return () => {
      if (image) {
        URL.revokeObjectURL(image.preview);
      }
    };
  }, [image]);

  return (
    <div>
      <div className={styles.imageContainer}>
        {image ? (
          <img
            src={image.preview}
            alt="Uploaded Preview"
            className={styles.uploadedImage}
          />
        ) : (
          <div className={styles.uploadWrapper}>
            <button
              type="button"
              className={styles.uploadButton}
              id="optional"
              onClick={() => fileInputRef.current.click()}
            >
              <img className={styles.icon} src={cameraIcon} alt="Upload" />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
          </div>
        )}
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
              {comment}
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
              placeholder="Write a comment..."
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

export default UploadImage;
