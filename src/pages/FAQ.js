import React from 'react';

export default function FAQ() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-green-700 mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <details className="border rounded-2xl p-4 shadow-md">
          <summary className="font-semibold">Are you registered as a Canadian charity?</summary>
          <p>We are in the process of CRA registration. Donations help fund programs; receipts will be available once registration is complete.</p>
        </details>
        <details className="border rounded-2xl p-4 shadow-md">
          <summary className="font-semibold">How are children referred to Orphans Hope?</summary>
          <p>Children are referred through social services, community partners, and vetted guardians, following provincial standards.</p>
        </details>
        <details className="border rounded-2xl p-4 shadow-md">
          <summary className="font-semibold">How can I donate?</summary>
          <p>Use our Donate page for Canadian bank transfers or international USDT (TRC20/ERC20). Corporate sponsorships are welcome.</p>
        </details>
      </div>
    </div>
  );
}
