// ssr for 1st call // ssg for internal routing
async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL, {
    cache: "force-cache", // Fully static
  });
  return res.json();
}

export default async function ProductsPage() {
  const todos = await getData();

  return (
    <div>
      <h1>Products</h1>
      {todos.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
