'use client';

import { useEffect, useMemo, useState } from 'react';

type WhatsAppButtonProps = {
  phoneNumber?: string; // E.164 without '+' e.g. 252610848453
  message?: string;
  position?: 'bottom-right' | 'bottom-left';
  bottomOffsetClass?: string; // e.g. 'bottom-24'
  showHintAfterMs?: number; // when to show bubble
  hintText?: string;
  variant?: 'floating' | 'inline';
};

export default function WhatsAppButton({
  phoneNumber,
  message = 'Hi! I would like to know more about your services.',
  position = 'bottom-right',
  bottomOffsetClass = 'bottom-6',
  showHintAfterMs = 2000,
  hintText = 'Fadlan, waxaan jeclaan lahaa inaan kula xiriiro',
  variant = 'floating',
}: WhatsAppButtonProps) {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowHint(true), showHintAfterMs);
    const hide = window.setTimeout(() => setShowHint(false), showHintAfterMs + 6000);
    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(hide);
    };
  }, [showHintAfterMs]);

  const number = phoneNumber || process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';
  const href = useMemo(() => {
    const encoded = encodeURIComponent(message);
    const digitsOnly = number.replace(/\D/g, '');
    // If a number exists, use wa.me direct chat; otherwise open generic WhatsApp composer
    return digitsOnly
      ? `https://wa.me/${digitsOnly}?text=${encoded}`
      : `https://api.whatsapp.com/send?text=${encoded}`;
  }, [number, message]);

  if (variant === 'inline') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] shadow-md transition-transform hover:scale-105"
      >
        {/* Pulse ring behind icon */}
        <span className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 text-white" fill="currentColor">
          <path d="M16.004 3C9.373 3 4 8.373 4 15.004c0 2.648.867 5.089 2.332 7.064L4 29l7.091-2.295A11.91 11.91 0 0 0 16.004 27C22.635 27 28 21.627 28 15.004 28 8.373 22.635 3 16.004 3zm6.797 17.158c-.287.811-1.415 1.488-1.99 1.57-.563.079-1.296.114-2.146-.131-.491-.147-1.117-.354-1.919-.707-3.357-1.442-5.53-4.795-5.707-5.026-.178-.231-1.367-1.817-1.367-3.469 0-1.652.873-2.45 1.183-2.783.31-.333.682-.418.909-.418.227 0 .455.002.653.012.21.01.49-.079.766.586.29.702.988 2.42 1.076 2.595.088.175.146.38.03.611-.114.231-.17.38-.34.582-.17.202-.36.453-.514.61-.17.17-.347.357-.149.693.198.336.873 1.338 1.88 2.171 1.292 1.07 2.378 1.415 2.73 1.57.352.155.565.133.776-.08.21-.213.896-1.055 1.139-1.42.243-.365.5-.302.838-.176.338.126 2.148 1.014 2.516 1.196.368.182.613.275.693.43.08.155.08.88-.207 1.691z"/>
        </svg>
        {showHint && (
          <div className="absolute left-14 top-1/2 -translate-y-1/2 bg-[#E7F8EA] text-[#0b3d1b] text-sm rounded-xl shadow-md px-3 py-2 whitespace-nowrap">
            {hintText}
          </div>
        )}
      </a>
    );
  }

  const sideClass = position === 'bottom-left' ? 'left-4 md:left-6' : 'right-4 md:right-6';
  const bubbleSideClass = position === 'bottom-left' ? 'left-[4.5rem]' : 'right-[4.5rem]';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed ${sideClass} ${bottomOffsetClass} z-[60]`}
    >
      <div className="relative group">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
        <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center transition-transform transform group-hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor">
            <path d="M16.004 3C9.373 3 4 8.373 4 15.004c0 2.648.867 5.089 2.332 7.064L4 29l7.091-2.295A11.91 11.91 0 0 0 16.004 27C22.635 27 28 21.627 28 15.004 28 8.373 22.635 3 16.004 3zm6.797 17.158c-.287.811-1.415 1.488-1.99 1.57-.563.079-1.296.114-2.146-.131-.491-.147-1.117-.354-1.919-.707-3.357-1.442-5.53-4.795-5.707-5.026-.178-.231-1.367-1.817-1.367-3.469 0-1.652.873-2.45 1.183-2.783.31-.333.682-.418.909-.418.227 0 .455.002.653.012.21.01.49-.079.766.586.29.702.988 2.42 1.076 2.595.088.175.146.38.03.611-.114.231-.17.38-.34.582-.17.202-.36.453-.514.61-.17.17-.347.357-.149.693.198.336.873 1.338 1.88 2.171 1.292 1.07 2.378 1.415 2.73 1.57.352.155.565.133.776-.08.21-.213.896-1.055 1.139-1.42.243-.365.5-.302.838-.176.338.126 2.148 1.014 2.516 1.196.368.182.613.275.693.43.08.155.08.88-.207 1.691z"/>
          </svg>
        </div>

        {showHint && (
          <div className={`absolute ${bubbleSideClass} top-1/2 -translate-y-1/2 bg-[#E7F8EA] text-[#0b3d1b] text-sm md:text-base rounded-xl shadow-md px-3 py-2 whitespace-nowrap animate-[fadeInUp_300ms_ease-out]`} style={{ boxShadow: '0 10px 25px -10px rgba(0,0,0,0.35)' }}>
            {hintText}
          </div>
        )}
      </div>
    </a>
  );
}


