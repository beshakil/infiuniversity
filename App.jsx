import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import CourseCard from './components/CourseCard';
import { COURSES } from './constants';

const App = () => {
  return (
    <div className="min-h-screen selection:bg-brand-500 selection:text-white">
      <Navbar />
      <Hero />
      <Stats />

      {/* --- ACADEMICS SECTION --- */}
      <section id="academics" className="py-32 relative overflow-hidden hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20">
            <div className="max-w-2xl">
              <span className="text-brand-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block">Academic Excellence</span>
              <h2 className="text-5xl md:text-7xl font-bold text-primary mb-8 tracking-tighter">
                Global Impact <br/> Through <span className="text-gradient">Innovation.</span>
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed">
                Our curriculum transcends traditional boundaries, preparing students to solve complex global challenges through interdisciplinary collaboration and hands-on experience.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <button className="flex items-center space-x-3 text-primary font-bold hover:text-brand-600 transition-colors group">
                <span className="text-lg">View All Departments</span>
                <div className="w-12 h-12 rounded-full border-2 border-primary/10 flex items-center justify-center group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Bento-style Faculty Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              { title: 'Engineering & AI', icon: '⚡', desc: 'Designing the intelligent systems of tomorrow.', color: 'bg-blue-50' },
              { title: 'Global Business', icon: '📈', desc: 'Redefining leadership for a new economy.', color: 'bg-amber-50' },
              { title: 'Creative Arts', icon: '🎨', desc: 'Fostering aesthetic and critical innovation.', color: 'bg-purple-50' },
              { title: 'Life Sciences', icon: '🧬', desc: 'Pioneering health and genetic breakthroughs.', color: 'bg-emerald-50' },
            ].map((faculty, i) => (
              <div 
                key={i} 
                className={`group p-10 rounded-[2.5rem] ${faculty.color} border border-transparent hover:border-white hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500`}
              >
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-500 inline-block">{faculty.icon}</div>
                <h4 className="text-2xl font-bold text-primary mb-4">{faculty.title}</h4>
                <p className="text-gray-500 leading-relaxed text-sm mb-6">{faculty.desc}</p>
                <div className="h-1 w-0 group-hover:w-full bg-brand-500 transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10">
            {COURSES.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* --- RESEARCH SECTION --- */}
      <section id="research" className="py-32 bg-primary relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-600/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <div className="inline-block bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg text-brand-400 font-bold text-xs uppercase tracking-widest mb-6">
                Pioneering Research
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 leading-[0.9] tracking-tighter">
                Innovation <br/> at <span className="text-brand-400">Infinity.</span>
              </h2>
              <p className="text-xl text-white/60 mb-12 leading-relaxed font-light">
                As a Tier-1 research institution, Infiuniversity is where theory meets transformative application. We invest over $1.2B annually into labs that are literally building the future.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: '850+ Patents Filed', icon: '📜', sub: 'Last Academic Year' },
                  { title: 'Tier-1 Status', icon: '💎', sub: 'Globally Recognized' },
                  { title: 'Global Lab Network', icon: '🌐', sub: '20 International Sites' },
                  { title: 'Venture Lab', icon: '🚀', sub: '$50M Seed Fund' }
                ].map((item, i) => (
                  <div key={i} className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl p-2 bg-white/5 rounded-lg">{item.icon}</span>
                      <div>
                        <h5 className="font-bold text-white group-hover:text-brand-400 transition-colors">{item.title}</h5>
                        <p className="text-[10px] text-white/40 uppercase tracking-widest font-black">{item.sub}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="mt-12 group bg-brand-500 hover:bg-brand-600 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-brand-500/20 flex items-center space-x-3">
                <span>Access Research Portal</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 grid grid-cols-2 gap-6">
                <div className="pt-12">
                  <div className="relative rounded-[3rem] overflow-hidden group shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1000" 
                      alt="Scientific Research" 
                      className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100" 
                    />
                    <div className="absolute inset-0 bg-brand-600/20 mix-blend-overlay group-hover:bg-transparent transition-all"></div>
                  </div>
                </div>
                <div>
                  <div className="relative rounded-[3rem] overflow-hidden group shadow-2xl mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1000" 
                      alt="Tech Innovation" 
                      className="w-full h-[300px] object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100" 
                    />
                    <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay group-hover:bg-transparent transition-all"></div>
                  </div>
                  <div className="p-10 rounded-[2.5rem] bg-brand-500 text-white">
                    <span className="text-4xl font-black block mb-2">#12</span>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-80">Global Research Impact</span>
                  </div>
                </div>
              </div>
              {/* Decorative Geometric Element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/10 rounded-full pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CAMPUS LIFE SECTION --- */}
      <section id="campus" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-brand-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block">Student Experience</span>
            <h2 className="text-5xl md:text-7xl font-bold text-primary mb-8 tracking-tighter">Your Life, <span className="text-brand-500">Unbounded.</span></h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              At Infiuniversity, your education happens both in and out of the classroom. Join our vibrant community of world-changers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Elite Athletics', img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1000', tag: 'Championship Spirits', color: 'brand-500' },
              { title: '300+ Active Clubs', img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1000', tag: 'Find Your Tribe', color: 'secondary' },
              { title: 'Modern Living', img: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1000', tag: 'Award-Winning Design', color: 'primary-accent' }
            ].map((item, i) => (
              <div key={i} className="relative group overflow-hidden rounded-[3rem] h-[550px] shadow-2xl transition-all duration-700">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-125" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <span className={`bg-brand-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 inline-block`}>
                    {item.tag}
                  </span>
                  <h4 className="text-4xl font-bold text-white mb-6 group-hover:translate-x-2 transition-transform duration-500">{item.title}</h4>
                  <button className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors group/btn">
                    <span className="font-bold">Explore Now</span>
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ADMISSIONS SECTION --- */}
      <section id="admissions" className="py-32 bg-gray-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-500/5 rounded-full blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-stretch gap-20">
            <div className="lg:w-1/2 flex flex-col justify-center">
              <span className="text-brand-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block">Future Visionaries</span>
              <h2 className="text-5xl md:text-7xl font-bold text-primary mb-10 leading-[1] tracking-tighter">
                Begin Your <br/> Legacy at <br/> <span className="text-gradient font-serif italic">InfiUniversity.</span>
              </h2>
              <p className="text-xl text-gray-500 mb-12 leading-relaxed">
                We're looking for the bold, the curious, and the restless. Our admissions process is designed to find individuals who want to change the status quo.
              </p>
              
              <div className="space-y-10">
                {[
                  { step: '01', title: 'Holistic Evaluation', desc: 'We value your story just as much as your scores.' },
                  { step: '02', title: 'Early Decision', desc: 'Secure your place in the Class of 2029 today.' },
                  { step: '03', title: 'Global Scholarships', desc: 'Over $250M awarded in merit-based aid yearly.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-8 group">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-xl flex items-center justify-center text-2xl font-black text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-500">
                      {item.step}
                    </div>
                    <div>
                      <h5 className="font-bold text-primary text-2xl mb-2">{item.title}</h5>
                      <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full flex items-center">
              <div className="w-full bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl shadow-primary/5 border border-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-primary mb-2">Request Prospectus</h3>
                  <p className="text-gray-400 mb-10 text-sm">Download our 2024-25 guide and start your journey.</p>
                  
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black text-gray-400 tracking-widest ml-1">First Name</label>
                        <input type="text" className="bg-gray-50 border-none rounded-2xl px-6 py-4 w-full focus:ring-2 focus:ring-brand-500 transition-all" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black text-gray-400 tracking-widest ml-1">Last Name</label>
                        <input type="text" className="bg-gray-50 border-none rounded-2xl px-6 py-4 w-full focus:ring-2 focus:ring-brand-500 transition-all" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black text-gray-400 tracking-widest ml-1">Email Address</label>
                      <input type="email" className="bg-gray-50 border-none rounded-2xl px-6 py-4 w-full focus:ring-2 focus:ring-brand-500 transition-all" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-black text-gray-400 tracking-widest ml-1">Intended Major</label>
                      <select className="bg-gray-50 border-none rounded-2xl px-6 py-4 w-full focus:ring-2 focus:ring-brand-500 transition-all text-gray-500">
                        <option>Computer Science & AI</option>
                        <option>Biomedical Sciences</option>
                        <option>International Business</option>
                        <option>Philosophy & Ethics</option>
                      </select>
                    </div>
                    <button className="w-full bg-primary text-white py-5 rounded-[2rem] font-bold text-lg hover:bg-primary-light transition-all shadow-2xl shadow-primary/20 mt-8 group flex items-center justify-center space-x-3">
                      <span>Get Free Information</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </form>
                  <p className="text-center text-xs text-gray-300 mt-10">
                    By submitting, you agree to our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Admissions Terms</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white pt-32 pb-16 relative overflow-hidden">
        {/* Decorative Light Leak */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px] -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 lg:col-span-1">
              <span className="text-4xl font-bold font-serif mb-8 block leading-none">
                Infi<span className="text-brand-500">University</span>
              </span>
              <p className="text-white/50 leading-relaxed mb-8 max-w-sm">
                Empowering the next generation of global leaders, researchers, and innovators. Always Beyond.
              </p>
              <div className="flex space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-500 hover:border-brand-500 transition-all">
                    <div className="w-5 h-5 bg-white/20 rounded-full"></div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="font-bold text-lg mb-8 tracking-tighter">Academic Hub</h5>
              <ul className="space-y-4 text-white/50 font-medium">
                <li><a href="#" className="hover:text-brand-500 transition-colors">Undergraduate Studies</a></li>
                <li><a href="#" className="hover:text-brand-500 transition-colors">Graduate Programs</a></li>
                <li><a href="#" className="hover:text-brand-500 transition-colors">Professional Education</a></li>
                <li><a href="#" className="hover:text-brand-500 transition-colors">Distance Learning</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold text-lg mb-8 tracking-tighter">The Campus</h5>
              <ul className="space-y-4 text-white/50 font-medium">
                <li><a href="#" className="hover:text-brand-500 transition-colors">Virtual Experience</a></li>
                <li><a href="#" className="hover:text-brand-500 transition-colors">Student Life & Culture</a></li>
                <li><a href="#" className="hover:text-brand-500 transition-colors">Housing & Dining</a></li>
                <li><a href="#" className="hover:text-brand-500 transition-colors">Career Services</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold text-lg mb-8 tracking-tighter">Newsletter</h5>
              <p className="text-white/50 mb-6 text-sm">Get the latest insights from InfiUniversity delivered to your inbox.</p>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 w-full focus:outline-none focus:ring-1 focus:ring-brand-500 transition-all text-sm"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-brand-500 px-6 rounded-xl font-bold hover:bg-brand-600 transition-all text-xs">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/30 text-[10px] uppercase tracking-[0.3em] font-black">
            <div className="mb-4 md:mb-0">© 2024 Infiuniversity.com • All Rights Reserved</div>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
