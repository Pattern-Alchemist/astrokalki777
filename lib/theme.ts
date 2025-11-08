'use client';

import { useEffect } from 'react';

export function useApplyBranding(color: string) {
  useEffect(() => {
    document.documentElement.style.setProperty('--brand-color', color);
  }, [color]);
}
