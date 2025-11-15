import React from "react";
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';


export default function Footer() {
  return (
   
    <div>
        <footer className="bg-blue-100 text-black py-10">
  <div className="container mx-auto px-4 grid gap-8 md:grid-cols-4 text-center">
   
    <div className="flex justify-center">
      <img src="/campus-logo.png" alt="" className="h-40" />
    </div>

   
    <div>
      <h4 className="font-semibold mb-2">Navigate</h4>
      <ul className="space-y-1 text-sm">
        <li><a href="/" className="hover:underline">Home</a></li>
       
        <li><a href="/about" className="hover:underline">About</a></li>
        <li><a href="/contact" className="hover:underline">Contact</a></li>
         <li><a href="/projects" className="hover:underline">Diploma In Engineering</a></li>
      </ul>
    </div>

    
    <div>
      <h4 className="font-semibold mb-2">Contact</h4>
      <p className="text-sm">Email: <a href="sadhonkumardey750@gmail.com" className="hover:underline">sadhonkumardey750@gmail.com</a></p>
      <div className="mt-3 flex gap-3 justify-center">
        <a href="https://github.com/sadhonkumar10" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex items-center gap-1"><FaGithub></FaGithub> GitHub</a>
        <a href="linkedin.com/in/sadhon-kumar-dey" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"className="flex items-center gap-1"><FaLinkedin></FaLinkedin>  LinkedIn</a>
      </div>
    </div>
     <div className="flex gap-4 mt-3 md:mt-0">
        <a href="/privacy" className="hover:underline">Privacy Policy</a>
        <a href="/terms" className="hover:underline">Terms</a>
      </div>
  </div>

  <div className=" mt-2 pt-5 font-bold text-gray-400">
    <div className=" container mx-auto px-5 flex flex-col md:flex-row justify-between items-center text-sm">
      <p>© <span id="year"></span> SADHON KUMAR DEY. All rights reserved-2025.</p>
     
    </div>
  </div>

  
</footer>

    </div>
  );
}
