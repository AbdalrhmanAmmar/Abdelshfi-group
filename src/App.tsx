// import React from 'react';
// import { ArrowLeft, Wheat, Leaf, Sprout } from 'lucide-react';
// import Navbar from './components/Navbar';
// import ProductsPage from './components/ProductsPage';
// import ServicesPage from './components/ServicesPage';
// import AboutPage from './components/AboutPage';
// import Footer from './components/Footer';
// import { useLanguage } from './contexts/LanguageContext';

// function App() {
//   const [currentPage, setCurrentPage] = React.useState('home');
//   const { t, isRTL } = useLanguage();

//   if (currentPage === 'services') {
//     return (
//       <div className="min-h-screen flex flex-col">
//         <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
//         <div className="flex-1">
//           <ServicesPage />
//         </div>
//         <Footer />
//       </div>
//     );
//   }

//   if (currentPage === 'products') {
//     return (
//       <div className="min-h-screen flex flex-col">
//         <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
//         <div className="flex-1">
//           <ProductsPage />
//         </div>
//         <Footer />
//       </div>
//     );
//   }

//   if (currentPage === 'about') {
//     return (
//       <div className="min-h-screen flex flex-col">
//         <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
//         <div className="flex-1">
//           <AboutPage />
//         </div>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-emerald-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500" dir={isRTL ? 'rtl' : 'ltr'}>
//       <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

//       <div className="flex-1">
//         {/* Hero Section */}
//         <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
//         {/* Background with overlay */}
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/70 to-orange-900/60 dark:from-gray-900/90 dark:via-green-900/80 dark:to-gray-900/90 z-10 transition-colors duration-500"></div>
//           <img 
//             src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop"
//             alt="Agricultural fields"
//             className="w-full h-full object-cover"
//           />
          
//           {/* Additional overlay images */}
//           <div className="absolute top-0 right-0 w-1/3 h-full opacity-30">
//             <img 
//               src="https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop"
//               alt="Wheat field"
//               className="w-full h-full object-cover mix-blend-multiply"
//             />
//           </div>
          
//           <div className="absolute bottom-0 left-0 w-1/2 h-2/3 opacity-20">
//             <img 
//               src="https://images.pexels.com/photos/1227513/pexels-photo-1227513.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
//               alt="Fresh vegetables"
//               className="w-full h-full object-cover mix-blend-screen"
//             />
//           </div>
//         </div>

//         {/* Floating elements */}
//         <div className="absolute top-20 right-20 animate-bounce">
//           <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
//             <Wheat className="w-8 h-8 text-orange-300" />
//           </div>
//         </div>
        
//         <div className="absolute bottom-32 right-32 animate-pulse">
//           <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
//             <Leaf className="w-6 h-6 text-green-300" />
//           </div>
//         </div>
        
//         <div className="absolute top-1/2 left-20 animate-bounce" style={{ animationDelay: '1s' }}>
//           <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
//             <Sprout className="w-6 h-6 text-green-400" />
//           </div>
//         </div>

//         {/* Main content */}
//         <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
//           {/* Company name */}
//           <div className="mb-8">
//             <h2 className="text-lg md:text-xl text-white/90 dark:text-gray-200/90 font-light mb-2 tracking-wide transition-colors">
//               {t.home.companyFullName}
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto rounded-full"></div>
//           </div>

//           {/* Main headline */}
//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
//             <span className="bg-gradient-to-r from-white via-green-100 to-orange-100 dark:from-gray-100 dark:via-green-200 dark:to-orange-200 bg-clip-text text-transparent transition-colors">
//               {t.home.heroTitle1}
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-orange-200 via-white to-green-100 dark:from-orange-300 dark:via-gray-100 dark:to-green-200 bg-clip-text text-transparent transition-colors">
//               {t.home.heroTitle2}
//             </span>
//           </h1>

//           {/* Subtitle */}
//           <p className="text-xl md:text-2xl text-white/90 dark:text-gray-200/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light transition-colors">
//             {t.home.heroSubtitle}
//           </p>

//           {/* Company Description */}
//           <div className="mb-12 max-w-4xl mx-auto">
//             <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-md border border-white/20 dark:border-gray-600/30 rounded-2xl p-8 md:p-10 shadow-2xl transition-colors duration-300">
//               <div className="text-center">
//                 <div className="inline-flex items-center gap-3 mb-6">
//                   <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400 rounded-full"></div>
//                   <Sprout className="w-8 h-8 text-orange-400" />
//                   <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400 rounded-full"></div>
//                 </div>
                
//                 <h3 className="text-2xl md:text-3xl font-bold text-white dark:text-gray-100 mb-6 leading-tight transition-colors">
//                   {t.home.aboutTitle}
//                 </h3>
                
//                 <div className="space-y-4 text-lg md:text-xl text-white/95 dark:text-gray-200/95 leading-relaxed transition-colors">
//                   <p>
//                     {t.home.aboutDescription1}
//                   </p>
                  
//                   <p>
//                     {t.home.aboutDescription2}
//                   </p>
                  
//                   <p>
//                     {t.home.aboutDescription3}
//                   </p>
//                 </div>
                
//                 {/* Decorative elements */}
//                 <div className="flex justify-center items-center gap-4 mt-8">
//                   <div className="flex items-center gap-2">
//                     <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
//                     <span className="text-sm text-white/80 dark:text-gray-300/80 font-medium transition-colors">{t.home.features.privateFarms}</span>
//                   </div>
//                   <div className="w-1 h-6 bg-white/30 dark:bg-gray-400/30 rounded-full transition-colors"></div>
//                   <div className="flex items-center gap-2">
//                     <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
//                     <span className="text-sm text-white/80 dark:text-gray-300/80 font-medium transition-colors">{t.home.features.localMarket}</span>
//                   </div>
//                   <div className="w-1 h-6 bg-white/30 dark:bg-gray-400/30 rounded-full transition-colors"></div>
//                   <div className="flex items-center gap-2">
//                     <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
//                     <span className="text-sm text-white/80 dark:text-gray-300/80 font-medium transition-colors">{t.home.features.globalQuality}</span>
//                   </div>
//                   <div className="w-1 h-6 bg-white/30 dark:bg-gray-400/30 rounded-full transition-colors"></div>
//                   <div className="flex items-center gap-2">
//                     <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
//                     <span className="text-sm text-white/80 dark:text-gray-300/80 font-medium transition-colors">{t.home.features.multipleMarkets}</span>
//                   </div>
//                   <div className="w-1 h-6 bg-white/30 dark:bg-gray-400/30 rounded-full transition-colors"></div>
//                   <div className="flex items-center gap-2">
//                     <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
//                     <span className="text-sm text-white/80 dark:text-gray-300/80 font-medium transition-colors">{t.home.features.egyptianExpertise}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//             <button 
//               onClick={() => setCurrentPage('products')}
//               className="group relative bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 hover:from-orange-400 hover:to-orange-500 dark:hover:from-orange-500 dark:hover:to-orange-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 dark:hover:shadow-orange-600/50 hover:scale-105"
//             >
//               <span className="relative z-10 flex items-center gap-3">
//                 {t.home.viewProducts}
//                 <ArrowLeft className={`w-5 h-5 group-hover:${isRTL ? '-translate-x-1' : 'translate-x-1'} transition-transform`} />
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 dark:from-orange-500 dark:to-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
//             </button>
            
//             <button 
//               onClick={() => setCurrentPage('home')}
//               className="group border-2 border-white/30 dark:border-gray-300/30 hover:border-white/60 dark:hover:border-gray-300/60 text-white dark:text-gray-200 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm bg-white/10 dark:bg-gray-800/20 hover:bg-white/20 dark:hover:bg-gray-700/30"
//             >
//               <span className="flex items-center gap-3">
//                 {t.home.learnMore}
//                 <ArrowLeft className={`w-5 h-5 group-hover:${isRTL ? '-translate-x-1' : 'translate-x-1'} transition-transform`} />
//               </span>
//             </button>
//           </div>

//           {/* Stats */}
//           <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//             <div className="text-center">
//               <div className="text-3xl md:text-4xl font-bold text-white dark:text-gray-100 mb-2 transition-colors">25+</div>
//               <div className="text-white/80 dark:text-gray-300/80 text-sm uppercase tracking-wider transition-colors">{t.home.stats.experience}</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl md:text-4xl font-bold text-white dark:text-gray-100 mb-2 transition-colors">50+</div>
//               <div className="text-white/80 dark:text-gray-300/80 text-sm uppercase tracking-wider transition-colors">{t.home.stats.countries}</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl md:text-4xl font-bold text-white dark:text-gray-100 mb-2 transition-colors">1000+</div>
//               <div className="text-white/80 dark:text-gray-300/80 text-sm uppercase tracking-wider transition-colors">{t.home.stats.customers}</div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="w-8 h-12 border-2 border-white/30 dark:border-gray-300/30 rounded-full flex justify-center transition-colors">
//             <div className="w-1 h-3 bg-white/60 dark:bg-gray-300/60 rounded-full mt-2 animate-pulse transition-colors"></div>
//           </div>
//         </div>
//         </section>
//       </div>
      
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from 'react'

function App() {
  return (
    <div></div>
  )
}

export default App