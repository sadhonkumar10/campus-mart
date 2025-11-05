import React from "react";
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';


export default function Footer() {
  return (
   
    <div>
        <footer class="bg-blue-100 text-black py-10">
  <div class="container mx-auto px-4 grid gap-8 md:grid-cols-4 text-center">
   
    <div className="flex justify-center">
      <img src="/public/campus-logo.png" alt="" className="h-40" />
    </div>

   
    <div>
      <h4 class="font-semibold mb-2">Navigate</h4>
      <ul class="space-y-1 text-sm">
        <li><a href="/" class="hover:underline">Home</a></li>
       
        <li><a href="/about" class="hover:underline">About</a></li>
        <li><a href="/contact" class="hover:underline">Contact</a></li>
         <li><a href="/projects" class="hover:underline">Diploma In Engineering</a></li>
      </ul>
    </div>

    
    <div>
      <h4 class="font-semibold mb-2">Contact</h4>
      <p class="text-sm">Email: <a href="sadhonkumardey750@gmail.com" class="hover:underline">sadhonkumardey750@gmail.com</a></p>
      <div class="mt-3 flex gap-3 justify-center">
        <a href="https://github.com/sadhonkumar10" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex items-center gap-1"><FaGithub></FaGithub> GitHub</a>
        <a href="linkedin.com/in/sadhon-kumar-dey" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"className="flex items-center gap-1"><FaLinkedin></FaLinkedin>  LinkedIn</a>
      </div>
    </div>
     <div class="flex gap-4 mt-3 md:mt-0">
        <a href="/privacy" class="hover:underline">Privacy Policy</a>
        <a href="/terms" class="hover:underline">Terms</a>
      </div>
  </div>

  <div class=" mt-2 pt-5 font-bold text-gray-400">
    <div class=" container mx-auto px-5 flex flex-col md:flex-row justify-between items-center text-sm">
      <p>© <span id="year"></span> SADHON KUMAR DEY. All rights reserved-2025.</p>
     
    </div>
  </div>

  
</footer>

    </div>
  );
}
