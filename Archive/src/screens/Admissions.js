import React from 'react'
import Head from '../components/Head'
import Hero from '../components/Hero'
import AdmissionsHead from '../images/Admissions/admissions.jpg'

const Admissions = () => {

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
        <Hero buttons={buttons} title='ADMISSIONS' image={AdmissionsHead}/>
    </div>
  )
}

export default Admissions