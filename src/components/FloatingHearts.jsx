import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([])
  
  useEffect(() => {
    // Create initial floating hearts
    const initialHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.2
    }))
    
    setHearts(initialHearts)
    
    // Clean up on unmount
    return () => setHearts([])
  }, [])
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ 
            x: heart.x, 
            y: heart.y + window.innerHeight, 
            opacity: heart.opacity 
          }}
          animate={{ 
            y: -100,
            x: heart.x + (Math.random() * 100 - 50)
          }}
          transition={{ 
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear"
          }}
          className="absolute text-primary-400"
          style={{ fontSize: heart.size }}
        >
          <FaHeart />
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingHearts