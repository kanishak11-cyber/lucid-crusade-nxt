// import React from 'react'
// import './Slideshow.css'
// function Slideshow() {
//     return (
//         <div>
//             <div class="relative">
//                 <div class="absolute inset-0 w-screen h-screen bg-pink-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-0 slide">Hello</div>
//                 <div class="absolute inset-0 w-screen h-screen bg-purple-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">There</div>
//                 <div class="absolute inset-0 w-screen h-screen bg-teal-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">Booya!</div>
//                 <div class="fixed bottom-0 right-0 bg-white w-16 h-16 flex items-center justify-center text-black">&#x276F;</div>
//                 <div class="fixed bottom-0 right-0 bg-white w-16 h-16 mr-16 border-r border-gray-400 flex items-center justify-center text-black">&#x276E;</div>
//             </div>
//         </div>
//     )
// }

// export default Slideshow
// setTimeout(function(){
//     let activeSlide = document.querySelector('.slide.translate-x-0');
//     activeSlide.classList.remove('translate-x-0');
//     activeSlide.classList.add('-translate-x-full');
    
//     let nextSlide = activeSlide.nextElementSibling;
//     nextSlide.classList.remove('translate-x-full');
//     nextSlide.classList.add('translate-x-0');
// }, 3000);
// function nextSlide(){
//     let activeSlide = document.querySelector('.slide.translate-x-0');
//     activeSlide.classList.remove('translate-x-0');
//     activeSlide.classList.add('-translate-x-full');
    
//     let nextSlide = activeSlide.nextElementSibling;
//     nextSlide.classList.remove('translate-x-full');
//     nextSlide.classList.add('translate-x-0');
// }

// function previousSlide(){
//     let activeSlide = document.querySelector('.slide.translate-x-0');
//     activeSlide.classList.remove('translate-x-0');
//     activeSlide.classList.add('translate-x-full');
    
//     let previousSlide = activeSlide.previousElementSibling;
//     previousSlide.classList.remove('-translate-x-full');
//     previousSlide.classList.add('translate-x-0');
// }
