import React from 'react';

export default function Volunteer() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-green-700 mb-4">Volunteer With Us</h2>
      <p className="mb-4">Join our community of volunteers supporting children through tutoring, recreation, and mentorship.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>After-school tutoring (math, reading, ESL)</li>
        <li>Weekend recreation (sports, arts & crafts)</li>
        <li>Professional services (health, counseling)</li>
      </ul>
      <div className="mt-6">
        <a href="mailto:donate@orphanshope.com" className="btn-green">Express Interest via Email</a>
      </div>
    </div>
  );
}
