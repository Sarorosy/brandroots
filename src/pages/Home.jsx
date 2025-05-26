import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  User,
  Hospital,
  Heart,
  Phone,
  MapPin,
  Clock,
  Award,
  Shield,
  Star,
  Users,
  Calendar,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Quote
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import one from '../assets/slider/one.jpg';
import two from '../assets/slider/two.jpg';
import three from '../assets/slider/three.jpg';
import four from '../assets/slider/four.jpg';
import five from '../assets/slider/five.jpg';
import doctorprofile from '../assets/doctor-profile.jpg';

export default function Home() {
  const headlines = [
    'Compassionate Breast & General Surgical Care',
    'Personalized, Empathetic Medical Expertise',
    'Advanced Oncoplastic & Breast Cancer Surgery',
    'Your Health, Our Priority - Excellence in Every Care'
  ];

  // Hero image slider data with Pexels images
  const heroImages = [
    {
      url: one,
      alt: "Medical consultation room"
    },
    {
      url: two,
      alt: "Healthcare professional"
    },
    {
      url: three,
      alt: "Modern medical facility"
    },
    {
      url: four,
      alt: "Medical equipment"
    }
  ];

  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const headlineInterval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 3500);
    return () => clearInterval(headlineInterval);
  }, []);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(imageInterval);
  }, []);

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Dr. Vanitha's compassionate care during my breast cancer journey was exceptional. Her expertise and gentle approach made all the difference.",
      rating: 5
    },
    {
      name: "Michael Chen",
      text: "Outstanding surgical skill and post-operative care. I felt confident and well-informed throughout my entire treatment.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      text: "The oncoplastic surgery results exceeded my expectations. Dr. Vanitha truly combines medical excellence with artistic precision.",
      rating: 5
    }
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Enhanced Hero Section with Image Slider */}
      <section className="relative min-h-screen bg-gradient-to-br from-teal-50 via-teal-100 to-cyan-50 overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={imageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.3, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImages[imageIndex].url})` }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 to-cyan-900/20" />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <ArrowRight className="w-6 h-6 text-white" />
        </button>

        <div className="relative z-10 flex items-center justify-center min-h-screen py-8 px-4 md:px-20 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="relative min-h-[80px] mb-8">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={headlineIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8 }}
                  className=" w-full text-4xl md:text-6xl font-bold text-teal-800 leading-tight"
                >
                  {headlines[headlineIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl max-w-4xl mx-auto text-teal-700 mb-12 leading-relaxed font-light"
            >
              Welcome to Dr. Vanitha's practice, where expertise meets empathy. Specializing in breast cancer care, oncoplastic surgery, and general surgical procedures, Dr. Vanitha is committed to providing personalized treatment in a supportive, healing environment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/book"
                className="bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book a Consultation
              </Link>
              <Link
                to="/services"
                className="bg-white/90 backdrop-blur-sm text-teal-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-white transition-all duration-300 shadow-lg border border-teal-200"
              >
                Our Services
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-sm text-teal-600 mt-8 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full inline-block"
            >
              For emergencies, call 000 or visit your nearest hospital.
            </motion.p>
          </div>
        </div>

        {/* Image Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === imageIndex ? 'bg-white' : 'bg-white/50'
                }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6"
          >
            <div className="text-4xl font-bold text-teal-600 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6"
          >
            <div className="text-4xl font-bold text-teal-600 mb-2">2000+</div>
            <div className="text-gray-600">Successful Surgeries</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6"
          >
            <div className="text-4xl font-bold text-teal-600 mb-2">98%</div>
            <div className="text-gray-600">Patient Satisfaction</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6"
          >
            <div className="text-4xl font-bold text-teal-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-20 px-4 md:px-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6">
              Comprehensive Medical Services
            </h2>
            <p className="text-xl text-teal-600 max-w-3xl mx-auto">
              From diagnosis to recovery, we provide complete care with cutting-edge technology and compassionate expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-100"
            >
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-teal-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-teal-800">Breast Cancer Surgery</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Comprehensive breast cancer treatment including lumpectomy, mastectomy, and sentinel node biopsy. Our approach combines advanced surgical techniques with compassionate, patient-centered care.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" />Minimally invasive techniques</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" />Personalized treatment plans</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" />Comprehensive aftercare</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-100"
            >
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <User className="text-teal-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-teal-800">Oncoplastic Surgery</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Revolutionary approach combining cancer surgery with plastic surgery techniques to ensure optimal functional and aesthetic outcomes for breast cancer patients.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" />Aesthetic preservation</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" />Advanced reconstruction</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" />Psychological well-being focus</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-100"
            >
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Stethoscope className="text-teal-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-teal-800">General Surgery</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Expert general surgical procedures including hernia repairs, gallbladder removal, skin lesion excisions, and more, performed with precision and care.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" />Laparoscopic procedures</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" />Same-day surgery options</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-teal-500 mr-2" />Rapid recovery protocols</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="py-20 px-4 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-8">
                Meet Dr. Vanitha
              </h2>
              <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                <p>
                  Dr. Vanitha is a highly experienced breast and general surgeon with international training and a passion for patient-centered care. Her journey began with an MBBS and MS in India, followed by achieving membership with the Royal College of Surgeons, Ireland (MRCSI).
                </p>
                <p>
                  Since relocating to Australia in 2011, she has earned a Fellowship with the Royal Australasian College of Surgeons (FRACS) and completed a specialized fellowship in oncoplastic breast surgery through BreastSurgANZ at the prestigious Sir Charles Gairdner Hospital.
                </p>
                <p>
                  Dr. Vanitha also holds a Master's in Breast Surgery from the University of Sydney and is renowned for her empathetic, holistic approach to patient care. Her philosophy centers on treating not just the condition, but the whole person.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-center">
                  <Award className="text-teal-600 w-6 h-6 mr-3" />
                  <div>
                    <div className="font-semibold text-teal-800">FRACS</div>
                    <div className="text-sm text-gray-600">Fellowship Certified</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Shield className="text-teal-600 w-6 h-6 mr-3" />
                  <div>
                    <div className="font-semibold text-teal-800">MRCSI</div>
                    <div className="text-sm text-gray-600">Royal College Member</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl p-8 shadow-xl">
                <img
                  src={doctorprofile}
                  alt="Dr. Vanitha"
                  className="w-full h-auto object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-600">15+</div>
                    <div className="text-sm text-gray-600">Years</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Patient Journey Enhancement */}
      <section className="py-20 px-4 md:px-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6">
              Your Healing Journey
            </h2>
            <p className="text-xl text-teal-600 max-w-3xl mx-auto">
              Every step of your care is thoughtfully planned and compassionately delivered.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="text-teal-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-teal-800">Initial Consultation</h3>
              <p className="text-gray-700 leading-relaxed">
                A warm welcome, comprehensive health assessment, and clear guidance to begin your personalized care journey with confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Hospital className="text-teal-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-teal-800">Advanced Diagnostics</h3>
              <p className="text-gray-700 leading-relaxed">
                Access to state-of-the-art radiology and pathology services for accurate, timely diagnosis using the latest medical technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="text-teal-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-teal-800">Surgical Excellence</h3>
              <p className="text-gray-700 leading-relaxed">
                Meticulously planned surgical procedures with focus on safety, precision, and optimal outcomes tailored to your specific needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-teal-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-teal-800">Comprehensive Aftercare</h3>
              <p className="text-gray-700 leading-relaxed">
                Dedicated follow-up care, recovery support, and long-term health monitoring to ensure your complete well-being.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6">
              What Our Patients Say
            </h2>
            <p className="text-xl text-teal-600">
              Real stories from real people who've experienced our care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl shadow-lg"
              >
                <Quote className="text-teal-400 w-8 h-8 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-teal-800">{testimonial.name}</div>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-20 px-4 md:px-20 bg-gradient-to-br from-teal-600 to-cyan-600 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Contact us today to schedule your consultation and take the first step towards comprehensive, compassionate care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-2xl"
            >
              <Phone className="text-white w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-teal-100">(08) 1234 5678</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-2xl"
            >
              <MapPin className="text-white w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-teal-100">123 Medical Street, Perth, WA</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-2xl"
            >
              <Clock className="text-white w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              <p className="text-teal-100">Mon - Fri: 9:00 AM - 5:00 PM</p>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}