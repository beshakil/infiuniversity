import React from 'react';
import { STATS } from '../constants';

const Stats = () => {
  return (
    <section className="relative z-20 -mt-16 md:-mt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {STATS.map((stat, idx) => (
            <div 
              key={idx} 
              className="group glass p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-primary/5 transition-all duration-500 hover:-translate-y-2 hover:bg-white"
            >
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center text-3xl mb-6 transition-transform group-hover:scale-110 duration-500">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-5xl font-black text-primary mb-2 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-bold uppercase tracking-[0.15em] text-[10px] md:text-xs">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
