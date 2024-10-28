import React from 'react'
import contacImg from '../../public/icons/contact-img.svg'

const Contact = () => {
  return (
    <div className='bg-gradient-to-r from-pink-600 to-purple-500 h-[82vh] pt-16' id='contact'>
    <div className='w-full px-10 py-5 flex flex-row justify-between items-center gap-2'>

      <div className='ml-5 slow-appear'>
        <img src={contacImg} className='size-4/5 ' alt="" />
      </div>

      <div className='mr-16'>
        <h1 className='text-5xl font-extrabold font-nunito text-nowrap pt-5 px-3'>Send a Message!! </h1>

       <form className="flex flex-col gap-5 rounded-md p-5" action="">
        <input className='px-4 w-96 py-3 bg-pink-100 outline-none rounded-lg text-black' type="text" placeholder='Enter Your Name'/>
        <input className='px-4 w-96 py-3 bg-pink-100 outline-none rounded-lg text-black' type="email" placeholder='Your Email Address' />
        <input className='px-4 w-96 py-3 bg-pink-100 outline-none rounded-lg text-black' type="email" placeholder='Subject' />
     
        <textarea className='px-4 w-96 h-40 resize-none py-3 bg-pink-100 outline-none rounded-lg text-black' type="text" placeholder='Your Message'/>

        <input className='px-4 w-96 py-3 outline-none rounded-lg text-gray-200 text-2xl bg-zinc-900 hover:text-white hover:bg-black' type='submit'   />
       </form>
       
   
      
      </div>

    </div>
    
    </div>
  )
}

export default Contact