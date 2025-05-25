import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight, ArrowRight, PhoneCall, Calendar, Calendar1, ListMinus } from "lucide-react";
import logo from '../assets/logo.svg'
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from "react-router-dom";

const dropdownItems = {
  "Breast Cancer": [
    "What is Breast Cancer?",
    "Breast Cancer Stages",
    "Am I at Risk of Breast Cancer?"
  ],
  Diagnosis: [
    "Breast Lumps",
    "Breast Shape Changes",
    "Breast Pain",
    "Nipple Discharge",
    "Breast Biopsy"
  ],
  "General Surgery": [
    {
      label: "Conditions",
      children: [
        "Hernia",
        "Gall Stones",
        "Gall Bladder Disease"
      ]
    },
    {
      label: "Treatments",
      children: [
        "Laparoscopic Mesh Repair of Inguinal / Femoral Hernia",
        "Laparoscopic Gall Bladder Surgery",
        "Open mesh repair of Umbilical and Para-Umbilical Hernia"
      ]
    }
  ],
  "Breast Surgery": [
    "Anatomy of The Breast",
    {
      label: "Conditions",
      children: [
        "Fibroadenoma",
        "Duct Ectasia",
        "Simple Breast Cysts"
      ]
    },
    {
      label: "Breast Cancer Surgery",
      children: [
        "Mastectomy",
        "Wide Local Excision",
        "Hook Wire Guided Wide Local Excision",
        "Simple Mastectomy",
        "Skin Sparing Mastectomy",
        "Nipple Sparing Mastectomy"
      ]
    },
    {
      label: "Axillary Surgery",
      children: [
        "Sentinel Lymph Node Biopsy",
        "Axillary Clearance"
      ]
    },
    "Oncoplastic Breast Surgery",
    "Clinical Outcomes"
  ]
};

export default function Header() {
  const usenavigate = useNavigate()
  const navigate = (path) => {
    usenavigate(path);
    setMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);

  }; // Mock navigation for demo
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        setActiveDropdown(null);
        setActiveSubDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const mainLinks = [
    { label: "About", path: "/about" },
    { label: "Breast Cancer", dropdown: true },
    { label: "Diagnosis", dropdown: true },
    { label: "General Surgery", dropdown: true },
    { label: "Breast Surgery", dropdown: true },
    { label: "Referral", path: "/referral" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">

      <div className="flex items-center justify-between bg-white border-b text-white px-6 py-2">
        <div
          className="flex items-center space-x-3 cursor-pointer group transition-all duration-300 "
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="BrandRoots Logo" className="h-24 " />
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-primary p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          {menuOpen ? <X size={24} /> : <ListMinus size={24} />}
        </button>
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="tel:+917010060670"
            className="flex items-center bg-gradient-to-r from-[#2B6D6D] to-[#4C9494] text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <PhoneCall size={15} className="text-white mr-2" /> +91 7010060670
          </a>
          <button
            onClick={() => navigate("/appointment")}
            className="flex items-center bg-gradient-to-r from-[#2B6D6D] to-[#4C9494] text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Calendar size={15} className="text-white mr-2" /> Book Appointment
          </button>
        </div>


      </div>
      <div className="flex lg:hidden items-center justify-center space-x-4 mt-2">
        <a
          href="tel:+917010060670"
          className="flex items-center bg-gradient-to-r from-[#2B6D6D] to-[#4C9494] text-white px-3 py-1 rounded font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          <PhoneCall size={15} className="text-white mr-2" /> +91 7010060670
        </a>
        <button
          onClick={() => navigate("/appointment")}
          className="flex items-center bg-gradient-to-r from-[#2B6D6D] to-[#4C9494] text-white px-3 py-1 rounded font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          <Calendar size={15} className="text-white mr-2" /> Book Appointment
        </button>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-2 overflow-visible relative z-40"
        onMouseLeave={() => {
          setActiveDropdown(null);
          setActiveSubDropdown(null);
        }
        }
      >
        <div className="flex items-center justify-between">
          {/* Logo */}


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {mainLinks.map((link) => {

              const handleEvents =
                link.label === "Referral" || link.label === "Contact Us" || link.label === "About"
                  ? {
                    onClick: () =>
                      link.dropdown
                        ? setActiveDropdown(activeDropdown === link.label ? null : link.label)
                        : navigate(link.path),
                  }
                  : {
                    onMouseEnter: () =>
                      link.dropdown
                        ? setActiveDropdown(activeDropdown === link.label ? null : link.label)
                        : navigate(link.path),
                  };

              return (

                <div key={link.label} className="relative group">


                  <button
                    {...handleEvents}
                    // onClick={() =>
                    //   link.dropdown
                    //     ? setActiveDropdown(activeDropdown === link.label ? null : link.label)
                    //     : navigate(link.path)
                    // }


                    className={`
                    px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 flex items-center gap-2
                    ${activeDropdown === link.label
                        ? 'bg-[#2B6D6D] text-white shadow-lg'
                        : 'text-gray-700 hover:bg-[#8BC5C5]/20 hover:text-[#2B6D6D]'
                      }
                  `}
                  >
                    {link.label}
                    {link.dropdown && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''
                          }`}
                      />
                    )}
                  </button>

                  {link.dropdown && activeDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-visible animate-in slide-in-from-top-2 duration-200 z-50">
                      <div className="p-2">
                        {dropdownItems[link.label].map((item, index) => (
                          typeof item === "string" ? (
                            <button
                              key={item}
                              onClick={() => {
                                navigate(`/${link.label.toLowerCase().replace(/ /g, '-')}/${item.toLowerCase().replace(/ /g, '-')}`);
                                setActiveDropdown(null);
                              }}
                              className="w-full text-left px-4 py-3 rounded-lg hover:bg-[#8BC5C5]/10 text-gray-700 hover:text-[#2B6D6D] transition-all duration-200 flex items-center justify-between group"
                            >
                              <span className="font-medium">{item}</span>
                              <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            </button>
                          ) : (
                            <div key={item.label} className="relative">
                              <button
                                className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-[#8BC5C5]/10 hover:text-[#2B6D6D] rounded-lg transition-all duration-200 font-medium"
                                onMouseEnter={() => setActiveSubDropdown(item.label)}
                                onClick={() => setActiveSubDropdown(activeSubDropdown === item.label ? null : item.label)}
                              >
                                <span>{item.label}</span>
                                <ChevronRight size={16} className={`transition-transform duration-200 ${activeSubDropdown === item.label ? 'rotate-90' : ''
                                  }`} />
                              </button>

                              {activeSubDropdown === item.label && (
                                <div className="absolute top-0 left-full ml-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-in slide-in-from-left-2 duration-200">
                                  <div className="p-2">
                                    <div className="px-4 py-2 text-xs font-semibold text-[#999999] uppercase tracking-wider border-b border-gray-100 mb-2">
                                      {item.label}
                                    </div>
                                    {item.children.map((subItem) => (
                                      <button
                                        key={subItem}
                                        onClick={() => {
                                          navigate(`/${link.label.toLowerCase().replace(/ /g, '-')}/${item.label.toLowerCase().replace(/ /g, '-')}/${subItem.toLowerCase().replace(/ /g, '-')}`);
                                          setActiveDropdown(null);
                                          setActiveSubDropdown(null);
                                        }}
                                        className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-[#8BC5C5]/10 text-gray-600 hover:text-[#2B6D6D] transition-all duration-200 flex items-center justify-between group"
                                      >
                                        <span>{subItem}</span>
                                        <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </nav>



        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
            className="absolute w-full z-50 bg-white lg:hidden overflow-y-auto shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
              {mainLinks.map((link) => (
                <div key={link.label} className="border-b border-gray-100 pb-2 last:border-none">
                  <button
                    className="flex justify-between items-center w-full text-left py-3 font-medium text-gray-700 hover:text-[#2B6D6D] transition-colors"
                    onClick={() =>
                      link.dropdown
                        ? setActiveDropdown(activeDropdown === link.label ? null : link.label)
                        : (navigate(link.path), setMenuOpen(false))
                    }
                  >
                    <span className="text-lg">{link.label}</span>
                    {link.dropdown && (
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180 text-[#2B6D6D]' : ''
                          }`}
                      />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {link.dropdown && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="pl-3 mt-1 space-y-2"
                      >
                        {dropdownItems[link.label].map((item) =>
                          typeof item === 'string' ? (
                            <button
                              key={item}
                              onClick={() => {
                                navigate(`/${link.label.toLowerCase().replace(/ /g, '-')}/${item.toLowerCase().replace(/ /g, '-')}`);
                                setActiveDropdown(null);
                                setMenuOpen(false);
                              }}
                              className="block w-full text-left py-2 px-3 rounded-md text-gray-600 hover:bg-[#8BC5C5]/10 hover:text-[#2B6D6D] transition"
                            >
                              {item}
                            </button>
                          ) : (
                            <div key={item.label} className="pl-3 border-l-2 border-[#8BC5C5]/30">
                              <p className="text-sm font-semibold text-[#2B6D6D] mt-2">{item.label}</p>
                              <div className="pl-2 mt-1 space-y-1">
                                {item.children.map((subItem) => (
                                  <button
                                    key={subItem}
                                    onClick={() => {
                                      navigate(`/${link.label.toLowerCase().replace(/ /g, '-')}/${item.label.toLowerCase().replace(/ /g, '-')}/${subItem.toLowerCase().replace(/ /g, '-')}`);
                                      setActiveDropdown(null);
                                      setMenuOpen(false);
                                    }}
                                    className="block w-full text-left py-1.5 px-3 text-sm text-gray-600 hover:bg-[#8BC5C5]/10 hover:text-[#2B6D6D] rounded-md transition"
                                  >
                                    {subItem}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4">
                <button
                  onClick={() => {
                    navigate('/appointment');
                    setMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-[#2B6D6D] to-[#4C9494] text-white py-3 rounded-lg font-medium hover:shadow-md transition-all"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}