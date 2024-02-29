import React, {useState} from 'react'
import { Link } from 'react-scroll'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [activeMenu, setActiveMenu] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuItemClick = (menuItem) => {
    setActiveMenu(menuItem);
    
  };

  return (
    <div>
      <nav className='p-5 bg-white shadow md:flex md:items-center md:justify-between fixed w-full'>
        <div className='flex justify-between items-center'>
          <span className='text-2xl font-[Poppins]'>
            MAHESWARI
          </span>
          <span className='text-3xl cursor-pointer md:hidden block'onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </span>
        </div>
        <ul className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${
          isMenuOpen ? 'opacity-100 top-[80px]' : 'opacity-0 top-[-400px]'
        } `}>
           <li className='mx-4 my-6 md:my-0'>
            <Link to='home'
            smooth='true'
            duration={500}
            className={` hover:text-cyan-500 duration-500 text-gray-600 ${activeMenu === 'home' ? 'text-xl text-cyan-600 font-bold border-b-4 border-red-500' : ''}`}
            onClick={() => handleMenuItemClick('home')}
           >🏠 Home</Link>
          </li>
           <li className='mx-4 my-6 md:my-0'>
            <Link to='about'
            smooth='true'
            duration={500}
            className={`hover:text-cyan-500 duration-500 text-gray-600 ${activeMenu === 'about' ? 'text-xl text-cyan-600 font-bold border-b-4 border-red-500' : ''}`}onClick={()=> handleMenuItemClick('about')}>👤 About</Link>
          </li>
           <li className='mx-4 my-6 md:my-0'>
            <Link to='education'
            smooth='true'
            duration={500}
            className={`hover:text-cyan-500 duration-500 text-gray-600 ${activeMenu === 'education' ? 'text-xl text-cyan-600 font-bold border-b-4 border-red-500' : ''}`}onClick={()=> handleMenuItemClick('education')}>📚 Education</Link>
          </li>
           <li className='mx-4 my-6 md:my-0'>
            <Link to='skills'
            smooth='true'
            duration={500}
            className={`hover:text-cyan-500 duration-500 text-gray-600 ${activeMenu === 'skills' ? 'text-xl text-cyan-600 font-bold border-b-4 border-red-500' : ''}`} onClick={()=> handleMenuItemClick('skills')}>🕸️ Skills</Link>
          </li>
           <li className='mx-4 my-6 md:my-0'>
            <Link to='work'
             smooth='true'
            duration={500}
            className={`hover:text-cyan-500 duration-500 text-gray-600 ${activeMenu === 'work' ? 'text-xl text-cyan-600 font-bold border-b-4 border-red-500' : ''}`}onClick={()=> handleMenuItemClick('work')}>💼 Works</Link>
          </li>
           <li className='mx-4 my-6 md:my-0'>
            <Link to='internship'
             smooth='true'
            duration={500}
            className={`hover:text-cyan-500 duration-500 text-gray-600 ${activeMenu === 'internship' ? 'text-xl text-cyan-600 font-bold border-b-4 border-red-500' : ''}`}onClick={()=> handleMenuItemClick('internship')}>💼 Internship</Link>
          </li>
           <li className='mx-4 my-6 md:my-0'>
            <Link to='contact' 
            smooth='true'
            duration={500}
            className={`hover:text-cyan-500 duration-500 text-gray-600 ${activeMenu === 'contact' ? 'text-xl text-cyan-600 font-bold border-b-4 border-red-500' : ''}`} onClick={()=> handleMenuItemClick('contact')}>✉️ Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar