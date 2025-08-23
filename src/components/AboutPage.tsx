import React from 'react';
import { Users, Target, Award, Globe, Leaf, Sprout, Heart, Shield, Clock, CheckCircle, TrendingUp, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const stats = [
    { number: '25+', label: t.about.stats.experience, icon: Clock },
    { number: '15+', label: t.about.stats.privateFarms, icon: Sprout },
    { number: '50+', label: t.about.stats.countries, icon: Globe },
    { number: '1000+', label: t.about.stats.customers, icon: Users },
    { number: '100%', label: t.about.stats.quality, icon: Shield }
  ];

  const values = [
    {
      icon: Heart,
      title: t.about.passionForQuality,
      description: t.about.passionForQualityDesc,
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Shield,
      title: t.about.trustAndSafety,
      description: t.about.trustAndSafetyDesc,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Leaf,
      title: t.about.sustainability,
      description: t.about.sustainabilityDesc,
      color: 'from-green-500 to-green-600'
    },
    {
      icon: TrendingUp,
      title: t.about.continuousImprovement,
      description: t.about.continuousImprovementDesc,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const milestones = [
    { year: '1999', title: t.about.milestones[1999].title, description: t.about.milestones[1999].description },
    { year: '2002', title: t.about.milestones[2002].title, description: t.about.milestones[2002].description },
    { year: '2005', title: t.about.milestones[2005].title, description: t.about.milestones[2005].description },
    { year: '2008', title: t.about.milestones[2008].title, description: t.about.milestones[2008].description },
    { year: '2010', title: t.about.milestones[2010].title, description: t.about.milestones[2010].description },
    { year: '2015', title: t.about.milestones[2015].title, description: t.about.milestones[2015].description },
    { year: '2020', title: t.about.milestones[2020].title, description: t.about.milestones[2020].description },
    { year: '2024', title: t.about.milestones[2024].title, description: t.about.milestones[2024].description }
  ];

  const certifications = [
    {
      name: t.about.certifications.iso22000.name,
      description: t.about.certifications.iso22000.description,
      icon: Shield,
      color: 'from-blue-500 to-blue-600',
      year: t.about.certifications.iso22000.year
    },
    {
      name: t.about.certifications.haccp.name,
      description: t.about.certifications.haccp.description,
      icon: CheckCircle,
      color: 'from-green-500 to-green-600',
      year: t.about.certifications.haccp.year
    },
    {
      name: t.about.certifications.globalGap.name,
      description: t.about.certifications.globalGap.description,
      icon: Globe,
      color: 'from-purple-500 to-purple-600',
      year: t.about.certifications.globalGap.year
    },
    {
      name: t.about.certifications.brcFood.name,
      description: t.about.certifications.brcFood.description,
      icon: Award,
      color: 'from-orange-500 to-orange-600',
      year: t.about.certifications.brcFood.year
    },
    {
      name: t.about.certifications.organic.name,
      description: t.about.certifications.organic.description,
      icon: Leaf,
      color: 'from-green-600 to-green-700',
      year: t.about.certifications.organic.year
    },
    {
      name: t.about.certifications.halal.name,
      description: t.about.certifications.halal.description,
      icon: Star,
      color: 'from-teal-500 to-teal-600',
      year: t.about.certifications.halal.year
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-500" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 via-green-700 to-green-800 dark:from-gray-800 dark:via-green-800 dark:to-gray-800 text-white py-20 overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Agricultural landscape"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/60"></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-10 right-20 animate-bounce">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
            <Sprout className="w-8 h-8 text-green-300" />
          </div>
        </div>
        
        <div className="absolute bottom-20 left-20 animate-pulse">
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
            <Leaf className="w-6 h-6 text-green-300" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400 rounded-full"></div>
              <Users className="w-8 h-8 text-orange-400" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400 rounded-full"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-green-100 to-orange-100 dark:from-gray-100 dark:via-green-200 dark:to-orange-200 bg-clip-text text-transparent transition-colors">
                {t.about.title}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 dark:text-gray-200/90 max-w-3xl mx-auto leading-relaxed transition-colors">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white dark:bg-gray-800 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-gradient-to-r from-green-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-500 dark:to-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium transition-colors">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="py-20 bg-gradient-to-r from-gray-50 to-green-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
                {t.about.egyptianSuccess}
              </h2>
              <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                <p>
                  {t.about.ourStory1}
                </p>
                <p>
                  {t.about.ourStory2}
                </p>
                <p>
                  {t.about.ourStory3}
                </p>
                <p>
                  {t.about.ourStory4}
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Agricultural fields"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-r from-green-200 to-orange-200 dark:from-green-800 dark:to-orange-800 rounded-2xl opacity-30 dark:opacity-20 transition-opacity"></div>
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-gradient-to-r from-orange-200 to-green-200 dark:from-orange-800 dark:to-green-800 rounded-2xl opacity-20 dark:opacity-10 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-white dark:bg-gray-800 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">{t.about.valuesTitle}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-600 hover:border-green-200 dark:hover:border-green-400"
              >
                <div className="p-8">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${value.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed transition-colors">
                    {value.description}
                  </p>
                </div>
                
                <div className={`h-1 bg-gradient-to-r ${value.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-20 bg-gradient-to-r from-gray-900 via-green-900 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black text-white relative overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Wheat field"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 dark:text-gray-100 transition-colors">{t.about.successJourney}</h2>
            <p className="text-xl text-gray-300 dark:text-gray-400 transition-colors">
              {t.about.successJourneyDesc}
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute right-1/2 transform translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 to-orange-500 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''} gap-8`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <div className={`bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-white/20 dark:border-gray-600/30 hover:bg-white/20 dark:hover:bg-gray-700/40 transition-colors ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                      <div className="text-2xl font-bold text-orange-400 dark:text-orange-300 mb-2 transition-colors">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2 dark:text-gray-100 transition-colors">{milestone.title}</h3>
                      <p className="text-gray-300 dark:text-gray-400 transition-colors">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-orange-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="py-20 bg-gradient-to-r from-green-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-orange-500" />
              <Award className="w-8 h-8 text-green-500" />
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
              نحن معتمدون من أبرز المؤسسات العالمية لضمان أعلى معايير الجودة والسلامة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="group bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-600 hover:border-green-200 dark:hover:border-green-400 relative"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200"></div>
                </div>
                
                {/* Year Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-600 dark:to-gray-700 text-white px-3 py-1 rounded-full text-xs font-semibold transition-colors">
                  {cert.year}
                </div>
                
                <div className="relative p-8 text-center">
                  {/* Icon */}
                  <div className={`inline-flex p-6 rounded-full bg-gradient-to-r ${cert.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <cert.icon className="w-10 h-10" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {cert.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed transition-colors">
                    {cert.description}
                  </p>
                  
                  {/* Decorative Element */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`}></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-600 transition-colors duration-300">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-green-500 rounded-full"></div>
                <CheckCircle className="w-8 h-8 text-green-600" />
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-green-500 rounded-full"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                {t.about.commitmentToExcellence}
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors">
                {t.about.commitmentDesc}
              </p>
              
              <div className="flex justify-center items-center gap-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1 transition-colors">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors">{t.about.stats.privateFarms}</div>
                </div>
                <div className="w-1 h-12 bg-gray-300 dark:bg-gray-600 rounded-full transition-colors"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1 transition-colors">6+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors">{t.about.stats.certifications}</div>
                </div>
                <div className="w-1 h-12 bg-gray-300 dark:bg-gray-600 rounded-full transition-colors"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1 transition-colors">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors">{t.about.stats.localGlobal}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white dark:bg-gray-800 transition-colors duration-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-green-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 rounded-3xl p-12 transition-colors duration-300">
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 mb-6">
                <Star className="w-8 h-8 text-orange-500" />
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors">{t.about.joinSuccess}</h3>
                <Star className="w-8 h-8 text-green-500" />
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
                {t.about.joinSuccessDesc}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-green-700 dark:from-green-500 dark:to-green-600 hover:from-green-500 hover:to-green-600 dark:hover:from-green-400 dark:hover:to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/50 dark:hover:shadow-green-400/50 hover:scale-105">
                {t.about.becomePartner}
              </button>
              <button className="border-2 border-green-600 dark:border-green-400 text-green-600 dark:text-green-400 hover:bg-green-600 dark:hover:bg-green-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                {t.navbar.contact}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;