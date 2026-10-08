import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen bg-[var(--color-ivory)]">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-50 -translate-y-20 bg-[var(--color-ink)] px-5 py-3 text-sm font-semibold text-[var(--color-ivory)] transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content" tabIndex="-1" className="focus:outline-none">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
