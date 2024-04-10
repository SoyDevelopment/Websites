"use client"
import React, {useState} from 'react'
import GitHubIcon from '../GitHubIcon.svg'
import LinkedInIcon from '../LinkedInIcon.svg'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {

    const [emailSubmitted, setEmailSubmitted] = useState(false)

    const handleSubmission = async (e) => {
        
        e.preventDefault()

        const emailData = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        }
        const JSONdata = JSON.stringify(emailData);
        const endpoint = '/api/resend'

        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONdata,
        }
        
        const response = await fetch(endpoint, options);
        const resData = await response.json();

        if (response.status === 200) setEmailSubmitted(true)
    }

  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        <div 
            className='absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2'
        >

        </div>
        <div className='z-10'>
            <h5 className='text-xl font-bold text-white my-2 '>Let&apos;s Talk!</h5>

            <p className="text-[#DBBBF5] mb-4 max-w-md">
                If you&apos;ve stumbled upon this site and you weren&apos;t brought from one of my resumes, you&apos;re still welcome to reach out! 
                If you have a project that you have in mind, maybe I can help. 
                Type your email on the right and shoot me some inspiration! 
            </p>

            <div className="socials flex flex-row gap-2">
                <Link href='https://github.com/SoyDevelopment'>
                    <Image src={GitHubIcon} alt='GitHub-Icon' />
                </Link>
                <Link href='https://www.linkedin.com/in/joevany-martinez/'>
                    <Image src={LinkedInIcon} alt='LinkedIn-Icon' />
                </Link>
            </div>
        </div>
        <div>
            <form className='flex flex-col' onSubmit={handleSubmission}>
                <div className="mb-6">
                
                    <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>
                        Your Email
                    </label>

                    <input
                        name='email'
                        type='email'
                        id='email'
                        className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='YourEmail@EmailProvider.Net'
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>
                        Subject
                    </label>

                    <input
                        name='subject'
                        type='text'
                        id='subject'
                        className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='Just saying hi?'
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>
                        Message
                    </label>

                    <textarea
                        name='message'
                        id='message'
                        className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='I&apos;m all ears...'
                        required
                    />
                </div>
                    <button
                        type='submit'
                        className='bg-purple-500 hover:bg-purple-600 text-white font-medium px-5 py-2.5 rounded-lg w-full'
                    >
                        Send Message
                    </button> 
                    {
                        emailSubmitted && (
                            <p className='text-green-500 text-sm mt-2'>
                                Email Sent Successfully!
                            </p>
                        )
                    }
            </form>
        </div>
    </section>
  )
}

export default EmailSection