import React from 'react'
import Head from '../components/Head'
import Hero from '../components/Hero'
import AboutHead from '../images/About/aboutHead.png'

const About = () => {
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
        <Hero buttons={buttons} title='ABOUT BUSHNELL' image={AboutHead}/>
    </div>
  )
}

export default About
