import React from 'react';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center pt-32 pb-20 lg:pt-0 lg:pb-0 overflow-hidden bg-primary">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[120px] animate-float"></div>
                <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }}></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0F172A_100%)] opacity-60"></div>
            </div>


            <div className="relative w-full max-w-7xl mx-auto z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Text Content Column */}
                    <div className="lg:col-span-7 xl:col-span-6 text-center lg:text-left px-4 sm:px-6 lg:px-0">
                        <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-xl border border-white/10 px-5 py-2.5 rounded-full text-white/90 text-sm font-bold mb-8 animate-fade-in-up shadow-2xl shadow-brand-500/10">
                            <span className="flex h-2.5 w-2.5 rounded-full bg-brand-500 shadow-[0_0_10px_rgba(59,130,246,1)]"></span>
                            <span className="tracking-widest uppercase text-[10px]">Excellence Redefined • Since 1920</span>
                        </div>
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white mb-6 sm:mb-8 leading-[1.1] tracking-tighter animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            Where Innovation <br className="hidden sm:block" />
                            Meets <span className="text-gradient font-serif italic relative px-1">
                                Infinity.
                                <span className="absolute bottom-2 left-0 w-full h-1 bg-brand-500/20 rounded-full"></span>
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-white/60 mb-8 sm:mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up font-light" style={{ animationDelay: '0.2s' }}>
                            Empowering the visionaries of tomorrow through a fusion of academic prestige and radical modern innovation. Join a legacy that spans a century and defines the next.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <button className="w-full sm:w-auto group relative bg-brand-600 text-white px-8 sm:px-10 py-3.5 sm:py-3 rounded-xl text-lg font-bold transition-all shadow-2xl shadow-brand-600/30 hover:shadow-brand-600/50 hover:-translate-y-1 overflow-hidden">
                                <span className="relative z-10">Explore Programs</span>
                                <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                                <span className="absolute inset-0 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold z-20">Explore Programs</span>
                            </button>

                            <button className="w-full sm:w-auto group flex items-center justify-center space-x-3 bg-white/5 hover:bg-white/10 backdrop-blur-2xl text-white border border-white/10 px-8 sm:px-10 py-3.5 sm:py-3 rounded-xl text-lg font-bold transition-all">
                                <span>Virtual Tour</span>
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-500 transition-colors">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </button>
                        </div>

                        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/5 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <div className="flex items-center space-x-3 sm:space-x-4">
                                <div className="flex -space-x-2 sm:-space-x-3">
                                    {[1, 2, 3].map(i => (
                                        <img key={i} src={`https://i.pravatar.cc/150?u=uni${i}`} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-primary ring-2 ring-white/10" alt="Student" />
                                    ))}
                                </div>
                                <div className="text-white/40 text-[9px] sm:text-[10px] uppercase font-black tracking-widest leading-tight">
                                    <span className="text-white block text-xs sm:text-sm mb-0.5">45k+ Global</span>
                                    Scholars Enrolled
                                </div>
                            </div>
                            <div className="h-8 sm:h-10 w-px bg-white/10 hidden sm:block"></div>
                            <div className="text-white/40 text-[9px] sm:text-[10px] uppercase font-black tracking-widest leading-tight">
                                <span className="text-brand-400 block text-xs sm:text-sm mb-0.5">#12 Global</span>
                                University Ranking
                            </div>
                        </div>
                    </div>

                    {/* Image Content Column */}
                    <div className="lg:col-span-5 xl:col-span-6 relative animate-fade-in-up px-4 sm:px-6 lg:px-0" style={{ animationDelay: '0.3s' }}>
                        <div className="relative z-10 group max-w-[500px] lg:max-w-none mx-auto">
                            {/* Main Framed Image */}
                            <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200"
                                    alt="Students at InfiUniversity"
                                    className="w-full aspect-[4/5] lg:aspect-auto lg:h-[600px] xl:h-[640px] object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>

                                {/* Floating Content on Image */}
                                <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 glass p-4 sm:p-6 rounded-2xl sm:rounded-3xl border-white/10">
                                    <div className="flex items-center space-x-3 sm:space-x-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl shadow-lg">🎓</div>
                                        <div>
                                            <h4 className="text-primary font-bold text-base sm:text-lg">Class of 2028</h4>
                                            <p className="text-slate-500 text-[10px] sm:text-xs font-semibold">Join the next generation of leaders</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Geometric Elements Behind Image */}
                            <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-32 h-32 sm:w-40 sm:h-40 bg-brand-500/20 rounded-[2rem] -rotate-12 -z-10 blur-2xl"></div>
                            <div className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 w-48 h-48 sm:w-64 sm:h-64 bg-secondary/10 rounded-full -z-10 blur-3xl"></div>
                        </div>

                        {/* Experience Card Overlap */}
                        <div className="absolute -right-4 lg:-right-8 top-1/4 hidden md:block z-20 glass p-4 sm:p-6 rounded-2xl sm:rounded-[2rem] border-white/10 shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                            <div className="text-center">
                                <span className="text-2xl sm:text-3xl font-black text-brand-600 block mb-1">98%</span>
                                <span className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest">Job Placement</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Modernized Scroll Indicator */}
            {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center space-y-4 opacity-30">
                <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
                <span className="text-white text-[9px] uppercase tracking-[0.4em] font-black">Scroll Down</span>
            </div> */}
        </div>
    );
};

export default Hero;
