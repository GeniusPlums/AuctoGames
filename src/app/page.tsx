'use client'

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, Linkedin, Instagram } from 'lucide-react';

export default function Component() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.log("Autoplay was prevented:", error);
        setIsPlaying(false);
      });
    }
  }, []);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          controls
        >
          <source src="/placeholder.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!isPlaying && (
          <button
            onClick={handlePlayClick}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          >
            Play Video
          </button>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Revolutionizing Fantasy Sports
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl mb-8"
          >
            Join the future of competitive gaming
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          >
            Get Started
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </motion.div>
      </section>

      {/* Past Experience Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Past Experience</h2>
          <p className="text-lg mb-8">
            Our fantasy sports has been at the forefront of the industry, providing innovative and engaging experiences for users. We've successfully collaborated with top college fests across the country, showcasing our game to potential users and building strong partnerships within the gaming community.
          </p>
          <h3 className="text-2xl font-bold mb-4">Key Achievements:</h3>
          <ul className="list-disc list-inside space-y-4 mb-8">
            <li className="text-lg">
              <span className="font-bold">Massive User Base:</span> We've garnered a loyal community of over 1000+ users who have consistently engaged with our platform.
            </li>
            <li className="text-lg">
              <span className="font-bold">Successful Collaborations:</span> Our partnerships with renowned college fests have allowed us to reach a wider audience and generate significant buzz around our app. These collaborations have been instrumental in establishing our brand in the fantasy sports space.
            </li>
            <li className="text-lg">
              <span className="font-bold">Innovative Features:</span> Our app boasts a range of unique features that set us apart from competitors. From our advanced mechanics to our real-time data analysis, we've strived to provide a superior user experience.
            </li>
          </ul>
        </div>
      </section>

      {/* Join the Revolution Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-900 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Join the Revolution</h2>
          <p className="text-xl mb-8">
            Experience the future of fantasy sports with our cutting-edge platform. Join our growing community and discover the excitement of competitive gaming.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-4"
              >
                <Mail className="w-6 h-6 text-blue-500" />
                <a href="mailto:auctogames@gmail.com" className="hover:underline">
                  auctogames@gmail.com
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center space-x-4"
              >
                <Linkedin className="w-6 h-6 text-blue-500" />
                <a
                  href="https://www.linkedin.com/company/auctogames/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  AuctoGames
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center space-x-4"
              >
                <Instagram className="w-6 h-6 text-blue-500" />
                <a
                  href="https://www.instagram.com/auctogames/profilecard/?igsh=MWdyYnlpOXVsbDcycA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @auctogames
                </a>
              </motion.div>
            </div>
            <motion.form
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 text-center">
        <p>&copy; 2023 Fantasy Sports Revolution. All rights reserved.</p>
      </footer>
    </div>
  );
}