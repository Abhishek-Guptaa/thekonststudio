import React from 'react'

const Hero2 = () => {
  return (
    <section id="about">
    <div className="hero2">
      <div className="w-full h-screen flex justify-center items-center font-main p-16 py z-50">
        {/* Center Content */}
        <div className="flex flex-col justify-center items-center text-justify">
          <h1 className="text-6xl py-6">
            About <span className="text-text-secondary">us</span>
          </h1>
          <p className="text-wrap font-second py-12 px-52 text-3xl">
          At <span className='text-secondary'>Konst Studio</span>, we turn creativity into results. Specializing in <span className='text-secondary'>photography</span>, <span className='text-secondary'>video editing</span>, <span className='text-secondary'>graphic design</span>, and <span className='text-secondary'>marketing</span>, we help businesses build bold, unforgettable brands. "<span className='text-secondary text-bold'>Konst</span>" means <span className='text-secondary'>art</span> in Swedish, and that's exactly what we bring—<span className='text-secondary'>art with impact</span>. Whether it's crafting <span className='text-secondary'>high-converting visuals</span>, producing <span className='text-secondary'>stunning brand campaigns</span>, or creating <span className='text-secondary'>content that resonates</span>, we ensure your business stands out. Driven by <span className='text-secondary'>innovation</span> and <span className='text-secondary'>strategy</span>, we don’t just make things look good—we make them work for you. <span className='text-secondary'>Let’s create something powerful together.</span>
            </p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Hero2