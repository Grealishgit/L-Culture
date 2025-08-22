import React from 'react'
import bg from '../assets/bg.jpg'
import TextPressure from './TextPressure';

const Header = () => {
    return (
        <div className='flex flex-col absolute top-0 left-0 object-cover w-screen items-center justify-center min-h-screen'
            style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className='items-center text-center space-y-2 flex flex-col'>
                <h1 className='text-white md:text-8xl text-5xl font-bold'></h1>

                <div style={{ position: 'relative', height: '300px', cursor: 'pointer' }}>
                    <TextPressure
                        text="FASHION AFRICA!"
                        flex={true}
                        alpha={false}
                        stroke={false}
                        width={true}
                        weight={true}
                        italic={true}
                        textColor="#ffffff"
                        strokeColor="#ff0000"
                        minFontSize={100}
                    />
                </div>
                <p className='text-white text-lg'>A show of elegant African fashion</p>

                <button className='px-3 py-2.5 border cursor-pointer mt-4 text-white border-white rounded'>
                    Explore the fashion
                </button>
            </div>

            <div className='absolute items-center flex bottom-0 p-4'>
                <p className='text-white text-center'>A vibrant showcase of African culture and style. Experience the richness of African heritage through fashion.
                </p>
            </div>
        </div>
    )
}

export default Header