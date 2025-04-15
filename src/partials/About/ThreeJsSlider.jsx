import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import style from './slider.module.css'

const bookItems = [
  {
    id: 1,
    title: "The Courage to Be Disliked",
    desc: "A Japanese phenomenon that shows you how to change your life and achieve real happiness",
    url: "https://server-assets.b-cdn.net/p/courage-to-be-disliked.jpg"
  },
  {
    id: 2,
    title: "12 Rules for Life",
    desc: "An antidote to chaos by Jordan B. Peterson",
    url: "https://server-assets.b-cdn.net/p/jordan-peterson.jpg"
  },
  {
    id: 3,
    title: "Huberman Lab",
    desc: "Neuroscience and health insights from Dr. Andrew Huberman",
    url: "https://server-assets.b-cdn.net/p/huberman-lab.jpg"
  },
  {
    id: 4,
    title: "Can't Hurt Me",
    desc: "Master Your Mind and Defy the Odds by David Goggins",
    url: "https://server-assets.b-cdn.net/p/david-googins.webp"
  },
  {
    id: 5,
    title: "The Joe Rogan Experience",
    desc: "Conversations that matter with Joe Rogan",
    url: "https://server-assets.b-cdn.net/p/joe-rogan.jpg"
  },
  {
    id: 6,
    title: "Meditations",
    desc: "A series of personal writings by Marcus Aurelius",
    url: "https://server-assets.b-cdn.net/p/marcus-aurelius.jpg"
  },
  {
    id: 7,
    title: "Lex Fridman Podcast",
    desc: "Conversations about science, technology, and the human condition",
    url: "https://server-assets.b-cdn.net/p/lex-fridman.jpg"
  },
  {
    id: 8,
    title: "Sapiens",
    desc: "A Brief History of Humankind by Yuval Noah Harari",
    url: "https://server-assets.b-cdn.net/p/sapiens.jpg"
  },
  {
    id: 9,
    title: "The Almanack of Naval Ravikant",
    desc: "A Guide to Wealth and Happiness by Eric Jorgenson",
    url: "https://server-assets.b-cdn.net/p/the-almanack-of-naval-ravikant-eric-jorgenson-buy-online-bookbins-1.png"
  }
]

const BookItem = ({ item, className, onClick }) => {
  return (
    <img
      src={item.url}
      alt={item.title}
      className={`${className} object-cover cursor-pointer rounded-lg shadow-lg`}
      onClick={onClick}
      loading="lazy"
      decoding="async"
    />
  )
}

const BookModal = ({ selectedItem, isOpen, onClose, setSelectedItem, items }) => {
  if (!isOpen) return null

  return (
    <>
      <motion.div
        initial={{ scale: 0.98 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30
        }}
        className={style.modalContainer}
      >
        <div className={style.modalContent}>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedItem.id}
              className={style.modalBook}
              initial={{ y: 20, scale: 0.97 }}
              animate={{
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  mass: 0.5
                }
              }}
              exit={{
                y: 20,
                scale: 0.97,
                transition: { duration: 0.15 }
              }}
            >
              <BookItem item={selectedItem} className={style.modalBookImage} />
              <div className={style.modalBookInfo}>
                <h3 className={style.modalBookTitle}>{selectedItem.title}</h3>
                <p className={style.modalBookDesc}>{selectedItem.desc}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.button
          className={style.closeButton}
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className={style.closeIcon} />
        </motion.button>
      </motion.div>

      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.1}
        className={style.dockContainer}
      >
        <motion.div className={style.dock}>
          <div className={style.dockItems}>
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                style={{
                  zIndex: selectedItem.id === item.id ? 30 : items.length - index,
                }}
                className={`${style.dockItem} ${selectedItem.id === item.id ? style.activeDockItem : ''}`}
                initial={{ rotate: index % 2 === 0 ? -15 : 15 }}
                animate={{
                  scale: selectedItem.id === item.id ? 1.2 : 1,
                  rotate: selectedItem.id === item.id ? 0 : index % 2 === 0 ? -15 : 15,
                  y: selectedItem.id === item.id ? -8 : 0,
                }}
                whileHover={{
                  scale: 1.3,
                  rotate: 0,
                  y: -10,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
              >
                <BookItem item={item} className={style.dockItemImage} />
                {selectedItem.id === item.id && (
                  <motion.div
                    layoutId="activeGlow"
                    className={style.activeGlow}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

const ThreeJsSlider = () => {
  const [selectedItem, setSelectedItem] = useState(null)
  const [items, setItems] = useState(bookItems)
  const [isDragging, setIsDragging] = useState(false)

  return (
    <div className={style.container}>
      <AnimatePresence mode="wait">
        {selectedItem ? (
          <BookModal
            selectedItem={selectedItem}
            isOpen={true}
            onClose={() => setSelectedItem(null)}
            setSelectedItem={setSelectedItem}
            items={items}
          />
        ) : (
          <motion.div
            className={style.grid}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                layoutId={`book-${item.id}`}
                className={style.gridItem}
                onClick={() => !isDragging && setSelectedItem(item)}
                variants={{
                  hidden: { y: 50, scale: 0.9, opacity: 0 },
                  visible: {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 350,
                      damping: 25,
                      delay: index * 0.05
                    }
                  }
                }}
                whileHover={{ scale: 1.02 }}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={1}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={(e, info) => {
                  setIsDragging(false)
                  const moveDistance = info.offset.x + info.offset.y
                  if (Math.abs(moveDistance) > 50) {
                    const newItems = [...items]
                    const draggedItem = newItems[index]
                    const targetIndex = moveDistance > 0
                      ? Math.min(index + 1, items.length - 1)
                      : Math.max(index - 1, 0)
                    newItems.splice(index, 1)
                    newItems.splice(targetIndex, 0, draggedItem)
                    setItems(newItems)
                  }
                }}
              >
                <BookItem
                  item={item}
                  className={style.gridItemImage}
                  onClick={() => !isDragging && setSelectedItem(item)}
                />
                <motion.div
                  className={style.gridItemInfo}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={style.gridItemContent}>
                    <h3 className={style.gridItemTitle}>{item.title}</h3>
                    <p className={style.gridItemDesc}>{item.desc}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ThreeJsSlider