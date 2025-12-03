import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <section className="relative h-screen flex items-center justify-center" aria-label="Intro video: Hope Heaven">
        <video
          src="/videos/VID-20251127-WA0007.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/children-smiling.jpg"
          title="Morning routines, tutoring, and mealtime inside Orphans Hope"
          aria-label="Video showing morning routines, tutoring circles, and communal meals inside Orphans Hope"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center text-white p-8">
          <h2 className="text-4xl font-bold mb-4">Welcome to Orphans Hope</h2>
          <p className="text-lg mb-6">Building a brighter future for children in Canada and globally through shelter, education, and healthcare.</p>
          <div className="space-x-4">
            <Link to="/donate" className="btn-green">Donate (Canada Bank)</Link>
            <Link to="/donate" className="btn-yellow">Donate (Crypto)</Link>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12 bg-gray-50" aria-labelledby="gallery-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="gallery-heading" className="text-3xl font-bold text-center text-green-700 mb-8">Life at Orphans Hope</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <figure className="rounded-2xl shadow-md overflow-hidden">
              <img loading="lazy" src="/images/caregiver-with-children.jpg" alt="A caregiver reading to children in our Edmonton home" className="object-cover w-full h-64" />
              <figcaption className="p-2 text-sm text-gray-600">Caregiving and literacy time in our Edmonton residence</figcaption>
            </figure>
            <figure className="rounded-2xl shadow-md overflow-hidden">
              <img loading="lazy" src="/images/volunteers-teaching.jpg" alt="Volunteers teaching basic math in our learning centre" className="object-cover w-full h-64" />
              <figcaption className="p-2 text-sm text-gray-600">Volunteer-led after-school tutoring</figcaption>
            </figure>
            <figure className="rounded-2xl shadow-md overflow-hidden">
              <img loading="lazy" src="/images/children-smiling.jpg" alt="Children smiling during outdoor activity" className="object-cover w-full h-64" />
              <figcaption className="p-2 text-sm text-gray-600">Smiles from weekend recreation</figcaption>
            </figure>
            <figure className="rounded-2xl shadow-md overflow-hidden">
              <img loading="lazy" src="/images/doctor-caring-for-child.jpg" alt="Doctor providing wellness check for a child" className="object-cover w-full h-64" />
              <figcaption className="p-2 text-sm text-gray-600">Partner healthcare providers offering regular checkups</figcaption>
            </figure>
            <figure className="rounded-2xl shadow-md overflow-hidden">
              <img loading="lazy" src="/images/classroom-activity.jpg" alt="Child engaged in classroom activity" className="object-cover w-full h-64" />
              <figcaption className="p-2 text-sm text-gray-600">Early learning through play</figcaption>
            </figure>
            <figure className="rounded-2xl shadow-md overflow-hidden">
              <img loading="lazy" src="/images/outdoor-play.jpg" alt="Children playing outdoors in a supervised area" className="object-cover w-full h-64" />
              <figcaption className="p-2 text-sm text-gray-600">Supervised outdoor play for healthy development</figcaption>
            </figure>
          </div>
        </div>
      </section>
        <section className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-xl font-bold text-green-700 mb-4">Make a Difference</h2>
          <p className="text-gray-700 mb-4">Your support helps us provide food, healthcare, and education to children in need. Become a donor or sponsor and change a life today.</p>
          <Link to="/donate" className="btn-green inline-block">Donate or Sponsor Now</Link>
        </section>
      {/* Reviewers Section */}
      <section className="max-w-4xl mx-auto py-10">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">What Our Reviewers Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <blockquote className="shadow-card p-6 rounded-xl bg-white">
            <p className="text-gray-800 italic mb-2">"Orphans Hope sets a new standard for transparency and care. Their programs are truly life-changing."</p>
            <footer className="text-green-700 font-semibold">— Dr. Jenny, Pediatrician & Volunteer Reviewer</footer>
          </blockquote>
          <blockquote className="shadow-card p-6 rounded-xl bg-white">
            <p className="text-gray-800 italic mb-2">“The dedication of staff and volunteers is inspiring. Every donation makes a visible impact.”</p>
            <footer className="text-green-700 font-semibold">— M. Chen, Social Worker & Community Reviewer</footer>
          </blockquote>
        </div>
      </section>

      {/* Supporters Comments Section */}
      <section className="max-w-4xl mx-auto py-10">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Supporters Comments</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="shadow-card p-6 rounded-xl bg-white">
            <p className="text-gray-800 mb-2">“I’ve seen firsthand how my sponsorship helps children thrive. Proud to support Orphans Hope!”</p>
            <footer className="text-green-700 font-semibold">— Sarah M., Monthly Sponsor</footer>
          </div>
          <div className="shadow-card p-6 rounded-xl bg-white">
            <p className="text-gray-800 mb-2">“Orphans Hope is a beacon of hope. Their updates and transparency keep me coming back as a donor.”</p>
            <footer className="text-green-700 font-semibold">— David L., Donor</footer>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
