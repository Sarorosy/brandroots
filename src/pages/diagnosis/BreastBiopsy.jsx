import { 
  Heart, 
  Search, 
  Microscope, 
  Syringe, 
  Zap, 
  Shield, 
  FileText, 
  AlertCircle,
  CheckCircle,
  Activity,
  Target,
  Calendar
} from 'lucide-react';

export default function BreastBiopsy() {
  const biopsyTypes = [
    {
      title: "Fine-needle aspiration biopsy",
      description: "The doctor inserts a thin needle into the lump detected during a breast exam to draw a sample of fluid or cells.",
      icon: <Syringe className="w-6 h-6" />
    },
    {
      title: "Core needle biopsy",
      description: "A needle guided by ultrasound or MRI to remove a sample of breast lump detected during a breast exam, ultrasound or mammogram. Several, grain-sized samples of the tissue are removed.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Stereotactic biopsy",
      description: "A mammogram is used to identify the location of the suspicious areas within the breast. Your doctor makes a small incision and removes several samples of tissue through a needle or vacuum-powered probe.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Surgical biopsy",
      description: "A/Prof Fosh surgically removes a part or entire breast lump under general or local anaesthesia.",
      icon: <Activity className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-primary to-tealMedium p-4 rounded-full shadow-lg" style={{background: 'linear-gradient(to right, #2B6D6D, #4C9494)'}}>
              <Heart className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-black mb-4">
            Breast Biopsy
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r rounded-full mx-auto" style={{background: 'linear-gradient(to right, #2B6D6D, #4C9494)'}}></div>
        </div>

        {/* Introduction Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-200">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-full" style={{backgroundColor: '#8BC5C5'}}>
              <Microscope className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">What is a Breast Biopsy?</h2>
              <p className="leading-relaxed text-lg" style={{color: '#999999'}}>
                Breast biopsy is a procedure in which a small sample of breast tissue containing suspicious breast growth is removed and examined in the laboratory for the presence of cancer. It is indicated when abnormal findings are seen during mammography, ultrasound or MRI scans, or unusual changes are noticed in the nipple (dimpling skin, scaling or bloody discharge) or breast tissue (thickening or lumps).
              </p>
            </div>
          </div>
        </div>

        {/* Process Overview */}
        <div className="rounded-2xl shadow-xl p-8 mb-12 text-white" style={{background: 'linear-gradient(to right, #2B6D6D, #4C9494)'}}>
          <div className="flex items-center gap-4 mb-6">
            <Shield className="w-8 h-8" />
            <h2 className="text-2xl font-semibold">Comfort & Care</h2>
          </div>
          <p className="leading-relaxed text-lg opacity-90">
            The area of interest may be numbed to keep you comfortable. The procedure for conducting a breast biopsy depends on factors such as the size and location of the breast defect.
          </p>
        </div>

        {/* Biopsy Types */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-black mb-4">Types of Breast Biopsy Procedures</h2>
            <p className="text-lg" style={{color: '#999999'}}>Different approaches tailored to your specific needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {biopsyTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-gray-300" style={{'&:hover': {borderColor: '#8BC5C5'}}}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full text-white flex-shrink-0" style={{background: 'linear-gradient(to right, #2B6D6D, #4C9494)'}}>
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-3">{type.title}</h3>
                    <p className="leading-relaxed" style={{color: '#999999'}}>{type.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results & Analysis Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-200">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-full" style={{backgroundColor: '#8BC5C5'}}>
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-semibold text-black">Analysis & Results</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" style={{color: '#4C9494'}} />
                <p style={{color: '#999999'}}>Tissue forwarded to pathologist for microscopic analysis</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" style={{color: '#4C9494'}} />
                <p style={{color: '#999999'}}>Pathology report determines presence of breast cancer</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" style={{color: '#4C9494'}} />
                <p style={{color: '#999999'}}>Classification of lump as benign or cancerous</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" style={{color: '#4C9494'}} />
                <p style={{color: '#999999'}}>Identification of specific type of breast cancer if present</p>
              </div>
            </div>
            
            <div className="rounded-xl p-6" style={{backgroundColor: 'rgba(139, 197, 197, 0.1)'}}>
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5" style={{color: '#2B6D6D'}} />
                <h3 className="font-semibold text-black">Next Steps</h3>
              </div>
              <p className="leading-relaxed" style={{color: '#999999'}}>
                Based on the results, A/Prof Fosh will discuss a suitable treatment plan for you, ensuring you receive the most appropriate care for your specific situation.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="rounded-2xl shadow-xl p-8 text-white text-center" style={{background: 'linear-gradient(to right, #2B6D6D, #4C9494)'}}>
          <div className="flex justify-center mb-4">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Expert Care You Can Trust</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto opacity-90">
            Our experienced medical team is committed to providing you with comprehensive care throughout your breast biopsy procedure. We prioritize your comfort, safety, and peace of mind every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
}