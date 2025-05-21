import { motion } from 'framer-motion'
import { FaHeart, FaInstagram, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white bg-opacity-80 backdrop-blur-md py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="text-primary-500 mb-4"
          >
            <FaHeart size={32} />
          </motion.div>
          
          <p className="text-gray-600 text-center mb-4">
            Created with <span className="text-primary-500">❤️</span> just for you
          </p>
          
          
          
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} • Forever Yours
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer