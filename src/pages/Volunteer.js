import React from 'react';

export default function Volunteer() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Volunteer With Us</h2>
      
      <div className="mb-8">
        <img src="/images/volunteers-teaching.jpg" alt="Volunteers teaching and mentoring children" className="rounded-2xl w-full h-64 object-cover mb-6" />
        <p className="text-lg text-gray-700 mb-4">
          Volunteers are the heart of Orphans Hope. Whether you have a few hours a week or can commit to regular sessions, your time and skills make a profound difference in the lives of children who need positive role models and caring mentors.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">Volunteer Opportunities</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="shadow-card p-5">
            <h4 className="font-semibold text-lg mb-2 text-green-700">Academic Tutoring</h4>
            <p className="text-gray-700 mb-2">Help children with homework, reading, math, science, or ESL. Tutors typically commit to 2-4 hours per week during after-school hours.</p>
            <p className="text-sm text-gray-600">Requirements: High school diploma or higher, patience, and a love for teaching.</p>
          </div>

          <div className="shadow-card p-5">
            <h4 className="font-semibold text-lg mb-2 text-green-700">Recreation & Sports</h4>
            <p className="text-gray-700 mb-2">Lead or assist with weekend sports, arts and crafts, music, or outdoor activities. Help children build confidence and social skills through play.</p>
            <p className="text-sm text-gray-600">Requirements: Experience with children, First Aid/CPR certification preferred.</p>
          </div>

          <div className="shadow-card p-5">
            <h4 className="font-semibold text-lg mb-2 text-green-700">Mentorship Programs</h4>
            <p className="text-gray-700 mb-2">Become a consistent, caring presence in a child's life. Mentors provide emotional support, guidance, and encouragement on a weekly basis.</p>
            <p className="text-sm text-gray-600">Requirements: Background check, mentor training completion, minimum 6-month commitment.</p>
          </div>

          <div className="shadow-card p-5">
            <h4 className="font-semibold text-lg mb-2 text-green-700">Healthcare Professionals</h4>
            <p className="text-gray-700 mb-2">Doctors, nurses, dentists, and counselors can volunteer to provide wellness checks, health education, and mental health support.</p>
            <p className="text-sm text-gray-600">Requirements: Valid Canadian professional license, malpractice insurance, background check.</p>
          </div>

          <div className="shadow-card p-5">
            <h4 className="font-semibold text-lg mb-2 text-green-700">Administrative Support</h4>
            <p className="text-gray-700 mb-2">Help with fundraising events, grant writing, social media, marketing, or office tasks. Remote and on-site opportunities available.</p>
            <p className="text-sm text-gray-600">Requirements: Relevant skills or experience, reliable communication.</p>
          </div>

          <div className="shadow-card p-5">
            <h4 className="font-semibold text-lg mb-2 text-green-700">Special Events</h4>
            <p className="text-gray-700 mb-2">Join us for seasonal celebrations, community fundraisers, holiday events, and awareness campaigns throughout the year.</p>
            <p className="text-sm text-gray-600">Requirements: Flexible availability, team-oriented mindset.</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">Volunteer Requirements</h3>
        <div className="shadow-card p-6">
          <p className="text-gray-700 mb-4">To ensure the safety and wellbeing of the children in our care, all volunteers must complete the following:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Criminal Background Check:</strong> Valid Police Information Check (PIC) including vulnerable sector screening</li>
            <li><strong>Volunteer Orientation:</strong> Attend a mandatory orientation session covering policies, child protection, and trauma-informed care</li>
            <li><strong>References:</strong> Provide at least two professional or personal references</li>
            <li><strong>Age Requirement:</strong> Volunteers must be 18 years or older (high school students may volunteer with parental consent for select roles)</li>
            <li><strong>Commitment:</strong> Most roles require a minimum 3-6 month commitment to ensure consistency for children</li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">Why Volunteer?</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="shadow-card p-5 text-center">
            <h4 className="font-semibold text-lg mb-2">Make a Real Impact</h4>
            <p className="text-gray-700">Your time directly improves the lives of children who need caring mentors and role models.</p>
          </div>
          <div className="shadow-card p-5 text-center">
            <h4 className="font-semibold text-lg mb-2">Build Skills</h4>
            <p className="text-gray-700">Gain experience in child development, education, social work, and community engagement.</p>
          </div>
          <div className="shadow-card p-5 text-center">
            <h4 className="font-semibold text-lg mb-2">Join a Community</h4>
            <p className="text-gray-700">Connect with like-minded individuals who share your passion for helping children thrive.</p>
          </div>
        </div>
      </div>

      <div className="shadow-card p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">Ready to Get Started?</h3>
        <p className="text-gray-700 mb-4">Contact us today to learn more about volunteer opportunities and begin your application process.</p>
        <a href="mailto:volunteer@orphanshope.com" className="btn-green inline-block">Express Interest via Email</a>
      </div>
    </div>
  );
}
