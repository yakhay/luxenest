import React from 'react'
import { FaRegUser } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

import { VscHeart } from "react-icons/vsc";
import { LuShoppingCart } from "react-icons/lu";
import Link from 'next/link'; 






function Header() {
  return (
<header className="bg-white h-[67px]  w-full">
  <div className=" px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-around">
      <div className="md:flex md:items-center md:gap-12">
        <Link className=" text-teal-600 flex justify-between items-center" href="/">
          <span className="sr-only">Home</span>
          <img className=' w-[50px] ' src="https://s3-alpha-sig.figma.com/img/2727/769b/a74736d502746301ed573ed8940fc322?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Srq9jIj6HlDMdHBd9GutU7AFraTvnetGOcvVdzdkQ~GMCKnls07eDxbCWF6adN5CqceQ2OkW0SAJ1cTtWDe5FuUQITaenOZ1cd1iyxwBCG4ExSTgM99jq7~uwdVgBqiovj2ovtTcIUVpsw4TC2pDnysbn7gF4TQbf1xxWI5HyKG9guyE~KOns0-jqJlFsA6KApEsE2of6yu4uJDoZkGNnmuuvBgHhTmFQaEq2gtw2fKKw8rVv-TPGydESBp9FNpsUmyhWUo0tmJnvEvW4pDp8NsHaYaDLNerZXkcpofDZk~DYib15AoqPcY~Qq35sxjuMSPbKxCxlxmhDE0SH8aMuA__" alt="" />
            <span className="text-2xl font-bold text-black ">Furniro</span>
       </Link>
      </div>

      <div className="hidden md:block">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
          
            <Link className="text-gray-500 transition hover:text-gray-500/75" href="/"> Home </Link>
          </li>

          <li>
            <Link className="text-gray-500 transition hover:text-gray-500/75" href="/Shop"> Shop </Link>
          </li>

          <li>
            <Link className="text-gray-500 transition hover:text-gray-500/75" href="/About"> About </Link>
          </li>

          <li>
            <Link className="text-gray-500 transition hover:text-gray-500/75" href="/Contact"> Contact </Link>
          </li>
        </ul>
      </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className=""
            href="#"
          >
            <FaRegUser className="size-6" />
          </a>

          <a
            className=" "          href="#"
          >
            <FiSearch className="size-6" />
            
          </a>
          <a href="#">
            <VscHeart className="size-6" />
          </a>
          <a href="#">
            <LuShoppingCart className="size-6" />
          </a>
          </div>
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  
</header>
  )
}

export default Header


// rfce