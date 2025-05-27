import React from 'react';
import { Heart, Calendar, Clock, Search, Stethoscope, Shield, CheckCircle, AlertCircle, Activity, Users } from 'lucide-react';

const BreastPain = () => {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #f8fefe 0%, #e8f4f4 100%)' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#4C9494" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16 relative">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full mr-4" style={{ backgroundColor: '#2B6D6D' }}>
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-5xl font-bold" style={{ color: '#2B6D6D' }}>
                  Breast Pain
                </h1>
              </div>
              
              <div className="w-24 h-2 rounded-full mb-8" style={{ backgroundColor: '#4C9494' }}></div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
                <p className="text-xl leading-relaxed mb-6" style={{ color: '#999999' }}>
                  Breast pain, also referred to as <span className="font-semibold" style={{ color: '#2B6D6D' }}>mastalgia</span>, is a common ailment among women. It is generally described as soreness, sharp burning pain or a feeling of tightness in the breast tissues.
                </p>
                
                <div className="flex items-center p-4 rounded-xl" style={{ backgroundColor: '#8BC5C5', backgroundColor: 'rgba(139, 197, 197, 0.2)' }}>
                  <Shield className="w-6 h-6 mr-3" style={{ color: '#2B6D6D' }} />
                  <p className="text-lg font-medium" style={{ color: '#2B6D6D' }}>
                    In general, breast pain is not a sign of cancer, but should be assessed by your doctor if persistent.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block ml-12">
              <svg width="300" height="300" viewBox="0 0 300 300" className="opacity-20">
                <circle cx="150" cy="150" r="120" fill="none" stroke="#4C9494" strokeWidth="2"/>
                <circle cx="150" cy="150" r="80" fill="none" stroke="#8BC5C5" strokeWidth="3"/>
                <circle cx="150" cy="150" r="40" fill="#8BC5C5" opacity="0.3"/>
                <path d="M150 50 L150 250 M50 150 L250 150" stroke="#2B6D6D" strokeWidth="1" opacity="0.5"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Classification Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="p-3 rounded-full mr-4" style={{ backgroundColor: '#4C9494' }}>
              <Activity className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold" style={{ color: '#2B6D6D' }}>
              Classification
            </h2>
          </div>
          
          <p className="text-lg leading-relaxed mb-8" style={{ color: '#999999' }}>
            Breast pain can be broadly categorized into 2 groups:
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Cyclical Mastalgia */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2B6D6D' }}>
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 h-full" style={{ borderColor: '#8BC5C5' }}>
                <div className="mb-6">
                  <svg width="60" height="60" viewBox="0 0 60 60" className="mb-4">
                    <circle cx="30" cy="30" r="25" fill="none" stroke="#4C9494" strokeWidth="2"/>
                    <path d="M20 30 Q30 20 40 30 Q30 40 20 30" fill="#8BC5C5" opacity="0.3"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#4C9494' }}>
                  Cyclical Mastalgia
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#999999' }}>
                  Related to the menstrual cycle and occurs naturally in nearly every woman. The pain varies with the cycle, gradually rising from the middle and normally reducing with menstruation onset.
                </p>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center mb-2">
                    <Users className="w-4 h-4 mr-2" style={{ color: '#2B6D6D' }} />
                    <span className="font-semibold" style={{ color: '#2B6D6D' }}>Age Group:</span>
                  </div>
                  <p className="text-sm" style={{ color: '#999999' }}>30-40 years (premenopausal women)</p>
                </div>
              </div>
            </div>

            {/* Non-cyclical Mastalgia */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2B6D6D' }}>
                <Clock className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 h-full" style={{ borderColor: '#8BC5C5' }}>
                <div className="mb-6">
                  <svg width="60" height="60" viewBox="0 0 60 60" className="mb-4">
                    <rect x="15" y="15" width="30" height="30" fill="none" stroke="#4C9494" strokeWidth="2" rx="5"/>
                    <path d="M25 25 L35 35 M35 25 L25 35" stroke="#8BC5C5" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#4C9494' }}>
                  Non-cyclical Mastalgia
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#999999' }}>
                  Not associated with menstrual cycle. Pain may be continuous or intermittent, usually affecting a single breast.
                </p>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-sm font-medium mb-1" style={{ color: '#2B6D6D' }}>True Non-cyclical:</p>
                    <p className="text-xs" style={{ color: '#999999' }}>Arises from breast, not cycle-related</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-sm font-medium mb-1" style={{ color: '#2B6D6D' }}>Extra Mammary:</p>
                    <p className="text-xs" style={{ color: '#999999' }}>Chest wall origin (costochondritis)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Causes Section */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-full mr-4" style={{ backgroundColor: '#4C9494' }}>
                <Search className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold" style={{ color: '#2B6D6D' }}>
                Causes
              </h2>
            </div>
            
            <div className="mb-8 p-6 rounded-2xl" style={{ backgroundColor: 'rgba(139, 197, 197, 0.1)' }}>
              <div className="flex items-center mb-4">
                <AlertCircle className="w-5 h-5 mr-3" style={{ color: '#4C9494' }} />
                <p className="text-lg font-medium" style={{ color: '#2B6D6D' }}>
                  The exact cause of breast pain is not known, however certain factors may be involved:
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Calendar, title: "Hormonal Changes", desc: "Changes during menstrual cycle" },
                { icon: Activity, title: "Breast Structures", desc: "Cysts, trauma, previous surgery" },
                { icon: Shield, title: "Medications", desc: "Certain hormonal medications" },
                { icon: Heart, title: "Fatty Acid Imbalance", desc: "Nutritional factors" },
                { icon: Users, title: "Breast Size", desc: "Large breasts prone to pain" },
                { icon: Stethoscope, title: "Breast Surgery", desc: "Post-surgical complications" }
              ].map((cause, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg mr-3" style={{ backgroundColor: 'rgba(76, 148, 148, 0.2)' }}>
                      <cause.icon className="w-5 h-5" style={{ color: '#4C9494' }} />
                    </div>
                    <h4 className="font-semibold" style={{ color: '#2B6D6D' }}>{cause.title}</h4>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#999999' }}>
                    {cause.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diagnosis Section */}
        <section className="mb-16">
          <div className="relative overflow-hidden rounded-3xl" style={{ background: 'linear-gradient(135deg, #2B6D6D 0%, #4C9494 100%)' }}>
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="1"/>
                <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="1"/>
                <circle cx="100" cy="100" r="40" fill="none" stroke="white" strokeWidth="1"/>
              </svg>
            </div>
            <div className="relative p-10">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full mr-4 bg-white/20">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  Diagnosis
                </h2>
              </div>
              
              <p className="text-xl leading-relaxed text-white/90">
                The diagnosis of mastalgia includes clinical breast examination and use of imaging techniques such as mammogram or ultrasound. In some cases, biopsy or samples of any breast lumps can be taken and sent for laboratory analysis.
              </p>
            </div>
          </div>
        </section>

        {/* Treatment Section */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-full mr-4" style={{ backgroundColor: '#4C9494' }}>
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold" style={{ color: '#2B6D6D' }}>
                Treatment
              </h2>
            </div>
            
            <div className="mb-8 p-6 rounded-2xl" style={{ backgroundColor: 'rgba(139, 197, 197, 0.1)' }}>
              <p className="text-lg" style={{ color: '#2B6D6D' }}>
                In most cases, breast pain resolves on its own without treatment. However, these tips can help relieve symptoms:
              </p>
            </div>
            
            <div className="grid gap-4">
              {[
                "Wear a well-fitting and supportive bra",
                "Eat a healthy well adequate balanced diet",
                "Take vitamin supplements/ Evening Primrose Oil",
                "Avoid excessive use of caffeine and consume low-fat diet",
                "Take prescribed medication for pain relief",
                "Practice relaxation techniques to reduce stress and anxiety",
                "If you take birth control pills, consult your physician to reduce the dose or discuss alternate medication"
              ].map((treatment, index) => (
                <div key={index} className="flex items-start p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0" style={{ backgroundColor: '#8BC5C5' }}>
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: '#999999' }}>
                    {treatment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(43, 109, 109, 0.1)' }}>
                <Shield className="w-8 h-8" style={{ color: '#2B6D6D' }} />
              </div>
            </div>
            <p className="text-lg font-medium mb-2" style={{ color: '#2B6D6D' }}>
              Important Medical Advice
            </p>
            <p className="text-base" style={{ color: '#999999' }}>
              Always consult with a healthcare professional for proper diagnosis and treatment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreastPain;