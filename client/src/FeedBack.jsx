import React, { useState, useEffect } from "react";

function FeedBack({ exercise }) {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
      reloadComments();
    }, [exercise]);
  
    const handleCommentChange = (e) => {
      setComment(e.target.value);
    };

    async function reloadComments() {
      const response = await fetch(`http://localhost:5050/record/comments/${exercise}`);

      if (!response.ok) {
          const message = `An error has occurred: ${response.statusText}`;
          console.error(message);
          return;
      }

      let retrievedComments = await response.json();
      retrievedComments = retrievedComments.map(comment => comment.text);
      setComments(retrievedComments);
    }
  
    async function handleSubmit(e) {
      e.preventDefault();

      const newComment = {
        exercise: exercise,
        text: comment,
      };

      try {
          response = await fetch("http://localhost:5050/record/comments", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(newComment),
          });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error('A problem occurred with your fetch operation: ', error);
      }

      setComment('');
      reloadComments();
    };

    async function handleDelete() {
      const response = await fetch(`http://localhost:5050/record/comments/${exercise}`, {
        method: "DELETE",
      });

      if (!response.ok) {
          const message = `An error occurred while deleting: ${response.statusText}`;
          console.error(message);
          return;
      }

      reloadComments();
    };

    return (
      <div >
        <h1 className="FeedBack">Feedback</h1>
        <form onSubmit={handleSubmit} className="handlesubmit">
          <label className="CommentsFitness">Comments</label>
          <textarea
            value={comment}
            onChange={handleCommentChange}
            required
            placeholder="Enter your comment"
          />    
          <div>
            <button type="submit"className="submitbutton">Submit Comment</button>
            <button className="deletebutton" onClick={handleDelete}>Delete Most Recent</button>
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