'use client';

export default function CareersPage() {
  const jobs = [
    { title: 'Frontend Engineer', type: 'Full-time', location: 'Remote', summary: 'React/Next.js with strong UI craft and TypeScript.' },
    { title: 'Backend Engineer', type: 'Full-time', location: 'Remote', summary: 'Node.js/Go, databases, and cloud-first mindset.' },
    { title: 'UI/UX Designer', type: 'Contract', location: 'Remote', summary: 'Product design, prototyping, and design systems.' },
  ];
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFFAF0] to-white">
      <section className="pt-24 px-6 pb-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#2774AE]">Join ExpersTech</h1>
          <p className="mt-3 text-[#2774AE]/80 max-w-2xl mx-auto">We are a remote-first, outcome-driven team building reliable, secure, and delightful software.</p>
        </div>
      </section>

      <section className="px-6 pb-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {jobs.map((j) => (
            <div key={j.title} className="bg-white border border-[#F7E7CE] rounded-2xl p-6 flex flex-col gap-2">
              <div className="text-lg font-semibold text-[#2774AE]">{j.title}</div>
              <div className="text-sm text-[#2774AE]/70">{j.type} • {j.location}</div>
              <div className="text-[#2774AE]/80 text-sm">{j.summary}</div>
              <div className="mt-3 flex gap-2">
                <a
                  href={`mailto:xperstech@gmail.com?subject=Application:%20${encodeURIComponent(j.title)}`}
                  className="px-4 py-2 bg-[#FF8C00] text-white rounded-lg font-semibold"
                >Apply</a>
                <a href="mailto:xperstech@gmail.com" className="px-4 py-2 border border-[#F7E7CE] text-[#2774AE] rounded-lg font-semibold">Ask a question</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="px-6 pb-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2774AE] mb-4">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[#2774AE]">
            <div className="bg-white border border-[#F7E7CE] rounded-2xl p-5">Competitive compensation</div>
            <div className="bg-white border border-[#F7E7CE] rounded-2xl p-5">Remote-first, flexible hours</div>
            <div className="bg-white border border-[#F7E7CE] rounded-2xl p-5">Learning budget & mentorship</div>
            <div className="bg-white border border-[#F7E7CE] rounded-2xl p-5">Modern equipment & tools</div>
            <div className="bg-white border border-[#F7E7CE] rounded-2xl p-5">Quarterly offsites</div>
            <div className="bg-white border border-[#F7E7CE] rounded-2xl p-5">Annual wellness stipend</div>
          </div>
        </div>
      </section>

      {/* How We Hire */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto bg-white border border-[#F7E7CE] rounded-2xl p-6 md:p-10">
          <h2 className="text-2xl font-bold text-[#2774AE]">How we hire</h2>
          <ol className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 text-[#2774AE]">
            <li className="bg-[#FFFAF0] border border-[#F7E7CE] rounded-xl p-4"><strong>1. Apply</strong><br />Share your CV and portfolio</li>
            <li className="bg-[#FFFAF0] border border-[#F7E7CE] rounded-xl p-4"><strong>2. Intro Call</strong><br />30 min with team</li>
            <li className="bg-[#FFFAF0] border border-[#F7E7CE] rounded-xl p-4"><strong>3. Practical Task</strong><br />Paid take-home</li>
            <li className="bg-[#FFFAF0] border border-[#F7E7CE] rounded-xl p-4"><strong>4. Offer</strong><br />Fast decision</li>
          </ol>
          <div className="mt-6 text-sm text-[#2774AE]/70">Don’t see a role that fits? Send your CV anyway — we hire opportunistically.</div>
        </div>
      </section>
    </main>
  );
}


