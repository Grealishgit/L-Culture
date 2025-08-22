import React, { useState } from 'react'

const Navbar = () => {
    // Scroll handler for FashionGallery page
    const handleScroll = (sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [isActive, setIsActive] = useState('');

    return (
        <nav className='items-center  z-100 relative p-4  bg-transparent w-full'>
            <style>{`
                .nav-anim {
                    position: relative;
                    overflow: hidden;
                }
                .nav-anim::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 0;
                    height: 3px;
                    background: #fff;
                    transition: width 0.4s cubic-bezier(.4,0,.2,1);
                }
                .nav-anim:hover::after {
                    width: 100%;
                }
                .nav-anim.active::after {
                    width: 100%;
                }
            `}</style>
            <div className='w-full justify-between flex items-center'>
                <div className='ml-4'>
                    <h2 className='text-white font-2xl font-bold'>FASHION AFRICA</h2>
                </div>
                <div className='ml-4'>
                    <ul className='md:flex hidden space-x-4'>
                        <li className={`nav-anim text-white font-quicksand font-light cursor-pointer${isActive === 'home' ? ' active' : ''}`} onClick={() => handleScroll('home')}>
                            Home
                        </li>
                        <li className={`nav-anim text-white font-quicksand font-light cursor-pointer${isActive === 'about' ? ' active' : ''}`} onClick={() => handleScroll('about')}>
                            About the Festival
                        </li>
                        <li className={`nav-anim text-white font-quicksand font-light cursor-pointer${isActive === 'gallery' ? ' active' : ''}`} onClick={() => handleScroll('gallery')}>
                            Fashion Gallery
                        </li>
                        <li className={`nav-anim text-white font-quicksand font-light cursor-pointer${isActive === 'highlights' ? ' active' : ''}`} onClick={() => handleScroll('highlights')}>
                            Fashion Highlights
                        </li>
                        <li className={`nav-anim text-white font-quicksand font-light cursor-pointer${isActive === 'insights' ? ' active' : ''}`} onClick={() => handleScroll('insights')}>
                            Cultural Insights
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar