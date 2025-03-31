import React, { useState } from "react"
import Navbar from "../navbar"
import { ReactComponent as Menu } from '../../images/icons/menu.svg'
import { ReactComponent as Cross } from '../../images/icons/close.svg'

interface MainLayoutProps {
  pageTitle: string
  children: React.ReactNode
}

const MainLayout = ({ pageTitle, children }: MainLayoutProps) => {
  const [openNavbar, setOpenNavbar] = useState(false)
  return (
    <div id="main-layout" className="flex flex-col md:flex-row">
      <div className="
          bg-primary text-white
          flex flex-row justify-end
          px-8 py-4 shadow
          md:hidden
        "
      >
        <button onClick={() => setOpenNavbar(!openNavbar)}>
          {!openNavbar ? <Menu /> : <Cross />}
        </button>
      </div>

      <Navbar isOpen={openNavbar} />

      <main className="p-8 flex-grow max-h-screen overflow-y-scroll">
        <h1 className="text-5xl font-bold pb-16">{ pageTitle }</h1>

        {children}
      </main>
    </div>
  )
}

export default MainLayout
