import React from 'react';

export default function Programs() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Our Programs</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <section className="shadow-card p-5">
          <h3 className="text-xl font-semibold mb-2">Safe Housing</h3>
          <p>Supervised, secure residences with nutritious meals and 24/7 support.</p>
        </section>
        <section className="shadow-card p-5">
          <h3 className="text-xl font-semibold mb-2">Education & Tutoring</h3>
          <p>Access to quality education, school supplies, and after-school tutoring.</p>
        </section>
        <section className="shadow-card p-5">
          <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
          <p>Routine checkups, vaccinations, dental care, and emergency support with local clinics.</p>
        </section>
        <section className="shadow-card p-5">
          <h3 className="text-xl font-semibold mb-2">Nutrition</h3>
          <p>Daily meals and supplemental nutrition to ensure healthy development.</p>
        </section>
        <section className="shadow-card p-5">
          <h3 className="text-xl font-semibold mb-2">Counselling</h3>
          <p>Trauma-informed mental health support delivered by trained social workers.</p>
        </section>
        <section className="shadow-card p-5">
          <h3 className="text-xl font-semibold mb-2">Recreation & Life Skills</h3>
          <p>Sports, arts, and life-skills workshops that build confidence and resilience.</p>
        </section>
      </div>
    </div>
  );
}
