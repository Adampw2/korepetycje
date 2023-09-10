import React, { useState, useEffect } from 'react';
import './Navbar.css'
import { HashLink as Link } from 'react-router-hash-link';


const Navbar = () => {

   const [scrollingUp, setScrollingUp] = useState(true);

   const handleScroll = () => {
      if (window.scrollY > 80) {
         setScrollingUp(window.scrollY < previousScrollY);
      }
      previousScrollY = window.scrollY;
   };

   let previousScrollY = 0; // Store the previous scroll position

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);


   return (

      <ul className={`navbar ${scrollingUp ? 'show' : 'hide'}`}>
         <div className="navList">
            <li className='navLi'><Link to="#front" smooth>Strona Główna</Link></li>
            <li className='navLi'><Link to="#projects" smooth>Kogo uczymy ?</Link></li>
            <li className='navLi'><Link to="#contact" smooth>Kontakt</Link></li>


         </div>
         <div className="navTitle">Korepetycje z matematyki</div>
      </ul>
   )
}

export default Navbar