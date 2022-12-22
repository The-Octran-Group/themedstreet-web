import { useState } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid'

const ThemeChanger = () => {
    const { theme, setTheme } = useTheme()
    return (
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'light' ? (
                <SunIcon className="w-6 h-6 mr-4 text-neutral-900" />
            ) : (
                <MoonIcon className="w-5 h-5 mr-4 text-neutral-100" />
            )}
        </button>
    )
}

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-neutral-50 dark:bg-neutral-900 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-neutral-50 dark:bg-neutral-900 h-20">
                <a className="text-xl text-neutral-900 dark:text-neutral-100 font-semibold" href="/">MedStreet</a>
            </div>
            <div className="flex flex-col mx-4 mt-4 items-center">
                <a className="text-xl text-neutral-900 dark:text-neutral-100 font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    About
                </a>
                <a className="text-xl text-neutral-900 dark:text-neutral-100 font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Contact
                </a>
            </div>
        </div>
    )
}

function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="flex filter drop-shadow-md bg-neutral-50 dark:bg-neutral-900 px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen} />
            <div className="w-3/12 flex items-center">
                <a className="text-2xl text-neutral-900 dark:text-neutral-50 font-semibold" href="/">MedStreet</a>
            </div>
            <div className="w-9/12 flex justify-end items-center">
                <ThemeChanger />
                <div className="z-50 flex relative w-6 h-6 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    <span className={`h-1 w-full bg-neutral-900 dark:bg-neutral-50 rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                    <span className={`h-1 w-full bg-neutral-900 dark:bg-neutral-50 rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-neutral-900 dark:bg-neutral-50 rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                </div>
                <div className="hidden md:flex justify-center text-neutral-900 dark:text-neutral-50">
                    <NavLink to="/solutions">
                        Solutions
                    </NavLink>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                    <NavLink to="/about">
                        About
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
