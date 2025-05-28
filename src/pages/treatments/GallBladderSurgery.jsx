import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertTriangle, Scissors, Activity, Shield, Clock, Home } from 'lucide-react';

const GallBladderSurgery = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = [
    {
      id: 'overview',
      title: 'About Gallbladder & Surgery',
      icon: <Activity className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-tealLight bg-opacity-20 p-4 rounded-lg border-l-4 border-primary">
            <h4 className="font-semibold text-primary mb-2">What is the Gallbladder?</h4>
            <p className="text-gray-700 leading-relaxed">
              The gallbladder is a small pear-shaped storage organ located under the liver on the right side of the abdomen. It stores bile (yellowish-brown fluid) produced by the liver, which is required to digest fat.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="font-semibold text-tealMedium mb-2">How It Works</h5>
              <p className="text-sm text-gray-700">
                As food enters the small intestine, cholecystokinin (a hormone) signals the gallbladder to contract and release bile through the common bile duct.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h5 className="font-semibold text-tealMedium mb-2">Why Remove It?</h5>
              <p className="text-sm text-gray-700">
                The gallbladder is not essential - bile can reach the small intestine through other pathways, making removal a safe treatment option.
              </p>
            </div>
          </div>

          <div className="bg-primary bg-opacity-10 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-3">Common Gallbladder Diseases</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <span className="font-medium text-gray-800">Gallstones</span>
                  <p className="text-sm text-gray-600">Concentrated bile that can block ducts (biliary colic)</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <span className="font-medium text-gray-800">Cholecystitis</span>
                  <p className="text-sm text-gray-600">Inflammation of the gallbladder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'procedure',
      title: 'Surgical Procedure',
      icon: <Scissors className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary to-tealMedium text-white p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-3">Laparoscopic Cholecystectomy</h4>
            <p className="text-primary-100">Minimally invasive surgical method using a laparoscope - a small, thin tube with light and video camera for visualization.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-primary text-lg">Step-by-Step Procedure</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                <div>
                  <h5 className="font-medium text-gray-800">General Anesthesia</h5>
                  <p className="text-sm text-gray-600">Patient is put under general anesthesia for comfort and safety</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-tealMedium bg-opacity-10 rounded-lg">
                <div className="w-8 h-8 bg-tealMedium text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                <div>
                  <h5 className="font-medium text-gray-800">Small Incisions</h5>
                  <p className="text-sm text-gray-600">Surgeon makes 3-4 small incisions in the abdomen</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-tealLight bg-opacity-20 rounded-lg">
                <div className="w-8 h-8 bg-tealLight text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                <div>
                  <h5 className="font-medium text-gray-800">Laparoscope Insertion</h5>
                  <p className="text-sm text-gray-600">Laparoscope inserted through one incision, other instruments through remaining incisions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-textGray text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                <div>
                  <h5 className="font-medium text-gray-800">Abdomen Inflation</h5>
                  <p className="text-sm text-gray-600">CO₂ injected to inflate abdominal cavity for better visualization</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-primary bg-opacity-10 rounded-lg">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
                <div>
                  <h5 className="font-medium text-gray-800">Gallbladder Removal</h5>
                  <p className="text-sm text-gray-600">Surgeon cuts bile duct and blood vessels, then removes gallbladder</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-tealLight bg-opacity-20 p-4 rounded-lg border border-tealLight border-opacity-30">
            <h4 className="font-semibold text-tealMedium mb-2">Additional Procedure: Cholangiogram</h4>
            <p className="text-sm text-gray-700">
              During surgery, surgeon may perform a cholangiogram using X-rays and dye to view bile ducts, identify missed gallstones, or detect obstructions. Special instruments can remove any stones found.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'recovery',
      title: 'Post-Operative Care & Recovery',
      icon: <Home className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-primary bg-opacity-10 rounded-lg">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Same Day</h4>
              <p className="text-sm text-gray-600">Can go home same day or next day after anesthesia recovery</p>
            </div>
            
            <div className="text-center p-4 bg-tealMedium bg-opacity-10 rounded-lg">
              <div className="w-12 h-12 bg-tealMedium rounded-full flex items-center justify-center mx-auto mb-3">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-tealMedium mb-2">24 Hours</h4>
              <p className="text-sm text-gray-600">Return to normal daily activities within 24 hours</p>
            </div>
            
            <div className="text-center p-4 bg-tealLight bg-opacity-10 rounded-lg">
              <div className="w-12 h-12 bg-tealLight rounded-full flex items-center justify-center mx-auto mb-3">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-tealLight mb-2">1 Week</h4>
              <p className="text-sm text-gray-600">Resume work and most regular activities</p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">Activity Restrictions</h4>
            <p className="text-sm text-yellow-700">
              Avoid strenuous activities for a few weeks after surgery. Follow your surgeon's specific guidelines for lifting restrictions and physical activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <h5 className="font-semibold text-green-800 mb-2">What You Can Do</h5>
              <div className="space-y-1 text-sm text-green-700">
                <p>✓ Light walking immediately</p>
                <p>✓ Normal diet gradually</p>
                <p>✓ Shower after 24 hours</p>
                <p>✓ Drive when comfortable</p>
              </div>
            </div>
            
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
              <h5 className="font-semibold text-red-800 mb-2">Avoid Initially</h5>
              <div className="space-y-1 text-sm text-red-700">
                <p>× Heavy lifting (below 10 lbs)</p>
                <p>× Strenuous exercise</p>
                <p>× Swimming/bathing</p>
                <p>× Driving while on pain meds</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'risks',
      title: 'Risks & Complications',
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
              <h4 className="font-semibold text-orange-800">General Surgical Risks</h4>
            </div>
            <p className="text-sm text-orange-700 mb-3">
              Gallbladder removal is generally safe, but like all operations, there are potential risks and complications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h5 className="font-semibold text-primary">Common Risks</h5>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Bleeding</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Infection</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Reaction to anesthesia</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h5 className="font-semibold text-primary">Specific Complications</h5>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Injury to bile duct</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Bile fluid leakage</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Bowel or blood vessel damage</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-2">Risk Mitigation</h5>
            <p className="text-sm text-blue-700">
              These complications are rare. Your surgeon will discuss all risks with you before surgery and take measures to minimize them during the procedure.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'advantages',
      title: 'Advantages of Laparoscopic Surgery',
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h4 className="text-xl font-bold text-primary mb-2">Why Choose Laparoscopic?</h4>
            <p className="text-tealMedium">Compared to traditional open surgery, laparoscopic approach offers significant benefits</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-primary bg-opacity-10 p-4 rounded-lg border-l-4 border-primary">
                <div className="flex items-center space-x-3 mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <h5 className="font-semibold text-primary">Shorter Hospital Stay</h5>
                </div>
                <p className="text-sm text-gray-700">Most patients go home same day or next day, compared to 3-5 days for open surgery</p>
              </div>
              
              <div className="bg-tealMedium bg-opacity-10 p-4 rounded-lg border-l-4 border-tealMedium">
                <div className="flex items-center space-x-3 mb-2">
                  <Scissors className="w-5 h-5 text-tealMedium" />
                  <h5 className="font-semibold text-tealMedium">Smaller Incisions</h5>
                </div>
                <p className="text-sm text-gray-700">3-4 small keyhole incisions instead of one large 5-7 inch incision</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-tealLight bg-opacity-20 p-4 rounded-lg border-l-4 border-tealLight">
                <div className="flex items-center space-x-3 mb-2">
                  <Shield className="w-5 h-5 text-tealLight" />
                  <h5 className="font-semibold text-tealLight">Less Pain</h5>
                </div>
                <p className="text-sm text-gray-700">Significantly reduced post-operative pain and discomfort</p>
              </div>
              
              <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
                <div className="flex items-center space-x-3 mb-2">
                  <Activity className="w-5 h-5 text-green-600" />
                  <h5 className="font-semibold text-green-700">Faster Recovery</h5>
                </div>
                <p className="text-sm text-gray-700">Return to normal activities within days, not weeks</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary to-tealLight p-6 rounded-lg text-white text-center">
            <h4 className="text-lg font-bold mb-2">Better Cosmetic Results</h4>
            <p className="text-primary-100">Minimal scarring with small, barely visible incisions that heal beautifully</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="p-4">
              <div className="text-2xl font-bold text-primary mb-1">95%</div>
              <div className="text-sm text-textGray">Success Rate</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-tealMedium mb-1">1-2 Days</div>
              <div className="text-sm text-textGray">Hospital Stay</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-tealLight mb-1">1 Week</div>
              <div className="text-sm text-textGray">Return to Work</div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
          <Activity className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-primary mb-2">
          Laparoscopic Gallbladder Surgery
        </h1>
        <p className="text-lg text-tealMedium font-medium">
          Minimally Invasive Cholecystectomy
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-tealLight mx-auto mt-4"></div>
      </div>

      {/* Key Benefits */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="text-center p-4 bg-primary bg-opacity-10 rounded-lg border-2 border-primary border-opacity-20">
          <div className="text-2xl font-bold text-primary">Same Day</div>
          <div className="text-sm text-textGray">Discharge</div>
        </div>
        <div className="text-center p-4 bg-tealMedium bg-opacity-10 rounded-lg border-2 border-tealMedium border-opacity-20">
          <div className="text-2xl font-bold text-tealMedium">24 Hours</div>
          <div className="text-sm text-textGray">Normal Activities</div>
        </div>
        <div className="text-center p-4 bg-tealLight bg-opacity-10 rounded-lg border-2 border-tealLight border-opacity-20">
          <div className="text-2xl font-bold text-tealLight">1 Week</div>
          <div className="text-sm text-textGray">Return to Work</div>
        </div>
        <div className="text-center p-4 bg-green-100 rounded-lg border-2 border-green-200">
          <div className="text-2xl font-bold text-green-600">Minimal</div>
          <div className="text-sm text-textGray">Scarring</div>
        </div>
      </div>

      {/* Expandable Sections */}
      <div className="space-y-4">
        {sections.map((section) => (
          <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors duration-200"
            >
              <div className="flex items-center space-x-3">
                <div className="text-primary">
                  {section.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {section.title}
                </h3>
              </div>
              <div className="text-textGray">
                {activeSection === section.id ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
            </button>
            
            {activeSection === section.id && (
              <div className="px-6 py-6 bg-white border-t border-gray-100">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-8 p-4 bg-primary bg-opacity-10 rounded-lg border-l-4 border-primary">
        <div className="flex items-start space-x-3">
          <Shield className="w-5 h-5 text-primary mt-0.5" />
          <div>
            <h4 className="font-semibold text-primary mb-1">Safe & Effective Treatment</h4>
            <p className="text-sm text-gray-700">
              Laparoscopic cholecystectomy is the gold standard treatment for gallbladder diseases. The procedure has excellent success rates and most people experience significant improvement in their symptoms after surgery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallBladderSurgery;