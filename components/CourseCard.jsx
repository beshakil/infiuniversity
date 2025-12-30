import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/5 hover:shadow-primary/10 transition-all duration-700 border border-gray-100 group flex flex-col">
      <div className="relative h-72 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-125 group-hover:rotate-2"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-xl">
          <span className="text-[10px] font-black text-brand-600 uppercase tracking-widest">
            {course.department}
          </span>
        </div>
      </div>
      <div className="p-10 flex flex-col flex-1">
        <div className="mb-4">
          <h3 className="text-3xl font-bold text-primary mb-4 leading-tight group-hover:text-brand-600 transition-colors duration-500">
            {course.title}
          </h3>
          <p className="text-gray-400 leading-relaxed line-clamp-3 text-sm font-medium">
            {course.description}
          </p>
        </div>
        <div className="mt-auto pt-8 flex items-center justify-between border-t border-gray-50">
          <div className="flex items-center space-x-2 text-brand-600">
            <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-sm font-black uppercase tracking-widest">{course.duration}</span>
          </div>
          <button className="relative overflow-hidden group/btn px-6 py-2 rounded-xl text-primary font-black text-xs uppercase tracking-[0.2em] transition-all">
            <span className="relative z-10">Details</span>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-600 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-right duration-500"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
