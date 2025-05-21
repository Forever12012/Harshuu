import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

const LoadingScreen = ({ name }) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-primary-100 to-secondary-100 flex flex-col items-center justify-center">
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1, 1.2, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["25%", "25%", "50%", "50%", "25%"] 
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatDelay: 0.5
        }}
        className="text-primary-500 mb-8"
      >
        <FaHeart size={60} />
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-4xl font-display text-primary-600 mb-4"
      >
        For {name}
      </motion.h1>
      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ duration: 2, repeat: Infinity }}
        className="h-1 bg-primary-400 rounded-full"
      />
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-4 text-primary-600"
      >
        Loading something special...
      </motion.p>
    </div>
  )
}

export default LoadingScreen