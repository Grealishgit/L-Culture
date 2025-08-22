import React from 'react'
import bg from '../assets/bg.jpg'

const Header = () => {
    return (
        <div className='flex flex-col absolute top-0 left-0 object-cover w-screen items-center justify-center min-h-screen'
            style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className='items-center text-center space-y-2 flex flex-col'>
                <h1 className='text-white md:text-8xl text-5xl font-bold'>BULL FIGHTING</h1>
                <p className='text-white text-lg'>A show of elegant Luhya fashion</p>

                <button className='px-3 py-2.5 border cursor-pointer mt-4 text-white border-white rounded'>
                    Explore the fashion
                </button>
            </div>

        </div>
    )
}

export default Header