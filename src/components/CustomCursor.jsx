import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [cursorType, setCursorType] = useState('default')

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const mouseDown = () => setClicked(true)
    const mouseUp = () => setClicked(false)

    const handleLinkHover = () => setCursorType('link')
    const handleLinkLeave = () => setCursorType('default')

    window.addEventListener('mousemove', mouseMove)
    window.addEventListener('mousedown', mouseDown)
    window.addEventListener('mouseup', mouseUp)

    const links = document.querySelectorAll('a, button')
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover)
      link.addEventListener('mouseleave', handleLinkLeave)
    })

    return () => {
      window.removeEventListener('mousemove', mouseMove)
      window.removeEventListener('mousedown', mouseDown)
      window.removeEventListener('mouseup', mouseUp)
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover)
        link.removeEventListener('mouseleave', handleLinkLeave)
      })
    }
  }, [])

  const variants = {
    default: {
      x: position.x - 16,
      y: position.y - 16,
      opacity: 0.5,
      height: clicked ? 24 : 32,
      width: clicked ? 24 : 32,
      transition: {
        type: 'spring',
        mass: 0.5
      }
    },
    link: {
      x: position.x - 20,
      y: position.y - 20,
      opacity: 0.8,
      height: 40,
      width: 40,
      rotate: 45,
      transition: {
        type: 'spring',
        mass: 0.5
      }
    }
  }

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none"
      variants={variants}
      animate={cursorType}
    >
      <div className="relative">
        <FaHeart 
          size={32} 
          className="text-primary-500 absolute top-0 left-0" 
          style={{ opacity: 0.8 }}
        />
      </div>
    </motion.div>
  )
}

export default CustomCursor