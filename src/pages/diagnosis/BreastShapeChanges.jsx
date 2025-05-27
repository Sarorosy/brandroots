import React from 'react';
import { AlertTriangle, Eye, Clock, Stethoscope, Heart, Search, Activity, Calendar, Baby, Users } from 'lucide-react';

const BreastShapeChanges = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary via-tealMedium to-tealLight">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white bg-opacity-20 rounded-full backdrop-blur-sm">
                <Eye className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Breast Shape Changes
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 font-light max-w-3xl mx-auto leading-relaxed">
              Understanding normal variations and when to seek medical evaluation
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        
        {/* Important Notice */}
        <div className="bg-white rounded-2xl shadow-xl border border-tealLight overflow-hidden">
          <div className="bg-primary p-6">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Important to Remember</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              A change in breast shape does not always mean you have cancer, but any change in the appearance or feel of your breasts should always be investigated by a doctor.
            </p>
          </div>
        </div>

        {/* Breast Anatomy */}
        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
          <div className="bg-primary p-6">
            <div className="flex items-center space-x-3">
              <Activity className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Understanding Breast Tissue</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-lg text-gray-700 mb-6">Breasts are composed of three main tissue types:</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
                <div className="w-12 h-12 bg-tealMedium rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Fatty Tissue</h3>
                <p className="text-sm text-gray-600">Provides shape and cushioning</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
                <div className="w-12 h-12 bg-tealMedium rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Connective Tissue</h3>
                <p className="text-sm text-gray-600">Provides structural support</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
                <div className="w-12 h-12 bg-tealMedium rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Glandular Tissue</h3>
                <p className="text-sm text-gray-600">Produces and transports milk</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-tealMedium p-6 rounded">
              <h4 className="font-semibold text-primary mb-3">Glandular Tissue Organization:</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-10 h-10 bg-tealMedium rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-sm">L</span>
                  </div>
                  <h5 className="font-medium text-primary">Lobes</h5>
                  <p className="text-xs ">Large sections</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-tealMedium rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-sm">L</span>
                  </div>
                  <h5 className="font-medium text-primary">Lobules</h5>
                  <p className="text-xs ">Milk producers</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-tealMedium rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-sm">D</span>
                  </div>
                  <h5 className="font-medium text-primary">Ducts</h5>
                  <p className="text-xs ">Milk carriers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Normal Changes */}
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Normal Breast Changes</h2>
            <p className="text-xl text-textGray max-w-2xl mx-auto">
              Breasts naturally change throughout different life stages, primarily guided by hormones
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Menstrual Changes */}
            <div className="bg-white rounded-2xl shadow-lg border border-pink-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 bg-tealMedium">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">Menstrual Cycle</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">Around your menstrual period, breasts may feel:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Lumpy</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Tender</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Swollen</li>
                </ul>
              </div>
            </div>

            {/* Pregnancy Changes */}
            <div className="bg-white rounded-2xl shadow-lg border border-green-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 bg-tealMedium">
                <div className="flex items-center space-x-3">
                  <Baby className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">Pregnancy</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">During pregnancy:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Breast glands increase in number</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Glands increase in size</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Breasts feel lumpy</li>
                </ul>
              </div>
            </div>

            {/* Menopause Changes */}
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 bg-tealMedium">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">Near Menopause</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">Approaching menopause:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Breasts may lose fat</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Become smaller</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Feel lumpy and tender</li>
                </ul>
              </div>
            </div>

            {/* Post-Menopause Changes */}
            <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 bg-tealMedium">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">After Menopause</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">Post-menopause changes:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Fatty tissue increases</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Breast density decreases</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Overall texture changes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 border border-tealLight p-6 rounded-xl">
            <p className="text-tealMedium font-medium text-center">
              💊 Breast shape changes can also occur while taking hormone medications for menopause or birth control
            </p>
          </div>
        </div>

        {/* Changes Requiring Evaluation */}
        <div className="bg-white rounded-2xl shadow-xl border border-red-100 overflow-hidden">
          <div className="bg-primary p-6">
            <div className="flex items-center space-x-3">
              <Search className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Changes That Need Evaluation</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-lg text-gray-700 mb-6">You should consult your GP if you notice any of these changes:</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-tealLight border border-red-200 p-6 rounded-xl">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="font-semibold  mb-3 text-center">Lumps</h4>
                <p className="text-sm  text-center">
                  New lumps in breast tissue or under the armpit
                </p>
              </div>
              
              <div className="bg-tealLight border border-red-200 p-6 rounded-xl">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="font-semibold  mb-3 text-center">Nipple Changes</h4>
                <p className="text-sm  text-center">
                  Inverted nipples or unusual discharge
                </p>
              </div>
              
              <div className="bg-tealLight border border-red-200 p-6 rounded-xl">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="font-semibold  mb-3 text-center">Skin Changes</h4>
                <p className="text-sm  text-center">
                  Swelling, scaling, redness, dimpling, or puckering
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Evaluation Process */}
        <div className="bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
          <div className="bg-gradient-to-r from-tealMedium to-primary p-6">
            <div className="flex items-center space-x-3">
              <Stethoscope className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">How Changes Are Evaluated</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-lg text-gray-700 mb-6">A/Prof Fosh will conduct a comprehensive assessment:</p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-teal-50 rounded-lg">
                <div className="w-8 h-8 bg-tealMedium rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Medical & Family History Review</h4>
                  <p className="text-gray-600 text-sm">Comprehensive background assessment</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-teal-50 rounded-lg">
                <div className="w-8 h-8 bg-tealMedium rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Physical Examination</h4>
                  <p className="text-gray-600 text-sm">Thorough clinical assessment</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-teal-50 rounded-lg">
                <div className="w-8 h-8 bg-tealMedium rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Imaging Tests</h4>
                  <p className="text-gray-600 text-sm">Mammogram, ultrasound, or MRI as needed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benign Conditions */}
        <div className="bg-white rounded-2xl shadow-xl border border-green-100 overflow-hidden">
          <div className="bg-primary p-6">
            <div className="flex items-center space-x-3">
              <Heart className="w-8 h-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Benign Conditions That Cause Shape Changes</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-lg text-gray-700 mb-6">Many non-cancerous conditions can alter breast shape:</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-green-50 border-l-4  p-4 rounded">
                  <h4 className="font-semibold ">Enlarged Breast Lobules</h4>
                  <p className="text-sm ">Small round lumps</p>
                </div>
                
                <div className="bg-green-50 border-l-4  p-4 rounded">
                  <h4 className="font-semibold ">Scar Tissue</h4>
                  <p className="text-sm ">Painful lumps from healing</p>
                </div>
                
                <div className="bg-green-50 border-l-4  p-4 rounded">
                  <h4 className="font-semibold ">Breast Cysts</h4>
                  <p className="text-sm ">Fluid-filled lumps</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 border-l-4  p-4 rounded">
                  <h4 className="font-semibold ">Fat Necrosis</h4>
                  <p className="text-sm ">Painless firm lump after injury</p>
                </div>
                
                <div className="bg-green-50 border-l-4  p-4 rounded">
                  <h4 className="font-semibold ">Fibroadenoma</h4>
                  <p className="text-sm ">Round, small hard lumps</p>
                </div>
                
                <div className="bg-green-50 border-l-4  p-4 rounded">
                  <h4 className="font-semibold ">Mastitis</h4>
                  <p className="text-sm ">Blocked milk duct while breastfeeding</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-amber-50 border border-amber-200 p-4 rounded-lg">
              <p className="text-amber-800 font-medium">
                ⚠️ <strong>Important Note:</strong> Some conditions like hyperplasia (abnormal cell growth) in ducts and lobules may not be cancerous but can increase your risk of developing breast cancer.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary to-tealMedium rounded-2xl p-8 text-center text-white">
          <Eye className="w-12 h-12 mx-auto mb-4 text-teal-100" />
          <h2 className="text-2xl font-bold mb-4">Stay Vigilant, Stay Informed</h2>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto leading-relaxed">
            Regular self-examination and professional check-ups are key to maintaining breast health. When in doubt, always consult with your healthcare provider for proper evaluation and peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreastShapeChanges;