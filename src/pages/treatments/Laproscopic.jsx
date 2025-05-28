import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertTriangle, Stethoscope, Scissors, Eye, Heart } from 'lucide-react';

const Laparoscopic = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = [
    {
      id: 'overview',
      title: 'What is Inguinal Hernia?',
      icon: <Eye className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            A hernia is a bulge formed when the internal organs of your abdominal cavity are pushed through a weakened spot in your abdominal wall. An inguinal hernia specifically occurs when part of your small intestine or fatty tissue protrudes through a weak spot in the groin area.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-tealLight bg-opacity-20 p-4 rounded-lg border-l-4 border-primary">
              <h4 className="font-semibold text-primary mb-2">Indirect Inguinal Hernia</h4>
              <p className="text-sm text-gray-700">Most common type, caused when abdominal muscle walls fail to close before birth. More frequent in males due to reproductive system development.</p>
            </div>
            <div className="bg-tealMedium bg-opacity-20 p-4 rounded-lg border-l-4 border-tealMedium">
              <h4 className="font-semibold text-tealMedium mb-2">Direct Inguinal Hernia</h4>
              <p className="text-sm text-gray-700">Develops later in life due to tissue degeneration and pressure from activities like coughing, straining, or heavy lifting.</p>
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
            <h4 className="font-semibold text-gray-800 mb-3">Common Symptoms</h4>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Pain or discomfort in groin</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Heavy sensation in groin</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Burning or aching bulge</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Testicular pain/swelling (men)</span>
              </div>
            </div>
          </div>
          
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <h4 className="font-semibold text-red-800">Emergency Signs (Strangulated Hernia)</h4>
            </div>
            <div className="space-y-1 text-sm text-red-700">
              <p>• Fever and increased heart rate</p>
              <p>• Sudden, intensifying pain</p>
              <p>• Reddish or bluish bulge discoloration</p>
              <p>• Nausea and vomiting</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'diagnosis',
      title: 'Diagnosis Methods',
      icon: <Heart className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-tealLight bg-opacity-10 rounded-lg">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Physical Exam</h4>
              <p className="text-sm text-gray-600">Doctor examines groin bulge and performs cough test</p>
            </div>
            
            <div className="text-center p-4 bg-tealMedium bg-opacity-10 rounded-lg">
              <div className="w-12 h-12 bg-tealMedium rounded-full flex items-center justify-center mx-auto mb-3">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-tealMedium mb-2">Imaging Tests</h4>
              <p className="text-sm text-gray-600">X-rays, MRI, or CT scans to check organ protrusion</p>
            </div>
            
            <div className="text-center p-4 bg-tealLight bg-opacity-10 rounded-lg">
              <div className="w-12 h-12 bg-tealLight rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-tealLight mb-2">Blood Tests</h4>
              <p className="text-sm text-gray-600">Check for inflammation, infection, or tissue death</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Specialized Tests</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>Biopsy:</strong> Sample removal to check for cancer presence</p>
              <p><strong>Herniagram:</strong> Radio-opaque liquid injection to visualize hernia on X-ray</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'treatment',
      title: 'Laparoscopic Treatment',
      icon: <Scissors className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary to-tealMedium text-white p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-3">Laparoscopic Surgery</h4>
            <p className="text-primary-100">Minimally invasive procedure performed under general anesthesia using small incisions and specialized instruments.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-primary text-lg">Procedure Steps</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <p className="text-sm text-gray-700">Several small incisions made on abdomen</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-tealMedium text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <p className="text-sm text-gray-700">Laparoscope and instruments inserted</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-tealLight text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <p className="text-sm text-gray-700">Camera guides surgeon with magnified images</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-textGray text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <p className="text-sm text-gray-700">Bulge pushed back, wall repaired with mesh</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-primary text-lg">Best Candidates</h4>
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <div className="space-y-2 text-sm text-green-800">
                  <p>✓ Patients with recurring hernia</p>
                  <p>✓ Prior traditional hernia repair</p>
                  <p>✓ Bilateral inguinal hernias</p>
                  <p>✓ Suitable for smaller hernias</p>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <h5 className="font-semibold text-yellow-800 mb-2">Not Recommended For:</h5>
                <div className="space-y-1 text-sm text-yellow-700">
                  <p>• Very large hernias</p>
                  <p>• Prior pelvic surgery patients</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-tealLight bg-opacity-20 p-4 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Repair Methods</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="text-center">
                <div className="font-medium text-tealMedium">Herniorrhaphy</div>
                <p className="text-sm text-gray-600">Stitching abdominal wall</p>
              </div>
              <div className="text-center">
                <div className="font-medium text-tealMedium">Hernioplasty</div>
                <p className="text-sm text-gray-600">Mesh support for weakened wall</p>
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
          <Scissors className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-primary mb-2">
          Laparoscopic Mesh Repair
        </h1>
        <p className="text-lg text-tealMedium font-medium">
          Inguinal / Femoral Hernia Treatment
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-tealLight mx-auto mt-4"></div>
      </div>

      {/* Key Stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="text-center p-4 bg-primary bg-opacity-10 rounded-lg border-2 border-primary border-opacity-20">
          <div className="text-2xl font-bold text-primary">75%</div>
          <div className="text-sm text-textGray">More common in men</div>
        </div>
        <div className="text-center p-4 bg-tealMedium bg-opacity-10 rounded-lg border-2 border-tealMedium border-opacity-20">
          <div className="text-2xl font-bold text-tealMedium">85%</div>
          <div className="text-sm text-textGray">Are indirect type</div>
        </div>
        <div className="text-center p-4 bg-tealLight bg-opacity-10 rounded-lg border-2 border-tealLight border-opacity-20">
          <div className="text-2xl font-bold text-tealLight">95%</div>
          <div className="text-sm text-textGray">Success rate</div>
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
            <h4 className="font-semibold text-tealMedium mb-1">Important Note</h4>
            <p className="text-sm text-gray-700">
              Small, asymptomatic inguinal hernias may not require immediate treatment and can be monitored with a wait-and-watch approach. However, hernias in children are generally operated on due to high strangulation risk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laparoscopic;