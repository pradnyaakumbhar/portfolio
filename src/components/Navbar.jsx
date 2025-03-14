import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../utils/constants';
import { IoMenu, IoClose } from 'react-icons/io5';
import Pk from './Pk';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="text-white flex items-center w-full sm:px-14 px-6 py-4 top-0">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
          className="text-white hover:text-gray-300 cursor-pointer"
        >
          <Pk />
        </Link>

        <ul className="font-semibold list-none hidden sm:flex flex-row gap-4 md:gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title
                  ? 'text-cyan-500 border-b-2 border-b-cyan-500'
                  : 'text-white'
              } text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center text-white">
          {toggle ? (
            <IoClose
              className="w-[40px] h-[40px] absolute top-6 right-6"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <IoMenu
              className="w-[40px] h-[40px] absolute top-6 right-6"
              onClick={() => setToggle(!toggle)}
            />
          )}
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-16 right-0 mx-2 my-2 min-w-[140px] z-10 rounded-xl bg-gray-800`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer ${
                    active === nav.title ? 'text-cyan-500' : 'text-white'
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
