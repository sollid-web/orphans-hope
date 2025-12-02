import React from 'react';

export default function About() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-green-700 mb-6">About Orphans Hope</h2>
      
      <div className="mb-8">
        <img src="/images/team-photo.jpg" alt="Orphans Hope team members and children" className="rounded-2xl w-full h-96 object-cover mb-6" />
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">Our Story</h3>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Founded in Canada, Orphans Hope is a registered non-profit organization dedicated to empowering orphaned and vulnerable children across Canada and internationally. We believe every child deserves a safe home, quality education, comprehensive healthcare, and the emotional support needed to thrive.
        </p>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Our journey began with a simple mission: to provide hope and a brighter future for children who have experienced loss and hardship. Today, we operate residential care facilities in Edmonton, Alberta, and partner with communities across Canada to extend our reach.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <figure className="flex flex-col items-center">
          <img src="/images/caregiver-with-children.jpg" alt="Caregiver providing one-on-one mentorship and reading support" className="rounded-2xl w-full h-56 object-cover mb-4" />
          <figcaption className="text-green-700 font-semibold">Personalized mentorship and literacy development</figcaption>
        </figure>
        <figure className="flex flex-col items-center">
          <img src="/images/children-smiling.jpg" alt="Children enjoying outdoor recreational activities" className="rounded-2xl w-full h-56 object-cover mb-4" />
          <figcaption className="text-green-700 font-semibold">Building confidence through play and recreation</figcaption>
        </figure>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">Our Mission & Values</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="shadow-card p-5">
            <h4 className="font-semibold text-lg mb-2 text-green-700">Compassion</h4>
            <p className="text-gray-700">We treat every child with dignity, respect, and unconditional love, creating a family-like environment.</p>
          </div>
          <div className="shadow-card p-5">
            <h4 className="font-semibold text-lg mb-2 text-green-700">Transparency</h4>
            <p className="text-gray-700">We maintain open communication with donors, partners, and the community, ensuring accountability in all we do.</p>
          </div>
          <div className="shadow-card p-5">
            <h4 className="font-semibold text-lg mb-2 text-green-700">Empowerment</h4>
            <p className="text-gray-700">We equip children with education, life skills, and emotional support to help them become independent, confident adults.</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">Our Team</h3>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Orphans Hope is powered by a dedicated team of professional caregivers, social workers, educators, healthcare providers, and volunteers. Our staff members are trained in trauma-informed care and child development, ensuring every child receives the specialized support they need.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="shadow-card p-5">
            <h4 className="font-semibold text-lg mb-2">Dr. Jenny</h4>
            <p className="text-gray-700">Volunteer Pediatrician - Dr. Jenny has been providing wellness checks, vaccinations, and compassionate care to our children for over three years. Her medical expertise ensures every child stays healthy.</p>
          </div>
          <div className="shadow-card p-5">
            <h4 className="font-semibold text-lg mb-2">Licensed Social Workers</h4>
            <p className="text-gray-700">Our team of trauma-informed counselors provides mental health support, helping children process their experiences and build resilience.</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">Governance & Compliance</h3>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Orphans Hope operates in full compliance with Canadian provincial care standards and child welfare regulations. We maintain an independent board of directors, undergo routine audits, and are committed to the highest standards of child protection, privacy, and safety.
        </p>
        <p className="mb-4 text-gray-700 leading-relaxed">
          We are registered with the Canada Revenue Agency (CRA) as a charitable organization, and all Canadian donations are eligible for tax receipts.
        </p>
      </div>

      <div className="shadow-card p-5 text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">Join Our Mission</h3>
        <p className="text-gray-700 mb-4">Your donation or sponsorship directly funds programs, meals, and healthcare for children in need. Join us in making a lasting impact—every gift matters.</p>
        <a href="/donate" className="btn-green inline-block">Donate or Sponsor Today</a>
      </div>
    </div>
  );
}
