import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LinksAnimation = () => {
  const [showLinks, setShowLinks] = useState(false);

  // Delay the appearance of the links by 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLinks(true);
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  // Define variants for each link with different end positions
  const linkVariants = {
    hidden: { opacity: 0, y: 0, x: 0 }, // All links start in the center
    visible: (custom) => ({
      opacity: 1,
      x: custom.x, // Unique horizontal movement
      y: custom.y, // Unique vertical movement
      transition: {
        duration: 3, // Duration of the movement
        type: "spring",
        stiffness: 50,
      },
    }),
  };

  // Define an array of links and their specific movement directions
  const links = [
    { name: 'Home', x: -300, y: 400 },      // Move left and down
    { name: 'About', x: -150, y: 400 },      // Move right and further down
    { name: 'Services', x: 0, y: 400 },  // Move left and even further down
    { name: 'Contact', x: 150, y: 400 },    // Move right and slightly down
    { name: 'Products', x: 300, y: 400 },    // Move right and slightly down
];

  return (
    <>
      {showLinks && (
        <div className="fixed inset-0 flex justify-center items-center">
          <motion.div className="relative flex">
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={`#${link.name.toLowerCase()}`}
                className="bg-gray-400 p-2 m-2 rounded"
                custom={{ x: link.x, y: link.y }} // Pass custom x and y for each link
                initial="hidden"
                animate="visible"
                variants={linkVariants}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default LinksAnimation;
