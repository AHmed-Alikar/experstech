'use client';

import { useEffect, useState } from 'react';
import BookingScheduler from './BookingScheduler';
import CalScheduler from './CalScheduler';

export default function BookingPortal() {
  const [isOpen, setIsOpen] = useState(false);
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK;

  useEffect(() => {
    const openHandler = () => setIsOpen(true);
    const closeHandler = () => setIsOpen(false);

    window.addEventListener('open-booking', openHandler as EventListener);
    window.addEventListener('close-booking', closeHandler as EventListener);

    return () => {
      window.removeEventListener('open-booking', openHandler as EventListener);
      window.removeEventListener('close-booking', closeHandler as EventListener);
    };
  }, []);

  if (calLink) {
    return <CalScheduler isOpen={isOpen} onClose={() => setIsOpen(false)} calLink={calLink} theme="dark" />;
  }
  return <BookingScheduler isOpen={isOpen} onClose={() => setIsOpen(false)} />;
}


