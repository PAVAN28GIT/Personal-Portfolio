import React from 'react'
import contacImg from '../../public/icons/contact-img.svg'

import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { showToast } from "../utils/toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    showToast('Sending message...', 'loading');

    if(!form.current.from_name.value || !form.current.from_email.value || !form.current.message.value){
      showToast('' ,'dismiss')
      showToast('Please fill in all fields', 'error');
      return;
    }

    emailjs
      .sendForm('service_3eyu6pf', 'template_37cju2v', form.current, {
        publicKey: 'nGJOUXXcdWLABqoME',
      })
      .then(
        () => {
          showToast('' ,'dismiss')
          showToast("Your message has been sent. We'll respond ASAP", 'success');
         
        },
        (error) => {
          showToast('' ,'dismiss')
          showToast(`Failed to send message${error}`, 'error');
        },
      );
  };

  return (
  
    <div className='bg-gradient-to-r from-pink-600 to-purple-500 h-[82vh] pt-16' id='contact'>
    <div className='w-full px-10 py-5 flex flex-row justify-between items-center gap-2'>

      <div className='ml-5 slow-appear'>
        <img src={contacImg} className='size-4/5 ' alt="" />
      </div>

      <div className='mr-16'>
        <h1 className='text-5xl font-extrabold font-nunito text-nowrap pt-5 px-3'>Send a Message!! </h1>

       <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 rounded-md p-5" action="">
        <input className='px-4 w-96 py-3 bg-pink-100 outline-none rounded-lg text-black' type="text" name='from_name' placeholder='Enter Your Name'/>
        <input className='px-4 w-96 py-3 bg-pink-100 outline-none rounded-lg text-black' type="email" placeholder='Your Email Address' name='from_email' />
    
        <textarea className='px-4 w-96 h-40 resize-none py-3 bg-pink-100 outline-none rounded-lg text-black' type="message" placeholder='Your Message' name='message'/>

        <input className='px-4 w-96 py-3 outline-none rounded-lg text-gray-200 text-2xl bg-zinc-900 hover:text-white hover:bg-black transition-all hover:scale-105' type="submit" value="Send" />
       </form>
      </div>

    </div>
    
    </div>
  )
}

export default Contact