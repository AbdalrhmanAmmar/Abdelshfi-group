import React from 'react';
import { 
  Sprout, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowUp,
  Leaf,
  Award,
  Shield,
  Clock
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { FaTiktok } from "react-icons/fa";


const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black text-white overflow-hidden transition-colors duration-500" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Agricultural background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-20 animate-pulse">
        <div className="bg-white/5 backdrop-blur-sm p-3 rounded-full">
          <Leaf className="w-6 h-6 text-green-400" />
        </div>
      </div>
      
      <div className="absolute bottom-20 left-20 animate-bounce" style={{ animationDelay: '1s' }}>
        <div className="bg-white/5 backdrop-blur-sm p-3 rounded-full">
          <Sprout className="w-6 h-6 text-orange-400" />
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-500 dark:to-green-600 p-3 rounded-xl shadow-lg transition-colors">
                  <Sprout className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t.navbar.company.name}</h3>
                  <p className="text-sm text-gray-300 dark:text-gray-400 transition-colors">{t.navbar.company.subtitle}</p>
                </div>
              </div>
              
              <p className="text-gray-300 dark:text-gray-400 leading-relaxed mb-6 transition-colors">
                {t.footer.description}
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span className="text-sm">{isRTL ? 'القاهرة، مصر' : 'Cairo, Egypt'}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span className="text-sm">+20 123 456 7890</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">
                  <Mail className="w-5 h-5 text-green-400" />
                  <span className="text-sm">info@abdelshafy.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-orange-400 rounded-full"></div>
                {t.footer.quickLinks}
              </h4>
              <ul className="space-y-3">
                {[
                  { name: t.navbar.home, href: '#' },
                  { name: t.navbar.products, href: '#' },
                  { name: t.navbar.services, href: '#' },
                  { name: t.navbar.about, href: '#' },
                  { name: t.navbar.contact, href: '#' }
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-orange-400 to-green-400 rounded-full"></div>
                {t.footer.ourProducts}
              </h4>
              <ul className="space-y-3">
                {[
                  { name: t.footer.products.freshVegetables, href: '#' },
                  { name: t.footer.products.freshFruits, href: '#' },
                  { name: t.footer.products.legumes, href: '#' },
                  { name: t.footer.products.aromaticHerbs, href: '#' },
                  { name: t.footer.products.driedFruitsVegetables, href: '#' }
                ].map((product, index) => (
                  <li key={index}>
                    <a 
                      href={product.href}
                      className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      {product.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services & Certifications */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-orange-400 rounded-full"></div>
                {t.footer.ourServices}
              </h4>
              <ul className="space-y-3 mb-8">
                {[
                  { name: t.footer.services.meshPackaging, href: '#' },
                  { name: t.footer.services.printedCarton, href: '#' },
                  { name: t.footer.services.vacuumPackaging, href: '#' },
                  { name: t.footer.services.internationalShipping, href: '#' }
                ].map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href}
                      className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Certifications */}
              <h5 className="text-md font-semibold text-white dark:text-gray-200 mb-4 transition-colors">{t.footer.ourCertifications}</h5>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: t.footer.certifications.iso22000, icon: Shield },
                  { name: t.footer.certifications.haccp, icon: Award },
                  { name: t.footer.certifications.globalGap, icon: Globe },
                  { name: t.footer.certifications.organic, icon: Leaf }
                ].map((cert, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm p-3 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/40 transition-colors group"
                  >
                    <cert.icon className="w-5 h-5 text-green-400 mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-xs text-gray-300 dark:text-gray-400 group-hover:text-white dark:group-hover:text-gray-200 transition-colors">
                      {cert.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="border-t border-white/10 dark:border-gray-700/30 mt-12 pt-12 transition-colors">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">15+</div>
                <div className="text-gray-400 dark:text-gray-500 text-sm flex items-center justify-center gap-2 transition-colors">
                  <Sprout className="w-4 h-4" />
                  {t.footer.stats.privateFarms}
                </div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">50+</div>
                <div className="text-gray-400 dark:text-gray-500 text-sm flex items-center justify-center gap-2 transition-colors">
                  <Globe className="w-4 h-4" />
                  {t.footer.stats.countries}
                </div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">1000+</div>
                <div className="text-gray-400 dark:text-gray-500 text-sm flex items-center justify-center gap-2 transition-colors">
                  <Award className="w-4 h-4" />
                  {t.footer.stats.customers}
                </div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">25+</div>
                <div className="text-gray-400 dark:text-gray-500 text-sm flex items-center justify-center gap-2 transition-colors">
                  <Clock className="w-4 h-4" />
                  {t.footer.stats.experience}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 dark:border-gray-700/30 bg-black/20 dark:bg-gray-900/40 backdrop-blur-sm transition-colors">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Copyright */}
              <div className="text-center md:text-right">
                <p className="text-gray-400 dark:text-gray-500 text-sm transition-colors">
                  {t.footer.copyright}
                </p>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-4">
                <span className="text-gray-400 dark:text-gray-500 text-sm ml-4 transition-colors">{t.footer.followUs}</span>
                <div className="flex gap-3">
                  {[
                    { icon: Twitter, color: 'hover:text-sky-400', href:"https://x.com/abdelshafigroup" },
                    { icon: Instagram, color: 'hover:text-pink-400', href:"https://instagram.com/abdelshafigroup" },
                    { icon: FaTiktok, color: 'hover:text-blue-600', href:"https://www.tiktok.com/@abdelshafigroup" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target='_blank'
                      className={`bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm p-2 rounded-full text-gray-400 dark:text-gray-500 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20 dark:hover:bg-gray-700/40`}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Scroll to Top */}
              <button
                onClick={scrollToTop}
                className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-500 dark:to-green-600 hover:from-green-500 hover:to-green-600 dark:hover:from-green-400 dark:hover:to-green-500 p-3 rounded-full shadow-lg hover:shadow-green-500/50 dark:hover:shadow-green-400/50 transition-all duration-300 hover:scale-110 group"
              >
                <ArrowUp className="w-5 h-5 text-white group-hover:animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;