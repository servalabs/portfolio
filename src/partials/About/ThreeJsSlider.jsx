import React from 'react';
import styles from './slider.module.css';

<<<<<<< HEAD
const ThreeJsSlider = ({ slides = 5, autoScrollInterval = 5000 }) => {
  const containerRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const { t } = useTranslation('translation', { keyPrefix: 'about.slider' })
  
  // Navigate to next slide
  const goToNextSlide = useCallback(() => {
    setCurrentSlide(current => (current < slides - 1 ? current + 1 : 0))
  }, [slides])
  
  // Navigate to previous slide
  const goToPrevSlide = useCallback(() => {
    setCurrentSlide(current => (current > 0 ? current - 1 : slides - 1))
  }, [slides])
  
  // Auto-scroll timer
  useEffect(() => {
    if (isPaused) return
    
    const timer = setInterval(() => {
      goToNextSlide()
    }, autoScrollInterval)
    
    return () => clearInterval(timer)
  }, [goToNextSlide, autoScrollInterval, isPaused])
  
  // Create scene on component mount
  useEffect(() => {
    if (!containerRef.current) return
    
    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 5
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    containerRef.current.appendChild(renderer.domElement)
    
    // Create slide objects
    const slideObjects = []
    const slideWidth = 4  // Make slides larger
    const slideHeight = slideWidth * 0.75
    
    for (let i = 0; i < slides; i++) {
      const geometry = new THREE.PlaneGeometry(slideWidth, slideHeight)
      
      // Create different colored materials for each slide
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(`hsl(${i * 360 / slides}, 100%, 70%)`),
        side: THREE.DoubleSide
      })
      
      const mesh = new THREE.Mesh(geometry, material)
      
      // All slides stacked at the same position but different z-index
      mesh.position.x = 0
      mesh.position.y = 0
      mesh.position.z = -i * 10  // Start far behind
      mesh.visible = false  // Hide all slides initially
      
      scene.add(mesh)
      slideObjects.push(mesh)
    }
    
    // Animation function
    const animate = () => {
      requestAnimationFrame(animate)
      
      // Only show current slide
      slideObjects.forEach((obj, index) => {
        if (index === currentSlide) {
          obj.visible = true
          // Animate the current slide
          obj.position.z = Math.sin(Date.now() * 0.0005) * 0.5 + 0.5
          obj.rotation.y = Math.sin(Date.now() * 0.0003) * 0.1
        } else {
          obj.visible = false
          obj.position.z = -10  // Move others far back
        }
      })
      
      renderer.render(scene, camera)
    }
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }
    
    window.addEventListener('resize', handleResize)
    animate()
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [currentSlide, slides])
  
  return (
    <div 
      className={style.sliderContainer}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={style.threeContainer} ref={containerRef}></div>
      
      <div className={style.controls}>
        <button className={style.controlButton} onClick={goToPrevSlide}>
          <span>←</span>
        </button>
        
        <div className={style.slideIndicators}>
          {Array.from({ length: slides }).map((_, index) => (
            <span 
              key={index} 
              className={`${style.indicator} ${index === currentSlide ? style.active : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
=======
const images = [
  { url: 'https://server-assets.b-cdn.net/p/courage-to-be-disliked.jpg', alt: 'Courage to be disliked' },
  { url: 'https://server-assets.b-cdn.net/p/jordan-peterson.jpg', alt: 'Jordan Peterson' },
  { url: 'https://server-assets.b-cdn.net/p/huberman-lab.jpg', alt: 'Huberman Lab' },
  { url: 'https://server-assets.b-cdn.net/p/david-googins.webp', alt: 'David Googins' },
  { url: 'https://server-assets.b-cdn.net/p/joe-rogan.jpg', alt: 'Joe Rogan' },
  { url: 'https://server-assets.b-cdn.net/p/marcus-aurelius.jpg', alt: 'Marcus Aurelius' },
  { url: 'https://server-assets.b-cdn.net/p/lex-fridman.jpg', alt: 'Lex Fridman' },
  { url: 'https://server-assets.b-cdn.net/p/sapiens.jpg', alt: 'Sapiens' },
  { url: 'https://server-assets.b-cdn.net/p/the-almanack-of-naval-ravikant-eric-jorgenson-buy-online-bookbins-1.png', alt: 'Naval Ravikant' },
];

const ThreeJsSlider = () => (
  <div className={styles.sliderContainer}>
    <div className={styles.imageGrid}>
      {images.map((image, idx) => (
        <div className={styles.imageItem} key={idx}>
          <img src={image.url} alt={image.alt} loading="lazy" />
>>>>>>> b6e7a8226a851c5a4dfc91aa64370007c8d417e5
        </div>
      ))}
    </div>
  </div>
);

export default ThreeJsSlider;
