"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

import Project1 from '/images/projects/Placeholder-1.jpg'
import Project2 from '/images/projects/Placeholder-2.jpg'
import Project3 from '/images/projects/Placeholder-4.jpg'
import Project4 from '/images/projects/Placeholder-5.jpg'
import Project5 from '/images/projects/Placeholder-7.jpg'
import Project6 from '/images/projects/Placeholder-8.jpg'

const PROJECTS_DATA = [
    // Object of {
    // id: int
    // title: str
    // image: path
    // tag: list of str
    // }
    {
        id: 1,
        title: 'Porfolio',
        description: 'You\'re already here!!',
        image: {Project1},
        tag: ['All', 'Web'],
        gitURL:'/',
        previewURL:'/'
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'Stuff about my project',
        image: {Project2},
        tag: ['All', 'Web'],
        gitURL:'/',
        previewURL:'/'
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'Stuff about my project',
        image: {Project3},
        tag: ['All', 'Web'],
        gitURL:'/',
        previewURL:'/'
    },
    {
        id: 4,
        title: 'Project 4',
        description: 'Stuff about my project',
        image: {Project4},
        tag: ['All', 'Mobile'],
        gitURL:'/',
        previewURL:'/'
    },
    {
        id: 5,
        title: 'Project 5',
        description: 'Stuff about my project',
        image: {Project5},
        tag: ['All', 'Web'],
        gitURL:'/',
        previewURL:'/'
    },
    {
        id: 6,
        title: 'Project 6',
        description: 'Stuff about my project',
        image: {Project6},
        tag: ['All', 'Web'],
        gitURL:'/',
        previewURL:'/'
    },
    
]

const ProjectsSection = () => {
    const [tag, setTag] = useState('All')

    const handleTagChange = (newTag)=> setTag(newTag)

    const filterProjects = PROJECTS_DATA.filter( (project) => project.tag.includes(tag) )
  
    return (
    <>
        <h2 className='text-center text-4xl font-bold text-white'>
            My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6" >
            <ProjectTag
                name= 'All'
                onClick= {handleTagChange}
                isSelected= {tag === 'All'}
            />
            <ProjectTag 
                name= 'Web' 
                onClick= {handleTagChange} 
                isSelected= {tag === 'Web'}
            />
            <ProjectTag 
                name= 'Mobile' 
                onClick= {handleTagChange} 
                isSelected= {tag === 'Mobile'}
            />
        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filterProjects.map( (project)=> (
            <ProjectCard
                key={ project.id }
                title={ project.title }
                description={project.description}
                imageURL={project.image}
                gitURL={project.gitURL}
                previewURL={project.previewURL}
            />))}
        </div>
    </>
  )
}

export default ProjectsSection