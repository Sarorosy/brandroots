import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Shield, BookOpen, Users, Heart, Stethoscope, Globe, GraduationCap, Star, ChevronDown, Sparkles, MapPin, Calendar, Phone } from 'lucide-react';
import doctorprofile from '../assets/doctor-profile.jpg';
import aboutbg from '../assets/about-bg.jpg';
const About = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const tabs = [
    { id: 'experience', label: 'Experience', icon: Award },
    { id: 'approach', label: 'Our Approach', icon: Heart },
    { id: 'affiliations', label: 'Affiliations', icon: Users }
  ];

  const achievements = [
    { number: '15+', label: 'Years Experience', icon: Calendar },
    { number: '2000+', label: 'Successful Surgeries', icon: Heart },
    { number: '98%', label: 'Patient Satisfaction', icon: Star },
    { number: '50+', label: 'Research Publications', icon: BookOpen }
  ];

  const specialties = [
    {
      title: 'Oncoplastic Breast Surgery',
      description: 'Revolutionary approach combining cancer surgery with plastic surgery techniques for optimal outcomes',
      icon: Heart,
      gradient: 'from-blue-400 to-teal-600',
      features: ['Aesthetic preservation', 'Advanced reconstruction', 'Minimal scarring']
    },
    {
      title: 'High-Risk Breast Cancer',
      description: 'Specialized management and prevention strategies for high-risk patients and genetic predispositions',
      icon: Shield,
      gradient: 'from-teal-400 to-cyan-600',
      features: ['Genetic counseling', 'Preventive surgery', 'Risk assessment']
    },
    {
      title: 'General Surgery',
      description: 'Comprehensive surgical care with focus on minimally invasive techniques and rapid recovery',
      icon: Stethoscope,
      gradient: 'from-blue-400 to-teal-600',
      features: ['Laparoscopic procedures', 'Same-day surgery', 'Rapid recovery']
    }
  ];

  const hospitals = [
    'Royal Perth Hospital',
    'Fiona Stanley Hospital',
    'St John of God Midland',
    'Subiaco Hospital',
    'Joondalup Breast Centre'
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary  to-tealMedium">
        <div className="absolute inset-0">
          <motion.div
            style={{
              y,
              opacity,
              backgroundImage: `url(${aboutbg})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse" />
              <Sparkles className="relative w-24 h-24 text-white mx-auto mb-6" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 bg-white bg-clip-text text-transparent"
          >
            Dr. Vanitha
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-3xl text-pink-100 mb-8 font-light"
          >
            Compassionate Care • Expert Precision • Innovative Solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {['FRACS Certified', 'Oncoplastic Specialist', '15+ Years Experience'].map((badge, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20">
                <span className="text-white font-medium">{badge}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-white mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Floating Achievements Section */}
      <section className="relative -mt-20 z-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center group"
                >
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-black text-primary mb-2">{achievement.number}</div>
                  <div className="text-textGray font-medium">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Profile & Bio Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-3xl transform rotate-6 opacity-20" />
                <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 shadow-2xl">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                    <img
                      src={doctorprofile}
                      alt="Dr. Vanitha"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2">Dr. Vanitha</h3>
                    <p className="text-primary font-medium">Breast & General Surgeon</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                  <div className="text-center">
                    <div className="text-3xl font-black text-primary">15+</div>
                    <div className="text-sm text-textGray font-medium">Years</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
                  Excellence in
                  <span className="bg-gradient-to-r from-primary to-tealMedium bg-clip-text text-transparent"> Surgical Care</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-tealMedium rounded-full mb-8" />
              </div>

              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Dr. Vanitha is an accomplished breast and general surgeon with extensive international training. After completing her MBBS and Master of Surgery (MS) in India, she became a Member of the Royal College of Surgeons, Ireland (MRCSI).
                </p>
                <p>
                  Since moving to Australia in 2011, she earned fellowship with the Royal Australasian College of Surgeons (FRACS) and specialized in oncoplastic breast surgery through BreastSurgANZ at Sir Charles Gairdner Hospital, Perth.
                </p>
                <p>
                  As Director of Clinical Training for the Royal Perth Bentley Group, she mentors the next generation of surgeons while maintaining her clinical excellence across multiple hospitals.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-white to-tealLight border border-tealLight p-6 rounded-2xl">
                  <Award className="w-8 h-8 text-primary mb-3" />
                  <div className="font-bold text-primary">FRACS</div>
                  <div className="text-sm text-gray-800">Fellowship Certified</div>
                </div>
                <div className="bg-gradient-to-br from-white to-tealLight border border-tealLight p-6 rounded-2xl">
                  <Shield className="w-8 h-8 text-primary mb-3" />
                  <div className="font-bold text-primary">MRCSI</div>
                  <div className="text-sm text-gray-800">Royal College Member</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
              Areas of <span className="bg-gradient-to-r from-primary to-tealMedium bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-textGray max-w-3xl mx-auto">
              Specialized care across multiple disciplines with a focus on innovation and patient outcomes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${specialty.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  <div className={`bg-gradient-to-br ${specialty.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <specialty.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-gray-900 transition-colors">
                    {specialty.title}
                  </h3>

                  <p className="text-textGray mb-6 leading-relaxed">
                    {specialty.description}
                  </p>

                  <div className="space-y-3">
                    {specialty.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${specialty.gradient} mr-3`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center mb-12 bg-gray-100 p-2 rounded-2xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeTab === tab.id
                    ? 'bg-white shadow-lg text-primary'
                    : 'text-textGray hover:text-primary'
                  }`}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 min-h-[400px]">
            {activeTab === 'experience' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <h3 className="text-3xl font-bold text-primary mb-6">Professional Journey</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-lg text-primary mb-4">Current Positions</h4>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-primary mr-3 mt-1" />
                        <div>
                          <div className="font-semibold">Director of Clinical Training</div>
                          <div className="text-textGray">Royal Perth Bentley Group</div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Stethoscope className="w-5 h-5 text-primary mr-3 mt-1" />
                        <div>
                          <div className="font-semibold">Consultant Surgeon</div>
                          <div className="text-textGray">Multiple Premier Hospitals</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary mb-4">Hospital Affiliations</h4>
                    <div className="space-y-2">
                      {hospitals.map((hospital, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          <span className="text-gray-700">{hospital}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'approach' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <h3 className="text-3xl font-bold text-primary mb-6">Our Philosophy</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Dr. Vanitha believes in a holistic approach, working with plastic surgeons, oncologists, and breast care nurses to provide comprehensive care. This collaborative model ensures each patient receives personalized, effective treatment.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { icon: Users, label: 'Collaborative Care' },
                    { icon: Heart, label: 'Patient-Centered' },
                    { icon: BookOpen, label: 'Evidence-Based' },
                    { icon: Globe, label: 'Global Standards' }
                  ].map((item, idx) => (
                    <div key={idx} className="text-center">
                      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                      <p className="font-medium text-primary">{item.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'affiliations' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <h3 className="text-3xl font-bold text-primary mb-6">Professional Memberships</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { title: 'FRACS', subtitle: 'Fellow of the Royal Australasian College of Surgeons', icon: Award },
                    { title: 'BreastSurgANZ', subtitle: 'Full Member of BreastSurgANZ', icon: Users },
                    { title: 'BCT', subtitle: 'Member of Breast Cancer Trials Group', icon: BookOpen }
                  ].map((affiliation, idx) => (
                    <div key={idx} className="text-center p-6 bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl">
                      <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <affiliation.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="font-bold text-xl text-primary mb-2">{affiliation.title}</h4>
                      <p className="text-textGray text-sm">{affiliation.subtitle}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="py-20 px-4 bg-tealLight">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-tealMedium backdrop-blur-sm rounded-3xl" />
            <div className="relative p-12">
              <Sparkles className="w-12 h-12 text-white mx-auto mb-6 animate-pulse" />
              <h2 className="text-3xl font-bold text-white mb-6">Beyond Medicine</h2>
              <p className="text-xl text-pink-100 leading-relaxed">
                When not in the clinic, Dr. Vanitha enjoys cooking, reading, and travelling with her family.
                This balance allows her to bring genuine warmth and refreshed perspective to patient care,
                understanding that healing encompasses the whole person.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;