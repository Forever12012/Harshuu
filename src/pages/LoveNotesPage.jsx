import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHeart, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const LoveNotesPage = ({ name }) => {
  const [selectedNote, setSelectedNote] = useState(null)
  const containerRef = useRef(null)
  
  // Sample love notes - replace with your actual messages
  const loveNotes = [
    {
      id: 1,
      message: "When I look into your eyes, I see my whole world and a future full of happiness.",
      color: "bg-primary-100"
    },
    {
      id: 2,
      message: "Your smile is my favorite sight in the whole wide world.",
      color: "bg-secondary-100"
    },
    {
      id: 3,
      message: "I fall in love with you a little more every day.",
      color: "bg-accent-100"
    },
    {
      id: 4,
      message: "You make my heart skip a beat, every single time (p.s. Heart attack na aajaye kisi din hehehe, jk 😝💋).",
      color: "bg-primary-100"
    },
    {
      id: 5,
      message: "Being with you is the easiest decision I've ever made cutuuuu babyyyy ♥️🐼.",
      color: "bg-secondary-100"
    },
    {
      id: 6,
      message: "Your love gives me strength I never knew I had sachmeeee.",
      color: "bg-accent-100"
    },
    {
      id: 7,
      message: "Every moment with you is a blessing I cherish deeply.",
      color: "bg-primary-100"
    },
    {
      id: 8,
      message: "You're not just my girlfriend, you're my best friend and soulmate and mera nepaliiiii.",
      color: "bg-secondary-100"
    },
    {
      id: 9,
      message: "My favorite place in the world is wherever you are (isiliyee jldii se shadi krke aa jaoo mere pas hameshaaa, ab aur nahii raha jataaa 🥹♥️).",
      color: "bg-accent-100"
    },
  ]
  
  const handleNoteClick = (note) => {
    setSelectedNote(note)
  }
  
  // Variables for the staggered animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }
  
  return (
    <div className="py-4">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-title mb-12"
      >
        Love Notes For You
      </motion.h1>
      
      <motion.div
        ref={containerRef}
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {loveNotes.map((note) => (
          <motion.div
            key={note.id}
            variants={item}
            whileHover={{ 
              scale: 1.05,
              rotate: Math.random() * 2 - 1,
              transition: { duration: 0.2 } 
            }}
            className={`${note.color} p-6 rounded-lg shadow-md cursor-pointer relative overflow-hidden`}
            onClick={() => handleNoteClick(note)}
          >
            <FaQuoteLeft className="text-primary-300 opacity-20 absolute top-2 left-2" size={20} />
            <p className="text-gray-700 text-center font-body py-4 px-2">
              {note.message}
            </p>
            <FaQuoteRight className="text-primary-300 opacity-20 absolute bottom-2 right-2" size={20} />
            <div className="absolute -bottom-2 -right-2 opacity-10">
              <FaHeart className="text-primary-500" size={40} />
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <AnimatePresence>
        {selectedNote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedNote(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className={`${selectedNote.color} p-10 rounded-lg shadow-xl max-w-md w-full relative`}
              onClick={(e) => e.stopPropagation()}
            >
              <FaHeart className="text-primary-500 absolute -top-5 left-1/2 transform -translate-x-1/2" size={40} />
              <div className="text-center">
                <FaQuoteLeft className="text-primary-400 inline-block mb-4" size={24} />
                <p className="text-2xl text-gray-700 font-body my-6">
                  {selectedNote.message}
                </p>
                <FaQuoteRight className="text-primary-400 inline-block mt-4" size={24} />
                
                <div className="mt-8 font-display text-2xl text-primary-600">
                  For my {name}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LoveNotesPage