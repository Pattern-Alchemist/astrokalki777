'use client';

import { useEffect } from 'react';

export function PayPalButton({ amount, currency }: { amount: number; currency: string }) {
  useEffect(() => {
    // Stubbed PayPal integration that logs the intent in dev environments.
    console.info('PayPalButton mounted', { amount, currency });
  }, [amount, currency]);

  return (
    <button className="mt-4 w-full rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white">
      Pay {currency} {amount}
    </button>
  );
}
