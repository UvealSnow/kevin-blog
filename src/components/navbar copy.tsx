import * as React from "react"
import { groupClassNames } from "../utils"

const title = 'Carolina Rivera Luque'
const subtitle = 'Loquilla fisioterapeuta (doble maestra) en alemania'
const pictureAlt = 'Carolina Rivera Luque - Placeholder'
const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact me' },
]

interface NavbarProps {
  isOpen: boolean
}

const Navbar = ({ isOpen }: NavbarProps) => {
  const navbarClasses = `
      transition-all duration-500
      flex flex-col flex-none items-center
      w-64 h-screen p-4 pt-8
      bg-primary text-white
      absolute -left-64 top-0
      md:relative md:left-0
    `
  return (
    <nav className={groupClassNames(navbarClasses, { 'left-0': isOpen })}>
      <img
        src="https://placehold.co/96"
        className="rounded-full"
        width={96} height={96}
        alt={pictureAlt}
      />

      <h5 className="text-xl text-white pt-8">{title}</h5>
      <p className="text-xs text-center pt-4">{subtitle}</p>

      <ul className="flex flex-col space-y-4 text-center pt-8">
        {links.map((link, index) => (
          <li key={index} className="m-0">
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
