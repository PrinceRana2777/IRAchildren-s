/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Stethoscope, 
  Syringe, 
  Activity, 
  Baby, 
  Thermometer, 
  Heart, 
  Star, 
  Menu, 
  X,
  MessageCircle,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Vaccination', href: '#vaccination' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Heart className="text-white w-6 h-6" />
              </div>
              <span className={`text-xl font-bold ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
                IRA <span className="text-primary">Children's</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`font-medium transition-colors hover:text-primary ${isScrolled ? 'text-slate-600' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4">
              <a 
                href="tel:08087813301" 
                className={`flex items-center space-x-2 font-semibold ${isScrolled ? 'text-slate-900' : 'text-white'}`}
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>08087813301</span>
              </a>
              <button 
                onClick={onOpenModal}
                className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-teal-700 transition-all shadow-lg shadow-teal-900/20"
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-slate-900' : 'text-slate-900'} p-2`}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <a href="tel:08087813301" className="flex items-center justify-center space-x-2 bg-slate-100 py-3 rounded-xl font-semibold text-slate-900">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>Call Now</span>
                </a>
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenModal();
                  }}
                  className="w-full bg-primary text-white py-3 rounded-xl font-semibold shadow-lg"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070&auto=format&fit=crop" 
          alt="Pediatric Care" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium">Trusted by 1000+ Happy Parents</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Caring for Your Child’s <span className="text-primary">Health & Happiness</span>
          </h1>
          <p className="text-xl text-slate-200 mb-10 max-w-lg">
            Trusted Pediatric Care & Vaccination Centre in Vasai. We provide expert medical attention in a friendly environment.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={onOpenModal}
              className="bg-primary hover:bg-teal-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center shadow-xl shadow-teal-900/30"
            >
              Book Appointment
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
            <a 
              href="tel:08087813301" 
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-10 left-0 right-0 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { label: 'Rating', value: '5.0', icon: Star },
              { label: 'Experience', value: '15+ Yrs', icon: Activity },
              { label: 'Happy Kids', value: '5000+', icon: Baby },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="glass-card p-6 rounded-2xl flex items-center space-x-4 min-w-[200px]"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <stat.icon className="text-primary w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop" 
                alt="Clinic Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-secondary p-8 rounded-3xl text-white shadow-xl hidden md:block">
              <div className="text-4xl font-bold mb-1">5.0</div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-white" />)}
              </div>
              <div className="text-sm opacity-90">Google Rating</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">About the Clinic</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Expert Pediatric Care in a Safe & Friendly Environment
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              IRA Children’s Clinic is dedicated to providing expert pediatric care, vaccinations, and child health services. We understand that a child's health is a parent's top priority, which is why we offer a warm, welcoming space designed specifically for little ones.
            </p>
            <div className="space-y-4 mb-10">
              {[
                'Experienced Pediatric Specialists',
                'Comprehensive Vaccination Services',
                'Child-Friendly Waiting Area',
                'Advanced Growth Monitoring Tools'
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-50 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <a 
              href="#contact" 
              className="inline-flex items-center text-primary font-bold hover:underline"
            >
              Learn more about our location
              <ChevronRight className="ml-1 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Child Specialist Consultation',
      desc: 'Expert diagnosis and treatment for all pediatric health concerns.',
      icon: Stethoscope,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Vaccination & Immunization',
      desc: 'Complete range of essential vaccines for children of all ages.',
      icon: Syringe,
      color: 'bg-teal-50 text-teal-600'
    },
    {
      title: 'Growth Monitoring',
      desc: 'Regular tracking of physical and developmental milestones.',
      icon: Activity,
      color: 'bg-purple-50 text-purple-600'
    },
    {
      title: 'General Checkups',
      desc: 'Routine wellness exams to ensure your child stays healthy.',
      icon: CheckCircle2,
      color: 'bg-green-50 text-green-600'
    },
    {
      title: 'Newborn Care',
      desc: 'Specialized care and guidance for infants and new parents.',
      icon: Baby,
      color: 'bg-pink-50 text-pink-600'
    },
    {
      title: 'Fever & Infection Treatment',
      desc: 'Rapid care for common childhood illnesses and infections.',
      icon: Thermometer,
      color: 'bg-orange-50 text-orange-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Our Services</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Comprehensive Healthcare for Your Little Ones</h3>
          <p className="text-slate-600 text-lg">
            We offer a wide range of pediatric services to ensure your child grows up healthy, strong, and happy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Vaccination = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const schedule = [
    { age: 'At Birth', vaccines: 'BCG, OPV, Hep B' },
    { age: '6 Weeks', vaccines: 'DTP, Hib, Hep B, IPV, Rota, PCV' },
    { age: '10 Weeks', vaccines: 'DTP, Hib, Hep B, IPV, Rota, PCV' },
    { age: '14 Weeks', vaccines: 'DTP, Hib, Hep B, IPV, Rota, PCV' },
    { age: '6 Months', vaccines: 'OPV, Hep B' },
    { age: '9 Months', vaccines: 'Measles/MR, Vitamin A' },
    { age: '15-18 Months', vaccines: 'MMR, Varicella, DTP Booster, PCV Booster' },
  ];

  return (
    <section id="vaccination" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Vaccination Centre</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Protect Your Child with Timely Immunization</h3>
            <p className="text-lg text-slate-600 mb-8">
              Vaccinations are the most effective way to protect your child from serious diseases. At IRA Children’s Clinic, we follow the latest immunization schedules recommended by health authorities.
            </p>
            
            <div className="bg-teal-50 p-8 rounded-3xl border border-teal-100 mb-8">
              <h4 className="text-xl font-bold text-teal-900 mb-4 flex items-center">
                <Clock className="mr-2 w-5 h-5" />
                Standard Schedule
              </h4>
              <div className="space-y-3">
                {schedule.map((item) => (
                  <div key={item.age} className="flex justify-between items-center border-b border-teal-200/50 pb-2">
                    <span className="font-semibold text-teal-800">{item.age}</span>
                    <span className="text-teal-600 text-sm">{item.vaccines}</span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={onOpenModal}
              className="bg-primary hover:bg-teal-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg"
            >
              Book Vaccination
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-primary/5 absolute -inset-10 animate-pulse"></div>
            <div className="relative z-10 aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" 
                alt="Vaccination" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: 'Priya Sharma',
      text: 'The best pediatric clinic in Vasai. The doctor is very patient and explains everything clearly. My son felt very comfortable here.',
      role: 'Parent'
    },
    {
      name: 'Rahul Mehta',
      text: 'Very clean and child-friendly environment. The vaccination process was smooth and the staff is very helpful. Highly recommended!',
      role: 'Parent'
    },
    {
      name: 'Sneha Patil',
      text: 'Expert care and very professional. We have been coming here for 2 years and are extremely satisfied with the treatment.',
      role: 'Parent'
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
          </div>
          <h3 className="text-4xl font-bold mb-4">What Parents Say</h3>
          <p className="text-slate-400">Trusted by families across Vasai-Virar</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm"
            >
              <p className="text-slate-300 italic mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-bold">{review.name}</div>
                  <div className="text-sm text-slate-500">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Contact Us</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-8">Visit Our Clinic</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Address</h4>
                  <p className="text-slate-600">
                    Sarswat Bank, Ira Children’s Clinic and Vaccination Centre<br />
                    Shop No. 7, Vasant Karishma Ashokvan CHSL<br />
                    60 Feet-Ambadi Road, Junction, Besides<br />
                    Vasai West, Vasai-Virar, Maharashtra 401202
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                  <p className="text-slate-600">08087813301</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Opening Hours</h4>
                  <p className="text-slate-600">
                    Mon–Sat: 10:00 AM – 8:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[450px] rounded-3xl overflow-hidden shadow-xl border border-slate-100"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.435741050308!2d72.8256333752132!3d19.39354968187883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a964a2e89d67%3A0x6a0c0e0e0e0e0e0e!2sIra%20Children&#39;s%20Clinic%20and%20Vaccination%20Centre!5e0!3m2!1sen!2sin!4v1711000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Heart className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-slate-900">
                IRA <span className="text-primary">Children's</span>
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed">
              Providing expert pediatric care and vaccination services in Vasai West. Your child's health is our priority.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-500 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-500 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-slate-500 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#vaccination" className="text-slate-500 hover:text-primary transition-colors">Vaccination</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Services</h4>
            <ul className="space-y-4">
              <li className="text-slate-500">Child Consultation</li>
              <li className="text-slate-500">Immunization</li>
              <li className="text-slate-500">Newborn Care</li>
              <li className="text-slate-500">Growth Monitoring</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-500">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Shop No. 7, Vasant Karishma, Vasai West</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-500">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>08087813301</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} IRA Children’s Clinic & Vaccination Centre. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const AppointmentModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Consultation'
  });
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const validate = () => {
    const newErrors: { name?: string; phone?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // In a real app, this would send data to a server
      alert(`Appointment request sent for ${formData.name}! We will call you back at ${formData.phone}.`);
      onClose();
      // Reset form
      setFormData({ name: '', phone: '', service: 'Consultation' });
      setErrors({});
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          ></motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden z-[101]"
          >
            <div className="bg-primary p-6 sm:p-8 text-white text-center relative">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
              <Calendar className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-2xl font-bold">Book Appointment</h3>
              <p className="text-teal-50 opacity-90">Fill in the details below</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter child's or parent's name"
                  className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-slate-200'} focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all`}
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({...formData, name: e.target.value});
                    if (errors.name) setErrors({...errors, name: undefined});
                  }}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">+91</span>
                  <input 
                    type="tel" 
                    placeholder="10 digit mobile number"
                    className={`w-full pl-14 pr-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-slate-200'} focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all`}
                    value={formData.phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                      setFormData({...formData, phone: val});
                      if (errors.phone) setErrors({...errors, phone: undefined});
                    }}
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Select Service</label>
                <div className="relative">
                  <select 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none bg-white pr-10"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option>Consultation</option>
                    <option>Vaccination</option>
                    <option>General Checkup</option>
                    <option>Newborn Care</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <ChevronRight className="w-4 h-4 rotate-90" />
                  </div>
                </div>
              </div>
              
              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full bg-primary hover:bg-teal-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg transition-all active:scale-[0.98]"
                >
                  Submit Request
                </button>
                <p className="text-center text-xs text-slate-500 mt-4 font-medium">
                  We'll call you back within 2 hours to confirm.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a 
      href="https://wa.me/918087813301"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center space-x-2 group"
    >
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-semibold whitespace-nowrap">
        How can I help you?
      </span>
      <MessageCircle className="w-7 h-7" />
    </motion.a>
  );
};

// --- Main App ---

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-open modal after 1 second on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans text-slate-900 bg-white">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <About />
        <Services />
        <Vaccination onOpenModal={() => setIsModalOpen(true)} />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
      
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <WhatsAppButton />
    </div>
  );
}
