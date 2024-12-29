import React from 'react'
import Head from '../components/Head'
import Hero from '../components/Hero'
import AcademicsHead from '../images/Academics/academics2.jpg'

const Academics = () => {
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
        <Hero buttons={buttons} title='ACADEMICS' image={AcademicsHead}/>
    </div>
  )
}

export default Academics