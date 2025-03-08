// app/dashboard/ClientComponent.jsx (Client Component)
"use client"; // Must be at the top

import { useEffect, useState } from "react";

export default function ClientComponent() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => {
        const firstThreeComments = data.slice(0, 3);
        setComments(firstThreeComments);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch comments:", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Comments (Client-Side Rendered)</h1>
      {isLoading ? (
        <p>Loading comments...</p>
      ) : comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id}>
            <p>
              <strong>{comment.name}</strong>
            </p>
            <p>{comment.body}</p>
          </div>
        ))
      ) : (
        <p>No comments available</p>
      )}
    </div>
  );
}
