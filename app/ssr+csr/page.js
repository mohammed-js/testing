// server component containing (server and client component) // server components can render client components, bun not vice versa (work around) // SC: can'y use hooks | CC: can't use ssr fetching
// server component can be for components or whole page

import ClientComponent from "../components/clientComponent";
import ServerComponent from "../components/serverComponent";

export default async function DashboardPage() {
  return (
    <div>
      <ServerComponent />
      <ClientComponent />
    </div>
  );
}
