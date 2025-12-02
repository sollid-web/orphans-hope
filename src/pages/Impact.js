import React from 'react';

export default function Impact() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Our Impact</h2>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <figure className="shadow-card p-5 flex flex-col items-center">
          <img src="/images/doctor-caring-for-child.jpg" alt="Dr. Jenny providing a wellness check for a child" className="rounded-2xl w-full h-64 object-cover mb-4" />
          <figcaption className="text-lg text-green-700 font-semibold mb-2">Healthcare: Dr. Jenny's Story</figcaption>
          <p className="text-gray-700">Dr. Jenny, our volunteer pediatrician, has provided over 200 wellness checks and vaccinations this year, ensuring every child receives the care they deserve. Her dedication is a cornerstone of our health program.</p>
        </figure>
        <figure className="shadow-card p-5 flex flex-col items-center">
          <img src="/images/children-smiling.jpg" alt="Children smiling outdoors during playtime" className="rounded-2xl w-full h-64 object-cover mb-4" />
          <figcaption className="text-lg text-green-700 font-semibold mb-2">Joy & Resilience</figcaption>
          <p className="text-gray-700">Our weekend recreation program, led by volunteers, brings smiles and builds confidence. Over 150 children participated in sports, arts, and outdoor play this year.</p>
        </figure>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <figure className="shadow-card p-5 flex flex-col items-center">
          <img src="/images/caregiver-with-children.jpg" alt="Caregiver reading with children" className="rounded-2xl w-full h-64 object-cover mb-4" />
          <figcaption className="text-lg text-green-700 font-semibold mb-2">Mentorship & Literacy</figcaption>
          <p className="text-gray-700">Our caregivers spend daily time reading and mentoring, helping children catch up in school and build trust. Literacy rates have improved by 30% since last year.</p>
        </figure>
        <figure className="shadow-card p-5 flex flex-col items-center">
          <img src="/images/volunteers-teaching.jpg" alt="Volunteers teaching in classroom" className="rounded-2xl w-full h-64 object-cover mb-4" />
          <figcaption className="text-lg text-green-700 font-semibold mb-2">Education & Tutoring</figcaption>
          <p className="text-gray-700">Volunteer tutors provide after-school help in math, reading, and ESL. 95% of our children remain in school, thanks to these efforts and donated supplies.</p>
        </figure>
      </div>

      <div className="shadow-card p-5 text-center mb-8">
        <h3 className="text-xl font-semibold mb-2">Nutrition & Meals</h3>
        <img src="/images/classroom-activity.jpg" alt="Children enjoying a healthy meal together" className="rounded-2xl w-full h-64 object-cover mb-4" />
        <p className="text-gray-700">We served over 12,000 nutritious meals this year, thanks to our kitchen volunteers and food sponsors. Every meal helps a child grow strong and healthy.</p>
      </div>

      <div className="shadow-card p-5 text-center">
        <h3 className="text-xl font-semibold mb-2">Help Us Grow</h3>
        <p className="text-gray-700 mb-4">Orphans Hope is a registered non-profit. Your donations and sponsorships directly fund programs, meals, and healthcare. Join us in making a lasting impact—every gift matters.</p>
        <a href="/donate" className="btn-green inline-block">Donate or Sponsor Today</a>
      </div>
    </div>
  );
}
