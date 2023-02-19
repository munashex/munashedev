import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {toast} from 'react-toastify'//toast for alert prompts in UI

function Contact() {
  const form = useRef(); 

 

  const sendEmail = (e) => {
    e.preventDefault();
  //emailjs for handling form without server code 
    emailjs.sendForm('service_0mh5r2v', 'template_89hcr25', form.current, 'EAepdCvqJw6gmNOAx')
      .then((result) => {
        toast.success('Your message was conveyed perfectly');
        e.target.reset()
      }, (error) => {
        toast.error(error.message)
      });
  };
  return (
    <div>
      <h1 className="text-slate-200 text-2xl lg:text-3xl text-center">Get In Touch</h1>
      
       <h1 className="
        py-4 w-[80%] md:w-[60%] lg:w-[50%] 
        xl:w-[40%] 2xl:w-[30%] mx-auto
         text-slate-400 my-4 text-lg leading-[23px]  
         lg:text-xl">Although I am actively seeking new career prospects, 
         my inbox is always open. Whether you have inquiries or want to catch up,
          I'll do my best to respond promptly and thoroughly.</h1>
  

       <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center">
      
      <input required 
       type="text" name="user_name" 
       className="my-3 w-[80%] md:w-[60%]
        placeholder:text-black lg:w-[50%] xl:w-[40%] 
        text-center h-9 rounded-md outline-none"
       placeholder='name'
       />

      <input 
      placeholder='email'
      required type="email" 
      name="user_email"
       className="my-3 w-[80%] md:w-[60%] placeholder:text-black
        lg:w-[50%] xl:w-[40%] text-center  h-9 rounded-md outline-none" />
      
      <textarea placeholder='message'
      required name="message" className="placeholder:text-center placeholder:text-black
       my-3 w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] rounded-md h-[100px] 
       outline-none resize-y"/>
     
      <button type="submit"
       className="w-[80%]  md:w-[60%] lg:w-[50%]
        xl:w-[40%] my-3 p-1 rounded-md hover:bg-black
         hover:text-white  text-black bg-cyan-600">Submit</button>
    </form>
  
   </div>
  )
}

export default Contact