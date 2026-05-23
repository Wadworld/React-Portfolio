import React from 'react'
import Hero from '../components/Hero/Hero';
import Tech from '../components/TechStack/Tech';
import AboutMe from '../components/About/AboutMe';
import Services from '../components/Services/Services';
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects';
import WorkExperience from '../components/WorkExperience/WorkExperience';
import ClientStats from '../components/Client/Client';
import ContactForm from '../components/Form/Form';
import Idea from '../components/Idea/Idea';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <Hero />
      <Tech/>
      <AboutMe/>
      <ClientStats/>
      <Services/>
      <FeaturedProjects/>
      <WorkExperience/>
      <Idea />
      <ContactForm />
    </>
  )
}

export default Home
