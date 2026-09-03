import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import GithubSection from './components/GithubSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-bg text-ink min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Education />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
