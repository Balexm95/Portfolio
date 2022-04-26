import React from 'react'

const Contact = () => {

  function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }
  return (
    <div name='contact' className='w-full h-screen bg-[#119DA4] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/72db814c-b8d0-4588-93f2-514682585c65" className='flex flex-col max-w-[600px] w-full' onsubmit="return validateForm()">
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#FF4C29] text-white'>Contact</p>
                <p className='text-white py-4'> * Submit the form below or shoot me an email </p>
            </div>
            <input className='contact-field bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='contact-field my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='contact-field bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>

            <button className='contact-form-button text-white border-2 hover:bg-[#F54748] hover:border-[#F54748] px-4 py-3 my-8 mx-auto flex items-center'>Contact Me !</button>
        </form>
    </div>
  )
}

export default Contact