"use client"
import React, {useState} from 'react'
import {Link} from "react-scroll"
import {useTheme} from "next-themes"
import {RiMoonFill, RiSunLine} from "react-icons/ri"
import {IoMdMenu, IoMdClose} from "react-icons/io"

interface NavItem {
    label: string
    page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About",
    page: "about"
  },
  {
    label: "Skills",
    page: "skills"
  },
  {
    label: "Projects",
    page: "projects"
  },
  {
    label: "Contact",
    page: "contact"
  }
]

const NavBar = () => {

  const {systemTheme, theme, setTheme} = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navBar, setNavBar] = useState(false);

  return (
    <header className="w-full mx-auto py-4 px-8 md:px-20 md:py-0 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className='justify-between mx-auto max-w-5xl md:items-center md:flex'>
        <div>
          <div className='flex items-center justify-between'>
           <div className='md:py-5 md:block'>
              <h2 className='text-2xl font-bold'>Fellipe Tripovichy</h2>
            </div>
            <div className='md:hidden'>
              <button onClick={()=>setNavBar(!navBar)}>
                {navBar ? <IoMdClose size={30}/> : <IoMdMenu size={30}/>}
              </button>
            </div>
          </div>
        </div>
        <div> 
          <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navBar ? "block" : "hidden"
              }`}
            >
            <div className='md:flex space-y-8 md:space-y-0 md:items-center md:space-x-6'>
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavBar(!navBar)}
                  >
                    {item.label}
                  </Link>
                )
              })}
              {
                currentTheme === 'dark' ? (
                  <button onClick={()=>setTheme('light')} className='bg-slate-100 p-2 rounded-xl'>
                    <RiSunLine size={24} color='black'/>
                  </button>
                ) : (
                  <button onClick={()=>setTheme('dark')} className='bg-slate-100 p-2 rounded-xl'>
                    <RiMoonFill size={24} color='black'/>
                  </button>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar