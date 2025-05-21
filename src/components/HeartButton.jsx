import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

const HeartButton = ({ text = "Click Me!" }) => {
  const [clicked, setClicked] = useState(false)
  const [hearts, setHearts] = useState([])
  
  const handleClick = () => {
    setClicked(true)
    
    // Create multiple hearts
    const newHearts = Array.from({ length: 15 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 200 - 100,
      y: Math.random() * -150 - 50,
      rotation: Math.random() * 360,
      scale: Math.random() * 0.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.5
    }))
    
    setHearts([...hearts, ...newHearts])
    
    // Reset button state after animation
    setTimeout(() => {
      setClicked(false)
    }, 1000)
    
    // Remove hearts after animation completes
    setTimeout(() => {
      setHearts(hearts => hearts.filter(heart => heart.id !== newHearts[0].id))
    }, 2000)
  }
  
  return (
    <div className="relative inline-block">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className={`
          px-6 py-3 rounded-full font-medium text-white 
          shadow-lg transition-all duration-300
          relative overflow-hidden
          ${clicked ? 'bg-primary-700' : 'bg-primary-500 hover:bg-primary-600'}
        `}
      >
        <span className="relative z-10 flex items-center gap-2">
          {text} <FaHeart />
        </span>
        
        <motion.div
          initial={{ scale: 0, x: "-50%", y: "-50%" }}
          animate={clicked ? { scale: 4 } : { scale: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-1/2 left-1/2 w-5 h-5 bg-primary-300 rounded-full"
          style={{ originX: 0.5, originY: 0.5 }}
        />
      </motion.button>
      
      <AnimatePresence>
        {hearts.map(heart => (
          <motion.div
            key={heart.id}
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 1, 
              scale: 0,
              rotate: 0
            }}
            animate={{ 
              x: heart.x, 
              y: heart.y, 
              opacity: 0,
              scale: heart.scale,
              rotate: heart.rotation
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 2,
              ease: [0.23, 1, 0.32, 1]
            }}
            className="absolute top-1/2 left-1/2 text-primary-500 pointer-events-none"
          >
            <FaHeart size={20} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default HeartButton