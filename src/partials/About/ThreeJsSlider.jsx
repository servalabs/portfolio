import React, { useRef, useEffect, useState, useCallback } from 'react'
import * as THREE from 'three'
import { useTranslation } from 'react-i18next'
import style from './slider.module.css'

const ThreeJsSlider = ({ autoScrollInterval = 5000 }) => {
  const containerRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { t } = useTranslation('translation', { keyPrefix: 'about.slider' })
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  const imageUrls = [
    'https://server-assets.b-cdn.net/p/courage-to-be-disliked.jpg',
    'https://server-assets.b-cdn.net/p/jordan-peterson.jpg',
    'https://server-assets.b-cdn.net/p/huberman-lab.jpg',
    'https://server-assets.b-cdn.net/p/david-googins.webp',
    'https://server-assets.b-cdn.net/p/joe-rogan.jpg',
    'https://server-assets.b-cdn.net/p/marcus-aurelius.jpg',
    'https://server-assets.b-cdn.net/p/lex-fridman.jpg',
    'https://server-assets.b-cdn.net/p/sapiens.jpg',
    'https://server-assets.b-cdn.net/p/the-almanack-of-naval-ravikant-eric-jorgenson-buy-online-bookbins-1.png'
  ]
  
  // Navigate to next slide
  const goToNextSlide = useCallback(() => {
    setCurrentSlide(current => (current < imageUrls.length - 1 ? current + 1 : 0))
  }, [])
  
  // Navigate to previous slide
  const goToPrevSlide = useCallback(() => {
    setCurrentSlide(current => (current > 0 ? current - 1 : imageUrls.length - 1))
  }, [])
  
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
    scene.background = null
    
    // Camera setup with mobile adjustments
    const camera = new THREE.PerspectiveCamera(
      isMobile ? 75 : 60, // Wider FOV on mobile
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = isMobile ? 4 : 5 // Closer on mobile
    
    // Optimized renderer setup for mobile
    const renderer = new THREE.WebGLRenderer({ 
      antialias: !isMobile, // Disable antialias on mobile for performance
      alpha: true,
      powerPreference: "high-performance",
      precision: isMobile ? "lowp" : "mediump", // Lower precision on mobile
      stencil: false,
      depth: true
    })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2)) // Lower pixel ratio on mobile
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)
    
    // Create slide objects with mobile adjustments
    const slideWidth = isMobile ? 3 : 4 // Smaller on mobile
    const slideHeight = slideWidth * 1.5
    
    // Load textures with mobile optimizations
    const textureLoader = new THREE.TextureLoader()
    const textures = imageUrls.map(url => {
      const texture = textureLoader.load(url)
      texture.minFilter = THREE.LinearFilter
      texture.magFilter = THREE.LinearFilter
      if (isMobile) {
        texture.generateMipmaps = false // Disable mipmaps on mobile
      }
      return texture
    })
    
    // Add optimized lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
    directionalLight.position.set(1, 1, 1)
    scene.add(directionalLight)
    
    // Create only one slide at a time
    const geometry = new THREE.PlaneGeometry(slideWidth, slideHeight)
    const material = new THREE.MeshBasicMaterial({
      transparent: true,
      side: THREE.DoubleSide
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
    
    // Animation function with mobile optimizations
    let animationFrameId
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      
      if (mesh.material.map !== textures[currentSlide]) {
        mesh.material.map = textures[currentSlide]
        mesh.material.needsUpdate = true
      }
      
      // Simpler animation on mobile
      if (isMobile) {
        mesh.position.z = 0.5
        mesh.rotation.y = 0
      } else {
        mesh.position.z = Math.sin(Date.now() * 0.0005) * 0.5 + 0.5
        mesh.rotation.y = Math.sin(Date.now() * 0.0003) * 0.1
      }
      
      renderer.render(scene, camera)
    }
    
    // Handle window resize with debounce
    let resizeTimeout
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        if (!containerRef.current) return
        camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
        camera.updateProjectionMatrix()
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
      }, 100)
    }
    
    window.addEventListener('resize', handleResize)
    animate()
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (resizeTimeout) clearTimeout(resizeTimeout)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      textures.forEach(texture => texture.dispose())
      renderer.dispose()
    }
  }, [currentSlide, imageUrls, isMobile])
  
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
          {Array.from({ length: imageUrls.length }).map((_, index) => (
            <span 
              key={index} 
              className={`${style.indicator} ${index === currentSlide ? style.active : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
        
        <button className={style.controlButton} onClick={goToNextSlide}>
          <span>→</span>
        </button>
      </div>
      
      <div className={style.caption}>
        {t(`slide${currentSlide}`, `Slide ${currentSlide + 1}`)}
      </div>
      
      {isPaused && (
        <div className={style.pauseIndicator}>
          <span>||</span>
        </div>
      )}
    </div>
  )
}

export default ThreeJsSlider