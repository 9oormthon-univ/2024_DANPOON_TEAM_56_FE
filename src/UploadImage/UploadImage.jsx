import styles from "./UploadImage.module.css";
import { useState, useRef, useEffect } from "react";
<<<<<<< HEAD

import cameraIcon from "../images/camera.png";
import commentIcon from "../images/comment.png";
import submitIcon from "../images/submit.png";
=======
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faEllipsisVertical, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
>>>>>>> 16df5de9632931333947c40843a50a70e1dde398

function UploadImage() {
  const [image, setImage] = useState(null);
  const [liked, setLiked] = useState(false);
<<<<<<< HEAD
  const [isCommenting, setIsCommenting] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState([]);

=======
  const [showComment, setShowComment] = useState(false);
>>>>>>> 16df5de9632931333947c40843a50a70e1dde398
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(Object.assign(file, { preview: URL.createObjectURL(file) }));
    } else {
      alert("Please upload a valid image file (JPEG, PNG, etc.).");
    }
  };

<<<<<<< HEAD
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleCommentSubmit(); 
    }
  };

=======
>>>>>>> 16df5de9632931333947c40843a50a70e1dde398
  const toggleLike = () => {
    setLiked(!liked);
  };

<<<<<<< HEAD
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
=======
  const toggleComment = () => {
    setShowComment(!showComment);
>>>>>>> 16df5de9632931333947c40843a50a70e1dde398
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
<<<<<<< HEAD
              <img className={styles.icon} src={cameraIcon} alt="Upload" />
=======
              <FontAwesomeIcon icon={faCamera} className={styles.cameraicon}/>
>>>>>>> 16df5de9632931333947c40843a50a70e1dde398
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
<<<<<<< HEAD
        <div className={styles.iconContainer}>
          <div className={styles.likeContainer}>
            <span
=======
        
        <div className={styles.likeContainer}>
          
          <div className={styles.iconSection}>
            <div
>>>>>>> 16df5de9632931333947c40843a50a70e1dde398
              onClick={toggleLike}
              className={liked ? styles.liked : styles.unliked}
              aria-label={liked ? "Unlike" : "Like"}
            >
              <i
                className={`fa ${liked ? "fa-heart" : "fa-heart-o"}`}
                aria-hidden="true"
              ></i>
<<<<<<< HEAD
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
=======
            </div>
            <div>
              <FontAwesomeIcon 
                onClick={toggleComment}
                icon={faComment} 
                className={` ${showComment ? styles.commentActive : styles.comment_icon }`}
                />
            </div>
          </div>
        </div>
        
        {showComment && (
          <div className={styles.comment}>
            <input 
              type="text"
              placeholder="Add a comment"
              className={styles.comment_input} 
            />
            <FontAwesomeIcon
              icon={faLocationArrow}
              className={styles.submit_icon}
            />
>>>>>>> 16df5de9632931333947c40843a50a70e1dde398
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadImage;
