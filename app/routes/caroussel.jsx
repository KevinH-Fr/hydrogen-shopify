import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Define animation variants for the image and links
const imageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } }, // Exit animation
};

const linkVariants = {
  hidden: { y: 0 },
  visible: (i) => ({
    y: 100,
    transition: { duration: 1 + i * 0.2 } // Stagger the links slightly
  })
};

const Caroussel = () => {
  const [selectedContent, setSelectedContent] = useState({
    imageSrc: "/assets/cartier eyewear.webp",
    text: "Default text for the initial image",
  });

  const links = [
    { id: 1, label: "Link 1", image: "/assets/prada eyewear.webp", text: "Text for Link 1" },
    { id: 2, label: "Link 2", image: "/assets/prada eyewear 2.webp", text: "Text for Link 2" },
    { id: 3, label: "Link 3", image: "/assets/saint laurent eyewear.webp", text: "Text for Link 3" }
  ];

  return (
    <div className="">
      
      {/* First animation: Display the image */}
      <div className="p-10">
        <AnimatePresence mode='wait'>
          <motion.img
            key={selectedContent.imageSrc} // Key prop forces re-render on image change
            src={selectedContent.imageSrc}
            alt="Displayed Image"
            className="object-contain h-[50vh] w-full p-1"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />

          {/* Display the text associated with the selected image */}
          <motion.div
            className="text-center text-lg mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {selectedContent.text}
          </motion.div>
          
        </AnimatePresence>
      </div>



      {/* Second animation: Display the links */}
      <div className="flex flex-row justify-center mt-5 space-x-4">
        {links.map((link, i) => (
          <motion.a
            key={link.id}
            href="#"
            className="bg-blue-500 text-white p-2 rounded"
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            custom={i} // Custom value for staggered animation
            onClick={(e) => {
              e.preventDefault();
              // Set new image and associated text when a link is clicked
              setSelectedContent({
                imageSrc: link.image,
                text: link.text,
              });
            }}
          >
            {link.label}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Caroussel;


  {/* 

  ok -   faire deux animations tres basiques en cascade proprement
    puis faire animation de base à l'ouverture :
      premiere image apparait
      btn vont vers le bas
      image animation au click
      remplacer image par objets 3d
  */}