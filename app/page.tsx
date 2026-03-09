import layout from "./app/layout.tsx";
import page from "./app/page.tsx";
import nav from "./components/nav.tsx";
import hero from "./components/hero.tsx";
import services from "./components/services.tsx";
import stats from "./components/stats.tsx";

export default function Home() {
  return (
    <main>
      <layout />
      <page />
      <nav />
      <hero />
      <services />
      <stats />
    </main>
  );
}