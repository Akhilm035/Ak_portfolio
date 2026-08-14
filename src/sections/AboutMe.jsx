import React from 'react';
import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <section id="about" className="w-full bg-[#f8f9fa] py-24 md:py-32 text-slate-900 border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Polaroid Photo Frame with Subtle Rotation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: -6 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ rotate: -1, scale: 1.02, transition: { duration: 0.3 } }}
              className="bg-white p-4 pb-14 rounded-sm shadow-[0_20px_40px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.02)] border border-slate-100 max-w-[340px] w-full transform origin-center relative cursor-default"
            >
              <img 
                src="/profile.png" 
                alt="Akhil" 
                className="w-full aspect-[4/5] object-cover rounded-xs border border-slate-100 bg-slate-50 pointer-events-none"
              />
              
              {/* Glossy/Glare overlay highlight inside Polaroid */}
              <div className="absolute inset-4 bottom-14 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
            </motion.div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              {/* Blue Diamond Badge */}
              <div className="inline-flex items-center space-x-2 text-blue-600 text-xs sm:text-sm font-extrabold tracking-widest uppercase">
                <span className="text-blue-600 text-sm">✦</span>
                <span>ABOUT ME</span>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-[50px] font-black tracking-tight text-slate-900 leading-none">
                a little about myself
              </h2>

              {/* Body Text Paragraphs */}
              <div className="space-y-4 text-slate-600 text-base sm:text-lg font-medium leading-relaxed max-w-2xl">
                <p>
                  My journey has never been a straight line — it’s been shaped by friendships, experiments, setbacks, and fresh starts.
                </p>
                <p>
                  With my school friend <span className="text-slate-900 font-bold">Ashfaq</span>, we started <span className="text-slate-900 font-bold">Crenovates</span> in <span className="text-slate-900 font-bold">Kannur</span>, where I began as a <span className="text-slate-900 font-bold">Designer</span>. Ashfaq helped me discover design and choose this path, something I’ll always be grateful for.
                </p>
                <p>
                  We later moved to <span className="text-slate-900 font-bold">Ernakulam</span> and <span className="text-slate-900 font-bold">Kozhikode</span>, starting <span className="text-slate-900 font-bold">L8N8Labs</span>, where I grew as a <span className="text-slate-900 font-bold">UI/UX Designer</span>. Things were going well until financial challenges brought it to an end.
                </p>
                <p>
                  During that phase, <span className="text-slate-900 font-bold">doodling became my little escape</span> — a simple way to clear my mind and keep going. I even tried a food truck, but that didn’t work out either.
                </p>
                <p>
                  Then <span className="text-slate-900 font-bold">Vijesh and Jayapal</span> returned with a new idea. Together, we started <span className="text-slate-900 font-bold">Livetronics</span>, where I found my path as a <span className="text-slate-900 font-bold">Product Designer</span>.
                </p>
                <p>
                  From Kozhikode to remote work during COVID and eventually Oman, the journey kept moving. Today, my work connects <span className="text-slate-900 font-bold">Oman, the UAE, and Kannur</span>.
                </p>
                <p>
                  Looking back, every role, setback, and restart shaped who I am.
                </p>
                <p className="text-blue-600 font-extrabold text-lg sm:text-xl pt-2">
                  Sometimes, the road you didn’t plan takes you somewhere better.
                </p>
              </div>

              {/* Signature */}
              <div className="pt-2">
                <span className="font-script text-4xl sm:text-5xl text-blue-600 select-none block">
                  Akhil.
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
