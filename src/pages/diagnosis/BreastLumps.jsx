import React from 'react';
import { Info, CheckCircle, XCircle, Heart, Shield, Stethoscope } from 'lucide-react';

const BreastLumps = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary via-tealMedium to-tealLight">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white bg-opacity-20 rounded-full backdrop-blur-sm">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Benign Breast Lumps
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 font-light max-w-3xl mx-auto leading-relaxed">
              Understanding and addressing your concerns with compassionate, evidence-based information
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        
        {/* Introduction Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
          <div className="bg-gradient-to-r from-tealLight to-tealMedium p-6">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Understanding Breast Health</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              The majority of breast complaints are benign in nature. While it's natural for women to "assume the worst" when discovering a new concern, understanding benign breast disorders is essential to help relieve unnecessary apprehensions and provide peace of mind.
            </p>
          </div>
        </div>

        {/* Triple Testing Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
          <div className="bg-gradient-to-r from-tealLight to-tealMedium  p-6">
            <div className="flex items-center space-x-3">
              <Stethoscope className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Triple Assessment</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A comprehensive evaluation combining three essential components ensures accurate diagnosis for women with significant clinical findings.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Clinical Examination</h3>
                <p className="text-sm text-gray-600">Physical assessment by healthcare professional</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Imaging Studies</h3>
                <p className="text-sm text-gray-600">Ultrasound, mammography, or MRI</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Tissue Sampling</h3>
                <p className="text-sm text-gray-600">Biopsy when clinically indicated</p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Benign Conditions */}
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Common Benign Conditions</h2>
            <p className="text-xl text-textGray max-w-2xl mx-auto">
              Learn about the most frequently encountered benign breast conditions
            </p>
          </div>

          {/* Localized Nodularity */}
          <div className="bg-white rounded-2xl shadow-lg border border-green-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start p-8">
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Localized Nodularity</h3>
                <div className="prose prose-lg text-gray-700">
                  <p className="mb-4">
                    A common finding reflecting the presence of lumpy or nodular breast tissue, typically noticed in the upper outer quadrants of the breasts.
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                    <p className="text-green-800 font-medium">
                      This is a normal physiological change. Many women previously diagnosed with "fibrocystic disease" likely had nodular breast tissue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fibroadenomas */}
          <div className="bg-white rounded-2xl shadow-lg border border-purple-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start p-8">
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 bg-gradient-to-r from-tealLight to-tealMedium  rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Fibroadenomas</h3>
                <div className="prose prose-lg text-gray-700">
                  <p className="mb-4">
                    Harmless lumps composed of glandular and fibrous tissue that develop from milk-producing lobules.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Characteristics:</h4>
                      <ul className="text-sm text-primary space-y-1">
                        <li>• Firm and rubbery texture</li>
                        <li>• Smooth surface</li>
                        <li>• Mobile when pressed</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Nickname:</h4>
                      <p className="text-sm text-primary">
                        Often called "breast mouse" due to their mobility under the skin
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cysts */}
          <div className="bg-white rounded-2xl shadow-lg border border-cyan-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start p-8">
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-cyan-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Breast Cysts</h3>
                <div className="prose prose-lg text-gray-700">
                  <p className="mb-4">
                    Fluid-filled sacs within breast tissue, most common in women aged 35-50 years.
                  </p>
                  <div className="bg-cyan-50 border border-cyan-200 p-6 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-cyan-800 mb-2">Key Statistics:</h4>
                        <ul className="text-sm text-cyan-700 space-y-1">
                          <li>• 7% of women develop palpable cysts</li>
                          <li>• 50% of breast clinic visits involve cysts</li>
                          <li>• Usually resolve after menopause</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-cyan-800 mb-2">Important Note:</h4>
                        <p className="text-sm text-cyan-700">
                          Common in women taking Hormone Replacement Therapy (HRT)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Less Common Conditions */}
        <div className="bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden">
          <div className="bg-gradient-to-r from-tealLight to-tealMedium p-6">
            <div className="flex items-center space-x-3">
              <XCircle className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Less Common Benign Conditions</h2>
            </div>
          </div>
          <div className="p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Fat Necrosis</h3>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Occurs following trauma or injury to breast tissue, leading to cell death in the affected area.
              </p>
              
              <div className="bg-orange-50 border-l-4 border-primary p-6 rounded">
                <h4 className="font-semibold white mb-3">Presentation:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium  mb-2">Physical Characteristics:</h5>
                    <ul className="text-sm  space-y-1">
                      <li>• Firm, usually painless lump</li>
                      <li>• May cause tenderness or pain</li>
                      <li>• Can cause nipple retraction</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium  mb-2">Skin Changes:</h5>
                    <ul className="text-sm  space-y-1">
                      <li>• Redness around the area</li>
                      <li>• Bruising</li>
                      <li>• Occasional skin dimpling</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary to-tealMedium rounded-2xl p-8 text-center text-white">
          <Heart className="w-12 h-12 mx-auto mb-4 text-teal-100" />
          <h2 className="text-2xl font-bold mb-4">Remember: Most Breast Changes Are Benign</h2>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto leading-relaxed">
            While it's natural to feel concerned about breast changes, understanding these common benign conditions can help provide reassurance. Always consult with your healthcare provider for proper evaluation and peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreastLumps;