import React, { Suspense, lazy } from "react";
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
  return (
    <Router>
      <div className="font-sans text-gray-800 bg-white min-h-screen flex flex-col">
        <header className="flex justify-between items-center p-4 shadow-md bg-white sticky top-0 z-50">
          <h1 className="text-2xl font-bold text-green-700">Orphans Hope</h1>
          <nav className="space-x-4">
            <Link to="/" className="hover:text-green-600">
              Home
            </Link>
            <Link to="/about" className="hover:text-green-600">
              About
            </Link>
            <Link to="/programs" className="hover:text-green-600">
              Programs
            </Link>
            <Link to="/impact" className="hover:text-green-600">
              Impact
            </Link>
            <Link to="/donate" className="hover:text-green-600">
              Donate
            </Link>
            <Link to="/contact" className="hover:text-green-600">
              Contact
            </Link>
            <Link to="/volunteer" className="hover:text-green-600">
              Volunteer
            </Link>
            <Link to="/faq" className="hover:text-green-600">
              FAQ
            </Link>
          </nav>
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

        <footer className="bg-green-700 text-white text-center p-6 mt-6">
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
 