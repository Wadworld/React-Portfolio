import Navbar from './components/Navbar/Navbar';
import './App.css'
import Hero from './components/Hero/Hero';
import Tech from './components/TechStack/Tech';
import AboutMe from './components/About/AboutMe';
import Services from './components/Services/Services';
import FeaturedProjects from './components/FeaturedProjects/FeaturedProjects';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ClientStats from './components/Client/Client';
import ContactForm from './components/Form/Form';
import Idea from './components/Idea/Idea';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Tech/>
      <AboutMe/>
      <Services/>
      <ClientStats/>
      <FeaturedProjects/>
      <WorkExperience/>
      <Idea />
      <ContactForm />
    </>
  )
}

export default App
