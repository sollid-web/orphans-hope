import React from 'react';

export default function GetInvolved() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Get Involved</h2>
      <div className="space-y-6">
        <section className="shadow-card p-5">
          <h3 className="text-xl font-semibold mb-2">Volunteer</h3>
          <p>Offer your time and skills in tutoring, mentorship, event support, and administration.</p>
          <p className="text-sm text-gray-600">Email <a className="text-green-700 underline" href="mailto:donate@orphanshope.com">donate@orphanshope.com</a> to learn more.</p>
        </section>
        <section className="shadow-card p-5">
          <h3 className="text-xl font-semibold mb-2">Sponsor a Child</h3>
          <p>Create lasting impact by sponsoring a child’s education, healthcare, and nutrition.</p>
        </section>
        <section className="shadow-card p-5">
          <h3 className="text-xl font-semibold mb-2">Fundraise</h3>
          <p>Host a community fundraiser at your school, workplace, or faith community.</p>
        </section>
      </div>
    </div>
  );
}
