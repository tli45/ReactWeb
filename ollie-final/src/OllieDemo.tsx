import { motion } from 'framer-motion';
import { useState } from 'react';

const OllieDemo = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleStartAnimation = () => {
    setIsAnimating(true);
    // Reset animation after it completes
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col items-center justify-center p-4">
      <div className="relative w-full max-w-md h-[400px] flex items-center justify-center">
        {/* Skateboard */}
        <motion.div
          className="absolute bottom-0 w-48 h-4 bg-gray-800 rounded-lg"
          animate={{
            y: isAnimating ? -100 : 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.2
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg shadow-lg" />
        </motion.div>

        {/* Person */}
        <motion.div
          className="absolute bottom-4 w-16 h-24 flex flex-col items-center"
          animate={{
            y: isAnimating ? -150 : 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.2
          }}
        >
          {/* Head */}
          <div className="w-8 h-8 bg-gray-800 rounded-full mb-2" />
          {/* Body */}
          <div className="w-4 h-12 bg-gray-800 rounded-full mb-2" />
          {/* Legs */}
          <div className="flex gap-2">
            <motion.div
              className="w-2 h-8 bg-gray-800 rounded-full"
              animate={{
                rotateX: isAnimating ? 45 : 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeIn",
                delay: 0.1
              }}
            />
            <motion.div
              className="w-2 h-8 bg-gray-800 rounded-full"
              animate={{
                rotateX: isAnimating ? 45 : 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeIn",
                delay: 0.1
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Start Button */}
      <motion.button
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleStartAnimation}
        disabled={isAnimating}
      >
        {isAnimating ? '起跳中...' : '开始起跳'}
      </motion.button>
    </div>
  );
};

export default OllieDemo; 