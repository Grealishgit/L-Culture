import React from 'react'
import bg from '../assets/bg.jpg'

const Header = () => {
    return (
        <div className='flex flex-col absolute top-0 left-0 object-cover w-screen items-center justify-center min-h-screen'
            style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div>
                <h1 className='text-white text-8xl font-bold'>BULL FIGHTING</h1>
            </div>

        </div>
    )
}

export default Header