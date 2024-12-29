import '../App.css'
import Head from '../components/Head'
import Hero from '../components/Hero'
import ImageCard from '../components/ImageCard'
import Instagram from '../components/Instagram'
import homeBackground from '../images/HomePage/header.jpeg'
import collegeStudents from '../images/HomePage/collegeStudents.jpg'
import graduateStudents from '../images/HomePage/graduate.jpeg'
import onlineStudents from '../images/HomePage/onlineStudent.jpeg'
import bushnellNoBG from '../images/bushnell-nobg.png'
import PlanVisit from '../components/PlanVisit'
import InlineSection from '../components/InlineSection'
import instagram from '../images/HomePage/instagram.png'
import campusTour from '../images/HomePage/campusTour.jpg'
import Event from '../components/Event'
import NewsCard from '../components/NewsCard'
import Footer from '../components/Footer'
import baseball from '../images/HomePage/Baseball.jpeg'
import ACEDay from '../images/HomePage/ACEDay.jpeg'
import honors from '../images/HomePage/HonorsConvocation.jpeg'
import Todd from '../images/HomePage/ToddSalnas.jpeg'
import VentureForward from '../components/VentureForward'
import PointsOfPride from '../components/PointsOfPride'



function HomePage() {
  
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

  
const events = [
  {
    month: "May",
    day: "10",
    title: "Baccalaureate",
    text: "Baccalaureate is our annual sacred celebration of our graduating class."
  },
  {
    month: "May",
    day: "11",
    title: "Commencement",
    text: "Commencement services for Spring 2023-2024 graduating students."
  },
  {
    month: "May",
    day: "12",
    title: "Last Day of Classes",
    text: "This is the last day of classes for Spring session 2 courses."
  },
  {
    month: "May",
    day: "13",
    title: "First Day of Summer Classes",
    text: "This is the first day of classes for Summer courses, both 7 and 14-week."
  },
  {
    month: "May",
    day: "17",
    title: "School of Nursing Community Open House",
    text: "Join Us for a Sneak Peek of Our New CMER Facility Come tour our new facility, meet our faculty and students, and view live nursing simulations."
  },
  {
    month: "May",
    day: "20",
    title: "Last Day to Add or Drop Classes ",
    text: "This is the last day to add or drop classes for Summer session 1 and full-semester courses."
  },
  
]

const news = [
  
  {
    image: Todd ,
    date:'May 7, 2024',
    title: 'Todd Salnas to Serve as Bushnell University Commencement Speaker',
    link:'https://news.bushnell.edu/2024/05/07/todd-salnas-to-serve-as-bushnell-university-commencement-speaker/',
  },
  {
    image: baseball,
    date:'May 7, 2024',
    title:'Bushnell Wins Cascade Collegiate Conference Tournament',
    link:'https://news.bushnell.edu/2024/05/07/bushnell-wins-cascade-collegiate-conference-tournament/',
  },
  {
    image: honors,
    date:'May 3, 2024',
    title:'Bushnell Celebrates Achievements at Honors Convocation',
    link:'https://news.bushnell.edu/2024/05/03/bushnell-celebrates-achievements-at-honors-convocation/',
  },
  {
    image:ACEDay,
    date:'May 2, 2024',
    title:'Students Present at ACE Day',
    link:'https://news.bushnell.edu/2024/05/02/students-present-at-ace-day/',
    
  }
]

    
  return (
    <div className="">
      <Head />
      <Hero image={homeBackground} title='BECOME A BEACON' subtitle='Bushnell University, Eugene, OR' buttons={buttons} />
    <div className="section-container">
      <p>Pick the Program that Suits Your Needs</p>
      <div className='cards-container'>
        <ImageCard image={collegeStudents} link="https://www.bushnell.edu/undergraduate-admissions/" text="Undergraduate"/>
        <ImageCard image={graduateStudents} link="https://www.bushnell.edu/graduate-admissions/" text="Graduate"/>
        <ImageCard image={onlineStudents} link="https://www.bushnell.edu/online-admissions/" text="Online and Evening"/>
      </div>
    </div>


      <div className='home-inline-container-screen'>
      <div className='home-inline-top'>
      <InlineSection  className='home-inline-top'image={campusTour} imageAlignment={"left"}>
          <div className='inline-container'>
            <h2 className='inline-subhead'>
              DISCOVER YOUR CALLING
            </h2>
            
            <h1 className='inline-head'>
              VISIT CAMPUS
            </h1>
            
            <p className='inline-text'>
              Come see Bushnell for yourself and choose an experience 
              that is perfect for you. Our campus is made up of 
              avibrant community committed to your academic, spiritual, 
              and personal development as you pursue your calling. 
              Click here for more information and to sign up for one of our many 
              visit experiences. We can’t wait to meet you!
            </p>
            
            <div className="inline-buttons">
              <a href='https://www.bushnell.edu/undergraduate-admissions/campus-visit/'>
                <button className="section-button">Plan Your Visit</button>
              </a>
            </div>
          </div>
        </InlineSection>
        </div>
        </div>

        <Instagram image={instagram}/>

      <div className='events-section'>
        <div className='events-section-header'>
            <h1 className='events-title'>Upcoming Events</h1>

          <a href='https://www.bushnell.edu/events/' target='_blank'>
            <button>
              All Events
            </button>
          </a>
            
            
        </div>
       
        <div  className='events-container'>
        {
            events.map((event) => {
              return <Event month={event.month} day={event.day} title={event.title} text={event.text} />
            })
          }
        </div>
      </div>
      
      <div className='news-section'>
        <div className='news-section-header'>
            <h1 className='news-title'></h1>

          <a href='https://www.bushnell.edu/events/' target='_blank'>
            <button>
              More News
            </button>
          </a>
            
            
        </div>
       
        <div  className='news-container'>
          {
            news.map((card) => {
              return <NewsCard image={card.image} date={card.date} title={card.title} link={card.link}/>
            })
          }
        </div>
      </div>

      <div className='venture-forward'>
          <VentureForward />
      </div>
      
      <div className='points-of-pride'>
          <PointsOfPride />
      </div>
       

        <Footer/>
    </div>
  );
}

export default HomePage;
