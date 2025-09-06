'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react';

type TimeFormat = '12h' | '24h';

interface DayCell {
  date: Date;
  inMonth: boolean;
  isToday: boolean;
}

export default function BookingScheduler({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [current, setCurrent] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [format, setFormat] = useState<TimeFormat>('24h');
  const [user, setUser] = useState({ name: '', email: '' });

  const monthName = useMemo(() => current.toLocaleString('en-US', { month: 'long' }), [current]);

  const days: DayCell[] = useMemo(() => {
    const start = new Date(current.getFullYear(), current.getMonth(), 1);
    const end = new Date(current.getFullYear(), current.getMonth() + 1, 0);
    const startOffset = (start.getDay() + 7) % 7; // 0..6 Sun..Sat
    const gridStart = new Date(start);
    gridStart.setDate(start.getDate() - startOffset);
    const cells: DayCell[] = [];
    for (let i = 0; i < 42; i++) {
      const d = new Date(gridStart);
      d.setDate(gridStart.getDate() + i);
      const today = new Date();
      cells.push({
        date: d,
        inMonth: d.getMonth() === current.getMonth(),
        isToday: d.toDateString() === today.toDateString(),
      });
    }
    return cells;
  }, [current]);

  const times: string[] = useMemo(() => {
    const out: string[] = [];
    // 12:00 -> 17:30 at 30m intervals to mirror the screenshot
    for (let h = 12; h <= 17; h++) {
      for (let m of [0, 30]) {
        if (h === 17 && m === 30) break;
        let label: string;
        if (format === '24h') {
          const hh = h.toString().padStart(2, '0');
          const mm = m.toString().padStart(2, '0');
          label = `${hh}:${mm}`;
        } else {
          const hour12 = ((h + 11) % 12) + 1;
          const suffix = h < 12 ? 'AM' : 'PM';
          const mm = m.toString().padStart(2, '0');
          label = `${hour12}:${mm} ${suffix}`;
        }
        out.push(label);
      }
    }
    return out;
  }, [format]);

  const to24h = (label: string): string => {
    if (/am|pm/i.test(label)) {
      const [time, suffixRaw] = label.split(' ');
      const suffix = suffixRaw?.toUpperCase() as 'AM' | 'PM';
      let [h, m] = time.split(':').map(Number);
      if (suffix === 'PM' && h !== 12) h += 12;
      if (suffix === 'AM' && h === 12) h = 0;
      return `${String(h).padStart(2, '0')}:${String(m || 0).padStart(2, '0')}`;
    }
    return label; // already 24h like 14:00
  };

  const handleConfirm = async () => {
    if (!selectedDate || !selectedTime || !user.name || !user.email) return;
    try {
      const yyyy = selectedDate.getFullYear();
      const mm = String(selectedDate.getMonth() + 1).padStart(2, '0');
      const dd = String(selectedDate.getDate()).padStart(2, '0');
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          date: `${yyyy}-${mm}-${dd}`,
          time: to24h(selectedTime),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data?.ok) throw new Error(data?.error || 'Failed to book');
      alert(data.meetLink ? `Booked! Meet link: ${data.meetLink}` : 'Booked!');
      onClose();
      setSelectedDate(null);
      setSelectedTime(null);
      setUser({ name: '', email: '' });
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'Unknown error';
      alert(`Booking failed: ${msg}`);
    }
  };

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
            className="w-full max-w-[96vw] sm:max-w-5xl bg-[#0B0D12] text-white rounded-2xl ring-1 ring-white/10 shadow-2xl max-h-[92vh] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF8C00] to-[#FF6B35] flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Book Your Appointment</div>
                  <div className="text-xs text-white/60">ExpersTech • Innovation & Excellence</div>
                </div>
              </div>
              <button onClick={onClose} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1.6fr_1fr] gap-3 sm:gap-4 p-3 sm:p-4 flex-1 overflow-y-auto">
              {/* Left Info */}
              <div className="hidden md:block bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="text-lg font-semibold mb-2">ExpersTech</div>
                <p className="text-sm text-white/70">
                  Relaxation starts with easy booking. Choose your service and pick a time that works for you.
                </p>
                <div className="mt-4 space-y-2 text-xs text-white/60">
                  <div>• Requires confirmation</div>
                  <div>• 30 minutes</div>
                  <div>• Africa/Nairobi timezone</div>
                </div>
              </div>

              {/* Center Calendar */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4">
                <div className="flex items-center justify-between mb-3">
                  <button onClick={() => setCurrent(new Date(current.getFullYear(), current.getMonth() - 1, 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <div className="text-sm font-semibold">{monthName} {current.getFullYear()}</div>
                  <button onClick={() => setCurrent(new Date(current.getFullYear(), current.getMonth() + 1, 1))} className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-[10px] sm:text-xs text-white/60 mb-1">
                  {['SAT','SUN','MON','TUE','WED','THU','FRI'].map(d => (<div key={d} className="py-2">{d}</div>))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {days.map((d, i) => {
                    const isSelected = selectedDate && new Date(selectedDate).toDateString() === d.date.toDateString();
                    const disabled = !d.inMonth;
                    return (
                      <button
                        key={i}
                        disabled={disabled}
                        onClick={() => {
                          setSelectedDate(d.date);
                          setSelectedTime(null);
                        }}
                        className={`h-9 sm:h-12 rounded-md text-xs sm:text-sm transition-colors ${
                          disabled ? 'text-white/20' : isSelected ? 'bg-[#FF8C00] text-white' : d.isToday ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/10'
                        }`}
                      >
                        {d.date.getDate()}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Times */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-semibold">{selectedDate ? selectedDate.toDateString() : 'Pick a date'}</div>
                  <div className="flex items-center gap-1 text-xs bg-white/10 rounded-lg p-1">
                    <button onClick={() => setFormat('12h')} className={`px-2 py-1 rounded-md ${format==='12h'?'bg-[#FF8C00] text-white':'text-white/70 hover:bg-white/10'}`}>12h</button>
                    <button onClick={() => setFormat('24h')} className={`px-2 py-1 rounded-md ${format==='24h'?'bg-[#FF8C00] text-white':'text-white/70 hover:bg-white/10'}`}>24h</button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                  <input
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    placeholder="Your name"
                    className="px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-sm outline-none"
                  />
                  <input
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder="Your email"
                    type="email"
                    className="px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-sm outline-none"
                  />
                </div>
                <div className="flex-1 overflow-y-auto space-y-2 pr-1">
                  {times.map((t) => (
                    <button
                      disabled={!selectedDate}
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border ${selectedTime===t?'bg-[#FF8C00] border-transparent':'bg-white/5 border-white/10 hover:bg-white/10'} disabled:opacity-50 text-xs sm:text-sm`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <button
                  disabled={!selectedDate || !selectedTime || !user.name || !user.email}
                  onClick={handleConfirm}
                  className="mt-3 w-full bg-gradient-to-r from-[#FF8C00] to-[#FF6B35] disabled:opacity-50 text-white py-2.5 rounded-lg font-semibold"
                >
                  {selectedDate && selectedTime ? `Confirm ${selectedTime}` : 'Select a slot'}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


