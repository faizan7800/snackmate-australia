import React from 'react'

const Hero = ({featureImage, product, name}) => {
  return (
    <section className="hero" id="home" style={{backgroundImage: `url(${featureImage? featureImage : "https://i.ibb.co/60kpHMm/image.png"})`}}>
    <div className="container">

      <div className="hero-content">

     { product === 'yes' ? "":  <p className="hero-subtitle">Introducing SnackMate Where</p>}

       {product === 'yes' ? <h2 className='h1 hero-title mt-[-100px]'> {name}</h2> : <h2 className='h1 hero-title'> Authentic Taste Meets Vegetarian Delight!</h2>}

       {product === 'yes' ? "": <p className="hero-text">SnackMate. Born from the desire to offer snack enthusiasts a guilt-free indulgence without compromising on taste, SnackMate emerges as a prominent player in the realm of vegetarian delights.
        </p>}


      </div>

    </div>
  </section>
  )
}

export default Hero