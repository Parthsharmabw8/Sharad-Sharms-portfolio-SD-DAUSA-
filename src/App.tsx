import React from 'react';
import { Shield, HeartPulse, MapPin, Award, Phone, Mail, ArrowRight, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';
import profileImg from './assets/images/profile.jpg';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-google-blue selection:text-white flex flex-col font-sans bg-background text-text-main">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-hairline">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="font-bold text-xl tracking-tight text-text-main flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-google-blue flex items-center justify-center text-white font-bold text-sm">S</div>
            <span>Sharad Sharma</span>
          </div>
          <div className="flex space-x-8 text-sm font-medium text-text-secondary">
            <a href="#about" className="hover:text-google-blue transition-colors">About</a>
            <a href="#initiatives" className="hover:text-google-blue transition-colors">Initiatives</a>
            <a href="#contact" className="hover:text-google-blue transition-colors">Contact</a>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-6 py-2 bg-google-blue text-white text-sm font-medium rounded-full hover:bg-google-blue-dark transition-colors shadow-sm">
            Connect
          </a>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="order-2 lg:order-1"
              >
                <div className="inline-flex items-center px-4 py-1.5 bg-white border border-hairline text-text-secondary rounded-full text-sm font-medium mb-8 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-google-green mr-2 animate-pulse"></span>
                  Age 24 • Youth Leader
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text-main mb-6 leading-tight">
                  Sharad Sharma
                </h1>
                
                <p className="text-xl md:text-2xl text-text-secondary mb-10 max-w-lg leading-relaxed">
                  Serving the community with dual dedication as a Medical Professional and Nagar Adhyaksh of Brahman Mahasangh.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#about" className="inline-flex justify-center items-center px-8 py-3.5 bg-google-blue text-white font-medium rounded-full hover:bg-google-blue-dark transition-all shadow-sm hover:shadow group">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#initiatives" className="inline-flex justify-center items-center px-8 py-3.5 bg-white border border-hairline text-google-blue font-medium rounded-full hover:bg-gray-50 transition-all shadow-sm hover:shadow">
                    View Initiatives
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="order-1 lg:order-2 relative"
              >
                <div className="relative aspect-square max-w-md mx-auto lg:ml-auto overflow-hidden rounded-[2rem] bg-hairline shadow-lg">
                  <img 
                    src={profileImg} 
                    alt="Sharad Sharma" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-sm flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                        <Award className="w-6 h-6 text-google-blue" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-text-secondary">Official Role</p>
                        <p className="text-base font-bold text-text-main leading-tight">Nagar Adhyaksh, Sikrai, Dausa</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Roles / About Section */}
        <section id="about" className="py-24 bg-white border-t border-hairline relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-6 tracking-tight">A Dual Commitment</h2>
              <p className="text-text-secondary max-w-2xl mx-auto text-xl">Balancing the rigor of medicine with the responsibility of social leadership.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-background p-10 rounded-[2rem] border border-hairline shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-hairline">
                  <HeartPulse className="w-7 h-7 text-google-red" />
                </div>
                <h3 className="text-2xl font-bold text-text-main mb-4">Medical Professional</h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Dedicated to healthcare and improving the well-being of the people. Combining modern medical knowledge with empathetic patient care to build a healthier society.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-background p-10 rounded-[2rem] border border-hairline shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-hairline">
                  <Shield className="w-7 h-7 text-google-blue" />
                </div>
                <h3 className="text-2xl font-bold text-text-main mb-4">Nagar Adhyaksh, Sikrai, Dausa</h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Appointed by the Brahman Mahasangh. Serving as the City President of Sikrai, Dausa to unite the community, advocate for rights, and drive social progress.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-background border-t border-hairline">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white rounded-[2rem] border border-hairline shadow-sm p-12">
              <div className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-hairline">
                <div className="text-center md:px-6">
                  <p className="text-6xl font-bold text-google-blue mb-2">24</p>
                  <p className="text-text-secondary font-medium">Years of Age</p>
                </div>
                <div className="text-center md:px-6 pt-12 md:pt-0">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-google-red" />
                  </div>
                  <p className="text-2xl font-bold text-text-main mb-2">Sikrai, Dausa</p>
                  <p className="text-text-secondary font-medium">Region of Service</p>
                </div>
                <div className="text-center md:px-6 pt-12 md:pt-0">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserCheck className="w-6 h-6 text-google-green" />
                  </div>
                  <p className="text-2xl font-bold text-text-main mb-2">Brahman Mahasangh</p>
                  <p className="text-text-secondary font-medium">Organization</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white border-t border-hairline relative" style={{ fontFamily: 'Inter, sans-serif' }}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-6 tracking-tight">Let's Build Together</h2>
            <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
              Whether for community welfare in Sikrai, organizational matters, or healthcare guidance, reach out to connect.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:sharadsharma9588@gmail.com" className="flex items-center justify-center px-8 py-4 bg-background border border-hairline rounded-full shadow-sm text-text-main font-medium hover:bg-gray-50 hover:shadow transition-all group">
                <Mail className="w-5 h-5 mr-3 text-google-red" />
                sharadsharma9588@gmail.com
              </a>
              <a href="tel:+919588227291" className="flex items-center justify-center px-8 py-4 bg-background border border-hairline rounded-full shadow-sm text-text-main font-medium hover:bg-gray-50 hover:shadow transition-all group">
                <Phone className="w-5 h-5 mr-3 text-google-blue" />
                +91 95882 27291
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background py-10 border-t border-hairline relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-text-main tracking-tight">Sharad Sharma</span>
          </div>
          <p className="text-text-secondary text-sm">© {new Date().getFullYear()} All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-text-secondary hover:text-google-blue transition-colors text-sm font-medium">Instagram</a>
            <a href="#" className="text-text-secondary hover:text-google-blue transition-colors text-sm font-medium">Twitter</a>
            <a href="#" className="text-text-secondary hover:text-google-blue transition-colors text-sm font-medium">Facebook</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919588227291" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#1EBE5D] transition-transform hover:scale-110 z-50"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
