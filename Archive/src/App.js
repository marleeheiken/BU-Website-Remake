import './App.css'
import Head from './components/Head'
import Hero from './components/Hero'
import ImageCard from './components/ImageCard'
import PlanVisit from './components/PlanVisit'
import Instagram from './components/Instagram'
import homeBackground from './images/HomePage/header.jpeg'
import collegeStudents from './images/HomePage/collegeStudents.jpeg'
import graduateStudents from './images/HomePage/graduate.jpeg'
import onlineStudents from './images/HomePage/online.jpeg'
import bushnellNoBG from './images/bushnell-nobg.png'
import campusTour from './images/HomePage/campusTour.jpeg'
import instagram from './images/HomePage/instagram.png'



function App() {
  return (
    <div className="">
      <Head />
      <Hero image={homeBackground} title='BECOME A BEACON' subtitle='Bushnell University, Eugene, OR' />

    <div className="section-container">
      <p>Pick the Program that Suits Your Needs</p>
      <div className='cards-container'>
        <ImageCard image={collegeStudents} link="https://www.bushnell.edu/undergraduate-admissions/" text="Undergraduate"/>
        <ImageCard image={graduateStudents} link="https://www.bushnell.edu/graduate-admissions/" text="Graduate"/>
        <ImageCard image={onlineStudents} link="https://www.bushnell.edu/online-admissions/" text="Online and Evening"/>
      </div>
    </div>
      <PlanVisit logo={bushnellNoBG} image={campusTour}/>
      <Instagram image={instagram}/>
    </div>
    
  );
}

export default App;
