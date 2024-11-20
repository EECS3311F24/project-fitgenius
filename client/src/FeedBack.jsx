import React, {useState} from "react";
const FeedBack = () => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
  
    const handleCommentChange = (e) => {
      setComment(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (comment.trim()) {
        setComments([...comments, comment]);
        setComment(''); 
      }
    };

  
    return (
      <div >
        <h1 className="FeedBack">Feedback</h1>
        <form onSubmit={handleSubmit} className="handle submit">
          <label className="CommentsFitness">Comments</label>
          <textarea
            value={comment}
            onChange={handleCommentChange}
            required
            placeholder="Enter your comment"
          />
          <div>
            <button type="submit"className="submitbutton">Submit Comment</button>
            
          </div>

        </form>
  
        {/* Display comments */}
        <div>
          <h2 className="Previous Comments">Previous Comments:</h2>
          {comments.length === 0 ? (
            <p>No comments yet</p>
          ) : (
            <ul>
              {comments.map((comm, index) => (
                <li key={index} className="listcomments">
                  {comm}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };
export default FeedBack;