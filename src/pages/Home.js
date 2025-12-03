import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const heroActions = [
    {
      title: 'Canadian Donors',
      description: 'Give via bank transfer or credit card and receive an instant Canadian tax receipt.',
      cta: 'Give in CAD',
      to: '/donate',
    },
    {
      title: 'Global & Crypto Supporters',
      description: 'Donate globally through crypto, USD wires, or international sponsorships.',
      cta: 'Donate Worldwide',
      to: '/donate',
    },
  ];

  const ctaCards = [
    {
      tag: 'Monthly Giving',
      title: 'Sponsor Meals & Care',
      description: 'Provide stable housing, nutrition, and therapy for children in our Edmonton home.',
      cta: 'Start Monthly Gift',
      to: '/donate',
    },
    {
      tag: 'Volunteer',
      title: 'Teach, Mentor, or Host',
      description: 'Lead tutoring sessions, mentorship circles, or arts workshops on evenings and weekends.',
      cta: 'View Volunteer Roles',
      to: '/volunteer',
    },
    {
      tag: 'Corporate',
      title: 'Partner With Purpose',
      description: 'Align your CSR goals with our trauma-informed care model through sponsorship or grants.',
      cta: 'Explore Partnerships',
      to: '/contact',
    },
    {
      tag: 'Community',
      title: 'Host a Fundraiser',
      description: 'Plan a brunch, livestream, or workplace drive—our team equips you with stories and visuals.',
      cta: 'Download Fundraiser Kit',
      to: '/contact',
    },
  ];

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
          <div className="grid gap-4 sm:grid-cols-2 text-left">
            {heroActions.map((action) => (
              <article
                key={action.title}
                className="rounded-2xl border border-white/30 bg-white/10 p-5 backdrop-blur-md"
              >
                <h3 className="text-xl font-semibold">{action.title}</h3>
                <p className="text-sm text-white/90">{action.description}</p>
                <Link to={action.to} className="btn-ghost mt-3 w-full justify-center">
                  {action.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white" aria-labelledby="cta-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="cta-heading" className="text-3xl font-bold text-center text-red-700 mb-8">
            Take Action Today
          </h2>
          <div className="cta-grid">
            {ctaCards.map((card) => (
              <article key={card.title} className="cta-card">
                <p className="text-xs font-semibold tracking-wide uppercase text-red-500">
                  {card.tag}
                </p>
                <h3 className="cta-card__title">{card.title}</h3>
                <p className="text-sm text-gray-700 flex-grow">{card.description}</p>
                <Link to={card.to} className="btn-cta w-full">
                  {card.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12 bg-gray-50" aria-labelledby="gallery-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="gallery-heading" className="text-3xl font-bold text-center text-red-700 mb-8">Life at Orphans Hope</h2>
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
      {/* Reviewers Section */}
      <section className="max-w-4xl mx-auto py-10">
        <h2 className="text-2xl font-bold text-red-700 mb-6 text-center">What Our Reviewers Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <blockquote className="shadow-card p-6 rounded-xl bg-white">
            <p className="text-gray-800 italic mb-2">"Orphans Hope sets a new standard for transparency and care. Their programs are truly life-changing."</p>
            <footer className="text-red-700 font-semibold">— Dr. Jenny, Pediatrician & Volunteer Reviewer</footer>
          </blockquote>
          <blockquote className="shadow-card p-6 rounded-xl bg-white">
            <p className="text-gray-800 italic mb-2">“The dedication of staff and volunteers is inspiring. Every donation makes a visible impact.”</p>
            <footer className="text-red-700 font-semibold">— M. Chen, Social Worker & Community Reviewer</footer>
          </blockquote>
        </div>
      </section>

      {/* Supporters Comments Section */}
      <section className="max-w-4xl mx-auto py-10">
        <h2 className="text-2xl font-bold text-red-700 mb-6 text-center">Supporters Comments</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="shadow-card p-6 rounded-xl bg-white">
            <p className="text-gray-800 mb-2">“I’ve seen firsthand how my sponsorship helps children thrive. Proud to support Orphans Hope!”</p>
            <footer className="text-red-700 font-semibold">— Sarah M., Monthly Sponsor</footer>
          </div>
          <div className="shadow-card p-6 rounded-xl bg-white">
            <p className="text-gray-800 mb-2">“Orphans Hope is a beacon of hope. Their updates and transparency keep me coming back as a donor.”</p>
            <footer className="text-red-700 font-semibold">— David L., Donor</footer>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
