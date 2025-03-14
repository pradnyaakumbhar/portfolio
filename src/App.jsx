import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import { BackgroundBeams } from './components/ui/background-beams';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-900">
        {/* Container for Navbar and Hero with BackgroundBeams */}
        <div className="relative">
          {/* BackgroundBeams positioned absolutely to fill the entire container */}
          <div className="absolute inset-0 z-0">
            <BackgroundBeams />
          </div>

          {/* Content positioned above the background */}
          <div className="relative z-10">
            <Navbar />
            <Hero />
          </div>
        </div>

        {/* Rest of the components without BackgroundBeams */}
        <About />
        <Projects />
        <Experience />
      </div>
    </BrowserRouter>
  );
}

export default App;
