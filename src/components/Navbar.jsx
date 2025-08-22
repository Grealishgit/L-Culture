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
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='items-center z-100 relative p-4 bg-transparent w-full'>
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
                .menu-icon, .close-icon {
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: transform 0.3s cubic-bezier(.4,0,.2,1);
                }
                .menu-icon svg, .close-icon svg {
                    width: 28px;
                    height: 28px;
                    stroke: #fff;
                }
                .menu-slide {
                    position: fixed;
                    top: 0;
                    right: 0;
                    width: 100%;
                    max-width: 350px;
                    height: 100vh;
                    background: rgba(20,20,20,0.98);
                    box-shadow: -2px 0 12px rgba(0,0,0,0.2);
                    z-index: 999;
                    transform: translateX(100%);
                    transition: transform 0.4s cubic-bezier(.4,0,.2,1);
                    display: flex;
                    flex-direction: column;
                    padding: 2rem 1.5rem;
                }
                .menu-slide.open {
                    transform: translateX(0);
                }
                .menu-slide ul {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                    margin-top: 2rem;
                }
            `}
            </style>
            
            <div className='w-full justify-between flex items-center'>
                <div className='ml-4'>
                    <h2 className='text-white font-2xl font-bold'>FASHION AFRICA</h2>
                </div>
                {/* Desktop menu */}
                <div className='ml-4'>
                    <ul className='md:flex hidden space-x-4'>
                        <li className={`nav-anim text-white font-quicksand font-semibold cursor-pointer${isActive === 'home' ? ' active' : ''}`} onClick={() => handleScroll('home')}>
                            Home
                        </li>
                        <li className={`nav-anim text-white font-quicksand font-semibold cursor-pointer${isActive === 'about' ? ' active' : ''}`} onClick={() => handleScroll('about')}>
                            About the Festival
                        </li>
                        <li className={`nav-anim text-white font-quicksand font-semibold cursor-pointer${isActive === 'gallery' ? ' active' : ''}`} onClick={() => handleScroll('gallery')}>
                            Fashion Gallery
                        </li>
                        <li className={`nav-anim text-white font-quicksand font-semibold cursor-pointer${isActive === 'highlights' ? ' active' : ''}`} onClick={() => handleScroll('highlights')}>
                            Fashion Highlights
                        </li>
                        <li className={`nav-anim text-white font-quicksand font-semibold cursor-pointer${isActive === 'insights' ? ' active' : ''}`} onClick={() => handleScroll('insights')}>
                            Cultural Insights
                        </li>
                    </ul>
                </div>
                {/* Mobile menu icon */}
                <div className='md:hidden flex items-center ml-4'>
                    {!menuOpen && (
                        <div className='menu-icon' onClick={() => setMenuOpen(true)} style={{ transform: menuOpen ? 'scale(0.8)' : 'scale(1)' }}>
                            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        </div>
                    )}
                </div>
            </div>
            {/* Mobile menu slide-out */}
            <div className={`menu-slide${menuOpen ? ' open' : ''}`}>
                <div className='close-icon' onClick={() => setMenuOpen(false)}
                    style={{ alignSelf: 'flex-end', marginBottom: '1rem', transform: menuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                        <line x1="6" y1="6" x2="18" y2="18" />
                        <line x1="6" y1="18" x2="18" y2="6" />
                    </svg>
                </div>
                <ul>
                    <li className={`nav-anim text-white font-quicksand font-semibold cursor-pointer
                         ${isActive === 'home' ? ' active' : ''}`} onClick={() => { handleScroll('home'); setMenuOpen(false); }}>
                        Home
                    </li>
                    <li className={`nav-anim text-white font-quicksand font-semibold cursor-pointer
                         ${isActive === 'about' ? ' active' : ''}`} onClick={() => { handleScroll('about'); setMenuOpen(false); }}>
                        About the Festival
                    </li>
                    <li className={`nav-anim text-white font-quicksand font-semibold cursor-pointer
                        ${isActive === 'gallery' ? ' active' : ''}`} onClick={() => { handleScroll('gallery'); setMenuOpen(false); }}>
                        Fashion Gallery
                    </li>
                    <li className={`nav-anim text-white font-quicksand font-semibold cursor-pointer
                        ${isActive === 'highlights' ? ' active' : ''}`} onClick={() => { handleScroll('highlights'); setMenuOpen(false); }}>
                        Fashion Highlights
                    </li>
                    <li className={`nav-anim text-white font-quicksand font-semibold cursor-pointer
                        ${isActive === 'insights' ? ' active' : ''}`} onClick={() => { handleScroll('insights'); setMenuOpen(false); }}>
                        Cultural Insights
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar