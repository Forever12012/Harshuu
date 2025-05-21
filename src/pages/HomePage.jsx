import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaHeart, FaCamera, FaHistory, FaEnvelope } from 'react-icons/fa'
import HeartButton from '../components/HeartButton'
import ourDate from '../images/ourDates.jpg'

const HomePage = ({ girlfriend }) => {
  const nameRef = useRef(null)
  
  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.classList.add('heart-beat')
      
      const interval = setInterval(() => {
        nameRef.current.classList.add('heart-beat')
        
        setTimeout(() => {
          nameRef.current.classList.remove('heart-beat')
        }, 1000)
      }, 10000)
      
      return () => clearInterval(interval)
    }
  }, [])
  
  // Calculate days together
  const calculateDaysTogether = () => {
    const startDate = new Date(girlfriend.specialDate)
    const today = new Date()
    const timeDiff = today.getTime() - startDate.getTime()
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24))
    return daysDiff
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.3
          }
        }
      }}
      className="flex flex-col items-center justify-center"
    >
      <motion.div
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-primary-600 mb-6">
          Hello, <span ref={nameRef} className="text-primary-700">{girlfriend.name}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          Welcome to this special place made just for you, with all my love.
        </p>
        
        <div className="mt-8">
          <HeartButton text="Click Me!" />
        </div>
      </motion.div>
      
      <motion.div 
        variants={fadeInUp}
        className="mb-16"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img 
            src={ourDate} 
            alt="Us together" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-900/50 flex items-end justify-center pb-4">
            <p className="text-white font-medium text-sm">
              {calculateDaysTogether()} days together ❤️
            </p>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        variants={fadeInUp}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl"
      >
        <Link to="/gallery" className="hover:no-underline">
          <motion.div
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-soft text-center hover:shadow-md transition-all duration-300"
          >
            <FaCamera className="text-4xl text-primary-500 mb-4" />
            <h3 className="text-2xl font-display text-primary-600 mb-2">Our Photos</h3>
            <p className="text-gray-600">Cherished moments we've shared together</p>
          </motion.div>
        </Link>
        
        <Link to="/timeline" className="hover:no-underline">
          <motion.div
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-soft text-center hover:shadow-md transition-all duration-300"
          >
            <FaHistory className="text-4xl text-secondary-500 mb-4" />
            <h3 className="text-2xl font-display text-primary-600 mb-2">Our Timeline</h3>
            <p className="text-gray-600">The beautiful journey of our love story</p>
          </motion.div>
        </Link>
        
        <Link to="/love-notes" className="hover:no-underline">
          <motion.div
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-soft text-center hover:shadow-md transition-all duration-300"
          >
            <FaEnvelope className="text-4xl text-accent-500 mb-4" />
            <h3 className="text-2xl font-display text-primary-600 mb-2">Love Notes</h3>
            <p className="text-gray-600">Sweet messages just for your heart</p>
          </motion.div>
        </Link>
      </motion.div>
      
      <motion.div 
        variants={fadeInUp}
        className="mt-16 flex flex-col items-center"
      >
        <div className="flex items-center mb-4">
          <FaHeart className="text-xl text-primary-500 mr-2" />
          <h2 className="text-2xl md:text-3xl font-display text-primary-600">Why I Love You</h2>
          <FaHeart className="text-xl text-primary-500 ml-2" />
        </div>
        
        <p className="text-center text-gray-600 max-w-2xl">
          Every day with you is a gift. Your smile brightens my darkest days, and your love gives me strength.
          Thank you for being my partner, my best friend, and my greatest blessing.
          This little corner of the internet is dedicated to you and the beautiful love we share.
        </p>
      </motion.div>
    </motion.div>
  )
}

export default HomePage