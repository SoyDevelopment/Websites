import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = ({ links }) => {
  return (
    <li>
        <ul className='flex flex-col py-4 items-center'>{links.map((link) => (<NavLink key={link.title} href={link.path} title={link.title}/>) )}</ul>
    </li>
  )
}

export default MenuOverlay