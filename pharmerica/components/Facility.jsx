"use client"
import React, {useTransition, useState} from 'react'
import Contacts from './Contacts'
import TabButton from './TabButton';


const Facility = (facility) => {

  const {data} = facility

  const TAB_DATA = [
        {
          title: "OTCs",
          id: "otcs",
          content: (
            <ul className="list-disc pl-2">
              {
                data.OTCs.length > 0 
                ? data.OTCs.sort().map( (otc, index)=> <li key={index}>{otc}</li>) 
                : "Facility has no OTC List"
              }
            </ul>
          ),
        },
        {
          title: "Facility Contacts",
          id: "contacts",
          content: (
            <ul className="list-disc pl-2">
              {
                data.Contacts.map( (contact, index) => <Contacts 
                key = {index}
                Name = {contact.Name} 
                Number = { contact.Number} 
                />)
              }
            </ul>
          ),
        },
        {
          title: "Pos",
          id: "pos",
          content: (
            <ul className="list-disc pl-2">
              {data.POS.map( (point, index) => <li key={index}>{point}</li>)}
            </ul>
          ),
        },
      ];


    const [tab, setTab] = useState('otcs')

    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
        setTab(id)
        })
    }

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-1 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl text-white font-bold mb-4'> 
                      {`${data.Name} - ${data.Number}`}
                    </h2>
                    <p className='text-base lg:text-lg text-center'>
                    {data.Info||"No info for this facility"}
                    </p>
                    <div className="flex justify-start flex-row mt-8">
                    <TabButton 
                        selectTab={() => handleTabChange('otcs')} 
                        active={tab === 'otcs'}
                    >
                        OTCs
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange('contacts')} 
                        active={tab === 'contacts'}
                    >
                        Facility Contacts
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange('pos')} 
                        active={tab === 'pos'}
                    >
                        POS Tips
                    </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find( (givenTab) => givenTab.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default Facility