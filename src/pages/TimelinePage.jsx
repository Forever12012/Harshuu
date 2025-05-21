import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaHeart, FaStar, FaPlane, FaGift, FaBirthdayCake, FaHome } from 'react-icons/fa'

const TimelinePage = ({ anniversary }) => {


  // Sample timeline events - replace with your actual relationship milestones
  const timelineEvents = [
    {
  id: 1,
  date: "2024-06-09",
  title: (
    <>
      When We First <del>Met</del> Matched
    </>
  ),
  description: "The day we swiped right on each other and our journey began!!!",
  icon: <FaHeart className="text-primary-500" size={24} />,
  color: "bg-primary-100 border-primary-300",
  iconBg: "bg-primary-500"
}
,
    {
      id: 2,
      date: "2024-07-03",
      title: "Officially Together",
      description: "The day we became us (Yayyyyyyy !!!) ♥️",
      icon: <FaStar className="text-secondary-500" size={24} />,
      color: "bg-secondary-100 border-secondary-300",
      iconBg: "bg-secondary-500"
    },
    {
      id: 3,
      date: "2024-11-22",
      title: "We met each other for the first time !!",
      description: "Best day of my life, the day I met you in person.",
      icon: <FaHeart className="text-accent-500" size={24} />,
      color: "bg-accent-100 border-accent-300",
      iconBg: "bg-accent-500"
    },
    
    {
      id: 5,
      date: "2025-01-03",
      title: "Six Months Together",
      description: "Half a year of love, laughter, and growing together.",
      icon: <FaGift className="text-secondary-500" size={24} />,
      color: "bg-secondary-100 border-secondary-300",
      iconBg: "bg-secondary-500"
    },
    {
      id: 8,
      date: "2025-07-03",
      title: "Our First Anniversary (Soon, Impatiently waiting)",
      description: "We'll soon be celebrating one year of us, with many more to come. Easily the best year of my life.",
      icon: <FaHome className="text-secondary-500" size={24} />,
      color: "bg-secondary-100 border-secondary-300",
      iconBg: "bg-secondary-500"
    },
     {
      id: 7,
      date: "2025-05-21",
      title: "The day I'm making this website for you my bachuuuuu 🤌🏼♥️",
      description: "This website is a small token of my love for you. I love you so much, and wanted to make you feel special. I hope you like it .",
      icon: <FaStar className="text-primary-500" size={24} />,
      color: "bg-primary-100 border-primary-300",
      iconBg: "bg-primary-500"
    },
    
  ]
  
  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
  
  // Calculate days between dates
  const daysBetween = (date1, date2) => {
    const oneDay = 24 * 60 * 60 * 1000 // hours*minutes*seconds*milliseconds
    const firstDate = new Date(date1)
    const secondDate = new Date(date2)
    
    return Math.round(Math.abs((firstDate - secondDate) / oneDay))
  }
  
  return (
    <div className="py-4">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-title mb-12"
      >
        Our Love Story
      </motion.h1>
      
      <div className="relative container mx-auto px-4 max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-200 via-secondary-200 to-accent-200"></div>
        
        {timelineEvents.map((event, index) => (
          <TimelineItem 
            key={event.id} 
            event={event} 
            index={index}
            isLast={index === timelineEvents.length - 1}
          />
        ))}
      </div>
    </div>
  )
}

const TimelineItem = ({ event, index, isLast }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
  
  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center justify-between mb-8 ${
        index % 2 === 0 ? 'md:flex-row-reverse' : ''
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`w-full md:w-5/12 mb-8 md:mb-0 ${
          index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
        }`}
      >
        <div className={`p-6 rounded-lg shadow-md ${event.color} border-l-4`}>
          <p className="text-sm text-gray-500 mb-2">{formatDate(event.date)}</p>
          <h3 className="text-xl font-display text-gray-800 mb-2">{event.title}</h3>
          <p className="text-gray-600">{event.description}</p>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.1 }}
        className={`z-10 flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg ${event.iconBg}`}
      >
        {event.icon}
      </motion.div>
      
      <div className="w-full md:w-5/12"></div>
    </div>
  )
}

export default TimelinePage