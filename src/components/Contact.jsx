import React, { useRef, useEffect } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Contact = () => {

   const proCoRef = useRef(null);

   useEffect(() => {
      const proCoElement = proCoRef.current;
      let tl = gsap.timeline({
         // Your animation properties here
         scrollTrigger: {
            trigger: proCoElement,
            start: '10% center',
            end: '50% center',
            scrub: true,
            markers: false,

         }
      });
      tl.to(proCoElement, {
         opacity: 1,
         x: -500,
         duration: 0.5
      })
   })


   const ref = useRef();

   const handleSubmit = e => {
      e.preventDefault()

      emailjs.sendForm('service_mbj4tvw', 'template_tiyn2ll', ref.current, 'mESv9YDwlra-9nIN8')
         .then((result) => {
            console.log(result.text);
         }, (error) => {
            console.log(error.text);
         });
   }
   return (
      <div className='contact' id="contact" >
         <div className='conLeft'>
            <div className='connumertel'>
               <div className='numertel'>
                  Numer telefonu: 601050642
               </div>
               <div className='conprzekazanie'>
                  Jeżeli się spieszysz możesz wysłać nam wiadomość wraz z numerem telefonu.<br />
                  Oddzwonimy tego samego dnia <i class="fa-solid fa-arrow-right"></i>
               </div>


            </div>
         </div>
         <div className='conRight' ref={proCoRef} >
            <form action="POST" onSubmit={handleSubmit} ref={ref}>
               <input className='conInput' type='text' placeholder="Imie i nazwisko" name="name" />
               <input className='conInput' type='text' placeholder="numer telefonu" name="email" />
               <textarea
                  className='conInput'
                  placeholder="Jaki poziom korepetycji..."
                  name="message"
                  rows={4}
               />
               <button className='conButton' type="submit">Send</button>
            </form>
         </div>
      </div>
   )
}

export default Contact