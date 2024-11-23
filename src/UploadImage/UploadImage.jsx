import styles from "./UploadImage.module.css";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faEllipsisVertical, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";

function UploadImage() {
  const [image, setImage] = useState(null);
  const [liked, setLiked] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(Object.assign(file, { preview: URL.createObjectURL(file) }));
    } else {
      alert("Please upload a valid image file (JPEG, PNG, etc.).");
    }
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  const toggleComment = () => {
    setShowComment(!showComment);
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
              <FontAwesomeIcon icon={faCamera} className={styles.cameraicon}/>
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
        
        <div className={styles.likeContainer}>
          
          <div className={styles.iconSection}>
            <div
              onClick={toggleLike}
              className={liked ? styles.liked : styles.unliked}
              aria-label={liked ? "Unlike" : "Like"}
            >
              <i
                className={`fa ${liked ? "fa-heart" : "fa-heart-o"}`}
                aria-hidden="true"
              ></i>
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
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadImage;
