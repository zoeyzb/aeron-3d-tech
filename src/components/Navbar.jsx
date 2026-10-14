import React from 'react'
import { navlinks } from '../constants'

const Navbar = () => {
  return (
    <header>
      <nav>
        <a href="/" className="font-bold text-xl" aria-label="Aeron home">AERON</a>
        <ul>
          {navlinks.map((link)=>(
            <li key={link.label}>
              <a href={link.label}>{link.label}</a>
            </li>))}
        </ul>

        <div className='flex-center gap-3'>
          <button>
            <img src="./search.svg" alt="Search" />
          </button>
          <button>
            <img src="./cart.svg" alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar