import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Shield, Stethoscope, Users, Activity, BookOpen } from 'lucide-react';
import doctorimg from '../../assets/doctor-profile.jpg';
const BreastCancer = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const riskFactors = [
    "Risk increases with age",
    "Being a woman",
    "Family or previous history of breast cancer",
    "A history of ADH, DCIS or LCIS",
    "BRCA 1 or 2 positive",
    "Dense breast tissue",
    "Early menstruation (before age 12) and late menopause (after age 55)",
    "Use of birth control pills",
    "Use of HRT",
    "Heavy smoking and alcohol consumption",
    "Being overweight or obese"
  ];

  const symptoms = [
    "A lump or mass in the breast (usually painless and hard)",
    "Swelling of the breast",
    "Skin irritation",
    "Pain in the breast or nipple",
    "Nipple turning inwards",
    "Redness or thickening of nipple or breast skin",
    "Nipple discharge",
    "Lump in the underarm area"
  ];

  const treatments = [
    {
      name: "Surgery",
      description: "Removal of the tumour and healthy tissue margin, entire breast tissue, and sometimes neighboring lymph nodes. Breast reconstruction is possible."
    },
    {
      name: "Chemotherapy",
      description: "Administration of medicine through bloodstream to destroy cancer cells. May be given after or before surgery."
    },
    {
      name: "Radiation Therapy",
      description: "High-energy radiations target and destroy cancer cells. Highly targeted with limited side effects."
    },
    {
      name: "Hormonal Therapy",
      description: "Medications that lower levels or block action of estrogen and progesterone hormones on cancer cells."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-tealLight/20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-tealMedium text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Heart className="w-12 h-12 text-pink-300 mr-4" />
                <h1 className="text-5xl font-bold">Breast Cancer</h1>
              </div>
              <p className="text-xl mb-8 leading-relaxed">
                Understanding breast cancer - causes, symptoms, diagnosis, and treatment options. 
                Early detection saves lives.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-pink-300 mr-3" />
                  <span className="text-lg font-semibold">Important Statistics</span>
                </div>
                <p className="text-lg">
                  <span className="font-bold text-pink-300">1 in 8 women</span> develop breast cancer in their lifetime
                </p>
                <p className="text-sm mt-2 opacity-90">
                  80% of patients have no significant family history
                </p>
              </div>
            </div>
            
            {/* Medical Illustration */}
            <div className="relative">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <svg viewBox="0 0 400 300" className="w-full h-auto">
                  {/* Breast anatomy illustration */}
                  <defs>
                    <radialGradient id="breastGradient" cx="50%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#fce4ec" />
                      <stop offset="100%" stopColor="#f8bbd9" />
                    </radialGradient>
                    <radialGradient id="tumorGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#ff6b6b" />
                      <stop offset="100%" stopColor="#c92a2a" />
                    </radialGradient>
                  </defs>
                  
                  {/* Breast outline */}
                  <path d="M120 80 Q200 60 280 80 Q300 120 280 160 Q240 200 200 210 Q160 200 120 160 Q100 120 120 80 Z" 
                        fill="url(#breastGradient)" stroke="#2B6D6D" strokeWidth="2" />
                  
                  {/* Nipple */}
                  <circle cx="200" cy="100" r="8" fill="#d81b60" />
                  
                  {/* Tumor representation */}
                  <circle cx="170" cy="140" r="12" fill="url(#tumorGradient)" opacity="0.8" />
                  <circle cx="170" cy="140" r="8" fill="#ff8a80" opacity="0.6" />
                  
                  {/* Lymph nodes */}
                  <ellipse cx="320" cy="120" rx="8" ry="12" fill="#4C9494" opacity="0.7" />
                  <ellipse cx="335" cy="110" rx="6" ry="10" fill="#4C9494" opacity="0.7" />
                  
                  {/* Labels */}
                  <text x="200" y="250" textAnchor="middle" className="text-sm fill-primary font-medium">
                    Breast Tissue Structure
                  </text>
                  <text x="170" y="170" textAnchor="middle" className="text-xs fill-red-600 font-bold">
                    Tumor
                  </text>
                  <text x="340" y="95" textAnchor="middle" className="text-xs fill-primary">
                    Lymph Nodes
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* What is Breast Cancer */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 text-primary mr-4" />
              <h2 className="text-3xl font-bold text-primary">What is Breast Cancer?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A woman's breasts are made of specialised tissues supplied by blood vessels, lymph nodes and nerves. 
                  Breast cancer is the uncontrolled growth of cells in the breast. This mass of abnormal tissue is called a tumour.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Breast cancer can develop in both men and women, although female breast cancer is more common. 
                  Breast cancers can be benign (non-cancerous) or malignant (cancerous and can spread to other parts of the body).
                </p>
              </div>
              <div className="bg-gradient-to-br from-tealLight/20 to-primary/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">Key Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Can affect both men and women</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">May be benign or malignant</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Can spread to lymph nodes and other organs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Factors */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleSection('risk')}
              className="w-full px-8 py-6 bg-gradient-to-r from-primary to-tealMedium text-white flex items-center justify-between hover:from-primary/90 hover:to-tealMedium/90 transition-all"
            >
              <div className="flex items-center">
                <Shield className="w-8 h-8 mr-4" />
                <h2 className="text-2xl font-bold">Risk Factors & Causes</h2>
              </div>
              {expandedSection === 'risk' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </button>
            
            {expandedSection === 'risk' && (
              <div className="p-8">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Cancer occurs due to mutations in genes responsible for regulating normal cell growth. 
                  These mutations may be inherited or result from external influences like radiation, chemicals, or aging.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">Risk Factors Include:</h3>
                    <div className="space-y-3">
                      {riskFactors.map((factor, index) => (
                        <div key={index} className="flex items-start p-3 bg-tealLight/10 rounded-lg">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{factor}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Risk Assessment Visual */}
                  <div className="bg-gradient-to-br from-primary/5 to-tealLight/20 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-primary mb-4">Risk Assessment</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Age Factor</span>
                        <div className="w-32 bg-gray-200 rounded-full h-3">
                          <div className="bg-red-400 h-3 rounded-full w-3/4"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Genetic Factors</span>
                        <div className="w-32 bg-gray-200 rounded-full h-3">
                          <div className="bg-orange-400 h-3 rounded-full w-1/2"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Lifestyle Factors</span>
                        <div className="w-32 bg-gray-200 rounded-full h-3">
                          <div className="bg-yellow-400 h-3 rounded-full w-2/3"></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-textGray mt-4">
                      80% of patients have no significant family history
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Symptoms */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleSection('symptoms')}
              className="w-full px-8 py-6 bg-gradient-to-r from-tealMedium to-tealLight text-white flex items-center justify-between hover:from-tealMedium/90 hover:to-tealLight/90 transition-all"
            >
              <div className="flex items-center">
                <Activity className="w-8 h-8 mr-4" />
                <h2 className="text-2xl font-bold">Symptoms to Watch For</h2>
              </div>
              {expandedSection === 'symptoms' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </button>
            
            {expandedSection === 'symptoms' && (
              <div className="p-8">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <p className="text-yellow-800 font-medium">
                    ⚠️ Initially, breast cancer may not cause any symptoms. Early detection is crucial for successful treatment.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {symptoms.map((symptom, index) => (
                    <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-100 rounded-lg p-4">
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-red-400 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{symptom}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 bg-primary/5 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-primary mb-3">Remember:</h3>
                  <p className="text-gray-700">
                    Any unusual changes in your breast should be examined by a healthcare professional. 
                    Most breast lumps are not cancerous, but it's important to get them checked.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Diagnosis */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleSection('diagnosis')}
              className="w-full px-8 py-6 bg-gradient-to-r from-tealLight to-primary text-white flex items-center justify-between hover:from-tealLight/90 hover:to-primary/90 transition-all"
            >
              <div className="flex items-center">
                <Stethoscope className="w-8 h-8 mr-4" />
                <h2 className="text-2xl font-bold">Diagnosis Methods</h2>
              </div>
              {expandedSection === 'diagnosis' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </button>
            
            {expandedSection === 'diagnosis' && (
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Mammography</h3>
                    <p className="text-sm text-gray-600">
                      Specialized X-ray imaging where the breast is compressed between plates for clear visualization
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-tealMedium/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-tealMedium" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-tealMedium mb-2">Ultrasound Scan</h3>
                    <p className="text-sm text-gray-600">
                      High-frequency sound waves create images of breast tissue structures
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-tealLight/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Biopsy</h3>
                    <p className="text-sm text-gray-600">
                      Small tissue sample examined under microscope to determine if cancerous
                    </p>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Early Detection is Key</h3>
                  <p className="text-green-700">
                    The early detection of cancer makes treatment easier and more successful. 
                    Regular screening and self-examination are important for early identification.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Treatment */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              onClick={() => toggleSection('treatment')}
              className="w-full px-8 py-6 bg-gradient-to-r from-primary via-tealMedium to-tealLight text-white flex items-center justify-between hover:opacity-90 transition-all"
            >
              <div className="flex items-center">
                <Heart className="w-8 h-8 mr-4" />
                <h2 className="text-2xl font-bold">Treatment Options</h2>
              </div>
              {expandedSection === 'treatment' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </button>
            
            {expandedSection === 'treatment' && (
              <div className="p-8">
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  A/Prof Fosh will plan your treatment based on the size and stage of cancer. 
                  Treatment targets and destroys cancer cells while preventing recurrence.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {treatments.map((treatment, index) => (
                    <div key={index} className="bg-gradient-to-br from-primary/5 to-tealLight/10 border border-primary/20 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-primary mb-3">{treatment.name}</h3>
                      <p className="text-gray-700">{treatment.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Staging Process</h3>
                  <p className="text-blue-700 mb-3">
                    When diagnosed, A/Prof Fosh will arrange "Staging Scans" including CT Scan and Bone Scan 
                    to determine the extent of cancer and plan appropriate treatment.
                  </p>
                  <p className="text-blue-700">
                    You will then have another appointment to discuss results and treatment options available to you.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Medical Professional */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-primary/10 to-tealLight/20 rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                <img
                                      src={doctorimg}
                                      alt="Dr. Vanitha"
                                      className="w-full h-full object-cover"
                                    />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-2">Meet Dr. Vanithah</h2>
              <p className="text-xl text-tealMedium font-semibold mb-4">Breast & Surgical Oncology Specialist</p>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Specialized care in breast cancer diagnosis, treatment, and surgical procedures. 
                Comprehensive approach to patient care with focus on personalized treatment plans.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <h3 className="font-semibold text-primary mb-2">Services Offered</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Breast Cancer Surgery</li>
                  <li>Breast Biopsy</li>
                  <li>Breast Pain Treatment</li>
                  <li>Breast Lumps Assessment</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <h3 className="font-semibold text-primary mb-2">Patient Resources</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>First Visit Information</li>
                  <li>Patient Forms</li>
                  <li>Payment Options</li>
                  <li>Insurance Guidance</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <h3 className="font-semibold text-primary mb-2">Specialized Care</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Breast Shape Changes</li>
                  <li>Nipple Discharge</li>
                  <li>Comprehensive Screening</li>
                  <li>Follow-up Care</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-primary to-tealMedium text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Take Action Today</h2>
            <p className="text-xl mb-8 opacity-90">
              Early detection and professional care are your best defense against breast cancer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BreastCancer;