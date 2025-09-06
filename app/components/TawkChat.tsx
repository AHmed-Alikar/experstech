'use client';

import { useEffect } from 'react';

/**
 * Tawk.to Live Chat Loader
 * Requires env vars:
 * - NEXT_PUBLIC_TAWK_PROPERTY_ID
 * - NEXT_PUBLIC_TAWK_WIDGET_ID (optional; default 'default')
 */
export default function TawkChat() {
  useEffect(() => {
    const propertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID || '68bc551067c586192c668ceb';
    const widgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID || '1j4fqoiml';

    if (!propertyId) {
      // Do nothing if not configured
      return;
    }

    if (document.getElementById('tawkto-script')) return;

    const s1 = document.createElement('script');
    s1.id = 'tawkto-script';
    s1.async = true;
    s1.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');

    const s0 = document.getElementsByTagName('script')[0];
    s0.parentNode?.insertBefore(s1, s0);

    return () => {
      const existing = document.getElementById('tawkto-script');
      if (existing?.parentNode) existing.parentNode.removeChild(existing);
      // Remove widget iframe if present
      const iframes = Array.from(document.querySelectorAll('iframe'));
      iframes.forEach((iframe) => {
        if (iframe.src.includes('tawk.to') || iframe.dataset?.app === 'tawk.to') {
          iframe.remove();
        }
      });
    };
  }, []);

  return null;
}


