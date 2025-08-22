// import React from 'react';
// import { Package, Truck, Plane, Ship, Shield, Award, Clock, Globe } from 'lucide-react';
// import { useLanguage } from '../contexts/LanguageContext';

// const ServicesPage: React.FC = () => {
//   const { t, isRTL } = useLanguage();

//   const services = [
//     {
//       id: 1,
//       title: t.services.packaging5kg,
//       description: t.services.packaging5kgDesc,
//       icon: Package,
//       image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600',
//       features: t.services.packaging5kgFeatures,
//       color: 'from-green-500 to-green-600'
//     },
//     {
//       id: 2,
//       title: t.services.printedCarton,
//       description: t.services.printedCartonDesc,
//       icon: Package,
//       image: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=600',
//       features: t.services.printedCartonFeatures,
//       color: 'from-blue-500 to-blue-600'
//     },
//     {
//       id: 3,
//       title: t.services.vacuumPacking,
//       description: t.services.vacuumPackingDesc,
//       icon: Shield,
//       image: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=600',
//       features: t.services.vacuumPackingFeatures,
//       color: 'from-purple-500 to-purple-600'
//     },
//     {
//       id: 4,
//       title: t.services.shipping,
//       description: t.services.shippingDesc,
//       icon: Ship,
//       image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=600',
//       features: t.services.shippingFeatures,
//       color: 'from-orange-500 to-orange-600'
//     }
//   ];

//   const additionalServices = [
//     {
//       icon: Award,
//       title: t.services.qualityAssurance,
//       description: t.services.qualityAssuranceDesc
//     },
//     {
//       icon: Clock,
//       title: t.services.onTimeDelivery,
//       description: t.services.onTimeDeliveryDesc
//     },
//     {
//       icon: Globe,
//       title: t.services.globalNetwork,
//       description: t.services.globalNetworkDesc
//     },
//     {
//       icon: Shield,
//       title: t.services.fullInsurance,
//       description: t.services.fullInsuranceDesc
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-500" dir={isRTL ? 'rtl' : 'ltr'}>
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-r from-green-600 via-green-700 to-green-800 dark:from-gray-800 dark:via-green-800 dark:to-gray-800 text-white py-20 overflow-hidden transition-colors duration-500">
//         <div className="absolute inset-0">
//           <img 
//             src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920"
//             alt="Shipping and logistics"
//             className="w-full h-full object-cover opacity-20"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/60"></div>
//         </div>
        
//         {/* Floating elements */}
//         <div className="absolute top-10 right-20 animate-bounce">
//           <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
//             <Package className="w-8 h-8 text-green-300" />
//           </div>
//         </div>
        
//         <div className="absolute bottom-20 left-20 animate-pulse">
//           <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
//             <Ship className="w-6 h-6 text-blue-300" />
//           </div>
//         </div>
        
//         <div className="absolute top-1/2 left-32 animate-bounce" style={{ animationDelay: '1s' }}>
//           <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
//             <Truck className="w-6 h-6 text-orange-300" />
//           </div>
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
//           <div className="mb-8">
//             <div className="inline-flex items-center gap-3 mb-6">
//               <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400 rounded-full"></div>
//               <Package className="w-8 h-8 text-orange-400" />
//               <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400 rounded-full"></div>
//             </div>
            
//             <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
//               <span className="bg-gradient-to-r from-white via-green-100 to-orange-100 dark:from-gray-100 dark:via-green-200 dark:to-orange-200 bg-clip-text text-transparent transition-colors">
//                 {t.services.title1}
//               </span>
//               <br />
//               <span className="bg-gradient-to-r from-orange-200 via-white to-green-100 dark:from-orange-300 dark:via-gray-100 dark:to-green-200 bg-clip-text text-transparent transition-colors">
//                 {t.services.title2}
//               </span>
//             </h1>
            
//             <p className="text-xl md:text-2xl text-white/90 dark:text-gray-200/90 max-w-3xl mx-auto leading-relaxed transition-colors">
//               {t.services.subtitle}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Main Services */}
//       <div className="max-w-7xl mx-auto px-6 py-16">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">{t.services.specializedServices}</h2>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
//             {t.services.servicesDescription}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
//           {services.map((service, index) => (
//             <div 
//               key={service.id}
//               className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-400"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               {/* Background Image */}
//               <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
//                 <img 
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
              
//               {/* Gradient Overlay */}
//               <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
//               <div className="relative p-8">
//                 {/* Icon */}
//                 <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                   <service.icon className="w-8 h-8" />
//                 </div>
                
//                 {/* Content */}
//                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
//                   {service.title}
//                 </h3>
                
//                 <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6 transition-colors">
//                   {service.description}
//                 </p>
                
//                 {/* Features */}
//                 <div className="space-y-3">
//                   {service.features.map((feature, idx) => (
//                     <div key={idx} className="flex items-center gap-3">
//                       <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
//                       <span className="text-gray-700 dark:text-gray-300 font-medium transition-colors">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
                
//                 {/* Decorative Element */}
//                 <div className="absolute top-6 left-6 w-20 h-20 rounded-full bg-gradient-to-r from-green-100 to-orange-100 opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Additional Services */}
//         <div className="bg-gradient-to-r from-gray-900 via-green-900 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black rounded-3xl p-12 text-white relative overflow-hidden transition-colors duration-500">
//           <div className="absolute inset-0 opacity-10">
//             <img 
//               src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920"
//               alt="Global shipping"
//               className="w-full h-full object-cover"
//             />
//           </div>
          
//           <div className="relative z-10">
//             <div className="text-center mb-12">
//               <h3 className="text-3xl font-bold mb-4 dark:text-gray-100 transition-colors">{t.services.additionalFeatures}</h3>
//               <p className="text-xl text-gray-300 dark:text-gray-400 transition-colors">
//                 {t.services.additionalFeaturesDesc}
//               </p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {additionalServices.map((service, index) => (
//                 <div 
//                   key={index}
//                   className="text-center group hover:scale-105 transition-transform duration-300"
//                 >
//                   <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl mb-4 group-hover:bg-white/20 dark:group-hover:bg-gray-700/40 transition-colors">
//                     <service.icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
//                     <h4 className="text-lg font-bold mb-2 dark:text-gray-200 transition-colors">{service.title}</h4>
//                     <p className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed transition-colors">{service.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="text-center mt-16">
//           <div className="bg-gradient-to-r from-green-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12 transition-colors duration-300">
//             <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
//               {t.services.needServices}
//             </h3>
//             <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-colors">
//               {t.services.needServicesDesc}
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-500 dark:to-green-600 hover:from-green-500 hover:to-green-600 dark:hover:from-green-400 dark:hover:to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/50 dark:hover:shadow-green-400/50 hover:scale-105">
//                 {t.services.requestQuote}
//               </button>
//               <button className="border-2 border-green-600 dark:border-green-400 text-green-600 dark:text-green-400 hover:bg-green-600 dark:hover:bg-green-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
//                 {t.services.contactUs}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesPage;