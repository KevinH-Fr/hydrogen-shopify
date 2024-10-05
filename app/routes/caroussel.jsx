import { motion, AnimatePresence, delay } from "framer-motion";
import { useState } from "react";

// Define animation variants for the image and links
const imageVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 2,
    transition: { duration: 1 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } }, // Exit animation
};

const linkVariants = {
  hidden: { y: 800, x: 0, opacity: 0}, // Start from above the center
  visible: (i) => ({
    y: -10, //
    x: (i - 1) * 100, // Spread out to the sides
    opacity: 1,
    transition: {
      delay: 2.5,
      duration: 1 + i * 0.2, // Staggered movement animation
    },
  }),
};

const Caroussel = () => {
  const [selectedContent, setSelectedContent] = useState({
    imageSrc: "/assets/cartier eyewear.webp",
    text: "Cartier finement bleutée",
    sous_texte: "Essayez moi"
  });

  const links = [
    { id: 1, label: "Prada model1", image: "/assets/prada eyewear.webp", text: "Prada trop belles", sous_texte: "Emmenez moi" },
    { id: 2, label: "Prada model2", image: "/assets/prada eyewear 2.webp", text: "Prada vraiment classes", sous_texte: "Achetez moi" },
    { id: 3, label: "Saint Laurent", image: "/assets/saint laurent eyewear.webp", text: "Saint Laurent qui déchirent", sous_texte: "Trouvez moi" }
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


         {/* Display text */}

         <motion.div
            className="text-center text-4xl absolute top-40 left-1/2 transform -translate-x-1/2 text-gray-800 flex items-center justify-center"
            initial={{ opacity: 0, x: 500 }}  // Start off-screen to the left
            animate={{ opacity: 1, x: 0 }}      // Move to the center position
            exit={{ opacity: 0, x: 100 }}        // Optionally move out to the right when exiting
            transition={{ 
              delay: 0.5,
              type: "spring", 
              damping: 30, 
              duration: 0.8}}          
          >
            {selectedContent.text}
          </motion.div>


          {/* Display sous texte */}

          <motion.div
            className="text-center text-2xl absolute top-100 left-1/2 transform -translate-x-1/2 text-blue-800 flex items-center justify-center"
            initial={{ opacity: 0, x: -500 }}  // Start off-screen to the left
            animate={{ opacity: 1, x: 0 }}      // Move to the center position
            exit={{ opacity: 0, x: 100 }}        // Optionally move out to the right when exiting
            transition={{ 
              delay: 1.5,
              type: "spring", 
              damping: 30, 
              duration: 1.2}}          
          >
            {selectedContent.sous_texte}
          </motion.div>


          
        </AnimatePresence>
      </div>


      {/* Second animation: Display the buttons */}
      <div className="flex flex-row justify-center mt-5">
        {links.map((link, i) => (
          <motion.button
            key={link.id}
            className="bg-gray-800 text-white p-2 text-2xl rounded cursor-pointer mx-4"
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            custom={i} // Custom value for staggered animation
            onClick={(e) => {
              e.preventDefault();
              // Set new image and associated text when a button is clicked
              setSelectedContent({
                imageSrc: link.image,
                text: link.text,
                sous_texte: link.sous_texte,
              });
            }}
          >
            {link.label}
          </motion.button>
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