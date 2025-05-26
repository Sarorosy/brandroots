import { useState } from 'react';
import { CheckCircle, AlertCircle, ArrowRight, ArrowLeft, Heart } from 'lucide-react';

const steps = [
  'Personal Factors',
  'Lifestyle Factors',
  'Personal Breast History',
  'Family History',
];

const questions = {
  'Personal Factors': [
    'Are you over the age of 50?',
    'Did you have a baby before the age of 30?',
    'Did you breastfeed for more than 6 months?',
    'Did you have your first period before age 12?',
    'Did you have a late menopause? (after 55)',
    'Have you ever been on hormone replacement therapy?',
  ],
  'Lifestyle Factors': [
    'Are you overweight (BMI>25)?',
    'Do you exercise regularly (for more than 30 mins 5 times/week)?',
    'Do you drink more than 2 alcoholic drinks a day?',
  ],
  'Personal Breast History': [
    'Have you had previous radiotherapy to the chest area?',
    'Have you previously been diagnosed with Atypical ductal hyperplasia?',
    'Have you previously been diagnosed with Ductal Carcinoma in situ?',
    'Have you previously been diagnosed with Lobular Carcinoma in situ?',
    'Have you previously had breast cancer?',
    'Did your mammogram reveal dense breasts?',
  ],
  'Family History': [
    'Do you have 3 or more first or second degree relatives diagnosed with breast cancer?',
    'Do you have a first degree relative who has been diagnosed with ovarian cancer?',
    'Are you of Ashkenazi Jewish descent?',
    'Are you or any close family members positive for BRCA 1 or 2 mutation?',
  ],
};

// Yes/No Choice Component
const YesNoChoice = ({ value, onChange, disabled = false }) => (
  <div className="flex space-x-3">
    <button
      onClick={() => !disabled && onChange(true)}
      disabled={disabled}
      className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-200 ${
        value === true
          ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-200'
          : 'bg-white border-2 border-gray-200 text-gray-600 hover:border-teal-300 hover:text-teal-600'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <CheckCircle className={`w-4 h-4 mr-2 ${value === true ? 'text-white' : 'text-gray-400'}`} />
      Yes
    </button>
    
    <button
      onClick={() => !disabled && onChange(false)}
      disabled={disabled}
      className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-200 ${
        value === false
          ? 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-lg shadow-gray-200'
          : 'bg-white border-2 border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-700'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <div className={`w-4 h-4 mr-2 rounded-full border-2 ${value === false ? 'border-white bg-white' : 'border-gray-400'}`}>
        {value === false && <div className="w-2 h-2 bg-gray-600 rounded-full m-0.5" />}
      </div>
      No
    </button>
  </div>
);

// Progress Bar Component
const ProgressBar = ({ current, total }) => (
  <div className="w-full bg-gray-200 rounded-full h-2 mb-8 overflow-hidden">
    <div 
      className="bg-gradient-to-r from-teal-400 to-teal-600 h-2 rounded-full transition-all duration-500 ease-out"
      style={{ width: `${((current + 1) / total) * 100}%` }}
    />
  </div>
);

// Step Indicator Component
const StepIndicator = ({ steps, currentStep }) => (
  <div className="flex justify-center mb-8">
    <div className="flex items-center space-x-4">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold text-sm transition-all duration-300 ${
            index <= currentStep 
              ? 'bg-gradient-to-r from-teal-400 to-teal-600 text-white shadow-lg' 
              : 'bg-gray-200 text-gray-500'
          }`}>
            {index < currentStep ? <CheckCircle className="w-5 h-5" /> : index + 1}
          </div>
          {index < steps.length - 1 && (
            <div className={`w-8 h-1 mx-2 rounded transition-all duration-300 ${
              index < currentStep ? 'bg-teal-500' : 'bg-gray-200'
            }`} />
          )}
        </div>
      ))}
    </div>
  </div>
);

export default function BreastCancerRisk() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleToggle = (question, value) => {
    setAnswers({ ...answers, [question]: value });
  };

  const getCurrentStepQuestions = () => questions[steps[step]];
  const getCurrentStepAnswers = () => {
    const currentQuestions = getCurrentStepQuestions();
    return currentQuestions.map(q => answers[q]);
  };

  const isCurrentStepComplete = () => {
    const currentAnswers = getCurrentStepAnswers();
    return currentAnswers.every(answer => answer !== undefined);
  };

  const totalYes = Object.values(answers).filter(val => val).length;
  const totalQuestions = Object.values(questions).flat().length;
  const answeredQuestions = Object.values(answers).filter(val => val !== undefined).length;

  const getResult = () => {
    if (totalYes >= 8) return {
      level: 'High Risk',
      message: 'Please consult a medical professional for personalized advice.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    };
    if (totalYes >= 4) return {
      level: 'Moderate Risk',
      message: 'Consider regular checkups and discuss with your healthcare provider.',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200'
    };
    return {
      level: 'Lower Risk',
      message: 'Maintain healthy lifestyle and follow regular screening guidelines.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    };
  };

  const handleNext = () => {
    if (!isCurrentStepComplete()) return;
    
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (showResult) {
      setShowResult(false);
    } else if (step > 0) {
      setStep(step - 1);
    }
  };

  const resetAssessment = () => {
    setStep(0);
    setAnswers({});
    setShowResult(false);
  };

  if (showResult) {
    const result = getResult();
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <Heart className="w-16 h-16 text-teal-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              Assessment Complete
            </h1>
            <p className="text-gray-600">Thank you for taking the time to assess your risk factors</p>
          </div>

          <div className={`${result.bgColor} ${result.borderColor} border-2 rounded-3xl p-8 shadow-xl backdrop-blur-sm`}>
            <div className="text-center mb-6">
              <h2 className={`text-3xl font-bold ${result.color} mb-4`}>{result.level}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{result.message}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Results Summary</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-teal-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-teal-600">{totalYes}</div>
                  <div className="text-sm text-gray-600">Risk Factors</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-gray-600">{totalQuestions - totalYes}</div>
                  <div className="text-sm text-gray-600">Lower Risk Factors</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleBack}
                className="flex items-center justify-center px-6 py-3 rounded-xl border-2 border-teal-500 text-teal-600 hover:bg-teal-50 transition-all duration-300 font-semibold"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Review Answers
              </button>
              <button
                onClick={resetAssessment}
                className="flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Start New Assessment
              </button>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p className="mb-2">⚠️ This assessment is for informational purposes only and does not replace professional medical advice.</p>
            <p>Always consult with healthcare professionals for personalized medical guidance.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Heart className="w-12 h-12 text-teal-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
            Breast Cancer Risk Assessment
          </h1>
          <p className="text-gray-600 text-lg">Understanding your personal risk factors</p>
        </div>

        {/* Progress */}
        <ProgressBar current={step} total={steps.length} />
        <StepIndicator steps={steps} currentStep={step} />

        {/* Main Content */}
        <div className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl p-8 border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{steps[step]}</h2>
              <p className="text-gray-600">
                Step {step + 1} of {steps.length} • {answeredQuestions}/{totalQuestions} questions completed
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 mb-1">Current Step Progress</div>
              <div className={`text-lg font-semibold ${isCurrentStepComplete() ? 'text-green-600' : 'text-amber-600'}`}>
                {getCurrentStepAnswers().filter(a => a !== undefined).length}/{getCurrentStepQuestions().length}
              </div>
            </div>
          </div>

          {!isCurrentStepComplete() && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 flex items-center">
              <AlertCircle className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0" />
              <p className="text-amber-700 text-sm">
                Please answer all questions in this section before proceeding to the next step.
              </p>
            </div>
          )}

          <div className="space-y-4">
            {getCurrentStepQuestions().map((question, index) => {
              const isAnswered = answers[question] !== undefined;
              return (
                <div 
                  key={question} 
                  className={`group transition-all duration-300 rounded-2xl p-6 border-2 ${
                    isAnswered 
                      ? answers[question]
                        ? 'bg-teal-50 border-teal-200 shadow-md'
                        : 'bg-gray-50 border-gray-200 shadow-md'
                      : 'bg-white border-gray-100 hover:border-teal-200 hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold flex-shrink-0 ${
                        isAnswered 
                          ? 'bg-teal-500 text-white' 
                          : 'bg-gray-200 text-gray-500 group-hover:bg-teal-200 group-hover:text-teal-700'
                      }`}>
                        {isAnswered ? <CheckCircle className="w-4 h-4" /> : index + 1}
                      </div>
                      <div className="flex-1">
                        <span className="text-gray-800 font-medium leading-relaxed block mb-4">{question}</span>
                        <YesNoChoice
                          value={answers[question]}
                          onChange={(val) => handleToggle(question, val)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handleBack}
            disabled={step === 0}
            className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              step === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-teal-600 border-2 border-teal-500 hover:bg-teal-50 hover:shadow-md transform hover:scale-105'
            }`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={!isCurrentStepComplete()}
            className={`flex items-center px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
              isCurrentStepComplete()
                ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {step === steps.length - 1 ? 'View Results' : 'Next Step'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500 space-y-2">
          <p>This assessment helps identify potential risk factors and is not a medical diagnosis.</p>
          <p>Always consult healthcare professionals for personalized medical advice and screening recommendations.</p>
        </div>
      </div>
    </div>
  );
}