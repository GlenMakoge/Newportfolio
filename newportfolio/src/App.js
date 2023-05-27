import { Routes, Route } from 'react-router-dom'
import './App.css';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Experience } from './components/experience/Experience';
import { Home } from './components/home/Home';
import { Navbar } from './components/navbar/Navbar';
import { Portfolio } from './components/portfolio/Portfolio';
import { Services } from './components/services/Services';
import { Testimonial } from './components/Testimonial/Testimonial';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='experience' element={<Experience />}></Route>
        <Route path='services' element={<Services />}></Route>
        <Route path='portfolio' element={<Portfolio />}></Route>
        <Route path='testimonial' element={<Testimonial />}></Route>
        <Route path='contact' element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
