import React, { useState } from 'react';
import { copyToClipboard } from '../utils/clipboard';

export default function Donate() {
  const [copied, setCopied] = useState(false);

  const trc20 = process.env.REACT_APP_TRC20_WALLET || 'Txxxxxxxxxxxxxx';
  const erc20 = process.env.REACT_APP_ERC20_WALLET || '0xxxxxxxxxxxxxx';

  const copyWallet = (address) => {
    copyToClipboard(address, {
      onSuccess: () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-red-700 mb-6">Support Orphans Hope</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-2xl p-4 shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-red-700">For Canadian Donors</h3>
          <p>Bank Name: Canadian Western Bank</p>
          <p>Account Name: Orphans Hope</p>
          <p>Account Number: 77639945</p>
          <p className="text-sm text-gray-600 mt-2">Tax receipts are available for Canadian donations. Registered charity number: {process.env.REACT_APP_CHARITY_NUMBER || 'TBD'}.</p>
        </div>

        <div className="border rounded-2xl p-4 shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-red-600">For International Donors (USDT)</h3>
          <p>TRC20 Wallet: <span className="font-mono">{trc20}</span></p>
          <p>ERC20 Wallet: <span className="font-mono">{erc20}</span></p>
          <p className="text-xs text-gray-500 mt-2">Always verify wallet addresses from our official channels before sending crypto.</p>
          <button
            onClick={() => copyWallet(trc20)}
            className="btn-cta mt-4 justify-center"
            aria-live="polite"
          >
            {copied ? 'Copied!' : 'Copy Wallet Address'}
          </button>
        </div>
      </div>
    </div>
  );
}
