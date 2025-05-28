import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertTriangle, User, Baby, Stethoscope, Scissors, Shield } from 'lucide-react';

const OpenMeshRepair = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = [
    {
      id: 'overview',
      title: 'Understanding Umbilical Hernia',
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-tealLight bg-opacity-20 p-4 rounded-lg border-l-4 border-primary">
            <h4 className="font-semibold text-primary mb-2">What is an Umbilical Hernia?</h4>
            <p className="text-gray-700 leading-relaxed">
              An umbilical (paraumbilical) hernia is a bulge that forms near the navel or belly button when part of the intestine, fat, or fluid pushes through a weakened muscle of the abdomen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-primary bg-opacity-10 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <Baby className="w-5 h-5 text-primary" />
                <h4 className="font-semibold text-primary">In Children</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Commonly occurs in infants and young children, especially premature babies.
              </p>
              <div className="bg-white p-3 rounded border-l-3 border-primary">
                <h5 className="font-medium text-gray-800 mb-2">Cause</h5>
                <p className="text-xs text-gray-600">
                  The umbilical cord passes through a muscular opening during pregnancy. Sometimes these muscles fail to close completely after birth, creating a weak spot.
                </p>
              </div>
            </div>
            
            <div className="bg-tealMedium bg-opacity-10 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <User className="w-5 h-5 text-tealMedium" />
                <h4 className="font-semibold text-tealMedium">In Adults</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Develops due to increased abdominal pressure from various conditions.
              </p>
              <div className="bg-white p-3 rounded border-l-3 border-tealMedium">
                <h5 className="font-medium text-gray-800 mb-2">Risk Factors</h5>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>• Being overweight</p>
                  <p>• Multiple pregnancies</p>
                  <p>• Ascites (fluid in belly)</p>
                  <p>• Heavy lifting, coughing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'symptoms',
      title: 'Signs & Symptoms',
      icon: <Stethoscope className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-3">Main Symptom</h4>
            <div className="bg-tealLight bg-opacity-20 p-3 rounded-lg border border-tealLight border-opacity-30">
              <p className="text-gray-700">
                <strong>Swelling or bulge near the navel</strong> - typically ranges from 1 to 5 cm in diameter
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Baby className="w-4 h-4 text-blue-600" />
                <h5 className="font-semibold text-blue-800">In Children</h5>
              </div>
              <div className="space-y-2 text-sm text-blue-700">
                <p>• Bulge noticeable when coughing, crying, or straining</p>
                <p>• May reduce when lying down or calm</p>
                <p>• Generally not painful</p>
              </div>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <User className="w-4 h-4 text-orange-600" />
                <h5 className="font-semibold text-orange-800">In Adults</h5>
              </div>
              <div className="space-y-2 text-sm text-orange-700">
                <p>• May cause pain and discomfort</p>
                <p>• Tends to increase in size over time</p>
                <p>• More likely to become problematic</p>
              </div>
            </div>
          </div>
          
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <h4 className="font-semibold text-red-800">Emergency Warning Signs</h4>
            </div>
            <p className="text-sm text-red-700 mb-2">
              Risk of strangulation (trapped hernia cutting off blood supply). Seek immediate medical attention if you experience:
            </p>
            <div className="grid md:grid-cols-2 gap-2">
              <div className="space-y-1 text-sm text-red-700">
                <p>• Tender, painful, swollen bulge</p>
                <p>• Discolored bulge</p>
              </div>
              <div className="space-y-1 text-sm text-red-700">
                <p>• Vomiting and fever</p>
                <p>• Severe abdominal pain</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'diagnosis',
      title: 'Screening & Diagnosis',
      icon: <Stethoscope className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-primary bg-opacity-10 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-3">Diagnostic Process</h4>
            <p className="text-gray-700 text-sm">
              Your doctor will inquire about symptoms and medical history, followed by comprehensive examination and testing.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 p-4 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <h5 className="font-semibold text-gray-800">Physical Examination</h5>
              </div>
              <div className="ml-11 space-y-2 text-sm text-gray-700">
                <p>• Examination of bulge size and prominence</p>
                <p>• Testing bulge when standing vs. lying down</p>
                <p>• Attempt to reduce bulge by gentle pressure</p>
                <p>• Cough test to observe size changes</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-tealMedium bg-opacity-10 p-4 rounded-lg border border-tealMedium border-opacity-20">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-tealMedium rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <h5 className="font-semibold text-tealMedium">Imaging Tests</h5>
                </div>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>• X-rays</p>
                  <p>• MRI scans</p>
                  <p>• CT scans</p>
                  <p className="text-xs text-gray-600 mt-2">
                    Determine which internal organs are protruding
                  </p>
                </div>
              </div>
              
              <div className="bg-tealLight bg-opacity-20 p-4 rounded-lg border border-tealLight border-opacity-30">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-tealLight rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <h5 className="font-semibold text-tealLight">Blood Tests</h5>
                </div>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>• White blood cell count</p>
                  <p>• Red blood cell count</p>
                  <p className="text-xs text-gray-600 mt-2">
                    Detect infection, inflammation, tissue death, or bleeding
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'treatment',
      title: 'Treatment Options',
      icon: <Scissors className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <Baby className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-blue-800">Children's Treatment</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-green-100 p-3 rounded">
                  <p className="text-sm text-green-800 font-medium">Wait & Watch Approach</p>
                  <p className="text-xs text-green-700">Hernia generally resolves by 18 months</p>
                </div>
                <div>
                  <h5 className="font-medium text-blue-800 mb-2">Surgery Recommended If:</h5>
                  <div className="space-y-1 text-sm text-blue-700">
                    <p>• Painful, trapped, or strangulated</p>
                    <p>• Fails to close by 5-6 years</p>
                    <p>• Large hole (&gt;1 inch diameter)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <User className="w-5 h-5 text-orange-600" />
                <h4 className="font-semibold text-orange-800">Adult Treatment</h4>
              </div>
              <div className="bg-red-100 p-3 rounded mb-3">
                <p className="text-sm text-red-800 font-medium">Surgery Usually Required</p>
                <p className="text-xs text-red-700">Painful and enlarged bulges need surgical repair</p>
              </div>
              <p className="text-sm text-orange-700">
                Surgery prevents complications from strangulation and provides definitive repair of the weakened abdominal wall.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary to-tealMedium text-white p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-3">Open Mesh Repair Surgery</h4>
            <p className="text-primary-100">Surgical repair using open technique with mesh reinforcement for optimal strength and durability.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-primary text-lg">Surgical Procedure</h4>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">Anesthesia Options</h5>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>General Anesthesia:</strong> Most common, complete unconsciousness</p>
                  <p><strong>Local Anesthesia:</strong> For adults with small hernias where general anesthesia may not be safe</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">Alternative Approach</h5>
                <div className="text-sm text-gray-700">
                  <p><strong>Laparoscopy (Keyhole Surgery):</strong></p>
                  <p>May be recommended if hernia has reappeared after prior surgery</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-primary bg-opacity-10 rounded-lg">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                <div>
                  <h5 className="font-medium text-gray-800">Incision</h5>
                  <p className="text-sm text-gray-600">Single incision of 2-3 cm made below the navel</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-tealMedium bg-opacity-10 rounded-lg">
                <div className="w-8 h-8 bg-tealMedium text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                <div>
                  <h5 className="font-medium text-gray-800">Reduction</h5>
                  <p className="text-sm text-gray-600">Protruded part is carefully pushed back into the abdomen</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-tealLight bg-opacity-20 rounded-lg">
                <div className="w-8 h-8 bg-tealLight text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                <div>
                  <h5 className="font-medium text-gray-800">Repair</h5>
                  <p className="text-sm text-gray-600">Weakened abdominal wall stitched with sutures</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-green-100 rounded-lg">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                <div>
                  <h5 className="font-medium text-gray-800">Mesh Reinforcement</h5>
                  <p className="text-sm text-gray-600">For large hernias, mesh patch placed to strengthen weak abdominal wall</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-gray-100 rounded-lg">
                <div className="w-8 h-8 bg-textGray text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
                <div>
                  <h5 className="font-medium text-gray-800">Closure</h5>
                  <p className="text-sm text-gray-600">Skin sutured with dissolvable stitches and dressing applied</p>
                </div>
              </div>
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
          <Shield className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-primary mb-2">
          Open Mesh Repair
        </h1>
        <p className="text-lg text-tealMedium font-medium">
          Umbilical & Para-Umbilical Hernia Treatment
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-tealLight mx-auto mt-4"></div>
      </div>

      {/* Key Facts */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="text-center p-4 bg-primary bg-opacity-10 rounded-lg border-2 border-primary border-opacity-20">
          <div className="text-2xl font-bold text-primary">1-5cm</div>
          <div className="text-sm text-textGray">Typical bulge size</div>
        </div>
        <div className="text-center p-4 bg-tealMedium bg-opacity-10 rounded-lg border-2 border-tealMedium border-opacity-20">
          <div className="text-2xl font-bold text-tealMedium">18mo</div>
          <div className="text-sm text-textGray">Self-resolve in children</div>
        </div>
        <div className="text-center p-4 bg-tealLight bg-opacity-10 rounded-lg border-2 border-tealLight border-opacity-20">
          <div className="text-2xl font-bold text-tealLight">2-3cm</div>
          <div className="text-sm text-textGray">Surgical incision</div>
        </div>
        <div className="text-center p-4 bg-green-100 rounded-lg border-2 border-green-200">
          <div className="text-2xl font-bold text-green-600">Safe</div>
          <div className="text-sm text-textGray">Surgery outcome</div>
        </div>
      </div>

      {/* Age Groups Comparison */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
          <div className="flex items-center space-x-3 mb-4">
            <Baby className="w-8 h-8 text-blue-600" />
            <h3 className="text-xl font-bold text-blue-800">Children</h3>
          </div>
          <div className="space-y-2 text-sm text-blue-700">
            <p>• More common in premature babies</p>
            <p>• Usually painless</p>
            <p>• Often resolves naturally by 18 months</p>
            <p>• Surgery only if complications arise</p>
          </div>
        </div>
        
        <div className="bg-orange-50 border-2 border-orange-200 p-6 rounded-lg">
          <div className="flex items-center space-x-3 mb-4">
            <User className="w-8 h-8 text-orange-600" />
            <h3 className="text-xl font-bold text-orange-800">Adults</h3>
          </div>
          <div className="space-y-2 text-sm text-orange-700">
            <p>• Often painful and uncomfortable</p>
            <p>• Tends to increase in size over time</p>
            <p>• Higher risk of complications</p>
            <p>• Usually requires surgical repair</p>
          </div>
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
      <div className="mt-8 p-4 bg-tealLight bg-opacity-10 rounded-lg border-l-4 border-tealLight">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="w-5 h-5 text-tealMedium mt-0.5" />
          <div>
            <h4 className="font-semibold text-tealMedium mb-1">Important Considerations</h4>
            <p className="text-sm text-gray-700">
              While umbilical hernias in children often resolve naturally, adult umbilical hernias typically require surgical intervention. The mesh repair technique provides excellent long-term results with low recurrence rates. Always consult with a qualified surgeon to determine the best treatment approach for your specific situation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenMeshRepair;