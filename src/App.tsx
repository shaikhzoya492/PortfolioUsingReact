import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from  "./components/Footer"


function App() {

  return (
   <div className=" bg-[#1A1A1A] min-h-screen min-w-full p-0  ">
    <Navbar/>
    <Home/>
    <About/>
    <Services/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
