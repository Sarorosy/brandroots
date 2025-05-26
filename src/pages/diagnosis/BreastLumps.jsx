// BreastLumps.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Info, CheckCircle, XCircle } from 'lucide-react';

const BreastLumps = () => {
  return (
    <div className="p-6 bg-tealLight text-textGray rounded-lg shadow-lg">
      <motion.h1
        className="text-4xl font-bold text-primary mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Benign Breast Lumps
      </motion.h1>
      <motion.h2
        className="text-3xl font-semibold text-tealMedium mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Understanding Breast Lumps
      </motion.h2>
      <motion.p
        className="mb-4 text-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Majority of the breast complaints are benign in nature. Women with breast complaints "assume the worst" when a new problem is identified. It is obviously understandable. However, an understanding of the benign breast disorders is essential to help relieve unnecessary apprehensions.
      </motion.p>
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <img
          src="https://via.placeholder.com/600x300.png?text=Breast+Health"
          alt="Breast Health"
          className="rounded-lg mb-4"
        />
      </motion.div>
      <motion.h3
        className="text-2xl font-semibold text-tealMedium mt-6 mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Info className="inline mr-2" /> Triple Testing
      </motion.h3>
      <motion.p
        className="mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        A combination of clinical examination, imaging, and biopsy is necessary for women with significant clinical findings such as an asymmetrical thickening or a discrete palpable mass.
      </motion.p>
      <motion.h3
        className="text-2xl font-semibold text-tealMedium mt-6 mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <CheckCircle className="inline mr-2" /> Localized Nodularity
      </motion.h3>
      <motion.p
        className="mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        In a woman who has a lump in her breast, localized nodularity is a common finding reflecting the presence of lumpy or nodular breast tissue. It is generally noticed in the upper outer quadrants of the breasts. Localized nodularity is just a physiological change; most women who have been previously diagnosed with “fibrocystic disease” may have had nodular breast tissue.
      </motion.p>
      <motion.h3
        className="text-2xl font-semibold text-tealMedium mt-6 mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <CheckCircle className="inline mr-2" /> Fibroadenomas
      </motion.h3>
      <motion.p
        className="mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        Fibroadenomas are harmless lumps of glandular and fibrous tissue. Breasts are made up of lobules (milk-producing glands) and ducts (tubes that carry milk to the nipple), and are surrounded by glandular, fibrous, and fatty tissue. Typically, fibroadenoma develops from a lobule and later the glandular tissue and ducts grow over the lobule, forming a solid lump. Fibroadenomas in breasts may feel firm and rubbery and will have a smooth texture. This condition is characterized by lumps that move around when pressed, also referred to as ‘a breast mouse’.
      </motion.p>
      <motion.h3
        className="text-2xl font-semibold text-tealMedium mt-6 mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <CheckCircle className="inline mr-2" /> Cysts
      </motion.h3>
      <motion.p
        className="mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        Cysts are fluid entrapments in the breast tissue, which are common in women in the age group of 35–50. They usually cease with menopause but are common in women taking Hormone Replacement Therapy (HRT). Approximately 7% of women may have a palpable cyst at some point in their lives. Researchers state that about half of the women who attend breast clinics complain about cysts.
      </motion.p>
      <motion.h3
        className="text-2xl font-semibold text-tealMedium mt-6 mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <XCircle className="inline mr-2" /> Less Common Benign Breast Lumps
      </motion.h3>
      <motion.p
        className="mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.3 }}
      >
        Fat Necrosis occurs due to trauma (sudden injury) or a specific injury to the breast. Breasts are made up of lobules, ducts, glandular, fibrous, and fatty tissue. The damaged area of breast tissue can lead to a lump formation known as fat necrosis. Necrosis refers to cell death.
      </motion.p>
      <motion.p
        className="mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        Fat necrosis appears like a firm painless lump, but some women may have tenderness or even pain. The skin around the lump may look red, bruised, or occasionally dimpled. At times, fat necrosis can cause the nipple to retract inwards.
      </motion.p>
    </div>
  );
};

export default BreastLumps;
