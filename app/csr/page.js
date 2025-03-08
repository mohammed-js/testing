// CSR is bound to routing (ex: using <Link>), as the requests will be interceptor by main.js bundle to handle CSR

"use client"; // Enables client-side execution
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div>
      {todos.length > 0 ? (
        <div>
          <h1>Products</h1>
          {todos.map((item) => (
            <p key={item.id}>{item.title}</p>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
