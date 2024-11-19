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

    const handleDelete = (index) => {
      const updatedComments = [...comments];
      updatedComments.splice(index, 1);
      setComments(updatedComments);
    };
  
    return (
      <div >
        <h1 className="FeedBack">Feedback</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <label className="CommentsFitness">Comments</label>
          <textarea
            value={comment}
            onChange={handleCommentChange}
            required
            placeholder="Enter your comment"
          />

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