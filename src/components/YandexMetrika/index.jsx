'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function YandexMetrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    if (window.ym !== 'undefined') {
      window.ym('99309525', 'hit', url);
    }
  }, [pathname, searchParams]);

  return null;
}
