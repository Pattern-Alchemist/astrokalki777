'use client';

import { useMemo } from 'react';
import QRCode from 'qrcode';
import { useEffect, useState } from 'react';

export function UpiOptions({ amount }: { amount: number }) {
  const [qr, setQr] = useState<string | null>(null);
  const upiLink = useMemo(
    () => `upi://pay?pa=astrokalki@upi&pn=AstroKalki&am=${amount / 100}&cu=INR`,
    [amount]
  );

  useEffect(() => {
    QRCode.toDataURL(upiLink).then(setQr).catch(console.error);
  }, [upiLink]);

  return (
    <div className="rounded-lg border border-dashed border-emerald-300 p-4">
      <p className="text-sm text-slate-600">Scan to pay via any UPI app:</p>
      {qr ? <img src={qr} alt="UPI QR" className="mt-3 h-32 w-32" /> : null}
      <a href={upiLink} className="mt-3 block text-sm font-semibold text-emerald-600">
        {upiLink}
      </a>
    </div>
  );
}
