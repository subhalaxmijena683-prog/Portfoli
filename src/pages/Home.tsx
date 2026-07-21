import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import DSADashboard from '../sections/DSADashboard'
import Certificates from '../sections/Certificates'
// import Blog from '../sections/Blog'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <DSADashboard />
      <Certificates />
      {/* <Blog /> */}
      <Contact />
    </main>
  )
}
