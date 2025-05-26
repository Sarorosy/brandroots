import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Info, AlertCircle } from 'lucide-react';

const BreastCancerStages = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [selectedStage, setSelectedStage] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Visual representation of breast cancer stages
  const StageVisualization = ({ stage, size = 'large' }) => {
    const dimensions = size === 'large' ? 'w-32 h-32' : 'w-16 h-16';
    
    const renderStage = () => {
      switch(stage) {
        case 0:
          return (
            <div className={`${dimensions} relative bg-pink-50 rounded-full border-2 border-primary flex items-center justify-center`}>
              <div className="w-4 h-4 bg-tealMedium rounded-full opacity-60"></div>
              <div className="absolute top-1 left-1 w-2 h-2 bg-primary rounded-full"></div>
            </div>
          );
        case 1:
          return (
            <div className={`${dimensions} relative bg-pink-100 rounded-full border-2 border-primary flex items-center justify-center`}>
              <div className="w-8 h-8 bg-tealMedium rounded-full"></div>
            </div>
          );
        case 2:
          return (
            <div className={`${dimensions} relative bg-pink-200 rounded-full border-2 border-primary flex items-center justify-center`}>
              <div className="w-12 h-12 bg-tealMedium rounded-full"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"></div>
            </div>
          );
        case 3:
          return (
            <div className={`${dimensions} relative bg-pink-300 rounded-full border-2 border-primary flex items-center justify-center`}>
              <div className="w-16 h-16 bg-tealMedium rounded-full"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-primary rounded-full"></div>
            </div>
          );
        case 4:
          return (
            <div className={`${dimensions} relative bg-pink-400 rounded-full border-2 border-red-600 flex items-center justify-center`}>
              <div className="w-20 h-20 bg-red-500 rounded-full"></div>
              <div className="absolute -top-3 -right-3 w-5 h-5 bg-red-600 rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-red-600 rounded-full"></div>
              <div className="absolute top-1 -left-3 w-3 h-3 bg-red-600 rounded-full"></div>
            </div>
          );
        default:
          return null;
      }
    };

    return (
      <div className="flex flex-col items-center">
        {renderStage()}
        <p className="mt-2 text-sm font-medium text-primary">Stage {stage}</p>
      </div>
    );
  };

  const stages = [
    {
      stage: 0,
      name: "Stage 0 (Carcinoma in Situ)",
      description: "Non-invasive breast cancer. Cancer cells are contained within the milk ducts or lobules and have not spread to nearby tissue.",
      characteristics: [
        "Also called ductal carcinoma in situ (DCIS) or lobular carcinoma in situ (LCIS)",
        "Cancer cells have not spread beyond the layer of cells where they started",
        "Not life-threatening but may increase risk of invasive cancer",
        "Treatment often involves surgery and sometimes radiation"
      ],
      color: "bg-green-50 border-green-200"
    },
    {
      stage: 1,
      name: "Stage I (Early-stage invasive)",
      description: "Small invasive breast cancer where cancer cells have spread to nearby breast tissue but not to lymph nodes.",
      characteristics: [
        "Tumor is 2 cm or smaller in size",
        "Cancer has not spread to lymph nodes",
        "May be divided into Stage IA and Stage IB",
        "Generally has excellent prognosis with treatment"
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      stage: 2,
      name: "Stage II (Locally advanced)",
      description: "Cancer has grown larger and/or spread to nearby lymph nodes but not to distant parts of the body.",
      characteristics: [
        "Tumor is larger than 2 cm but not larger than 5 cm",
        "May have spread to 1-3 nearby lymph nodes",
        "Divided into Stage IIA and Stage IIB",
        "Treatment typically involves combination therapy"
      ],
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      stage: 3,
      name: "Stage III (Locally advanced)",
      description: "Larger cancers that have spread more extensively to lymph nodes and nearby tissues but not to distant organs.",
      characteristics: [
        "Tumor may be any size with extensive lymph node involvement",
        "Cancer may have spread to chest wall or skin",
        "Divided into Stage IIIA, IIIB, and IIIC",
        "Requires aggressive treatment approach"
      ],
      color: "bg-orange-50 border-orange-200"
    },
    {
      stage: 4,
      name: "Stage IV (Metastatic)",
      description: "Cancer has spread (metastasized) to distant organs such as bones, liver, lungs, or brain.",
      characteristics: [
        "Also called metastatic breast cancer",
        "Cancer has spread beyond the breast and nearby lymph nodes",
        "Most advanced stage of breast cancer",
        "Treatment focuses on controlling disease and maintaining quality of life"
      ],
      color: "bg-red-50 border-red-200"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-4">Breast Cancer Stages</h1>
        <p className="text-lg text-textGray max-w-4xl mx-auto leading-relaxed">
          Cancer is an abnormal and uncontrolled growth of cells anywhere in a body. Staging is the process 
          of finding how much the cancer has spread in the body and determines the most appropriate treatment options.
        </p>
      </div>

      {/* Visual Overview */}
      <div className="bg-tealLight bg-opacity-20 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-primary mb-6 text-center">Visual Stage Overview</h2>
        <div className="flex justify-center space-x-8 flex-wrap gap-6">
          {[0, 1, 2, 3, 4].map(stage => (
            <div 
              key={stage}
              className="cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => setSelectedStage(stage)}
            >
              <StageVisualization stage={stage} />
            </div>
          ))}
        </div>
        <p className="text-center text-textGray mt-4 text-sm">Click on any stage for detailed information</p>
      </div>

      {/* Detailed Stage Information */}
      <div className="space-y-4 mb-8">
        {stages.map((stageInfo, index) => (
          <div key={index} className={`border rounded-lg ${stageInfo.color} ${selectedStage === stageInfo.stage ? 'ring-2 ring-primary' : ''}`}>
            <div 
              className="p-4 cursor-pointer flex items-center justify-between"
              onClick={() => toggleSection(`stage-${stageInfo.stage}`)}
            >
              <div className="flex items-center space-x-4">
                <StageVisualization stage={stageInfo.stage} size="small" />
                <div>
                  <h3 className="text-xl font-semibold text-primary">{stageInfo.name}</h3>
                  <p className="text-textGray">{stageInfo.description}</p>
                </div>
              </div>
              {expandedSection === `stage-${stageInfo.stage}` ? 
                <ChevronUp className="text-primary" /> : 
                <ChevronDown className="text-primary" />
              }
            </div>
            
            {expandedSection === `stage-${stageInfo.stage}` && (
              <div className="px-4 pb-4">
                <div className="bg-white rounded-lg p-4 mt-2">
                  <h4 className="font-semibold text-primary mb-2">Key Characteristics:</h4>
                  <ul className="space-y-2">
                    {stageInfo.characteristics.map((char, charIndex) => (
                      <li key={charIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-tealMedium rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* TNM Staging System */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSection('tnm')}
        >
          <h2 className="text-2xl font-semibold text-primary flex items-center">
            <Info className="mr-2" />
            TNM Staging System
          </h2>
          {expandedSection === 'tnm' ? 
            <ChevronUp className="text-primary" /> : 
            <ChevronDown className="text-primary" />
          }
        </div>
        
        {expandedSection === 'tnm' && (
          <div className="mt-4">
            <p className="text-textGray mb-4">
              The TNM system is the most common cancer staging system, describing the extent of the tumor, 
              spread to lymph nodes, and distant metastases.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-primary">
                <h3 className="font-semibold text-primary mb-2">T - Tumor</h3>
                <p className="text-sm text-gray-700">Describes the size and extent of the main tumor</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-tealMedium">
                <h3 className="font-semibold text-tealMedium mb-2">N - Nodes</h3>
                <p className="text-sm text-gray-700">Indicates whether cancer has spread to nearby lymph nodes</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-tealLight">
                <h3 className="font-semibold text-tealLight mb-2">M - Metastasis</h3>
                <p className="text-sm text-gray-700">Shows whether cancer has spread to other parts of the body</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Summary Staging System */}
      <div className="bg-primary bg-opacity-5 rounded-lg p-6">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSection('summary')}
        >
          <h2 className="text-2xl font-semibold text-primary flex items-center">
            <AlertCircle className="mr-2" />
            Summary Staging System
          </h2>
          {expandedSection === 'summary' ? 
            <ChevronUp className="text-primary" /> : 
            <ChevronDown className="text-primary" />
          }
        </div>
        
        {expandedSection === 'summary' && (
          <div className="mt-4">
            <p className="text-textGray mb-4">
              Summary staging groups cancer into five main categories based on how far the cancer has spread.
            </p>
            
            <div className="space-y-3">
              {[
                { name: "In Situ", desc: "Early cancer present only in the layer of cells where it developed" },
                { name: "Localized", desc: "Cancer limited to the organ where it started, without evidence of spread" },
                { name: "Regional", desc: "Cancer that has spread beyond the primary tumor to nearby lymph nodes or organs" },
                { name: "Distant", desc: "Cancer that has spread from the primary site to distant organs" },
                { name: "Unknown", desc: "Not enough information available to indicate a stage" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-3 rounded-lg border-l-4 border-primary">
                  <h4 className="font-semibold text-primary">{item.name}</h4>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Important Note */}
      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start space-x-2">
          <AlertCircle className="text-yellow-600 mt-0.5 flex-shrink-0" size={20} />
          <div>
            <h3 className="font-semibold text-yellow-800">Important Note</h3>
            <p className="text-yellow-700 text-sm mt-1">
              Staging is based on physical examination, imaging tests (X-rays, CT, MRI, PET scans), 
              laboratory tests, biopsy results, and surgical findings. Treatment decisions should always 
              be made in consultation with healthcare professionals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreastCancerStages;