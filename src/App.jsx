import Lenis from 'lenis'
import React, { useEffect } from 'react'
import Navbar from './assets/Components/Navbar'
import Hero from './assets/Components/Hero'
import Hero2 from './assets/Components/Hero2'
import GalleryComponent from './assets/Components/GalleryComponent'

const App = () => {

  useEffect(() => {

    // Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});
  })
  
  return (
    <div>
    <Navbar />
    <Hero/>
    <Hero2/>
    <GalleryComponent/>
    </div>
  )
}

export default App
