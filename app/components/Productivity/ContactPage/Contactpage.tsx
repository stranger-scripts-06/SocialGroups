'use client'
import React, {useState} from 'react'
import HoverCard from '../HoverCard'
import {motion} from "framer-motion"
import Image from 'next/image';
type Props = {}

const ContentDigital = (props: Props) => {
    // const [hovered, setHovered] = useState<boolean>(false)
    const [hoveredSite, setHoveredSite] = useState(false);
    const [hoveredInstagram, setHoveredInstagram] = useState(false);
    const [showPy, setShowPy] = useState<boolean>(true)
    const [showJs, setShowJs] = useState<boolean>(false)
    const [showGo, setShowGo] = useState<boolean>(false)
    const [count, setCount] = useState(0);

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05,
            delayChildren:.1,
          },
        },
      };
    
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { type: 'tween' } },
    };

      
  return (
    <HoverCard backgroundColor = '#1ee8b6' direction='' left='0'>
      
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
    <h3  style={{ color: 'white', fontSize: '50px', textAlign: 'center', marginTop: '30px' , marginBottom: '50px', marginLeft: '515px' }}>Contact Us</h3>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginRight: '20px' }}>
    <div style={{ textAlign: 'center' }}>
    <Image
      src="/SarthBora.png"
      alt="Your Image Description"
      width={275}
      height={275}
      style={{ marginLeft: '20%', marginRight: '110%', objectFit: 'cover', objectPosition: 'center'}}
    />
    <p className='text-white font-medium' style={{ width: '260px', color: 'white', fontSize: '25px', marginTop: '10px', marginLeft: '20%', marginRight: '50%', textAlign: 'center', padding: '5px 0 0 0' }}>Sarth Bora</p>
    <p  style={{ width: '260px', color: 'white', fontSize: '25px', marginTop: '10px', marginLeft: '20%', marginRight: '50%', textAlign: 'center', padding: '5px 0' }}>General Secretary</p>
    <p
      style={{
        width: '260px',
        color: 'white',
        fontSize: '25px',
        marginTop: '10px',
        marginLeft: '20%',
        marginRight: '50%',
        textAlign: 'center',
        padding: '5px 0 5px 0',
        cursor: 'pointer',
        textDecoration: 'underline',
      }}
      onClick={() => window.location.href = 'tel:+919607240724'}
    >
      +91 96072 40724
    </p>
  </div>

  <div style={{ textAlign: 'center' }}>
    <Image
      src="/ManavYadav.png"
      alt="Your Image Description"
      width={275}
      height={275}
      style={{ marginLeft: '175%', marginRight: '25%', objectFit: 'cover', objectPosition: 'center' }}
    />
    <p className='text-white font-medium' style={{ width: '250px',color: 'white', fontSize: '25px', marginTop: '10px', marginLeft: '180%', marginRight: '25%', textAlign: 'center', padding: '5px 0 0 0' }}>Manav Yadav</p>
    <p  style={{ width: '279px',color: 'white', fontSize: '25px', marginTop: '10px', marginLeft: '175%', marginRight: '25%', textAlign: 'center', padding: '0' }}>Joint General Secretary</p>
    <p
  style={{
    width: '260px',
    color: 'white',
    fontSize: '25px',
    marginTop: '10px',
    marginLeft: '178%',
    marginRight: '25%',
    textAlign: 'center',
    padding: '5px 0 5px 0',
    cursor: 'pointer',
    textDecoration: 'underline',
  }}
  onClick={() => window.location.href = 'tel:+918108213682'}
>
  +91 81082 13682
</p>
    {/* <p style={{ width: '250px',color: 'white', fontSize: '25px', marginTop: '10px', marginLeft: '180%', marginRight: '25%', textAlign: 'center', padding: '10px 0' }}> </p> */}

  </div>
</div>


  </div>
    {/* </div> */}

    {/* <div className='overflow-hidden rounded-s-lg z-[1] flex-1 shadow-3xl'>
      <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]"><span className='text-white font-medium'>Contact Us</span> is the one projecting VJTI's social life to the world, imbibe technology with tradition and are the backend of VJTI Social group</p>
        <div>
            <a onMouseEnter={() => setHoveredSite(true)} onMouseLeave={() => setHoveredSite(false)} href="" className=' md:text-xl text-white font-semibold inline-block'>
                Visit Site
                <svg xmlns="http://www.w3.org/2000/svg" className={` text-white transition inline-block ml-3 ease-in duration-300 mb-[3px] ${hoveredSite ? "translate-x-0 ": "-translate-x-1"}`} width="20" height="20" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={` text-white transition ease-in duration-150 ${hoveredSite ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                
                <div className={` ${hoveredSite ? "w-11/12 scale-100" : "w-0 scale-0"} origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}></div>
                
            </a>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <a onMouseEnter={() => setHoveredInstagram(true)} onMouseLeave={() => setHoveredInstagram(false)} href="https://www.instagram.com/digital.vjti/" className=' md:text-xl text-white font-semibold inline-block'>
                Visit Instagram
                <svg xmlns="http://www.w3.org/2000/svg" className={` text-white transition inline-block ml-3 ease-in duration-300 mb-[3px] ${hoveredInstagram ? "translate-x-0 ": "-translate-x-1"}`} width="20" height="20" viewBox="0 0 16 16" fill="none" ><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={` text-white transition ease-in duration-150 ${hoveredInstagram ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                <div className={` ${hoveredInstagram ? "w-11/12 scale-100" : "w-0 scale-0"} origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}></div>
            </a>
        </div> */}
    
        {/* <div className='text-left border-[0.5px] bg-[#161b22] border-[#30363d] rounded-lg text-[#161b22] box-shadow-card-mktg md:mt-10 md:ml-0 sm:ml-10 sm:mr-10 mb-16 ml-3 mr-3 '> */}
        {/* <Image
        src="/SarthBora.png" // Path from the public directory
        alt="Your Image Description"
        width={275} // Set the width
        height={275} // Set the height
        objectFit="cover" // Specifies how the image should be resized to cover the box
        objectPosition="center" // Specifies the alignment of the image within its box
        style={{ marginLeft: '75px', marginTop: '45px' }} // Adjust values as needed
      /> */}
      {/* <Image
        src="/ManavYadav.png" // Path from the public directory
        alt="Your Image Description"
        width={275} // Set the width
        height={275} // Set the height
        objectFit="cover" // Specifies how the image should be resized to cover the box
        objectPosition="center" // Specifies the alignment of the image within its box
        style={{ marginLeft: '75px', marginTop: '45px' }} // Adjust values as needed
      /> */}


        {/* </div> */}
    {/* </div> */}
</HoverCard>
  )
}

export default ContentDigital