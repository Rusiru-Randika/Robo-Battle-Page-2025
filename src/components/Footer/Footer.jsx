import React, { useState } from 'react';
import { IoLogoFacebook } from "react-icons/io";
import { ImLinkedin } from "react-icons/im";
import { ImYoutube } from "react-icons/im";

function Footer() {
    const [count, setCount] = useState(0);
      
    return (
        <footer className="footer-distributed">
            <div className="grid grid-cols-2 gap-0 font-krona">
                <div className=' text-white bg-gray-900 p-4 md:px-4'>
                    <p className='px-20 text-xm md:text-3xl md:ml-28 '>Organized By</p>
                </div>
                <div className=' text-white bg-gray-900 p-4 md:px-4 '>
                    <p className='px-20 text-xm md:text-3xl md:ml-36 '>FOLLOW US ON</p>
                </div>
            </div>
    
            <div className="footer-left">
                <div className="grid grid-cols-3 gap-0">
                    <div className='flex justify-center md:justify-start'>
                        <img src="club_logo.png" alt="1" className='w-1/2 md:w-1/3 ml-4 md:ml-44 mt-4'/>
                    </div>
                    <div className='flex justify-center md:justify-start'>
                        <h3 className='-ml-9 md:-ml-24 mt-4 md:mt-20 text-white text-lg md:text-2xl text-center md:text-left'>
                            Electronics and Computer<br/>
                            <span>Science Club</span>
                        </h3>
                    </div>
                    <div className='grid grid-cols-3 gap-0 place-content-start mt-8'>
                        <a href="https://web.facebook.com/UOKRobotBattles">
                            <IoLogoFacebook className='w-10 h-10 md:w-16 md:h-16 md:mx-8 text-white'/>
                        </a>
                        <a href="https://www.linkedin.com/company/uokrobotbattles/posts/?feedView=all">
                            <ImLinkedin className='w-10 h-10 md:w-14 md:h-14 md:-mx-4 text-white'/>
                        </a>
                        <a href="https://www.youtube.com/@ECSCUOK">
                            <ImYoutube className='w-10 h-10 md:w-14 md:h-14 md:-mx-16  text-white'/>
                        </a>
                    </div>
                </div>
            </div>
            <p className='text-gray-400 text-xs md:text-sm font-normal text-center mb-8 mt-5 md:mb-9'>
                © 2024 All rights reserved
            </p>
        </footer>
    );
}

export default Footer;
