import React from 'react'
import Hero from '../components/Hero'

const Product = ({data}) => {
  return (
    <>
    <div className='flex flex-col justify-center items-center w-[70%] m-auto gap-4 lg:gap-8 mt-[100px]'>
      <h2 className="h2 section-title max-sm:text-4xl text-[#ff8d29]">
        {data[0]?.title}
      </h2>
      <h3 className='text-black px-4 text-2xl lg:text-3xl font-bold'>{data[0]?.boldText1 ? data[0]?.boldText1 : "" }</h3>
      <p className='text-black px-4 text-xl lg:text-2xl text-center'>{data[0]?.text1 ? data[0]?.text1 : "" }</p>
      <h3 className='text-black px-4 text-2xl lg:text-3xl font-bold'>{data[0]?.boldText2 ? data[0]?.boldText2 : "" }</h3>
      <p className='text-black px-4 text-xl lg:text-2xl text-center'>{data[0]?.text2 ? data[0]?.text2 : "" }</p>
      <h3 className='text-black px-4 text-2xl lg:text-3xl font-bold'>{data[0]?.boldText3 ? data[0]?.boldText3 : "" }</h3>
      <p className='text-black px-4 text-xl lg:text-2xl text-center'>{data[0]?.text3 ? data[0]?.text3 : "" }</p>
      <h3 className='text-black px-4 text-2xl lg:text-3xl font-bold'>{data[0]?.boldText4 ? data[0]?.boldText4 : "" }</h3>
      <p className='text-black px-4 text-xl lg:text-2xl text-center'>{data[0]?.text4 ? data[0]?.text4 : "" }</p>
      <h3 className='text-black px-4 text-2xl lg:text-3xl font-bold'>{data[0]?.boldText5 ? data[0]?.boldText5 : "" }</h3>
      <p className='text-black px-4 text-xl lg:text-2xl text-center'>{data[0]?.text5 ? data[0]?.text5 : "" }</p>
      <h3 className='text-black px-4 text-2xl lg:text-3xl font-bold'>{data[0]?.boldText6 ? data[0]?.boldText6 : "" }</h3>
      <p className='text-black px-4 text-xl lg:text-2xl text-center'>{data[0]?.text6 ? data[0]?.text6: "" }</p>
      <h3 className='text-black px-4 text-2xl lg:text-3xl font-bold'>{data[0]?.boldText7 ? data[0]?.boldText7 : "" }</h3>
      <p className='text-black px-4 text-xl lg:text-2xl text-center'>{data[0]?.text7 ? data[0]?.text7: "" }</p>
    </div>
    </>           
  )
}

export default Product