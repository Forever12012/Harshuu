import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Masonry from 'react-masonry-css'
import { FaTimes } from 'react-icons/fa'
import firstDate from '../images/firstDate.jpg'
import ourDate from '../images/ourDates2.jpg'
import matkuu from '../images/matkuuu.jpg'
import cuties from '../images/cuties.jpg'
import model from '../images/model.jpg'
import nepali from '../images/nepali.jpg'
import bachaa from '../images/bachaa.jpg'



const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  
  // Sample photos - replace with your actual photos of your girlfriend
  const photos = [
    {
      id: 1,
      url: firstDate,
      caption: "Our first date ♥️ !!!!"
    },
    {
      id: 2,
      url: ourDate,
      caption: "Us being silly 🤪"
    },
    {
      id: 3,
      url: matkuu,
      caption: "Ufff that smileeeeee !!! ♥️"
    },
    {
      id: 4,
      url: cuties,
      caption: "Cuties or wat ?! 🤌🏼🌚"
    },
    {
      id: 5,
      url: model,
      caption: "Meri Model 😍♥️"
    },
    {
      id: 6,
      url: bachaa,
      caption: "Who's that cuteeee bachaaa ?! Oh just remembered, that's meraaa piddiiiii ♥️🐼"
    },
    
    {
      id: 8,
      url: nepali,
      caption: "Mera Nepali 🤣🤣"
    },
  ]
  
  const handleImageClick = (photo) => {
    setSelectedImage(photo)
  }
  
  const closeModal = () => {
    setSelectedImage(null)
  }
  
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  }
  
  return (
    <div className="py-4">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-title mb-12"
      >
        Our Beautiful Memories
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4 bg-clip-padding"
        >
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <div 
                className="photo-card group relative"
                onClick={() => handleImageClick(photo)}
              >
                <img 
                  src={photo.url} 
                  alt={photo.caption} 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">{photo.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </motion.div>
      
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 text-white bg-primary-500 rounded-full p-2 z-10"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <FaTimes size={20} />
              </button>
              <img 
                src={selectedImage.url} 
                alt={selectedImage.caption} 
                className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
              />
              <div className="bg-white p-4 rounded-b-lg">
                <p className="text-gray-800 font-medium text-center">{selectedImage.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default GalleryPage