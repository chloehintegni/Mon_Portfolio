import TabNav from "./components/TabNav"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { ThemeProvider } from "./context/ThemeContext"
import "./App.css"

function App() {
  return (
    <ThemeProvider>
      <div className="site">
        <TabNav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App