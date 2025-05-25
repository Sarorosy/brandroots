import { Users, FileText, Headphones, Code, ShieldCheck, Lock } from 'lucide-react';

export default function AboutUs() {
  return (
    <>
    <div className="text-black bg-white px-6 md:px-16 py-16">
      <div className="max-w-6xl mx-auto">
        {/* About Us Title */}
        <h1 className="text-4xl font-bold mb-6 text-gray-900 text-center">
          About <span className="text-[#d3af37]">PhdKings</span>
        </h1>

        {/* Intro Paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
          At PhdKings, we specialize in empowering scholars and researchers with ethical, personalized, and high-quality academic support. Since our inception, we’ve helped thousands of PhD candidates worldwide confidently navigate their research journey. Our expert team consists of seasoned academic writers, experienced researchers, responsive client managers, and tech-savvy developers working seamlessly together to drive your success.
        </p>

        {/* What We Do */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-[#d3af37] mb-4">What We Do</h2>
          <p className="text-gray-700 text-lg mb-4">
            We provide end-to-end support across all stages of your PhD journey — from topic selection and proposal writing to thesis development, manuscript preparation, journal submissions, and correction services. Each service is handled by subject matter experts who understand the rigor and ethics of academic research.
          </p>
          <ul className="list-disc list-inside text-gray-700 pl-4 space-y-2">
            <li>Base Paper Suggestions & Research Gap Identification</li>
            <li>Proposal & Thesis Chapter Development</li>
            <li>Literature Review and Manuscript Writing</li>
            <li>Journal Paper Formatting & Submissions</li>
            <li>Corrections & Reviewer Comments Support</li>
          </ul>
        </section>

        {/* Trusted & Confidential */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-[#d3af37] mb-4">Trusted & Confidential</h2>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex items-start gap-4">
              <ShieldCheck className="text-[#d3af37]" size={32} />
              <div>
                <h3 className="font-semibold text-lg">Trusted by Scholars Worldwide</h3>
                <p className="text-gray-700">
                  With a 4.9/5 average satisfaction rating, PhdKings is recognized for delivering reliable, timely, and ethical research support.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Lock className="text-[#d3af37]" size={32} />
              <div>
                <h3 className="font-semibold text-lg">100% Confidentiality</h3>
                <p className="text-gray-700">
                  Your personal information and research content remain private and secure. We follow strict data protection protocols to ensure complete confidentiality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Team Strengths */}
        <section>
          <h2 className="text-3xl font-semibold text-[#d3af37] mb-10 text-center">Our Core Team Strengths</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div>
              <Users className="w-10 h-10 text-[#d3af37] mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-1">Expert Writers</h3>
              <p className="text-gray-600 text-sm">
                Crafting plagiarism-free, publication-ready content across domains.
              </p>
            </div>

            <div>
              <FileText className="w-10 h-10 text-[#d3af37] mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-1">Research Specialists</h3>
              <p className="text-gray-600 text-sm">
                Assisting with in-depth research, referencing, and academic standards.
              </p>
            </div>

            <div>
              <Headphones className="w-10 h-10 text-[#d3af37] mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-1">Responsive CRMs</h3>
              <p className="text-gray-600 text-sm">
                Always available to guide and assist you with quick responses.
              </p>
            </div>

            <div>
              <Code className="w-10 h-10 text-[#d3af37] mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-1">Technical Developers</h3>
              <p className="text-gray-600 text-sm">
                Creating secure and seamless platforms to manage your research files.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
}
