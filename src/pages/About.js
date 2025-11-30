import React from 'react';

export default function About() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-green-700 mb-6">About Orphans Hope</h2>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <figure className="flex flex-col items-center">
          <img src="/images/caregiver-with-children.jpg" alt="Caregiver reading with children" className="rounded-2xl w-full h-56 object-cover mb-4" />
          <figcaption className="text-green-700 font-semibold">Nurturing mentorship</figcaption>
        </figure>
        <figure className="flex flex-col items-center">
          <img src="/images/children-smiling.jpg" alt="Children smiling outdoors" className="rounded-2xl w-full h-56 object-cover mb-4" />
          <figcaption className="text-green-700 font-semibold">Joyful playtime</figcaption>
        </figure>
      </div>
      <p className="mb-4 text-gray-700">
        Orphans Hope is a registered non-profit dedicated to empowering orphaned and vulnerable children. We provide safe housing, education, healthcare, and emotional support, helping each child reach their full potential.
      </p>
      <p className="mb-4 text-gray-700">
        Our team of caregivers, volunteers, and donors work together to create a nurturing environment where children can thrive. Transparency and accountability are at the heart of our mission.
      </p>
      <div className="shadow-card p-5 text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">Support Our Mission</h3>
        <p className="text-gray-700 mb-4">Your donation or sponsorship directly funds programs, meals, and healthcare for children. Join us in making a lasting impact—every gift matters.</p>
        <a href="/donate" className="btn-green inline-block">Donate or Sponsor</a>
      </div>
    </div>
  );
}
