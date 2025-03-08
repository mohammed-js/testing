// ssr for 1st call // isr for internal routing

async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL, {
    next: { revalidate: 10 }, // Regenerate every n seconds
  });
  return res.json();
}

export default async function ArticlesPage() {
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
