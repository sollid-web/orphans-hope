import React from 'react';

export default function GetInvolved() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-red-700 mb-6">Get Involved</h2>
      <p className="text-lg text-gray-700 mb-8">There are many ways to make a difference at Orphans Hope. Whether you give your time, resources, or voice, every contribution helps us build brighter futures for children in need.</p>
      
      <div className="space-y-8">
        <section className="shadow-card p-6">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-semibold text-red-700">Volunteer Your Time</h3>
          </div>
          <img src="/images/volunteers-teaching.jpg" alt="Volunteers mentoring and teaching children" className="rounded-xl w-full h-64 object-cover mb-4" />
          <p className="text-gray-700 mb-4">Join our community of dedicated volunteers who provide tutoring, mentorship, recreation leadership, healthcare services, and administrative support. Volunteers are the backbone of our organization.</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Academic tutoring and homework help (2-4 hours/week)</li>
            <li>Weekend sports, arts, and recreation programs</li>
            <li>One-on-one mentorship (minimum 6-month commitment)</li>
            <li>Professional services (healthcare, counseling, legal, IT)</li>
            <li>Event planning and fundraising support</li>
          </ul>
          <a href="/volunteer" className="btn-cta inline-flex justify-center w-full sm:w-auto">Learn About Volunteering</a>
        </section>

        <section className="shadow-card p-6">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-semibold text-red-700">Sponsor a Child</h3>
          </div>
          <img src="/images/children-smiling.jpg" alt="Happy children benefiting from sponsorship programs" className="rounded-xl w-full h-64 object-cover mb-4" />
          <p className="text-gray-700 mb-4">Child sponsorship creates a direct, lasting impact on a child's life. Your monthly contribution provides a child with education, healthcare, nutrition, and emotional support, helping them reach their full potential.</p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-lg mb-2 text-red-700">Bronze Sponsor</h4>
              <p className="text-2xl font-bold mb-2">$50/month</p>
              <p className="text-gray-700 text-sm">Covers nutritious meals and basic school supplies for one child.</p>
            </div>
            <div className="border rounded-lg p-4 border-red-700">
              <h4 className="font-semibold text-lg mb-2 text-red-700">Silver Sponsor</h4>
              <p className="text-2xl font-bold mb-2">$100/month</p>
              <p className="text-gray-700 text-sm">Includes meals, school supplies, tutoring support, and wellness checkups.</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-lg mb-2 text-red-700">Gold Sponsor</h4>
              <p className="text-2xl font-bold mb-2">$200/month</p>
              <p className="text-gray-700 text-sm">Full support including housing, education, healthcare, counseling, and recreation.</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">Sponsors receive quarterly updates, photos, and letters from their sponsored child (privacy permitting).</p>
          <a href="/donate" className="btn-cta inline-flex justify-center w-full sm:w-auto">Become a Sponsor</a>
        </section>

        <section className="shadow-card p-6">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-semibold text-red-700">Host a Fundraiser</h3>
          </div>
          <img src="/images/caregiver-with-children.jpg" alt="Community gathering and fundraising event" className="rounded-xl w-full h-64 object-cover mb-4" />
          <p className="text-gray-700 mb-4">Bring your community together to support Orphans Hope! Host a fundraising event at your school, workplace, place of worship, or neighborhood. We'll provide you with resources, materials, and support to make your event a success.</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Bake sales, car washes, or yard sales</li>
            <li>Charity runs, walks, or sports tournaments</li>
            <li>Benefit concerts, art shows, or talent shows</li>
            <li>Corporate matching gift campaigns</li>
            <li>Birthday or wedding donation drives</li>
          </ul>
          <p className="text-sm text-gray-600 mb-4">Contact us to request fundraising materials, donation forms, and promotional support.</p>
          <a href="mailto:fundraising@orphanshope.com" className="btn-cta inline-flex justify-center w-full sm:w-auto">Start a Fundraiser</a>
        </section>

        <section className="shadow-card p-6">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-semibold text-red-700">Corporate Partnerships</h3>
          </div>
          <p className="text-gray-700 mb-4">Businesses can partner with Orphans Hope through employee giving programs, matching gift campaigns, cause marketing, in-kind donations, or pro-bono services. Corporate partnerships amplify impact and engage your team in meaningful social responsibility.</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Employee volunteer programs and team-building events</li>
            <li>Payroll deduction and matching gift programs</li>
            <li>Sponsorship of specific programs or events</li>
            <li>In-kind donations of goods or services</li>
            <li>Pro-bono professional services (legal, accounting, marketing)</li>
          </ul>
          <a href="mailto:partnerships@orphanshope.com" className="btn-cta inline-flex justify-center w-full sm:w-auto">Explore Corporate Partnerships</a>
        </section>

        <section className="shadow-card p-6">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-semibold text-red-700">Donate Goods & Services</h3>
          </div>
          <p className="text-gray-700 mb-4">In-kind donations help us stretch every dollar further. We accept donations of new or gently used items that directly benefit the children in our care.</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="font-semibold mb-2">Most Needed Items:</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>School supplies (backpacks, notebooks, pencils)</li>
                <li>New clothing and winter gear (coats, boots, gloves)</li>
                <li>Sports equipment and recreational supplies</li>
                <li>Books and educational games</li>
                <li>Hygiene products and toiletries</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Services We Need:</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Transportation and logistics support</li>
                <li>IT support and technology donations</li>
                <li>Legal and accounting services</li>
                <li>Marketing and graphic design</li>
                <li>Building maintenance and repairs</li>
              </ul>
            </div>
          </div>
          <a href="mailto:donations@orphanshope.com" className="btn-cta inline-flex justify-center w-full sm:w-auto">Contact Us About Donations</a>
        </section>

        <section className="shadow-card p-6">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-semibold text-red-700">Spread the Word</h3>
          </div>
          <p className="text-gray-700 mb-4">Raising awareness is one of the simplest yet most powerful ways to support Orphans Hope. Share our mission with your network and help us reach more supporters and partners.</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Follow us on social media and share our posts</li>
            <li>Tell friends, family, and colleagues about our work</li>
            <li>Write a review or testimonial about your experience</li>
            <li>Feature us in your church bulletin, newsletter, or blog</li>
            <li>Invite us to speak at your community event or organization</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
