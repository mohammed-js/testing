// app/dashboard/page.jsx (Server Component by default)
export default async function ServerComponent() {
  // Fetch data on the server (SSR)
  const todosRes = await fetch(process.env.NEXT_PUBLIC_API_URL, {
    cache: "no-store", // Ensure SSR
  });
  const todos = await todosRes.json();

  return (
    <div>
      <div>
        <h1>Todos (Server-Side Rendered)</h1>
        {todos.length > 0 ? (
          todos.slice(0, 5).map((todo) => <p key={todo.id}>{todo.title}</p>)
        ) : (
          <p>No todos available</p>
        )}
      </div>
    </div>
  );
}
