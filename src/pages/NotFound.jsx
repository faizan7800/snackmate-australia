import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'

const NotFound = () => {
  return (
    <>
    <Header isVeg={true}/>
    <Hero featureImage={'https://i.ibb.co/Yk0yvYK/2548707-273801-P5-X298-594.jpg'} product='yes' name={""}/>
    <div className='flex flex-col justify-center items-center gap-8 mt-12'>
        <h1 className='text-2xl lg:text-5xl font-lora text-gray-500 text-center w-full'>Sorry, Page Not Found</h1>
        <a href="/"><button className="btn btn-hover">Go Back</button></a>
    </div>
    </>
  )
}

export default NotFound