// SSR is not bound to routing (ex: using <Link> or router), as the requests will be send anyways to the server to get the fully rendered HTML page

async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL, {
    cache: "no-store", // Forces a new fetch on every request // default
  });
  return res.json();
}

console.log("xxxxxxxxxxxxxx", process.env.NEXT_PUBLIC_MODE);

export default async function Component() {
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
