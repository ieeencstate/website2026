"use client";

import Link from "next/link";
import { GL } from "./gl";
import { useState, useEffect } from "react";
import { Linkedin, Github, Instagram, MessageCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";
import JoinUsButton from "./joinusbutton";
import { heroContent, heroSocialLinks } from "../lib/resources";

export function Hero() {
  const [hovering, setHovering] = useState(false);
  const [glOpacity, setGlOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Start fading when user scrolls past 50% of the hero section
      // Complete fade by the time they reach the bottom of hero
      const fadeStart = windowHeight * 0.5;
      const fadeEnd = windowHeight;
      
      let opacity = 1;
      if (scrollY > fadeStart) {
        const fadeProgress = Math.min((scrollY - fadeStart) / (fadeEnd - fadeStart), 1);
        opacity = 1 - fadeProgress;
      }
      
      setGlOpacity(Math.max(0, Math.min(1, opacity)));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'space-between', position: 'relative' }}>
      <GL hovering={hovering} backgroundOpacity={glOpacity} />

      <div className="pb-16 mt-auto text-center relative z-10" style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: '15vh'
      }}>
        {/* IEEE NCSU Logo */}
        <div style={{
          width: `${heroContent.logo.width}px`,
          zIndex: 10,
          marginBottom: '20px'
        }}>
          <img src={heroContent.logo.src} alt={heroContent.logo.alt} style={{ width: '100%', height: 'auto' }} />
        </div>
        
        <h1 style={{
          zIndex: 5,
          marginBottom: '15px',
          textAlign: 'center',
          fontSize: 'clamp(120px, 15vw, 150px)',
          fontFamily: 'IBM Plex Mono',
          fontWeight: '900',
          lineHeight: '1',
          margin: 0
        }}>
          <span style={{
            background: 'linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'inline-block'
          }}>
            {heroContent.title.firstPart}{heroContent.title.secondPart}
          </span>
        </h1>
        
         <div style={{
           maxWidth: '800px',
           color: '#ffffff',
           fontSize: 'clamp(14px, 2vw, 20px)',
           fontFamily: 'IBM Plex Mono',
           fontWeight: '400',
           lineHeight: '1.6',
           zIndex: 5,
           marginBottom: '20px',
           textShadow: '-5px -5px 0 #000, 5px -5px 0 #000, -5px 5px 0 #000, 5px 5px 0 #000, -4px -4px 0 #000, 4px -4px 0 #000, -4px 4px 0 #000, 4px 4px 0 #000, -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
         }}>
           {heroContent.description}
         </div>
         
         {/* Join Us Button positioned beneath the paragraph */}
         <div style={{
           zIndex: 5,
           marginBottom: '20px'
         }}
         onMouseEnter={() => setHovering(true)}
         onMouseLeave={() => setHovering(false)}
         >
           <JoinUsButton/>
         </div>
         
         {/* Social Media Icons */}
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5, duration: 0.6 }}
           style={{
             display: 'flex',
             gap: '20px',
             alignItems: 'center',
             justifyContent: 'center',
             zIndex: 5,
             marginBottom: '40px'
           }}
         >
           {heroSocialLinks.map((social) => {
             const IconComponent = {
               Linkedin,
               Github,
               Instagram,
               MessageCircle,
               Mail
             }[social.icon];
             
             return (
               <motion.a
                 key={social.name}
                 href={social.url}
                 target="_blank"
                 rel="noopener noreferrer"
                 whileHover={{ scale: 1.1, color: '#FF0000' }}
                 whileTap={{ scale: 0.95 }}
                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
                 style={{ color: '#ffffff', filter: 'drop-shadow(2px 2px 0 #000) drop-shadow(-2px -2px 0 #000) drop-shadow(2px -2px 0 #000) drop-shadow(-2px 2px 0 #000)' }}
               >
                 {IconComponent && <IconComponent size={32} />}
               </motion.a>
             );
           })}
         </motion.div>
      </div>
    </div>
  );
}

