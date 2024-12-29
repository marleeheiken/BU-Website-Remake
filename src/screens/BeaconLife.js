import React from 'react'
import Head from '../components/Head'
import Hero from '../components/Hero'
import BLHeader from '../images/BeaconLife/BLheader.jpg'
import rafting from '../images/BeaconLife/rafting.jpg'
import resLife from '../images/BeaconLife/resLife.jpg'
import InlineSection from '../components/InlineSection'
import finAid from '../images/BeaconLife/finAid.jpg'
import GetInvolved from '../components/GetInvolved'
import ImageCard from '../components/ImageCard'
import Testimonials from '../components/Testimonials'
import FacultyCardSH from '../components/FacultyCardSH'
import FacultyCard from '../components/FacultyCard'
import asbu from '../images/BeaconLife/asbu.png'
import smallGroup from '../images/BeaconLife/smallGroups.png'
import career from '../images/BeaconLife/career.png'
import Jen from '../images/BeaconLife/Faculty/Jen-Little.jpeg'
import Jocelyn from '../images/BeaconLife/Faculty/Jocelyn-Hubbs.jpeg'
import Jonathan from '../images/BeaconLife/Faculty/Jonathan-Kurtz.jpeg'
import Maggie from '../images/BeaconLife/Faculty/Maggie-McCausland.jpeg'
import Matt from '../images/BeaconLife/Faculty/Matt-Geromino.jpeg'
import Paul from '../images/BeaconLife/Faculty/Paul-Wright.jpeg'
import Sarah from '../images/BeaconLife/Faculty/Sarah-Halstead.jpeg'
import Troy from '../images/BeaconLife/Faculty/Troy-Dean.jpeg'
import Footer from '../components/Footer'


const BeaconLife = () => {
  const buttons = [
    {
      text: "APPLY TODAY",
      link: "https://www.bushnell.edu/admissions/apply/",
      type: "primary"
    },
    {
      text: "MORE INFO",
      link: "https://bushnelluniversity.my.salesforce-sites.com/inquiry/TargetX_Base__InquiryForm#?formId=a0b4z00000XYBpVAAX&formType=general&",
      type: "secondary"
    },
  ]

  return (
    <div>
      <Head />
      <Hero buttons={buttons} title='LIFE AS A BEACON' image={rafting}/>

      <div className='inline-container-screen'> 
      <div className='inline-top'>
        <InlineSection  image={resLife} imageAlignment={"left"}>
          <div className='inline-container'>
            <h2 className='inline-subhead'>
              WHAT DOES LIFE LOOK LIKE ON BUSHNELL'S CAMPUS?
            </h2>
            
            <h1 className='inline-head'>
              RESIDENCE LIFE
            </h1>
            
            <p className='inline-text'>
              In short, it's something special. Immerse yourself in 
              the unforgettable and explore everything that 
              begins at the edge of curiosity and ends
              on the right side of memorable.
            </p>
            
            <div className="inline-buttons">
              <a href='https://www.bushnell.edu/student-life/residence-life/' target='_blank'>
                <button className="section-button">Housing</button>
              </a>

              <a href='https://www.bushnell.edu/student-life/residence-life/campus-dining/' target='_blank'>
                <button className="section-button">Dining</button>
              </a>
            </div>
          </div>
        </InlineSection>
        </div>

        <div className='inline-bottom'>
        <InlineSection image={finAid} imageAlignment={"right"}>
          <div className='inline-container'>
            <h2 className='inline-subhead'>
              EDUCATION WITHIN REACH
           </h2>
            
            <h1 className='inline-head'>
              TUITION AND FINANCIAL AID
            </h1>
            
            <p className='inline-text'>
              At Bushnell, we offer a Christ-centered, 
              private education that is exceptional, while also 
              affordable because of the availability of scholarships, 
              grants and other awards.
            </p>
            
            <div className="inline-buttons">
              <a href='https://www.bushnell.edu/financial-aid/' target='_blank'>
                <button className="section-button">Learn More</button>
              </a>
            </div>
          </div>
        </InlineSection>
        </div>
      </div>

        <GetInvolved />

        <div className='involvement-container'>
          <p>How can you GET INVOLVED?</p>
          <div className='involvement-image-card'>
            <ImageCard image={asbu} link="#" text="Clubs and Organizations"/>
            <ImageCard image={smallGroup} link="#" text="Small Groups"/>
            <ImageCard image={career} link="https://www.bushnell.edu/career-development-2/" text="Career Development"/>
          </div>
        </div>

        <Testimonials />
        <FacultyCardSH />

        <div className='faculty-container'>
          <div>
            <h1>CONNECT WITH OUR STUDENT LIFE STAFF</h1>
            <p className='faculty-subtitle'>We Come Together in a Christ-Centered Community</p>
          </div>
          <div className='faculty-image-cards-container'>
              <FacultyCard image={Troy } fname={'Troy'} lname={'Dean'} title={'Campus Pastor'}/>
              <FacultyCard image={Jocelyn} fname={'Jocelyn'} lname={'Hubbs'} title={'VP for Student Development'}/>
              <FacultyCard image={Jen} fname={'Jen'}  lname={'Little'} title={'Director of Residence Life & Student Services'}/>
              <FacultyCard image={Paul} fname={'Paul'}  lname={'Wright'} title={'Director of Student Programs'}/>
              <FacultyCard image={Sarah} fname={'Sarah'}  lname={'Halstead'} title={'Counselor Coordinator for Student Wellness'}/>
              <FacultyCard image={Jonathan} fname={'Jonathan'}  lname={'Kurtz'} title={'Resident Director Coordinator for Student Programs'}/>
              <FacultyCard image={Maggie} fname={'Maggie'}  lname={'McCausland'} title={'Resident Director Coordinator for Student Life'} />
              <FacultyCard image={Matt} fname={'Matt'}  lname={'Geromino'} title={'Coordinator for Campus Ministry'}/>
          </div>
        </div>

        <Footer />
    </div>


  )
}

export default BeaconLife