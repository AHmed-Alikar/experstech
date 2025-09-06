'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, X } from 'lucide-react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  calLink: string; // e.g. "yourname/consultation-30min"
  theme?: 'light' | 'dark';
};

export default function CalScheduler({ isOpen, onClose, calLink, theme = 'dark' }: Props) {
  const iframeSrc = `https://cal.com/${calLink}?embed=true&theme=${theme}&layout=month_view`;
  const [loaded, setLoaded] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[96vw] sm:max-w-5xl bg-[#0B0D12] text-white rounded-2xl ring-1 ring-white/10 shadow-2xl max-h:[92vh] flex flex-col"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF8C00] to-[#FF6B35] flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Book Your Appointment</div>
                  <div className="text-xs text-white/60">Powered by Cal.com</div>
                </div>
              </div>
              <button onClick={onClose} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-hidden relative">
              {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#0B0D12]">
                  <div className="flex items-center gap-3 text-white/80">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-[#FF8C00] rounded-full animate-spin" />
                    <span className="text-sm">Loading scheduler…</span>
                  </div>
                </div>
              )}
              <iframe
                title="Cal Scheduler"
                src={iframeSrc}
                className="w-full h-full"
                style={{ minHeight: 620, border: '0' }}
                onLoad={() => setLoaded(true)}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


