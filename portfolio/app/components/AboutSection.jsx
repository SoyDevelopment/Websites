"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import DesktopImage from '/images/about-image.webp'

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>SQL</li>
        <li>React</li>
        <li>JavaScript</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bloc.io</li>
        <li>Meade Senior High School</li>
      </ul>
    ),
  },
  {
    title: "Certs",
    id: "certs",
    content: (
      <ul className="list-disc pl-2">
        <li>CompTIA+ (WIP)</li>
        <li>React Developer (WIP)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {

  const [tab, setTab] = useState('skills')

  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image alt='Computer Desk' src={DesktopImage} width={500} height={500} style={{borderRadius: '15px'}}/>
          <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl text-white font-bold mb-4'>About Me</h2>
            <p className='text-base lg:text-lg'>
              Talented professional eager to utilize knowledge of program design,
              development, and deployment in the IT field; supplemented with
              pharmacy experience. Proven track record of delivering results while
              working on projects independently and in a team evironment. Experienced
              with multiple programming languages and technologies, including Python,
              JavaScript, HTML, CSS, Tailwind, and React. Skilled in debugging,
              troubleshooting, and problem-solving, with a passion for creating efficient
              and user-friendly applications.
            </p>
            <div className="flex justify-start flex-row mt-8">
              <TabButton 
                selectTab={() => handleTabChange('skills')} 
                active={tab === 'skills'}
              >
                Skilled
              </TabButton>
              <TabButton 
                selectTab={() => handleTabChange('education')} 
                active={tab === 'education'}
              >
                Education
              </TabButton>
              <TabButton 
                selectTab={() => handleTabChange('certs')} 
                active={tab === 'certs'}
              >
                Certs
              </TabButton>
            </div>
            <div className="mt-8">{TAB_DATA.find( (givenTab) => givenTab.id === tab).content}</div>
          </div>
        </div>
    </section>
  )
}

export default AboutSection