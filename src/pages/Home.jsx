import {
  ArrowRight,
  MapPin,
  Star,
  CheckCircle,
  Users,
  FileText,
  Headphones,
  Code,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-no-text.svg";
import animationData from "../assets/animation.json";

export default function Home() {
  const navigate = useNavigate();



  return (
    <div className="text-black">

      <div class="sketchfab-embed-wrapper"> <iframe title="Breast Cancer" frameborder="0" allowfullscreen mozallowfullscreen="false" webkitallowfullscreen="false" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/b025363e1d7e4a33aecdc4081bf639a4/embed?autostart=1&transparent=1"> </iframe> </div>
      <div className="bg-white px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* About Us */}
          <section>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              About <span className="text-[#d3af37]">PhdKings</span>
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
              PhdKings is your trusted partner in academic success, committed to
              empowering researchers and scholars worldwide. Our dedicated team
              includes expert writers, skilled researchers, responsive CRMs, and
              innovative developers—all working together to provide
              personalized, ethical, and high-quality support throughout your
              PhD journey.
              <br />
              <br />
              With years of experience and a passion for excellence, PhdKings
              offers tailored solutions that help you navigate the complexities
              of research with confidence and clarity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <Users className="w-10 h-10 text-[#d3af37] mb-4" />
                <h3 className="font-semibold text-lg mb-1">Expert Writers</h3>
                <p className="text-gray-600 text-sm">
                  Skilled academic writers crafting precise, plagiarism-free
                  content.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <FileText className="w-10 h-10 text-[#d3af37] mb-4" />
                <h3 className="font-semibold text-lg mb-1">
                  Experienced Researchers
                </h3>
                <p className="text-gray-600 text-sm">
                  In-depth research support ensuring accuracy and credibility.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <Headphones className="w-10 h-10 text-[#d3af37] mb-4" />
                <h3 className="font-semibold text-lg mb-1">Responsive CRMs</h3>
                <p className="text-gray-600 text-sm">
                  Dedicated customer support ready to assist you at every step.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <Code className="w-10 h-10 text-[#d3af37] mb-4" />
                <h3 className="font-semibold text-lg mb-1">
                  Innovative Developers
                </h3>
                <p className="text-gray-600 text-sm">
                  Building tools and platforms to streamline your research
                  workflow.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

    </div>
  );
}
