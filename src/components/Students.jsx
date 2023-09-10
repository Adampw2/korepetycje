import React, { useState, useRef, useEffect } from 'react'
import './Students.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const Projects = () => {
   const proCoRef = useRef(null);

   useEffect(() => {
      const proCoElement = proCoRef.current;
      let tl = gsap.timeline({
         // Your animation properties here
         scrollTrigger: {
            trigger: proCoElement,
            start: '10% center',
            end: '80% center',
            scrub: false,
            markers: false,
            toggleActions: 'play reverse play reverse',
         }
      });
      tl.to(proCoElement, {
         opacity: 1,
         x: 300,
         duration: 0.5
      })
   })



   return (

      <div className='projects' id="projects">



         <div className="proContainer" ref={proCoRef}>


            <div className="proTitle">Kogo Uczymy ?</div>
            <div className="proExamples">
               <ul className='proUl'>
                  <li className='proLi'   >
                     <div className='proDesc' >
                        <div className='proName'>
                           Szkoły zawodowe
                        </div>
                     </div>


                  </li>
                  <li className='proLi'>
                     <div className='proDesc' >
                        <div className='proName'>
                           Technika i Licea
                        </div>
                     </div>

                  </li>
                  <li className='proLi'>
                     <div className='proDesc' >
                        <div className='proName'>
                           Matury podstawowe i rozszerzone
                        </div>

                     </div>

                  </li>
               </ul>
            </div>
            <div className='studcontainer'>
               <div className='studopis'>Wszyscy nasi nauczyciele mają przynajmniej roczne doświadczenie w nauczaniu młodzieży. Duża część z nich to byli studenci politechniki Warszawskiej. Możemy się pochwalić że wszyscy nasi uczniowie odnoszą sukcesy na maturze (podstawowa - 90%, rozszerzona - 70%). <br />Jeżeli też jesteś zainteresowana/zainteresowany kontakt do nas znajdziesz poniżej.</div>
               <div className='cennik'>Cena za godzinę zajęć wynosi 70 zł.</div>
            </div>

         </div>
      </div>

   )
}

export default Projects