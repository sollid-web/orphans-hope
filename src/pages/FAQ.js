import React from 'react';

export default function FAQ() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Frequently Asked Questions</h2>
      <p className="text-gray-700 mb-6">Find answers to common questions about Orphans Hope, our programs, and how you can get involved.</p>
      
      <div className="space-y-4">
        <details className="border rounded-2xl p-5 shadow-md">
          <summary className="font-semibold text-lg cursor-pointer">Are you registered as a Canadian charity?</summary>
          <p className="mt-3 text-gray-700">Yes, Orphans Hope is a registered charitable organization with the Canada Revenue Agency (CRA). All Canadian donations are eligible for tax receipts. Our charitable registration number is available in your donation confirmation email and on our website footer.</p>
        </details>

        <details className="border rounded-2xl p-5 shadow-md">
          <summary className="font-semibold text-lg cursor-pointer">How are children referred to Orphans Hope?</summary>
          <p className="mt-3 text-gray-700">Children are referred to our care through provincial child welfare agencies, social services, family court systems, and vetted community partners. All placements follow strict Canadian child protection standards and legal procedures. We work closely with social workers to ensure each child's placement is in their best interest.</p>
        </details>

        <details className="border rounded-2xl p-5 shadow-md">
          <summary className="font-semibold text-lg cursor-pointer">How can I donate to Orphans Hope?</summary>
          <p className="mt-3 text-gray-700">We accept donations through several methods: Canadian bank transfers (preferred for Canadian donors), international cryptocurrency (USDT via TRC20 or ERC20), corporate matching gifts, and in-kind donations of goods and services. Visit our Donate page for full details and banking information.</p>
        </details>

        <details className="border rounded-2xl p-5 shadow-md">
          <summary className="font-semibold text-lg cursor-pointer">Will I receive a tax receipt for my donation?</summary>
          <p className="mt-3 text-gray-700">Yes, all donations of $20 or more made through Canadian bank transfers will automatically receive an official tax receipt for Canadian income tax purposes. Receipts are issued at year-end for annual giving or immediately upon request. Cryptocurrency donations may have different tax treatment—consult your tax advisor.</p>
        </details>

        <details className="border rounded-2xl p-5 shadow-md">
          <summary className="font-semibold text-lg cursor-pointer">How do I become a volunteer?</summary>
          <p className="mt-3 text-gray-700">To volunteer, complete our online application form, provide two references, and undergo a criminal background check including vulnerable sector screening. All volunteers must attend a mandatory orientation session. The entire process typically takes 2-4 weeks. Visit our Volunteer page for more information and to apply.</p>
        </details>

        <details className="border rounded-2xl p-5 shadow-md">
          <summary className="font-semibold text-lg cursor-pointer">Can I sponsor a specific child?</summary>
          <p className="mt-3 text-gray-700">Yes, our child sponsorship program allows you to support a specific child's education, healthcare, and nutrition with a monthly contribution. Sponsors receive quarterly updates, photos, and letters (privacy permitting). Sponsorship levels start at $50/month. Contact us to learn more about becoming a sponsor.</p>
        </details>

        <details className="border rounded-2xl p-5 shadow-md">
          <summary className="font-semibold text-lg cursor-pointer">Where is Orphans Hope located?</summary>
          <p className="mt-3 text-gray-700">Our main residential facility is located in Edmonton, Alberta, Canada. We also partner with community organizations across Canada to extend our reach and services. For privacy and security reasons, we do not publicly disclose the exact address of our residential homes.</p>
        </details>

        <details className="border rounded-2xl p-5 shadow-md">
          <summary className="font-semibold text-lg cursor-pointer">How many children does Orphans Hope serve?</summary>
          <p className="mt-3 text-gray-700">We currently provide residential care for 30-40 children and support an additional 100+ children through community programs, tutoring, and healthcare services. Our capacity is growing as we expand facilities and programs with the support of generous donors.</p>
        </details>

        <details className="border rounded-2xl p-5 shadow-md">
          <summary className="font-semibold text-lg cursor-pointer">What age range do you serve?</summary>
          <p className="mt-3 text-gray-700">We serve children and youth from infancy through age 18. Our programs are tailored to each developmental stage, from early childhood education to life skills training for older youth preparing for independence. We also provide transitional support for young adults aging out of care.</p>
        </details>

        <details className="border rounded-2xl p-5 shadow-md">
          <summary className="font-semibold text-lg cursor-pointer">How does Orphans Hope ensure child safety?</summary>
          <p className="mt-3 text-gray-700">Child safety is our top priority. All staff and volunteers undergo criminal background checks, our facilities meet or exceed provincial safety standards, we maintain 24/7 supervision, follow strict child protection protocols, and conduct regular safety audits. We are fully compliant with Canadian child welfare regulations.</p>
        </details>

        <details className="border rounded-2xl p-5 shadow-md">
          <summary className="font-semibold text-lg cursor-pointer">What happens to children when they turn 18?</summary>
          <p className="mt-3 text-gray-700">We provide transitional support for youth aging out of care, including life skills training, job readiness programs, educational support, housing assistance, and ongoing mentorship. Our goal is to ensure every young adult leaves our care with the tools and confidence to live independently.</p>
        </details>

        <details className="border rounded-2xl p-5 shadow-md">
          <summary className="font-semibold text-lg cursor-pointer">How can I visit or tour your facility?</summary>
          <p className="mt-3 text-gray-700">For privacy and security reasons, we do not offer public tours of our residential facilities. However, we welcome prospective volunteers, donors, and partners to attend our orientation sessions and community events. Contact us to schedule a meeting at our administrative office.</p>
        </details>

        <details className="border rounded-2xl p-5 shadow-md">
          <summary className="font-semibold text-lg cursor-pointer">How is my donation used?</summary>
          <p className="mt-3 text-gray-700">Your donation directly funds programs and services for children, including housing, meals, education, healthcare, counseling, and recreation. Over 85% of donations go directly to program costs. We maintain full transparency with annual reports and financial statements available upon request.</p>
        </details>

        <details className="border rounded-2xl p-5 shadow-md">
          <summary className="font-semibold text-lg cursor-pointer">Can I donate goods instead of money?</summary>
          <p className="mt-3 text-gray-700">Yes, we accept in-kind donations of new or gently used items such as school supplies, clothing, sports equipment, books, and hygiene products. Please contact us before dropping off donations to ensure we can accept and use the items. Some items may require new/unused condition for safety reasons.</p>
        </details>

        <details className="border rounded-2xl p-5 shadow-md">
          <summary className="font-semibold text-lg cursor-pointer">Do you accept international volunteers or donations?</summary>
          <p className="mt-3 text-gray-700">We accept international donations via cryptocurrency (USDT). International volunteers must have valid Canadian work authorization and meet all volunteer requirements including background checks. Remote volunteer opportunities (social media, grant writing, etc.) may be available for international supporters.</p>
        </details>
      </div>

      <div className="shadow-card p-6 text-center mt-8">
        <h3 className="text-xl font-semibold mb-2">Still Have Questions?</h3>
        <p className="text-gray-700 mb-4">We're here to help! Contact us and we'll get back to you within 1-2 business days.</p>
        <a href="/contact" className="btn-green inline-block">Contact Us</a>
      </div>
    </div>
  );
}
