'use client'

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, Linkedin, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function FantasySportsComponent() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.playsInline = true;
      video.loop = true;

      const playVideo = () => {
        video.play().catch(error => {
          console.log("Autoplay was prevented:", error);
          // If autoplay is prevented, try muting the video and playing again
          video.muted = true;
          video.play().catch(e => console.log("Autoplay still prevented:", e));
        });
      };

      playVideo();

      // Add event listener for user interaction to unmute if necessary
      const unmute = () => {
        video.muted = false;
        document.removeEventListener('click', unmute);
      };
      document.addEventListener('click', unmute);

      return () => {
        document.removeEventListener('click', unmute);
      };
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('Sending...');

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill in all fields.');
      return;
    }

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current!,
      'YOUR_PUBLIC_KEY'
    )
      .then((result) => {
        console.log(result.text);
        setFormStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.log(error.text);
        setFormStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <video
          ref={videoRef}
          playsInline
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/placeholder.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
            Our fantasy sports platform has been at the forefront of the industry, providing innovative and engaging experiences for users. We&apos;ve successfully collaborated with top college fests across the country, showcasing our game to potential users and building strong partnerships within the gaming community.
          </p>
          <h3 className="text-2xl font-bold mb-4">Key Achievements:</h3>
          <ul className="list-disc list-inside space-y-4 mb-8">
            <li className="text-lg">
              <span className="font-bold">Massive User Base:</span> We&apos;ve garnered a loyal community of over 1000+ users who have consistently engaged with our platform.
            </li>
            <li className="text-lg">
              <span className="font-bold">Successful Collaborations:</span> Our partnerships with renowned college fests have allowed us to reach a wider audience and generate significant buzz around our app. These collaborations have been instrumental in establishing our brand in the fantasy sports space.
            </li>
            <li className="text-lg">
              <span className="font-bold">Innovative Features:</span> Our app boasts a range of unique features that set us apart from competitors. From our advanced mechanics to our real-time data analysis, we&apos;ve strived to provide a superior user experience.
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
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 text-lg">
            Sign Up Now
          </button>
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
              ref={form}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows={4}
                className="w-full p-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
              >
                Send Message
              </button>
              {formStatus && (
                <p className={`text-center ${formStatus.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                  {formStatus}
                </p>
              )}
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