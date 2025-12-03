import React from 'react';

export default function Programs() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-red-700 mb-6">Our Programs</h2>
      <p className="text-gray-700 mb-8 text-lg">At Orphans Hope, we provide comprehensive, holistic care that addresses every aspect of a child's development. Our programs are designed to help children heal, grow, and thrive.</p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <section className="shadow-card p-6">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-semibold text-red-700">Safe Housing</h3>
          </div>
          <img src="/images/outdoor-play.jpg" alt="Children playing in safe supervised outdoor area" className="rounded-xl w-full h-48 object-cover mb-4" />
          <p className="text-gray-700 mb-3">We provide warm, secure, and nurturing residential facilities where children live in a family-like environment. Our homes are supervised 24/7 by trained caregivers who ensure safety, comfort, and emotional support.</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Clean, comfortable bedrooms with personal space</li>
            <li>Safe indoor and outdoor play areas</li>
            <li>Regular maintenance and security protocols</li>
            <li>Home-cooked nutritious meals three times daily</li>
          </ul>
        </section>

        <section className="shadow-card p-6">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-semibold text-red-700">Education & Tutoring</h3>
          </div>
          <img src="/images/volunteers-teaching.jpg" alt="Volunteer educators providing classroom tutoring" className="rounded-xl w-full h-48 object-cover mb-4" />
          <p className="text-gray-700 mb-3">Education is the foundation of a bright future. We ensure every child has access to quality schooling, supplies, and personalized tutoring support to help them succeed academically.</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Enrollment in local public schools</li>
            <li>After-school homework help and tutoring</li>
            <li>School supplies, uniforms, and backpacks</li>
            <li>ESL support for newcomer children</li>
            <li>Special education resources when needed</li>
          </ul>
        </section>

        <section className="shadow-card p-6">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-semibold text-red-700">Healthcare & Wellness</h3>
          </div>
          <img src="/images/doctor-caring-for-child.jpg" alt="Dr. Jenny conducting a pediatric wellness check" className="rounded-xl w-full h-48 object-cover mb-4" />
          <p className="text-gray-700 mb-3">Through partnerships with local clinics and volunteer healthcare professionals like Dr. Jenny, we provide comprehensive medical care to keep every child healthy and thriving.</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Regular wellness checkups and vaccinations</li>
            <li>Dental and vision care</li>
            <li>Emergency medical support</li>
            <li>Mental health counseling and therapy</li>
            <li>Health education and hygiene training</li>
          </ul>
        </section>

        <section className="shadow-card p-6">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-semibold text-red-700">Nutrition & Meals</h3>
          </div>
          <img src="/images/classroom-activity.jpg" alt="Children participating in nutrition education activity" className="rounded-xl w-full h-48 object-cover mb-4" />
          <p className="text-gray-700 mb-3">Proper nutrition is essential for growth and development. We serve balanced, home-cooked meals daily and provide nutrition education to promote lifelong healthy habits.</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Three nutritious meals and snacks daily</li>
            <li>Culturally appropriate and diverse menu options</li>
            <li>Accommodation for dietary restrictions and allergies</li>
            <li>Nutrition education and cooking skills workshops</li>
            <li>Community garden participation</li>
          </ul>
        </section>

        <section className="shadow-card p-6">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-semibold text-red-700">Counseling & Mental Health</h3>
          </div>
          <img src="/images/caregiver-with-children.jpg" alt="Caregiver providing emotional support and mentorship" className="rounded-xl w-full h-48 object-cover mb-4" />
          <p className="text-gray-700 mb-3">Many children in our care have experienced trauma and loss. Our trauma-informed counseling services help children process their emotions, build resilience, and develop healthy coping strategies.</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Individual and group therapy sessions</li>
            <li>Trauma-informed care by licensed social workers</li>
            <li>Grief and loss support</li>
            <li>Emotional regulation and coping skills</li>
            <li>Family reunification support when appropriate</li>
          </ul>
        </section>

        <section className="shadow-card p-6">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-semibold text-red-700">Recreation & Life Skills</h3>
          </div>
          <img src="/images/children-smiling.jpg" alt="Children enjoying outdoor sports and recreation" className="rounded-xl w-full h-48 object-cover mb-4" />
          <p className="text-gray-700 mb-3">Play and recreation are vital for building confidence, social skills, and physical health. We offer structured programs and activities that help children discover their talents and passions.</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Weekend sports (soccer, basketball, swimming)</li>
            <li>Arts and crafts workshops</li>
            <li>Music and cultural programs</li>
            <li>Life skills training (budgeting, cooking, job readiness)</li>
            <li>Leadership development and mentorship</li>
          </ul>
        </section>
      </div>

      <div className="shadow-card p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">Support Our Programs</h3>
        <p className="text-gray-700 mb-4">Your donations directly fund these life-changing programs. Every contribution helps us provide better care, education, and opportunities for children in need.</p>
        <a href="/donate" className="btn-cta inline-flex justify-center w-full sm:w-auto">Donate Today</a>
      </div>
    </div>
  );
}
