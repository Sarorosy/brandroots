import React, { useState, useEffect, useRef } from 'react';
import { 
  Activity, 
  AlertTriangle, 
  Stethoscope, 
  Search, 
  Shield, 
  ChevronRight, 
  ChevronDown,
  User,
  Calendar,
  MapPin,
  Zap,
  FileText,
  Pill,
  Scissors,
  Eye,
  Heart,
  Target,
  Info
} from 'lucide-react';
import { useParams } from "react-router-dom";

const GeneralConditions = () => {
    const { condition } = useParams();
  const [expandedSection, setExpandedSection] = useState(null);

   const herniaRef = useRef(null);
  const gallstonesRef = useRef(null);
  const gallbladderRef = useRef(null);


  // Expand and scroll to the matching section
  useEffect(() => {
    if (condition) {
      setExpandedSection(condition); // Expand

      // Scroll
      setTimeout(() => {
        if (condition == "hernia" && herniaRef.current) {
          herniaRef.current.scrollIntoView({ behavior: "smooth" });
        }
        if (condition == "gall-stones" && gallstonesRef.current) {
          gallstonesRef.current.scrollIntoView({ behavior: "smooth" });
        }
        if (condition == "gall-bladder-disease" && gallbladderRef.current) {
          gallbladderRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Slight delay to wait for render
    }
  }, [condition]);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const ConditionCard = ({ icon: Icon, title, children, sectionKey, gradientFrom, gradientTo }) => (
    <div className="mb-8">
      <div 
        className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl border border-tealLight/20"
        onClick={() => toggleSection(sectionKey)}
      >
        <div className={`p-6 bg-gradient-to-r from-${gradientFrom} to-${gradientTo}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm mr-4">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">{title}</h2>
            </div>
            {expandedSection === sectionKey ? 
              <ChevronDown className="w-6 h-6 text-white" /> : 
              <ChevronRight className="w-6 h-6 text-white" />
            }
          </div>
        </div>
        
        {expandedSection === sectionKey && (
          <div className="p-8 bg-tealLight/5">
            {children}
          </div>
        )}
      </div>
    </div>
  );

  const SymptomBadge = ({ symptom }) => (
    <div className="inline-flex items-center px-4 py-2 rounded-full bg-tealLight/10 border border-tealLight/20 mr-2 mb-2 hover:bg-tealLight/20 transition-colors duration-200">
      <div className="w-2 h-2 rounded-full bg-tealLight mr-2"></div>
      <span className="text-sm text-textGray font-medium">{symptom}</span>
    </div>
  );

  const InfoBox = ({ icon: Icon, title, content, bgColor, iconColor }) => (
    <div className={`p-5 rounded-xl ${bgColor} border border-tealLight/20 mb-4 hover:shadow-md transition-all duration-200`}>
      <div className="flex items-start">
        <div className={`p-2 rounded-lg ${iconColor} mr-3 mt-1`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-primary">{title}</h4>
          <p className="text-sm leading-relaxed text-textGray">{content}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-tealLight/10 via-white to-tealMedium/10">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <pattern id="medical-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="#4C9494"/>
                <path d="M 30 0 L 30 60 M 0 30 L 60 30" stroke="#8BC5C5" strokeWidth="0.5" opacity="0.6"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#medical-grid)" />
          </svg>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-20 relative">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-primary to-tealMedium shadow-lg">
                <Stethoscope className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-tealMedium bg-clip-text text-transparent">
              General Medical Conditions
            </h1>
            
            <div className="w-32 h-2 rounded-full mx-auto mb-8 bg-gradient-to-r from-tealMedium to-tealLight"></div>
            
            <p className="text-xl leading-relaxed max-w-3xl mx-auto text-textGray">
              Comprehensive information about common medical conditions, their symptoms, causes, diagnosis, and treatment options.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-16">
        {/* Hernia Section */}
        <ConditionCard 
          icon={Activity} 
          title="Hernia" 
          sectionKey="hernia"
          
          gradientFrom="primary"
          gradientTo="tealMedium"
        >
          <div ref={herniaRef} className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-tealLight/30 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-tealMedium mr-3">
                  <Info className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary">What is Hernia?</h3>
              </div>
              <p className="text-base leading-relaxed text-textGray">
                Hernia is an opening formed by the lining of the abdominal cavity. Abdominal wall hernia occurs when the contents of the intestine bulges out of the abdominal wall.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/60 rounded-xl p-6 border border-tealLight/20">
                <h4 className="text-lg font-semibold mb-4 flex items-center text-primary">
                  <div className="p-2 rounded-lg bg-red-100 mr-3">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  </div>
                  Symptoms
                </h4>
                <div className="space-y-2">
                  {[
                    "Abdominal pain",
                    "Bulge in abdominal area", 
                    "Groin pain (increases with coughing/lifting)",
                    "Gurgling sensation"
                  ].map((symptom, index) => (
                    <SymptomBadge key={index} symptom={symptom} />
                  ))}
                </div>
              </div>

              <div className="bg-white/60 rounded-xl p-6 border border-tealLight/20">
                <h4 className="text-lg font-semibold mb-4 flex items-center text-primary">
                  <div className="p-2 rounded-lg bg-tealLight/20 mr-3">
                    <Target className="w-5 h-5 text-tealMedium" />
                  </div>
                  Types of Hernia
                </h4>
                <div className="space-y-3">
                  {[
                    { name: "Inguinal Hernia", desc: "Most common, affects groin area" },
                    { name: "Femoral Hernia", desc: "Bulge in upper thigh area" },
                    { name: "Umbilical Hernia", desc: "Around belly button" },
                    { name: "Recurrent Hernia", desc: "Returns at same site" }
                  ].map((type, index) => (
                    <div key={index} className="flex items-start p-3 rounded-lg bg-tealLight/10 border border-tealLight/20">
                      <div className="w-3 h-3 rounded-full mt-1 mr-3 bg-tealLight"></div>
                      <div>
                        <p className="font-medium text-primary">{type.name}</p>
                        <p className="text-sm text-textGray">{type.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <InfoBox
              icon={Eye}
              title="Diagnosis"
              content="Physical examination by physician, confirmed by ultrasound if needed. Hernia size increases with coughing, bending, or straining."
              bgColor="bg-blue-50"
              iconColor="bg-blue-500"
            />
          </div>
        </ConditionCard>

        {/* Gallstones Section */}
        <ConditionCard 
          icon={Zap} 
          title="Gallstones" 
          sectionKey="gall-stones"
          gradientFrom="tealMedium"
          gradientTo="tealLight"
        >
          <div ref={gallstonesRef} className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-tealLight/30 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-tealMedium mr-3">
                  <Info className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary">About Gallstones</h3>
              </div>
              <p className="text-base leading-relaxed mb-4 text-textGray">
                Small, hard deposits that form inside the gallbladder due to imbalance in bile components. Size can range from a grain of sand to a golf ball.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-tealLight/15 border border-tealLight/30">
                  <h5 className="font-semibold mb-2 text-primary">Cholesterol Stones</h5>
                  <p className="text-sm text-textGray">Yellowish-green, made of hardened cholesterol</p>
                </div>
                <div className="p-4 rounded-lg bg-tealLight/15 border border-tealLight/30">
                  <h5 className="font-semibold mb-2 text-primary">Pigment Stones</h5>
                  <p className="text-sm text-textGray">Dark and small, made of bilirubin</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-white/60 rounded-xl p-6 border border-tealLight/20">
                <h4 className="text-lg font-semibold mb-4 flex items-center text-primary">
                  <div className="p-2 rounded-lg bg-purple-100 mr-3">
                    <User className="w-5 h-5 text-purple-600" />
                  </div>
                  Risk Factors
                </h4>
                <div className="space-y-2">
                  {[
                    "Pregnancy & hormone therapy",
                    "Age >60 years",
                    "Family history",
                    "Diabetes & Obesity",
                    "Rapid weight loss"
                  ].map((factor, index) => (
                    <div key={index} className="flex items-center p-2 rounded bg-tealLight/10 border border-tealLight/20">
                      <Shield className="w-4 h-4 mr-2 text-tealMedium" />
                      <span className="text-sm text-textGray">{factor}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/60 rounded-xl p-6 border border-tealLight/20">
                <h4 className="text-lg font-semibold mb-4 flex items-center text-primary">
                  <div className="p-2 rounded-lg bg-red-100 mr-3">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  </div>
                  Symptoms
                </h4>
                <div className="space-y-2">
                  {[
                    "Upper abdominal pain",
                    "Pain between shoulder blades",
                    "Nausea & vomiting",
                    "Fever with chills",
                    "Yellowing of skin/eyes"
                  ].map((symptom, index) => (
                    <SymptomBadge key={index} symptom={symptom} />
                  ))}
                </div>
              </div>

              <div className="bg-white/60 rounded-xl p-6 border border-tealLight/20">
                <h4 className="text-lg font-semibold mb-4 flex items-center text-primary">
                  <div className="p-2 rounded-lg bg-red-100 mr-3">
                    <Heart className="w-5 h-5 text-red-600" />
                  </div>
                  Complications
                </h4>
                <div className="space-y-2">
                  {[
                    "Bile duct blockage",
                    "Pancreatitis",
                    "Gallbladder inflammation",
                    "Increased cancer risk"
                  ].map((complication, index) => (
                    <div key={index} className="flex items-start p-2 rounded bg-red-50 border border-red-200">
                      <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-500" />
                      <span className="text-sm text-textGray">{complication}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <InfoBox
                icon={Search}
                title="Diagnosis"
                content="Based on symptoms, medical history, and imaging studies (ultrasound, CT, MRI, ERCP). Blood tests may be ordered to check for complications."
                bgColor="bg-blue-50"
                iconColor="bg-blue-500"
              />
              
              <InfoBox
                icon={Pill}
                title="Treatment"
                content="Asymptomatic gallstones don't require treatment. Options include medications to dissolve stones or surgical removal (cholecystectomy)."
                bgColor="bg-green-50"
                iconColor="bg-green-500"
              />
            </div>
          </div>
        </ConditionCard>

        {/* Gallbladder Disease Section */}
        <ConditionCard 
          icon={FileText} 
          title="Gallbladder Disease" 
          sectionKey="gall-bladder-disease"
          gradientFrom="tealLight"
          gradientTo="tealMedium"
        >
          <div ref={gallbladderRef} className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-tealLight/30 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-tealMedium mr-3">
                  <Info className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary">Overview</h3>
              </div>
              <p className="text-base leading-relaxed text-textGray">
                Gallbladder disease is an umbrella term for several conditions affecting the gallbladder. Inflammation of the gallbladder wall (cholecystitis) is responsible for most gallbladder diseases.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4 bg-white/60 rounded-xl p-6 border border-tealLight/20">
                <h4 className="text-lg font-semibold flex items-center text-primary">
                  <div className="p-2 rounded-lg bg-tealLight/20 mr-3">
                    <Target className="w-5 h-5 text-tealMedium" />
                  </div>
                  Types of Conditions
                </h4>
                {[
                  "Gallstones",
                  "Gallbladder polyps", 
                  "Gallbladder cancer",
                  "Sclerosing cholangitis"
                ].map((condition, index) => (
                  <div key={index} className="flex items-center p-3 rounded-lg bg-tealLight/10 border border-tealLight/20">
                    <div className="w-3 h-3 rounded-full mr-3 bg-tealLight"></div>
                    <span className="font-medium text-primary">{condition}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 bg-white/60 rounded-xl p-6 border border-tealLight/20">
                <h4 className="text-lg font-semibold flex items-center text-primary">
                  <div className="p-2 rounded-lg bg-red-100 mr-3">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                  </div>
                  Common Symptoms
                </h4>
                <div className="space-y-2">
                  {[
                    "Severe right upper abdominal pain",
                    "Pain traveling to back/shoulder",
                    "Nausea and vomiting", 
                    "Fever"
                  ].map((symptom, index) => (
                    <SymptomBadge key={index} symptom={symptom} />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-4">
              <InfoBox
                icon={Search}
                title="Diagnosis"
                content="Medical history, physical exam, X-ray imaging, ultrasound, nuclear scanning, and blood tests."
                bgColor="bg-blue-50"
                iconColor="bg-blue-500"
              />
              
              <InfoBox
                icon={Pill}
                title="Treatment Options"
                content="Antibiotics, medications to dissolve stones, lithotripsy (shock waves), or surgical removal."
                bgColor="bg-green-50"
                iconColor="bg-green-500"
              />
              
              <InfoBox
                icon={Scissors}
                title="Surgery"
                content="Cholecystectomy recommended for multiple episodes - can be minimally invasive or open surgery."
                bgColor="bg-purple-50"
                iconColor="bg-purple-500"
              />
            </div>
          </div>
        </ConditionCard>

        {/* Medical Advice Footer */}
        <div className="mt-16">
          <div className="bg-white rounded-3xl p-8 text-center shadow-lg border-t-4 border-tealMedium">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-gradient-to-br from-primary/10 to-tealMedium/10 border border-tealLight/30">
                <Shield className="w-10 h-10 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Important Medical Notice
            </h3>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto text-textGray">
              This information is for educational purposes only and should not replace professional medical advice. 
              Always consult with qualified healthcare professionals for proper diagnosis and treatment.
            </p>
            <div className="flex justify-center space-x-8 mt-6">
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-tealMedium/10 mr-2">
                  <Stethoscope className="w-5 h-5 text-tealMedium" />
                </div>
                <span className="text-sm text-textGray font-medium">Professional Care</span>
              </div>
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-tealMedium/10 mr-2">
                  <Shield className="w-5 h-5 text-tealMedium" />
                </div>
                <span className="text-sm text-textGray font-medium">Trusted Information</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralConditions;