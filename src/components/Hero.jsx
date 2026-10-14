import React from 'react'
import { useEffect, useRef } from 'react'

const Hero = () => {

    const videoRef = useRef()
    
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2;
        }
    },[]);

  return (
    <section id='hero'>
        <div>
            <h1>AERON PRO</h1>
            <span className="sr-only">Aeron premium laptop concept</span>
        </div>
        <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline/>
        <button onClick={() => document.getElementById("product-viewer")?.scrollIntoView({behavior:"smooth"})}>Explore in 3D</button>
        <p>A precision-crafted laptop concept for creators</p>
    </section>
  )
}

export default Hero