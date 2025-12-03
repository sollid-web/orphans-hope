import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Loading from "./components/Loading";

// Lazy-loaded route components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Donate = lazy(() => import("./pages/Donate"));
const Contact = lazy(() => import("./pages/Contact"));
const Programs = lazy(() => import("./pages/Programs"));
const Impact = lazy(() => import("./pages/Impact"));
const Volunteer = lazy(() => import("./pages/Volunteer"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const primaryActions = [
    { to: "/donate", label: "Donate Now", description: "Fund meals, healthcare, and safe housing." },
    { to: "/volunteer", label: "Volunteer", description: "Share your time through tutoring or mentorship." },
    { to: "/programs", label: "Explore Programs", description: "See how we support children daily." },
    { to: "/impact", label: "Impact Reports", description: "Review our measurable outcomes." },
  ];

  const supportingLinks = [
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/faq", label: "FAQ" },
    { to: "/privacy", label: "Privacy" },
    { to: "/terms", label: "Terms" },
  ];

  return (
    <Router>
      <div className="font-sans text-gray-800 bg-white min-h-screen flex flex-col">
        <header className="p-4 shadow-md bg-red-700 text-white sticky top-0 z-50">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3" aria-label="Orphans Hope home">
              <img src="/logo.svg" alt="Orphans Hope logo" className="h-10 w-auto drop-shadow" />
              <span className="text-2xl font-bold text-white">Orphans Hope</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-4">
              <Link to="/" className="hover:text-white/80">
                Home
              </Link>
              <Link to="/about" className="hover:text-white/80">
                About
              </Link>
              <Link to="/programs" className="hover:text-white/80">
                Programs
              </Link>
              <Link to="/impact" className="hover:text-white/80">
                Impact
              </Link>
              <Link to="/donate" className="hover:text-white/80">
                Donate
              </Link>
              <Link to="/contact" className="hover:text-white/80">
                Contact
              </Link>
              <Link to="/volunteer" className="hover:text-white/80">
                Volunteer
              </Link>
              <Link to="/faq" className="hover:text-white/80">
                FAQ
              </Link>
            </nav>
            <button
              type="button"
              className="md:hidden border border-white text-white px-4 py-2 rounded-full text-sm font-semibold"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? "Close Menu" : "Menu"}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden mt-4 space-y-6" aria-label="Mobile navigation">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {primaryActions.map((action) => (
                  <Link
                    key={action.to}
                    to={action.to}
                    className="rounded-2xl border border-red-100 p-4 shadow-card bg-white text-gray-800"
                    onClick={() => setMenuOpen(false)}
                  >
                    <h3 className="text-lg font-semibold text-brand-deepRed mb-1">{action.label}</h3>
                    <p className="text-sm text-gray-700">{action.description}</p>
                  </Link>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {supportingLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="px-4 py-2 rounded-full border border-white/40 text-sm text-white/90"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </header>

        <main className="flex-grow">
          <ErrorBoundary>
            <Suspense fallback={<Loading message="Loading page..." />}> 
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/impact" element={<Impact />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/volunteer" element={<Volunteer />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>

        <footer className="bg-red-800 text-white text-center p-6 mt-6">
          <div className="space-x-4 mb-2">
            <Link to="/privacy" className="underline">Privacy</Link>
            <Link to="/terms" className="underline">Terms</Link>
          </div>
          <p className="font-semibold">Orphans Hope</p>
          <p>Address: {process.env.REACT_APP_ADDRESS || '123 Hope Street, City, Province, Canada'}</p>
          <p>Phone: {process.env.REACT_APP_PHONE || '+1 (555) 123-4567'} | Email: donate@orphanshope.com</p>
          <p>Registered Charity Number: {process.env.REACT_APP_CHARITY_NUMBER || 'TBD'}</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Orphans Hope, Canada. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}
 