import React from 'react'

const Navbar = () => {
    // Scroll handler for FashionGallery page
    const handleScroll = (sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className='items-center  z-100 relative p-4  bg-transparent w-full'>
            <div className='w-full justify-between flex items-center'>
                <div className='ml-4'>
                    <h2 className='text-white font-2xl font-bold'>FASHION AFRICA</h2>
                </div>
                <div className='ml-4'>
                    <ul className='md:flex hidden space-x-4'>
                        <li className='text-white font-light cursor-pointer' onClick={() => handleScroll('home')}>Home</li>
                        <li className='text-white font-light cursor-pointer' onClick={() => handleScroll('about')}>About the Festival</li>
                        <li className='text-white font-light cursor-pointer' onClick={() => handleScroll('gallery')}>Fashion Gallery</li>
                        <li className='text-white font-light cursor-pointer' onClick={() => handleScroll('highlights')}>Fashion Highlights</li>
                        <li className='text-white font-light cursor-pointer' onClick={() => handleScroll('insights')}>Cultural Insights</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar